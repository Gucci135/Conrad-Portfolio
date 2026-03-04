# conradwyrick.com

Personal portfolio site built with Vite + React.

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy to Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **"Add New Project"** → import this repo
4. Vercel auto-detects Vite — just click **Deploy**
5. Once live, go to **Settings → Domains** → add `conradwyrick.com`
6. Vercel will give you DNS records — update them in your domain registrar

## Custom Domain DNS Setup

In your domain registrar, set:
- **A Record**: `@` → `76.76.21.21`
- **CNAME**: `www` → `cname.vercel-dns.com`

(Vercel's dashboard will confirm these for you)

## Editing Content

All content lives in `src/App.jsx`:
- **PROJECTS** array — add/edit project cards
- **EXPERIENCE** array — update your work history
- About section text — in the "about" section JSX
- Links — Resume and CV Google Drive URLs in the hero buttons
