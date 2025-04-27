/**
 * 子账号管理页面
 * 包含子账号列表和操作功能
 */
export default function SubaccountsPage() {
  // 模拟子账号数据
  const subaccounts = [
    {
      id: 'SA001',
      username: '客服1',
      role: '客服',
      status: '启用',
      created: '2023-09-15',
      lastLogin: '2023-10-05'
    },
    {
      id: 'SA002',
      username: '财务1',
      role: '财务',
      status: '启用',
      created: '2023-09-20',
      lastLogin: '2023-10-04'
    },
    {
      id: 'SA003',
      username: '运营1',
      role: '运营',
      status: '禁用',
      created: '2023-09-25',
      lastLogin: '2023-09-30'
    }
  ]

  return (
    <div className="subaccounts-page">
      <div className="page-header">
        <h1>子账号管理</h1>
        <button className="add-btn">添加子账号</button>
      </div>

      <div className="subaccount-list">
        <table>
          <thead>
            <tr>
              <th>账号ID</th>
              <th>用户名</th>
              <th>角色</th>
              <th>状态</th>
              <th>创建时间</th>
              <th>最后登录</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {subaccounts.map(account => (
              <tr key={account.id}>
                <td>{account.id}</td>
                <td>{account.username}</td>
                <td>{account.role}</td>
                <td className={`status ${account.status}`}>{account.status}</td>
                <td>{account.created}</td>
                <td>{account.lastLogin}</td>
                <td className="actions">
                  <button className="edit-btn">编辑</button>
                  {account.status === '启用' ? (
                    <button className="disable-btn">禁用</button>
                  ) : (
                    <button className="enable-btn">启用</button>
                  )}
                  <button className="delete-btn">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 添加子账号模态框 */}
      <div className="modal add-subaccount-modal">
        <div className="modal-content">
          <h2>添加子账号</h2>
          <form>
            <div className="form-group">
              <label>用户名</label>
              <input type="text" placeholder="请输入用户名" />
            </div>
            <div className="form-group">
              <label>密码</label>
              <input type="password" placeholder="请输入密码" />
            </div>
            <div className="form-group">
              <label>确认密码</label>
              <input type="password" placeholder="请再次输入密码" />
            </div>
            <div className="form-group">
              <label>角色</label>
              <select>
                <option value="customer-service">客服</option>
                <option value="finance">财务</option>
                <option value="operation">运营</option>
              </select>
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">确认添加</button>
              <button type="button" className="cancel-btn">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
