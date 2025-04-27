/**
 * 公告管理页面
 * 包含公告列表和操作功能
 */
export default function AnnouncementsPage() {
  // 模拟公告数据
  const announcements = [
    {
      id: 'A001',
      title: '国庆节放假通知',
      content: '10月1日至10月7日放假，10月8日正常营业',
      status: '已发布',
      publishTime: '2023-09-28',
      endTime: '2023-10-08'
    },
    {
      id: 'A002',
      title: '系统升级维护',
      content: '10月10日凌晨2:00-4:00系统升级维护，期间无法下单',
      status: '已发布',
      publishTime: '2023-10-05',
      endTime: '2023-10-10'
    },
    {
      id: 'A003',
      title: '双十一促销活动',
      content: '双十一全场商品8折优惠，满300减50',
      status: '草稿',
      publishTime: '',
      endTime: '2023-11-12'
    }
  ]

  return (
    <div className="announcements-page">
      <div className="page-header">
        <h1>公告管理</h1>
        <button className="add-btn">发布公告</button>
      </div>

      <div className="announcement-list">
        <table>
          <thead>
            <tr>
              <th>公告ID</th>
              <th>标题</th>
              <th>内容</th>
              <th>状态</th>
              <th>发布时间</th>
              <th>结束时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map(announcement => (
              <tr key={announcement.id}>
                <td>{announcement.id}</td>
                <td>{announcement.title}</td>
                <td className="content-cell">{announcement.content}</td>
                <td className={`status ${announcement.status}`}>{announcement.status}</td>
                <td>{announcement.publishTime || '-'}</td>
                <td>{announcement.endTime}</td>
                <td className="actions">
                  {announcement.status === '草稿' ? (
                    <>
                      <button className="publish-btn">发布</button>
                      <button className="edit-btn">编辑</button>
                    </>
                  ) : (
                    <button className="edit-btn">编辑</button>
                  )}
                  <button className="delete-btn">删除</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 发布公告模态框 */}
      <div className="modal add-announcement-modal">
        <div className="modal-content">
          <h2>发布公告</h2>
          <form>
            <div className="form-group">
              <label>公告标题</label>
              <input type="text" placeholder="请输入公告标题" />
            </div>
            <div className="form-group">
              <label>公告内容</label>
              <textarea placeholder="请输入公告内容"></textarea>
            </div>
            <div className="form-group">
              <label>结束时间</label>
              <input type="date" />
            </div>
            <div className="form-actions">
              <button type="submit" className="submit-btn">确认发布</button>
              <button type="button" className="save-draft-btn">保存草稿</button>
              <button type="button" className="cancel-btn">取消</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
