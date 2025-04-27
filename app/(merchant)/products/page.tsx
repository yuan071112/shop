/**
 * 商品管理页面
 * 包含商品列表和操作功能
 */
export default function ProductsPage() {
  // 模拟商品数据
  const products = [
    {
      id: 'P001',
      name: '商品1',
      price: 100,
      stock: 50,
      status: '上架',
      sales: 120
    },
    {
      id: 'P002',
      name: '商品2',
      price: 200,
      stock: 30,
      status: '上架',
      sales: 80
    },
    {
      id: 'P003',
      name: '商品3',
      price: 300,
      stock: 0,
      status: '缺货',
      sales: 150
    }
  ]

  return (
    <div className="products-page">
      <div className="page-header">
        <h1>商品管理</h1>
        <a href="/merchant/products/add" className="add-product-btn">
          添加商品
        </a>
      </div>

      <div className="product-actions">
        <input type="text" placeholder="搜索商品..." className="search-input" />
        <select className="status-filter">
          <option value="all">全部状态</option>
          <option value="on">上架</option>
          <option value="off">下架</option>
          <option value="out">缺货</option>
        </select>
      </div>

      <div className="product-list">
        <table>
          <thead>
            <tr>
              <th>商品ID</th>
              <th>商品名称</th>
              <th>价格</th>
              <th>库存</th>
              <th>状态</th>
              <th>销量</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>¥{product.price}</td>
                <td>{product.stock}</td>
                <td className={`status ${product.status}`}>{product.status}</td>
                <td>{product.sales}</td>
                <td className="actions">
                  <button className="edit-btn">编辑</button>
                  {product.status === '上架' ? (
                    <button className="off-btn">下架</button>
                  ) : (
                    <button className="on-btn">上架</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
