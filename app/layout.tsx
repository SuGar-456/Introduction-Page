import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Zibo He – Introduction",
  description: "Controller-free XR · Multimodal Interaction",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
