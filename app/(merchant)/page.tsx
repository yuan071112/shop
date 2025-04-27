/**
 * 商家中心首页
 * 展示关键运营数据和快捷入口
 */
export default function MerchantDashboard() {
  return (
    <div className="merchant-dashboard">
      <h1>商家中心</h1>
      
      {/* 数据概览 */}
      <div className="stats">
        <div className="stat-card">
          <h3>今日订单</h3>
          <p>15</p>
        </div>
        <div className="stat-card">
          <h3>待处理订单</h3>
          <p>3</p>
        </div>
        <div className="stat-card">
          <h3>库存预警</h3>
          <p>5</p>
        </div>
      </div>

      {/* 快捷入口 */}
      <div className="quick-actions">
        <a href="/merchant/products/add" className="action-card">
          发布新商品
        </a>
        <a href="/merchant/orders" className="action-card">
          处理订单
        </a>
        <a href="/merchant/subaccounts/add" className="action-card">
          添加子账号
        </a>
      </div>
    </div>
  )
}
