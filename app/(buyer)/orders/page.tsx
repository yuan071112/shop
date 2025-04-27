/**
 * 订单页面
 * 展示订单信息和支付功能
 */
export default function OrdersPage() {
  // 模拟订单数据
  const orders = [
    {
      id: 'ORD-20230001',
      date: '2023-06-15',
      status: '待支付',
      items: [
        { name: '商品1', price: 100, quantity: 2 },
        { name: '商品2', price: 200, quantity: 1 }
      ],
      total: 400
    },
    {
      id: 'ORD-20230002', 
      date: '2023-06-10',
      status: '已完成',
      items: [
        { name: '商品3', price: 300, quantity: 1 }
      ],
      total: 300
    }
  ]

  return (
    <div className="orders-page">
      <h1>我的订单</h1>

      <div className="order-list">
        {orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-header">
              <span>订单号: {order.id}</span>
              <span>日期: {order.date}</span>
              <span className={`status ${order.status}`}>{order.status}</span>
            </div>

            <div className="order-items">
              {order.items.map((item, index) => (
                <div key={index} className="order-item">
                  <span>{item.name}</span>
                  <span>¥{item.price} × {item.quantity}</span>
                </div>
              ))}
            </div>

            <div className="order-footer">
              <div className="order-total">
                总计: ¥{order.total}
              </div>
              {order.status === '待支付' && (
                <div className="order-actions">
                  <button className="pay-btn">立即支付</button>
                  <button className="cancel-btn">取消订单</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
