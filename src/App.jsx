import { useState } from 'react'
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react'
import './App.css'

// Sample product data
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699.99,
    description: "Latest smartphone with advanced camera and performance",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Laptop",
    price: 1299.99,
    description: "Powerful laptop for work and gaming",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 299.99,
    description: "Feature-rich smartwatch with health tracking",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 149.99,
    description: "Compact wireless earbuds with premium sound",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Tablet",
    price: 499.99,
    description: "Versatile tablet for entertainment and productivity",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop"
  }
]

function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🛒 Shopping Cart</h1>
        <p>Discover amazing products and build your perfect cart</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
          <ShoppingCart size={24} />
          <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>
            {getCartItemCount()} items in cart
          </span>
        </div>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name} 
              className="product-image"
            />
            <h3 className="product-title">{product.name}</h3>
            <p className="product-price">${product.price}</p>
            <p className="product-description">{product.description}</p>
            <button 
              className="btn btn-primary"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="cart-section">
        <h2 className="cart-title">
          <ShoppingCart size={24} style={{ marginRight: '0.5rem' }} />
          Your Cart
        </h2>
        
        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty. Add some products to get started!</p>
          </div>
        ) : (
          <>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-info">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="cart-item-image"
                  />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">${item.price}</p>
                  </div>
                </div>
                
                <div className="cart-item-actions">
                  <div className="quantity-controls">
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  
                  <button 
                    className="btn btn-secondary"
                    style={{ padding: '0.5rem', minWidth: 'auto' }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            
            <div className="cart-total">
              Total: ${getTotalPrice().toFixed(2)}
            </div>
            
            <button 
              className="btn btn-primary"
              style={{ marginTop: '1rem', width: '100%' }}
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default App 