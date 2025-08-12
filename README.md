# AZ Media — Next.js (App Router)

A modern, pixel-perfect agency site for **AZ Media** (Calgary, Canada) featuring gradients, micro-animations (Framer Motion), smooth scrolling, and an **interactive instant quotation estimator** that emails the results to **info@az-media.ca**.

## Quickstart

```bash
pnpm i   # or npm i / yarn
pnpm dev # http://localhost:3000
```

Create a `.env` based on `.env.example` for email sending.

## Tech
- Next.js App Router + TypeScript
- Tailwind CSS with **brand teal** CSS variables (easy theming)
- Framer Motion micro-interactions
- Lenis smooth scrolling
- Nodemailer API routes for email (quote + contact)

## Theming
Update `:root` brand color variables in `app/globals.css`. They are mapped to `theme.colors.brand.{50..900}` in Tailwind.

## Email
Configure SMTP in `.env`. API routes:
- `POST /api/send-quote`
- `POST /api/contact`

Both return JSON with `{ok: boolean, message?: string}`.
