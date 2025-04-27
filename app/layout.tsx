/**
 * 根布局组件
 * 包含全局样式和元数据
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
