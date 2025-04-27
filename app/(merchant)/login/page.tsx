/**
 * 商家登录页面
 * 包含商家账号登录表单
 */
export default function MerchantLogin() {
  return (
    <div className="merchant-login">
      <h2>商家登录</h2>
      <form>
        <div>
          <label>账号:</label>
          <input type="text" name="username" required />
        </div>
        <div>
          <label>密码:</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">登录</button>
      </form>
      
      <div className="notice">
        <p>商家账号需通过资质审核</p>
        <a href="/merchant/register">申请商家账号</a>
      </div>
    </div>
  )
}
