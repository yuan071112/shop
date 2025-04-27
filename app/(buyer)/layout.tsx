/**
 * 买家端布局组件
 * 包含买家端共用的导航栏和样式
 */
export default function BuyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="buyer-layout">
      <nav>
        <a href="/">首页</a>
        <a href="/products">商品</a>
        <a href="/cart">购物车</a>
        <a href="/orders">我的订单</a>
      </nav>
      {children}
    </div>
  )
}
