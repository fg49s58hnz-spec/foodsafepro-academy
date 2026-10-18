import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const cashUrl = import.meta.env.VITE_CASHAPP_URL || 'https://cash.app/$KimberlyJMejia';
  const venmoUrl = import.meta.env.VITE_VENMO_URL || 'https://venmo.com/Kimberly-Rodriguez-747';

  return (
    <article className="card product-card">
      <div className="product-top">
        <h3>{product.name}</h3>
        <div className="price">{product.priceLabel}</div>
      </div>

      <p className="muted">{product.short}</p>

      {product.features.length > 0 && (
        <ul className="features">
          {product.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      )}

      <div className="product-actions">
        <Link to={`/checkout/${product.id}`} className="btn-outline">Checkout</Link>
        <a className="pay-btn" href={cashUrl} target="_blank" rel="noreferrer">Cash App</a>
        <a className="pay-btn" href={venmoUrl} target="_blank" rel="noreferrer">Venmo</a>
      </div>
    </article>
  );
}
