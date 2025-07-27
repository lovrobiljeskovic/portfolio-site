# Portfolio Site

Pixel-art themed personal portfolio built with **React**, **TypeScript**, and **Vite**.

## Prerequisites

- Node.js ≥ 18
- npm (comes with Node)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure EmailJS – see next section
cp .env.example .env            # then fill in the keys

# 3. Run the dev server
npm run dev                     # http://localhost:5173
```

## Building for Production

```bash
npm run build   # outputs static files to ./dist
```

## Contact Form (EmailJS)

The **Contact** form sends messages via [EmailJS](https://www.emailjs.com/).

1. Create an EmailJS account, Service, and Template containing the fields:
   `from_name`, `reply_to`, `subject`, and `message`.
2. Copy your **Service ID**, **Template ID**, and **Public Key**.
3. Provide them to the app via environment variables:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Create a `.env` file in the project root (do **NOT** commit it) or add them in your hosting dashboard (Vercel/Netlify/etc.).

That’s all—happy hacking!
