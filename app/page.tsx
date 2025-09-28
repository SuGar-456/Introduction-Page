'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, Globe, ExternalLink, Video, Download, Cpu, Gamepad2, AudioLines, Camera, Code2, Box } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'


const isDrive = (url: string) => /https?:\/\/drive\.google\.com\/file\/d\/[^/]+/i.test(url);
const toDrivePreview = (url: string) => {
  const m = url.match(/\/file\/d\/([^/]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : url;
};

const socials = [
  { icon: <Github className="h-4 w-4" />, label: "GitHub", href: "https://github.com/SuGar-456" },
  { icon: <Mail className="h-4 w-4" />, label: "Email", href: "mailto:ne24584@bristol.ac.uk" },
  { icon: <Globe className="h-4 w-4" />, label: "Google Scholar / Personal Site", href: "https://scholar.google.com/" },
]

const highlights = [
  "学习能力强（快速上手新栈）",
  "自研能力出众",
  "沟通效率高",
  "注重团队协作",
]

const projects = [
  {
    title: "VR 游戏《Recursive Breakout》",
    role: "交互开发 / 核心玩法开发/测试",
    period: "2025.03–2025.07",
    tags: ["Unity 3D", "Unity","OpenXR", "XR Hands", "C#"],
    icon: <Gamepad2 className="h-5 w-5" />,
    desc: "免手柄的手势追踪（捏合-拉伸-释放）、球体生成/发射与对象池、手部物理交互与帧率优化。",
    demo: "https://your-video-link.example/vr-demo",
  },
  {
    title: "沉浸式交互与音频《Echoes of the Witch’s Room》",
    role: "交互 / 音频 / 测试",
    period: "2025.03–2025.07",
    tags: ["Unity 3D", "Unity", "Audio", "Mixing","OpenXR","C#"],
    icon: <AudioLines className="h-5 w-5" />,
    desc: "交互触发与事件系统；音频区域/优先级；混音平衡与声像；用例与回归测试。",
    demo: "https://your-video-link.example/echoes",
  },
  {
    title: "360° 全景沉浸式电影《Introduction Bristol》",
    role: "摄影 / 后期",
    period: "2024.10–2024.12",
    tags: ["Insta360", "DaVinci", "8K","VR"],
    icon: <Camera className="h-5 w-5" />,
    desc: "全景采拍、拼接与地平线校正；DaVinci 调色与平台适配（8K/6K equirectangular）。",
    demo: "https://your-video-link.example/360film",
  },
  {
    title: "虚拟环境设计（Merchant Venturers Building 1.07）",
    role: "3D 建模 / 渲染",
    period: "2024",
    tags: ["Maya", "Arnold", "PBR"],
    icon: <Box className="h-5 w-5" />,
    desc: "实景1:1建模还原；PBR/UV 与 Arnold 灯光渲染，输出高质量图集。",
    demo: "https://your-link.example/env-design",
  },
  {
    title: "CPL 编译器",
    role: "编译器设计与开发",
    period: "2023.01–2023.04",
    tags: ["C/C++", "Lexer", "Parser", "CodeGen"],
    icon: <Code2 className="h-5 w-5" />,
    desc: "字符/字符串表/扫描器/符号表；语法语义检查与代码生成；Unix/Linux 测试。",
    demo: "https://your-link.example/compiler",
  },
  {
    title: "AR 游戏原型（Android，类“愤怒的小鸟”）",
    role: "交互，建模，玩法与物理",
    period: "2025",
    tags: ["Unity 3D", "Unity", "AR","C#"],
    icon: <Gamepad2 className="h-5 w-5" />,
    desc: "准星与实体交互验证；准星在UI层级的有效拖拽与判定；移动端性能与交互响应。",
    demo: "https://your-video-link.example/ar-proto",
  },
  {
    title: "舌眼交互：基于ESP32与眼动追踪开发的致力于无障碍访问VR的新型交互设备",
    role: "硬件设计，开发，测试，通信开发",
    period: "2025.03–2025.09",
    tags: ["Unity 3D","ESP32", "FSR", "Unity","C#","C/C++"],
    icon: <Cpu className="h-5 w-5" />,
    desc: "负责 ESP32-S3 硬件平台与传感器的设计与集成,设计电路并完成 PCB 打样与焊接。搭建 Wi-Fi + WebSocket 通信链路,实现低延迟事件传输;开发Unity/Quest 软件完成交互验证(点击、滑动、3D物品操作)。 提出并实现了一种舌眼多模态 VR 交互设备,将眼动追踪与基于ESP32的自研定制口部控制器相结合。使用手指模拟输入进行用户研究,评估 Unity/Quest 中的2D UI导航和3D 对象操作;结果显示与传统控制器相比具有更高的简单性。实现了从硬件到 VR 的实时 Wi-Fi 数据流,验证了该项目和未来量产化的可行性。"
    demo: "https://your-video-link.example/tongue",
  },
  {
    title: "嵌入式循迹小车/传感项目",
    role: "硬件与控制,软件开发",
    period: "2024.05",
    tags: ["PID"],
    icon: <Cpu className="h-5 w-5" />,
    desc: "电机驱动与红外传感集成；基础避障/循迹验证。",
    demo: "https://your-video-link.example/robot",
  },
]

const videos = [
  {
    title: "《Recursive Breakout》Promotional video",
    src: "https://drive.google.com/file/d/1r_IG0YEmtU_z0t8z_xsg-sJtnYKJjmeR/view?usp=sharing",
    poster: "/images/vr_demo.jpg",
    desc:VR游戏《Recursive Breakout》宣传视频，目前该游戏暂未上架。
  },
  {
    title: "《Recursive Breakout》Actual machine demonstration (VR screen recording)",
    src: "https://drive.google.com/file/d/1R_Z1JEpkM9NylP4kUasHU06nTM1LSSGO/view?usp=sharing",
    poster: "https://your-cdn.example/posters/echoes.jpg",
    desc:VR游戏《Recursive Breakout》实机演示，受限于VR内置录屏限制某些画面质量与特效展现不明显。
  },
  {
    title: "《Echoes of the Witch’s Room》",
    src: "https://your-video-host.example/360film.mp4",
    poster: "https://your-cdn.example/posters/360.jpg",
    desc:VR游戏《Echoes of the Witch’s Room》实机演示，该项目专注于交互与音频设计，可以让没有音乐基础的人也能创造出听起来还不错的音乐。
  },
]

const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex items-end justify-between mb-6">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <a href={`#${id}`} className="text-sm text-muted-foreground underline-offset-4 hover:underline">#{id}</a>
    </div>
    {children}
  </section>
)

const Tag = ({ children }: { children: React.ReactNode }) => (
  <Badge className="rounded-full px-2 py-0.5 mr-1 mb-1 border-neutral-300">{children}</Badge>
)

export default function PortfolioSite() {
  return (
    <div className="min-h-screen text-foreground">
      <header className="sticky top-0 backdrop-blur bg-white/70 z-40 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">Zibo He｜Augmented & Virtual Reality · XR · HCI · Embedded</a>
          <nav className="hidden sm:flex gap-4 text-sm">
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#videos" className="hover:underline">Video Demos</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight tracking-tight">
              Augmented & Virtual Reality · XR/HCI
            </h1>
            <p className="mt-4 text-muted-foreground">
              增强现实、虚拟现实、XR/HCI
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {highlights.map((h, i) => (<Tag key={i}>{h}</Tag>))}
            </div>
            <div className="mt-6 flex gap-2">
              <Button onClick={()=>location.assign('#projects')}><ExternalLink className="h-4 w-4 mr-2" />查看项目</Button>
              <Button variant="secondary" onClick={()=>location.assign('#videos')}><Video className="h-4 w-4 mr-2" />观看演示</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {projects.slice(0, 4).map((p, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2 flex flex-row items-center gap-2">
                  {p.icon}
                  <CardTitle className="text-base leading-tight">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  {p.role}｜{p.period}
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>

      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} className="h-full flex flex-col">
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-2">
                  {p.icon}
                  <CardTitle className="text-lg leading-tight">{p.title}</CardTitle>
                </div>
                <div className="text-sm text-muted-foreground">{p.role}｜{p.period}</div>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap">
                  {p.tags.map((t, idx) => (<Tag key={idx}>{t}</Tag>))}
                </div>
              </CardContent>
              <div className="px-4 pb-5 mt-auto">
                <a className="w-full inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium transition border bg-black text-white hover:opacity-90 border-black"
                  href={p.demo} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" /> 查看 Demo
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="videos" title="Video Demos">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((v, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{v.title}</CardTitle>
              </CardHeader>
              <CardContent>
            
                {isDrive(v.src) ? (
                    <div className="aspect-video w-full overflow-hidden rounded-xl">
                      <iframe
                        src={toDrivePreview(v.src)}
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                      />
                    </div>
                  ) : v.src.endsWith(".mp4") ? (
                    <video className="w-full rounded-xl" controls preload="metadata" poster={v.poster}>
                      <source src={v.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <a className="w-full inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm font-medium transition border bg-white text-black hover:bg-neutral-100 border-neutral-200"
                       href={v.src} target="_blank" rel="noreferrer">
                      打开视频
                    </a>
                    )}

              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="about" title="About">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <Card className="lg:col-span-2">
            <CardHeader><CardTitle>研究兴趣 / Interests</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>增强现实（AR）、虚拟现实（VR）、XR/HCI。</p>
              <p>Augmented Reality (AR), Virtual Reality (VR), XR/HCI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle>快速链接 / Links</CardTitle></CardHeader>
            <CardContent className="flex flex-col gap-2">
              {socials.map((s, i) => (
                <a key={i} className="inline-flex items-center justify-start rounded-2xl px-3 py-2 text-sm font-medium transition border bg-white hover:bg-neutral-100 border-neutral-200"
                  href={s.href} target="_blank" rel="noreferrer">
                  {s.icon}<span className="ml-2">{s.label}</span>
                </a>
              ))}
              <a className="inline-flex items-center justify-start rounded-2xl px-3 py-2 text-sm font-medium transition border bg-transparent hover:bg-neutral-100 border-neutral-300"
                href="#" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
                <Download className="h-4 w-4 mr-2" /> 下载 PDF 简历（占位）
              </a>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <Card>
          <CardContent className="py-6 text-sm">
            <p className="mb-3">欢迎联系我讨论博士申请、合作或项目演示。</p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s, i) => (
                <a key={i} className="inline-flex items-center rounded-2xl px-3 py-2 text-sm font-medium transition border bg-black text-white hover:opacity-90 border-black"
                  href={s.href} target="_blank" rel="noreferrer">
                  {s.icon}<span className="ml-2">{s.label}</span>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>

      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} Zibo He</span>
          <a href="#" onClick={(e)=>{e.preventDefault();window.scrollTo({ top: 0, behavior: 'smooth' })}} className="underline-offset-4 hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  )
}
