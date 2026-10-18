import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ThankYouPage() {
  const query = new URLSearchParams(useLocation().search);
  const orderId = query.get('order');

  return (
    <div className="container">
      <div className="card thank-you-card">
        <h2>Thank you!</h2>
        <p>Your payment confirmation has been received.</p>
        <p>We will verify and email your product access shortly.</p>
        {orderId && <p><strong>Order ID:</strong> {orderId}</p>}
        <p className="muted">If you need help, email receipts@yourdomain.com</p>
      </div>
    </div>
  );
}
