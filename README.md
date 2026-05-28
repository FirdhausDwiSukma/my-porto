# My Portfolio

Portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Language**: TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

## Deploy

### Option 1: Vercel (Recommended) — Manual via Dashboard

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com) → Login
3. Klik **"Add New Project"** → Import repo GitHub kamu
4. Vercel otomatis detect Next.js — langsung klik **Deploy**
5. Selesai! URL live akan diberikan otomatis

### Option 2: Vercel via GitHub Actions (Auto-deploy)

Setiap push ke branch `main` akan otomatis trigger deploy.

**Setup sekali saja:**

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login dan link project:
   ```bash
   vercel login
   vercel link
   ```

3. Ambil credentials dari output `.vercel/project.json`:
   - `VERCEL_ORG_ID` → nilai `orgId`
   - `VERCEL_PROJECT_ID` → nilai `projectId`

4. Buka repo GitHub → **Settings** → **Secrets and variables** → **Actions**, tambahkan:
   - `VERCEL_TOKEN` → dari [vercel.com/account/tokens](https://vercel.com/account/tokens)
   - `VERCEL_ORG_ID` → dari langkah 3
   - `VERCEL_PROJECT_ID` → dari langkah 3

5. Push ke `main` — GitHub Actions akan auto-deploy ke Vercel!
