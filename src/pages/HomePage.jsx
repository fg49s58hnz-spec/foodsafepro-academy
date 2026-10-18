import React from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';

export default function HomePage() {
  const cashUrl = import.meta.env.VITE_CASHAPP_URL || 'https://cash.app/$KimberlyJMejia';

  return (
    <div className="container page-home">
      <section className="hero">
        <div className="hero-left">
          <span className="eyebrow">Practical Food-Safety Training</span>
          <h1>Train. Comply. Advance.</h1>
          <p className="lead">
            Food safety education, exam preparation, compliance resources, and FSQA career tools built for the people who keep the food industry moving.
          </p>

          <div className="hero-actions">
            <a href="#products" className="btn-primary">Shop Training</a>
            <a href="#products" className="btn-outline">Explore Resources</a>
          </div>
        </div>

        <aside className="hero-card">
          <div className="mini">Best First Product</div>
          <div className="hero-price">$49</div>
          <div className="hero-name">Ultimate Food Manager Exam Prep Bundle</div>
          <a href="/checkout/ultimate-bundle" className="btn-primary block-btn">Get the $49 Bundle</a>
        </aside>
      </section>

      <section id="products" className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <section className="split-section">
        <div className="card feature-panel" id="career">
          <h3>FSQA Career Accelerator</h3>
          <p className="muted">Turn food-safety experience into your next opportunity.</p>
          <ul className="features">
            <li>FSQA resume and keyword strategy</li>
            <li>Interview question bank</li>
            <li>HACCP and food-safety interview prep</li>
            <li>Salary negotiation resources</li>
          </ul>
          <a href={cashUrl} className="btn-primary" target="_blank" rel="noreferrer">Join: Pay $299</a>
        </div>

        <div className="card feature-panel" id="business">
          <h3>Business Training</h3>
          <p className="muted">Give your team practical training resources, quizzes, completion records, and audit-readiness tools in one place.</p>
          <ul className="features">
            <li>Employee training</li>
            <li>Compliance tools</li>
            <li>Training records</li>
          </ul>
          <a href="/confirm" className="btn-primary">Request Business Training</a>
        </div>
      </section>
    </div>
  );
}
