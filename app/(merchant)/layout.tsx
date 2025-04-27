/**
 * 商家端布局组件
 * 包含商家端共用的导航栏和权限检查
 */
export default function MerchantLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // TODO: 添加商家登录状态检查
  const isMerchant = false; // 临时值，后续替换为真实检查

  if (!isMerchant) {
    return (
      <div className="merchant-auth">
        <p>请使用商家账号登录</p>
        <a href="/merchant/login">前往登录</a>
      </div>
    )
  }

  return (
    <div className="merchant-layout">
      <nav>
        <a href="/merchant">商家中心</a>
        <a href="/merchant/products">商品管理</a>
        <a href="/merchant/orders">订单管理</a>
        <a href="/merchant/subaccounts">子账号管理</a>
      </nav>
      {children}
    </div>
  )
}
