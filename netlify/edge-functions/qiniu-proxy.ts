// netlify/edge-functions/qiniu-proxy.ts
// 把 /qiniu/<key> 代理到七牛 HTTP 源，透传 Range 等头，支持拖动

const ORIGIN = "http://t3aiodj0n.hn-bkt.clouddn.com"; // 七牛源（http）

export default async (request: Request) => {
  const url = new URL(request.url);
  // 访问 /qiniu/Echoes%20of%20the%20Witch%27s%20Room.mov
  const rawKey = url.pathname.replace(/^\/qiniu\//, ""); // 会是解码后的字符串
  if (!rawKey) return new Response("missing key", { status: 400 });

  // 逐段编码，避免空格/引号等特殊字符出错
  const safeKey = rawKey.split("/").map(encodeURIComponent).join("/");
  const target = `${ORIGIN}/${safeKey}`;

  // 透传拖动相关请求头
  const fwd = new Headers();
  for (const h of ["range", "if-range", "cache-control", "user-agent", "accept"]) {
    const v = request.headers.get(h);
    if (v) fwd.set(h, v);
  }

  const resp = await fetch(target, { headers: fwd });

  // 关键响应头 + CORS
  const keep = [
    "content-type", "content-length", "accept-ranges", "content-range",
    "cache-control", "last-modified", "etag",
  ];
  const headers = new Headers({ "access-control-allow-origin": "*" });
  keep.forEach((k) => {
    const v = resp.headers.get(k);
    if (v) headers.set(k, v);
  });

  return new Response(resp.body, { status: resp.status, headers });
};
