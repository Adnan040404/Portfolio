# Muhammad Adnan — Portfolio

Personal portfolio site. Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/data/` — all content lives here as plain TypeScript objects. Edit these files to update the site; no component code needs to change.
  - `profile.ts` — name, title, bio, contact links
  - `experience.ts` — work history, education, certifications
  - `skills.ts` — skill groups
  - `projects.ts` — project cards (title, description, tech, GitHub link, category)
- `src/components/` — page sections (Hero, About, Experience, Skills, Projects, Contact, Nav, Footer) and small UI primitives under `ui/`
- `src/app/` — route entry (`page.tsx`), root layout + SEO metadata (`layout.tsx`), `sitemap.ts`, `robots.ts`, `not-found.tsx`

## Updating content

- **Add a project**: add an entry to the `projects` array in `src/data/projects.ts`. It needs a `title`, `category` (must match one of the `Category` values), `description`, `tech` list, and `repo` URL.
- **Add/edit experience**: edit `src/data/experience.ts`.
- **Update bio or contact info**: edit `src/data/profile.ts`.

All project entries currently link to real public repos under `github.com/Adnan040404`. Descriptions were written to be accurate to what each repo actually contains — avoid adding invented metrics (e.g. "reduced X by 30%") unless you can verify them.

## Live site

- **Repo**: https://github.com/Adnan040404/Portfolio
- **Deployed**: https://portfolio-adnan040404.vercel.app (auto-redeploys on every push to `master`)

If you later attach a custom domain in Vercel, update `siteUrl`/`sitemap`/`robots` URLs in `src/app/layout.tsx`, `src/app/sitemap.ts`, and `src/app/robots.ts` to match.

A resume PDF was intentionally left out — add a "Download Resume" link in `Hero.tsx`/`Contact.tsx` once you've settled on a resume file.

## Turning on the contact form

The contact form (`src/components/ContactForm.tsx`) is wired to [Formspree](https://formspree.io) but renders nothing until it's configured — no broken form ships by accident.

1. Sign up free at [formspree.io](https://formspree.io) (GitHub login works) and create a form pointed at your email
2. Copy the form ID from the endpoint it gives you (`https://formspree.io/f/xxxxxxxx` → the `xxxxxxxx` part)
3. In the Vercel project: **Settings → Environment Variables** → add `NEXT_PUBLIC_FORMSPREE_ID` = that ID → redeploy

Until that's set, the mailto button above it still works as the way to reach you.

## Deploying

Already deployed — see **Live site** above. To deploy elsewhere, push this folder to a GitHub repo and import it on [Vercel](https://vercel.com/new); it detects Next.js automatically.

```bash
npm run build   # verify a production build succeeds before deploying
```
