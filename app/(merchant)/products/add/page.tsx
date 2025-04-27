/**
 * 添加商品页面
 * 包含商品信息表单
 */
export default function AddProductPage() {
  return (
    <div className="add-product-page">
      <div className="page-header">
        <h1>添加商品</h1>
        <a href="/merchant/products" className="back-btn">
          返回商品列表
        </a>
      </div>

      <form className="product-form">
        <div className="form-group">
          <label htmlFor="name">商品名称</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="请输入商品名称" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">商品价格</label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="请输入商品价格"
            min="0"
            step="0.01"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">商品库存</label>
          <input
            type="number"
            id="stock"
            name="stock"
            placeholder="请输入商品库存"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">商品分类</label>
          <select id="category" name="category" required>
            <option value="">请选择分类</option>
            <option value="electronics">电子产品</option>
            <option value="clothing">服装</option>
            <option value="food">食品</option>
            <option value="books">图书</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">商品描述</label>
          <textarea
            id="description"
            name="description"
            placeholder="请输入商品详细描述"
            rows={5}
          />
        </div>

        <div className="form-group">
          <label>商品图片</label>
          <div className="image-upload">
            <input type="file" id="images" name="images" multiple accept="image/*" />
            <div className="upload-hint">最多可上传5张图片</div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="isPresale">预售商品</label>
          <div className="checkbox-group">
            <input type="checkbox" id="isPresale" name="isPresale" />
            <label htmlFor="isPresale">设置为预售商品</label>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">保存商品</button>
          <button type="reset" className="reset-btn">重置表单</button>
        </div>
      </form>
    </div>
  )
}
