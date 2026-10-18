import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ConfirmPaymentPage from './pages/ConfirmPaymentPage';
import ThankYouPage from './pages/ThankYouPage';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout/:productId" element={<CheckoutPage />} />
          <Route path="/confirm" element={<ConfirmPaymentPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
