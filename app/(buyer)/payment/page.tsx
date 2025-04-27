/**
 * 支付页面
 * 展示支付方式和支付确认功能
 */
export default function PaymentPage() {
  // 模拟订单信息
  const order = {
    id: 'ORD-20230001',
    total: 400,
    items: [
      { name: '商品1', price: 100, quantity: 2 },
      { name: '商品2', price: 200, quantity: 1 }
    ]
  }

  return (
    <div className="payment-page">
      <h1>支付订单</h1>
      
      <div className="order-summary">
        <h2>订单信息</h2>
        <p>订单号: {order.id}</p>
        <div className="order-items">
          {order.items.map((item, index) => (
            <div key={index} className="item">
              <span>{item.name}</span>
              <span>¥{item.price} × {item.quantity}</span>
            </div>
          ))}
        </div>
        <div className="order-total">
          <span>总计:</span>
          <span>¥{order.total}</span>
        </div>
      </div>

      <div className="payment-methods">
        <h2>选择支付方式</h2>
        <div className="method-option">
          <input type="radio" id="wechat" name="payment" value="wechat" />
          <label htmlFor="wechat">微信支付</label>
        </div>
        <div className="method-option">
          <input type="radio" id="alipay" name="payment" value="alipay" />
          <label htmlFor="alipay">支付宝</label>
        </div>
      </div>

      <div className="payment-actions">
        <button className="confirm-pay">确认支付</button>
        <button className="cancel-pay">取消</button>
      </div>
    </div>
  )
}
