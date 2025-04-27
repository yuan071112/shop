/**
 * 商家中心页面
 * 包含商家管理功能入口
 */
export default function MerchantDashboard() {
  // 商家功能菜单项
  const features = [
    {
      title: '商品管理',
      description: '发布、编辑、下架商品',
      link: '/merchant/products'
    },
    {
      title: '订单管理', 
      description: '查看和处理买家订单',
      link: '/merchant/orders'
    },
    {
      title: '库存管理',
      description: '查看库存和设置预警',
      link: '/merchant/inventory'
    },
    {
      title: '子账号管理',
      description: '添加和管理子账号',
      link: '/merchant/subaccounts'
    },
    {
      title: '财务管理',
      description: '查看收款记录和对账',
      link: '/merchant/finance'
    },
    {
      title: '公告管理',
      description: '发布和管理公告',
      link: '/merchant/announcements'
    }
  ]

  return (
    <div className="merchant-dashboard">
      <h1>商家中心</h1>
      <p className="welcome-message">欢迎回来，商家主账号</p>

      <div className="feature-grid">
        {features.map((feature, index) => (
          <a key={index} href={feature.link} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
