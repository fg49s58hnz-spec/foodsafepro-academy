# FoodSafe Pro Academy

A full Vite + React landing page for food-safety training, exam prep, compliance resources, and career growth tools.

## Local setup

1. Install dependencies:
   npm install
2. Create an environment file:
   cp .env.example .env
3. Start the app:
   npm run dev
4. Visit http://localhost:5173

## Production build

npm run build

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow for Pages deployment. GitHub will publish the site at:

https://<your-github-username>.github.io/foodsafepro-academy/

## Important notes

- Replace the Formspree endpoint in `.env` if needed.
- The payment flow uses Cash App, Venmo, and Zelle for manual verification.
- Customers pay first, then submit a receipt or transaction ID through the confirmation form.
- Use your own business accounts and keep accurate receipt records.
