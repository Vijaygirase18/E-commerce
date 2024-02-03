import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 20, quantity: 2 },
    { id: 2, name: 'Product 2', price: 30, quantity: 1 },
  ]);

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          color: '#333',
        }}
      >
        Your Shopping Cart
      </h2>
      {cartItems.map(item => (
        <div
          key={item.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <span>{item.name}</span>
          <span>${item.price}</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
            style={{
              width: '40px',
            }}
          />
          <button
            onClick={() => handleRemoveItem(item.id)}
            style={{
              backgroundColor: '#ff6961',
              color: 'white',
              padding: '5px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Remove
          </button>
        </div>
      ))}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
          fontWeight: 'bold',
        }}
      >
        <span>Total:</span>
        <span>${calculateTotal()}</span>
      </div>
    </div>
  );
};

export default CartPage;
