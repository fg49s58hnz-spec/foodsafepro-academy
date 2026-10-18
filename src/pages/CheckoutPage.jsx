import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';

function generateOrderId(productId) {
  const stamp = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${String(productId).slice(0, 6).toUpperCase()}-${stamp}-${rand}`.toUpperCase();
}

export default function CheckoutPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="container">
        <div className="card">
          <h2>Product not found</h2>
        </div>
      </div>
    );
  }

  const orderId = generateOrderId(product.id);
  const cashUrl = import.meta.env.VITE_CASHAPP_URL || 'https://cash.app/$KimberlyJMejia';
  const venmoUrl = import.meta.env.VITE_VENMO_URL || 'https://venmo.com/Kimberly-Rodriguez-747';
  const zellePhone = import.meta.env.VITE_ZELLE_PHONE || '(910) 991-1116';

  const confirmPayment = () => {
    navigate(`/confirm?order=${encodeURIComponent(orderId)}&product=${encodeURIComponent(product.name)}`);
  };

  return (
    <div className="container">
      <div className="card checkout-card">
        <h2>{product.name}</h2>
        <div className="price-large">{product.priceLabel}</div>
        <p className="muted">{product.short}</p>

        <div className="payment-grid">
          <a href={cashUrl} className="cta-large" target="_blank" rel="noreferrer">Pay with Cash App</a>
          <a href={venmoUrl} className="pay-btn" target="_blank" rel="noreferrer">Pay with Venmo</a>
          <div className="zelle-box">
            <div><strong>Zelle</strong></div>
            <div>{zellePhone}</div>
            <div className="mini-note">Send the exact amount and include your email + order ID in the notes.</div>
          </div>
        </div>

        <div className="small-note">
          After payment, confirm below and upload a screenshot or receipt.
        </div>

        <div className="checkout-bottom">
          <button type="button" className="btn-outline" onClick={confirmPayment}>I’ve paid — confirm payment</button>
        </div>

        <div className="order-id">Order ID: <strong>{orderId}</strong></div>
      </div>
    </div>
  );
}
