# Next.js Portfolio

This is the converted Next.js version of the original Vite + React portfolio website.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Build for production

```bash
npm run build
npm run start
```

## What changed

- Replaced Vite entry files with the Next.js App Router structure.
- Added `src/app/layout.tsx` and `src/app/page.tsx`.
- Moved global CSS to `src/app/globals.css`.
- Added `next.config.ts`, `postcss.config.mjs`, and `next-env.d.ts`.
- Marked interactive components with `"use client"`.
- Replaced standard `<img>` usage with `next/image` where images are rendered.
