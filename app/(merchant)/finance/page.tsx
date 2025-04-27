/**
 * 财务对账页面
 * 包含收款记录和对账功能
 */
export default function FinancePage() {
  // 模拟收款记录数据
  const paymentRecords = [
    {
      id: 'P001',
      orderId: 'O20231001001',
      amount: 158.00,
      paymentMethod: '支付宝',
      status: '已到账',
      transactionTime: '2023-10-01 10:23:45',
      settlementTime: '2023-10-02 09:00:12'
    },
    {
      id: 'P002',
      orderId: 'O20231001002',
      amount: 299.00,
      paymentMethod: '微信支付',
      status: '已到账',
      transactionTime: '2023-10-01 14:56:32',
      settlementTime: '2023-10-02 09:00:15'
    },
    {
      id: 'P003',
      orderId: 'O20231002001',
      amount: 89.50,
      paymentMethod: '支付宝',
      status: '处理中',
      transactionTime: '2023-10-02 08:12:33',
      settlementTime: '-'
    }
  ]

  return (
    <div className="finance-page">
      <div className="page-header">
        <h1>财务对账</h1>
        <div className="header-actions">
          <button className="export-btn">导出对账单</button>
          <button className="reconcile-btn">手动对账</button>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-group">
          <label>支付方式</label>
          <select>
            <option value="all">全部</option>
            <option value="alipay">支付宝</option>
            <option value="wechat">微信支付</option>
          </select>
        </div>
        <div className="filter-group">
          <label>状态</label>
          <select>
            <option value="all">全部</option>
            <option value="settled">已到账</option>
            <option value="processing">处理中</option>
            <option value="failed">失败</option>
          </select>
        </div>
        <div className="filter-group">
          <label>日期范围</label>
          <input type="date" />
          <span>至</span>
          <input type="date" />
        </div>
        <button className="search-btn">搜索</button>
      </div>

      <div className="payment-records">
        <table>
          <thead>
            <tr>
              <th>交易ID</th>
              <th>订单号</th>
              <th>金额(元)</th>
              <th>支付方式</th>
              <th>状态</th>
              <th>交易时间</th>
              <th>结算时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {paymentRecords.map(record => (
              <tr key={record.id}>
                <td>{record.id}</td>
                <td>{record.orderId}</td>
                <td>{record.amount.toFixed(2)}</td>
                <td>{record.paymentMethod}</td>
                <td className={`status ${record.status}`}>{record.status}</td>
                <td>{record.transactionTime}</td>
                <td>{record.settlementTime}</td>
                <td className="actions">
                  <button className="detail-btn">详情</button>
                  {record.status === '处理中' && (
                    <button className="retry-btn">重试</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 手动对账模态框 */}
      <div className="modal reconcile-modal">
        <div className="modal-content">
          <h2>手动对账</h2>
          <form>
            <div className="form-group">
              <label>对账日期</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>支付平台</label>
              <select>
                <option value="alipay">支付宝</option>
                <option value="wechat">微信支付</option>
              </select>
            </div>
            <div className="form-group">
              <label>对账单文件</label>
              <input type="file" accept=".csv,.xlsx" />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">开始对账</button>
              <button type="button" className="cancel-btn">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
