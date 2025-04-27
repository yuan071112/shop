/**
 * 买家端首页
 * 展示商品列表和搜索功能
 */
export default function BuyerHome() {
  // 模拟商品数据
  const products = [
    { id: 1, name: '商品1', price: 100, image: '/placeholder.jpg' },
    { id: 2, name: '商品2', price: 200, image: '/placeholder.jpg' },
    { id: 3, name: '商品3', price: 300, image: '/placeholder.jpg' },
    { id: 4, name: '商品4', price: 400, image: '/placeholder.jpg' }
  ]

  return (
    <div className="buyer-home">
      {/* 搜索栏 */}
      <div className="search-bar">
        <input type="text" placeholder="搜索商品..." />
        <button>搜索</button>
      </div>

      {/* 商品分类 */}
      <div className="categories">
        <button>全部</button>
        <button>电子产品</button>
        <button>家居用品</button>
        <button>食品</button>
      </div>

      {/* 商品列表 */}
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>¥{product.price}</p>
            <button>加入购物车</button>
          </div>
        ))}
      </div>
    </div>
  )
}
