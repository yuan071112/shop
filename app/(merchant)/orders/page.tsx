/**
 * 订单管理页面
 * 包含订单列表和操作功能
 */
export default function OrdersPage() {
  // 模拟订单数据
  const orders = [
    {
      id: 'O001',
      customer: '买家1',
      amount: 300,
      status: '待付款',
      date: '2023-10-01',
      items: ['商品1', '商品2']
    },
    {
      id: 'O002',
      customer: '买家2',
      amount: 500,
      status: '已付款',
      date: '2023-10-02',
      items: ['商品3']
    },
    {
      id: 'O003',
      customer: '买家3',
      amount: 200,
      status: '已发货',
      date: '2023-10-03',
      items: ['商品4', '商品5']
    },
    {
      id: 'O004',
      customer: '买家4',
      amount: 150,
      status: '已完成',
      date: '2023-10-04',
      items: ['商品6']
    }
  ]

  return (
    <div className="orders-page">
      <div className="page-header">
        <h1>订单管理</h1>
        <div className="order-stats">
          <span>今日订单: 12</span>
          <span>本月订单: 156</span>
          <span>待处理: 3</span>
        </div>
      </div>

      <div className="order-actions">
        <input type="text" placeholder="搜索订单..." className="search-input" />
        <select className="status-filter">
          <option value="all">全部状态</option>
          <option value="pending">待付款</option>
          <option value="paid">已付款</option>
          <option value="shipped">已发货</option>
          <option value="completed">已完成</option>
          <option value="cancelled">已取消</option>
        </select>
        <input type="date" className="date-filter" />
      </div>

      <div className="order-list">
        <table>
          <thead>
            <tr>
              <th>订单号</th>
              <th>买家</th>
              <th>金额</th>
              <th>状态</th>
              <th>下单时间</th>
              <th>商品</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>¥{order.amount}</td>
                <td className={`status ${order.status}`}>{order.status}</td>
                <td>{order.date}</td>
                <td>{order.items.join(', ')}</td>
                <td className="actions">
                  {order.status === '待付款' && (
                    <button className="cancel-btn">取消订单</button>
                  )}
                  {order.status === '已付款' && (
                    <button className="ship-btn">发货</button>
                  )}
                  {order.status === '已发货' && (
                    <button className="complete-btn">完成订单</button>
                  )}
                  <button className="detail-btn">详情</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
