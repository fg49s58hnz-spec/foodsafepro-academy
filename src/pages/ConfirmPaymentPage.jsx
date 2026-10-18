import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function ConfirmPaymentPage() {
  const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/mrpedzvp';
  const RECEIPT_EMAIL = import.meta.env.VITE_RECEIPT_EMAIL || 'receipts@yourdomain.com';
  const query = useQuery();
  const navigate = useNavigate();
  const [status, setStatus] = React.useState({ sending: false, ok: null, message: '' });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (!formData.get('name') || !formData.get('email') || !formData.get('txid')) {
      alert('Please complete all required fields.');
      return;
    }

    setStatus({ sending: true, ok: null, message: 'Sending confirmation...' });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setStatus({ sending: false, ok: true, message: 'Payment confirmation received. We will verify and email you shortly.' });
        const orderId = formData.get('orderId') || '';
        form.reset();
        navigate(`/thank-you${orderId ? `?order=${encodeURIComponent(orderId)}` : ''}`);
      } else {
        const text = await response.text().catch(() => '');
        console.error('Submit failed:', response.status, text);
        setStatus({ sending: false, ok: false, message: `Submission failed. Please email your receipt to ${RECEIPT_EMAIL}` });
      }
    } catch (error) {
      console.error(error);
      setStatus({ sending: false, ok: false, message: `Network error. Please email your receipt to ${RECEIPT_EMAIL}` });
    }
  };

  return (
    <div className="container">
      <div className="card form-card">
        <h2>Confirm Payment & Upload Receipt</h2>
        <p className="muted">
          We accept Cash App, Venmo, and Zelle. After payment, complete this form so we can deliver your product.
        </p>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-row">
            <div>
              <label>Full name</label>
              <input name="name" type="text" required />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="email" required />
            </div>
          </div>

          <div className="input-block">
            <label>Product</label>
            <input name="product" defaultValue={query.get('product') || ''} />
          </div>

          <div className="form-row small-gap">
            <div>
              <label>Payment method</label>
              <select name="method" defaultValue="cashapp">
                <option value="cashapp">Cash App</option>
                <option value="venmo">Venmo</option>
                <option value="zelle">Zelle</option>
              </select>
            </div>
            <div>
              <label>Transaction ID / Notes</label>
              <input name="txid" type="text" required />
            </div>
          </div>

          <div className="input-block">
            <label>Order ID</label>
            <input name="orderId" defaultValue={query.get('order') || ''} />
          </div>

          <div className="input-block">
            <label>Upload receipt (image or PDF)</label>
            <input name="receipt" type="file" accept="image/*,.pdf" />
          </div>

          <div className="submit-row">
            <button type="submit" className="btn-primary">Confirm payment</button>
            {status.message && (
              <span className={status.ok === false ? 'message error' : status.ok ? 'message success' : 'message'}>
                {status.message}
              </span>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
