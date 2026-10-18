import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <img src="/assets/logo.svg" alt="FoodSafe Pro Academy" className="logo" />
          <div className="brand-copy">
            <div className="brand-name">FoodSafe Pro Academy</div>
            <div className="brand-tag">Train. Comply. Advance.</div>
          </div>
        </Link>

        <nav className="nav">
          <Link to="/">Products</Link>
          <a href="#career">Career</a>
          <a href="#business">Business</a>
          <Link to="/confirm" className="btn-primary small-btn">Confirm Payment</Link>
        </nav>
      </div>
    </header>
  );
}
