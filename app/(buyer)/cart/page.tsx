/**
 * 购物车页面
 * 展示已选商品和结算功能
 */
export default function ShoppingCart() {
  // 模拟购物车数据
  const cartItems = [
    { id: 1, name: '商品1', price: 100, quantity: 2, image: '/placeholder.jpg' },
    { id: 2, name: '商品2', price: 200, quantity: 1, image: '/placeholder.jpg' }
  ]

  // 计算总价
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="shopping-cart">
      <h1>我的购物车</h1>
      
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-info">
              <h3>{item.name}</h3>
              <p>¥{item.price} × {item.quantity}</p>
              <div className="item-actions">
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
                <button className="remove-btn">删除</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="total">
          <span>总计:</span>
          <span>¥{total}</span>
        </div>
        <button className="checkout-btn">去结算</button>
      </div>
    </div>
  )
}
