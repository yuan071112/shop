'use client'
import React, { useState } from 'react'

/**
 * 商品详情页面 (客户端组件)
 * 包含商品信息、购买选项、评价等功能
 */
export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // 模拟商品数据
  const product = {
    id: params.id,
    name: '高端智能手机',
    price: 5999.00,
    originalPrice: 6999.00,
    discount: 1000.00,
    images: [
      '/products/phone1.jpg',
      '/products/phone2.jpg',
      '/products/phone3.jpg'
    ],
    description: '6.7英寸超视网膜XDR显示屏，A15仿生芯片，1200万像素三摄系统，支持5G网络',
    specifications: [
      { name: '品牌', value: 'Apple' },
      { name: '型号', value: 'iPhone 13 Pro Max' },
      { name: '颜色', value: '石墨色' },
      { name: '存储容量', value: '256GB' },
      { name: '操作系统', value: 'iOS 15' }
    ],
    stock: 15,
    sales: 128,
    rating: 4.8,
    reviewCount: 56,
    isPresale: false,
    presaleEndDate: '',
    merchant: {
      id: 'M001',
      name: 'Apple官方旗舰店',
      rating: 4.9,
      responseRate: '98%',
      responseTime: '平均30分钟'
    }
  }

  // 模拟评价数据
  const reviews = [
    {
      id: 'R001',
      user: '张**',
      rating: 5,
      content: '手机非常好用，运行流畅，拍照效果很棒！',
      date: '2023-09-15',
      images: ['/reviews/phone1.jpg']
    },
    {
      id: 'R002',
      user: '李**',
      rating: 4,
      content: '整体不错，就是电池续航比预期的稍短一些',
      date: '2023-09-10',
      images: []
    }
  ]

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(product.images[0])
  const [activeTab, setActiveTab] = useState('details')

  return (
    <div className="product-detail-page">
      <div className="product-header">
        {/* 面包屑导航 - 使用JSX表达式转义>符号 */}
        <div className="breadcrumb">
          <span>首页</span> {'>'} <span>手机数码</span> {'>'} <span>智能手机</span> {'>'} <span>{product.name}</span>
        </div>
      </div>

      <div className="product-main">
        <div className="product-gallery">
          <div className="main-image">
            <img src={selectedImage} alt={product.name} />
          </div>
          <div className="thumbnail-list">
            {product.images.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === image ? 'active' : ''}`}
                onClick={() => setSelectedImage(image)}
              >
                <img src={image} alt={`${product.name}-${index}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <div className="price-section">
            <span className="current-price">¥{product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="original-price">¥{product.originalPrice.toFixed(2)}</span>
            )}
            {product.discount > 0 && (
              <span className="discount">立省¥{product.discount.toFixed(2)}</span>
            )}
          </div>

          <div className="rating-section">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                  {i < product.rating ? '★' : '☆'}
                </span>
              ))}
            </div>
            <span className="review-count">{product.reviewCount}条评价</span>
          </div>

          <div className="specifications">
            {product.specifications.map((spec, index) => (
              <div key={index} className="spec-item">
                <span className="spec-name">{spec.name}:</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="stock-section">
            <span className="stock-label">库存:</span>
            <span className={`stock-value ${product.stock <= 5 ? 'low' : ''}`}>
              {product.stock}件
            </span>
            {product.stock <= 5 && <span className="stock-warning">(仅剩少量)</span>}
          </div>

          <div className="quantity-section">
            <span className="quantity-label">数量:</span>
            <div className="quantity-control">
              <button 
                className="decrease" 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                value={quantity} 
                min="1" 
                max={product.stock}
                onChange={(e) => setQuantity(Math.max(1, Math.min(product.stock, parseInt(e.target.value) || 1)))}
              />
              <button 
                className="increase" 
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>
          </div>

          <div className="action-buttons">
            <button className="add-to-cart">加入购物车</button>
            <button className="buy-now">立即购买</button>
            <button className="add-to-favorites">收藏</button>
          </div>

          <div className="merchant-info">
            <h3>商家信息</h3>
            <div className="merchant-details">
              <span className="merchant-name">{product.merchant.name}</span>
              <div className="merchant-rating">
                <span>商家评分: {product.merchant.rating}</span>
                <span>响应率: {product.merchant.responseRate}</span>
                <span>响应时间: {product.merchant.responseTime}</span>
              </div>
              <button className="contact-merchant">联系商家</button>
            </div>
          </div>
        </div>
      </div>

      <div className="product-tabs">
        <div className="tab-header">
          <button 
            className={`tab ${activeTab === 'details' ? 'active' : ''}`}
            onClick={() => setActiveTab('details')}
          >
            商品详情
          </button>
          <button 
            className={`tab ${activeTab === 'specs' ? 'active' : ''}`}
            onClick={() => setActiveTab('specs')}
          >
            规格参数
          </button>
          <button 
            className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            商品评价({product.reviewCount})
          </button>
          <button 
            className={`tab ${activeTab === 'aftersale' ? 'active' : ''}`}
            onClick={() => setActiveTab('aftersale')}
          >
            售后保障
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'details' && (
            <div className="product-description">
              <h3>商品详情</h3>
              <p>{product.description}</p>
              <div className="detail-images">
                {product.images.map((image, index) => (
                  <img key={index} src={image} alt={`${product.name}-detail-${index}`} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="product-specifications">
              <h3>规格参数</h3>
              <table>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-name">{spec.name}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="product-reviews">
              <h3>商品评价</h3>
              <div className="review-summary">
                <div className="average-rating">
                  <span className="rating-value">{product.rating}</span>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`}>
                        {i < product.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <span className="review-count">{product.reviewCount}条评价</span>
                </div>
              </div>

              <div className="review-list">
                {reviews.map(review => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <span className="review-user">{review.user}</span>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>
                            {i < review.rating ? '★' : '☆'}
                          </span>
                        ))}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>
                    <div className="review-content">{review.content}</div>
                    {review.images.length > 0 && (
                      <div className="review-images">
                        {review.images.map((image, index) => (
                          <img key={index} src={image} alt={`review-${review.id}-${index}`} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'aftersale' && (
            <div className="aftersale-policy">
              <h3>售后保障</h3>
              <div className="policy-content">
                <p>1. 本商品支持7天无理由退货</p>
                <p>2. 质量问题15天内包退换</p>
                <p>3. 提供1年官方保修服务</p>
                <p>4. 退换货需保持商品完好，配件齐全</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
