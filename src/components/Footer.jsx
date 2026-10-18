import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="brand-row">
          <img src="/assets/logo.svg" className="logo" alt="FoodSafe Pro Academy logo" />
          <div>
            <div className="brand-name">FoodSafe Pro Academy</div>
            <div className="brand-tag">Train. Comply. Advance.</div>
          </div>
        </div>

        <div className="legal-copy">
          Educational content only. Not an official certification provider unless specifically stated.
        </div>
      </div>
    </footer>
  );
}
