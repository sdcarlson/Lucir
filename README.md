# Lucir Storefront

E-commerce storefront and brand site for Lucir, a small Bay Area liquid body soap brand, built with React, Commerce.js and Stripe.

**Tech stack:** JavaScript, React 17, Create React App, React Router, Material-UI, Commerce.js (Chec headless commerce API), Stripe Elements, React Hook Form, react-image-gallery

## Features

- Product catalog loaded from the Commerce.js API, with a product detail page and image gallery
- Persistent shopping cart: add, update quantity, remove and empty, with a live item count in the navbar
- Multi-step checkout: shipping address form with country, region and shipping option lookups from Commerce.js, order review, and card payment through Stripe Elements
- Order capture through Commerce.js using a Stripe payment method, with a thank-you page
- Brand pages: home page with a looping video hero, About, and Contact, plus a shared footer
- Basic mobile layouts for the About and Contact pages

## How it works

The app is a single-page React client with no custom backend. `src/lib/commerce.js` creates a Commerce.js client from a public key. `App.js` holds products, cart and order state and passes handlers down to page components. At checkout, a Commerce.js checkout token is generated from the cart, Stripe Elements creates a payment method in the browser, and the order is captured through `commerce.checkout.capture`. Routing is handled by React Router (`/`, `/shop`, `/product/:productId`, `/cart`, `/checkout`, `/about`, `/contact`, `/thankyou`).

## Getting started

Requires Node.js and npm, a Commerce.js (Chec) account with products, and a Stripe account connected to it.

```bash
npm install
cp .env.example .env   # then fill in your public keys
npm start              # runs on http://localhost:3000
```

Environment variables (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `REACT_APP_CHEC_PUBLIC_KEY` | Commerce.js public API key |
| `REACT_APP_STRIPE_PUBLIC_KEY` | Stripe publishable key |

`npm run build` produces a static production build in `build/` that can be served from any static host.

## Project context

Built in August and September 2021 for Lucir, a soap brand started in the Bay Area that summer. Two-person project: Seth Carlson set up the React app, the Commerce.js integration, cart and Stripe checkout flow, and routing; collaborator [tristenlol](https://github.com/tristenlol) contributed much of the visual design, video backgrounds, and page styling. The app was bootstrapped from an earlier storefront prototype, [visten](https://github.com/sdcarlson/visten).
