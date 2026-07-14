# Hassan — Portfolio

A monochrome, motion-driven portfolio built with React, TypeScript, Tailwind CSS,
Framer Motion, GSAP, and a minimal Three.js detail. Deploys as a static site to
GitHub Pages; contact form and any backend logic run through Supabase.

## Stack

- **Frontend:** React + TypeScript + Vite, Tailwind CSS v4, Framer Motion, GSAP, React Three Fiber
- **Backend:** Supabase (Postgres) for the contact form
- **Deploy:** GitHub Actions → GitHub Pages

## Local development

```bash
npm install
npm run dev
```

## Setting up Supabase (for the contact form)

1. Create a free project at [supabase.com](https://supabase.com).
2. In the SQL editor, create the table the form writes to:

   ```sql
   create table contact_messages (
     id uuid primary key default gen_random_uuid(),
     name text not null,
     email text not null,
     message text not null,
     created_at timestamptz default now()
   );

   alter table contact_messages enable row level security;

   create policy "Allow public inserts"
     on contact_messages for insert
     to anon
     with check (true);
   ```

   This lets the public site insert new messages but not read, update, or
   delete existing ones — reasonable for a contact form.

3. Copy your project's **Project URL** and **anon public key** from
   Settings → API.
4. For local dev, create a `.env.local` file (already gitignored):

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

5. For the deployed site, add the same two values as **repository secrets**
   (Settings → Secrets and variables → Actions) named exactly
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` — the GitHub Actions
   workflow injects them at build time.

Without these set, the form still renders but shows a graceful error instead
of submitting — nothing breaks.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages** and set the source to
   **GitHub Actions**.
3. Push to `main` — `.github/workflows/deploy.yml` builds the site and
   deploys `dist/` automatically.
4. Custom domain: `public/CNAME` is already set to `heymehassan.me`. Point
   your domain's DNS to GitHub Pages (an `A` record to GitHub's IPs, or a
   `CNAME` record to `<username>.github.io`) per
   [GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
   If you'd rather use the default `username.github.io/repo-name` URL
   instead, delete `public/CNAME` and change `base` in `vite.config.ts` to
   `/repo-name/`.

## Before you launch

- [ ] Add a real `public/resume.pdf` (the nav links to `/resume.pdf`)
- [ ] Replace the placeholder LinkedIn/Upwork URLs in `src/components/Connect.tsx`
- [ ] Add a real Open Graph image at `public/og-image.png` (1200×630px)
- [ ] Set up the Supabase table and secrets above
- [ ] Swap the favicon if you want something more custom than the current mark
