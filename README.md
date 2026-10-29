# JAYU® — The Immersive Digital Atelier

Personal portfolio of **Jayashree K** (Jayu): Creative Technologist, UI/UX Designer, and Aspiring Software Engineer.

This is a student portfolio. It does not invent jobs, clients, awards, or project metrics.

## Technology

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- GSAP / ScrollTrigger
- Three.js + React Three Fiber
- react-helmet-async

## Local setup

```bash
npm install
npm run dev
```

Open the URL printed in the terminal (usually `http://localhost:5173`).

## Commands

| Command        | Purpose                |
| -------------- | ---------------------- |
| `npm run dev`  | Local development      |
| `npm run build`| Production build       |
| `npm run preview` | Preview the build   |
| `npm run lint` | Oxlint                 |

## Project structure

- `src/content/` — editable site copy, projects, skills, credentials
- `src/components/` — layout, UI, motion, 3D, project gallery
- `src/pages/` — routes
- `public/images/jayashree-professional.jpg` — professional portrait
- `public/projects/` — project visuals

## Environment variables

Copy `.env.example` to `.env`.

- `VITE_SITE_URL` — public origin after deployment (used for canonical URLs). Until a real domain exists, `https://example.com` is the placeholder in `index.html`, `robots.txt`, and `sitemap.xml`.
- `VITE_FORM_ENDPOINT` — optional POST endpoint for the enquiry form. If empty, the form opens a `mailto:` draft to the verified email. Client-side validation is not spam protection.

Do not put private API keys in frontend code.

## Updating content

- Projects: `src/content/projects.ts`
- Skills: `src/content/skills.ts`
- Credentials (including CGPA in `src/content/site.ts`): keep verified facts only
- Portrait: replace `public/images/jayashree-professional.jpg` without altering the face

## Deployment

The app is a static SPA. `vercel.json` rewrites all routes to `index.html`.

1. Push the repo to GitHub (when you are ready).
2. Import the project in Vercel.
3. Set `VITE_SITE_URL` to the production origin.
4. Update `public/robots.txt` and `public/sitemap.xml` to that origin.

Do not deploy secrets.

## Known limitations

- Route-specific SEO uses `react-helmet-async`. Social crawlers that do not run JavaScript will mostly see the tags in `index.html`.
- The contact form does not send email until `VITE_FORM_ENDPOINT` is configured.
- Several projects use art-directed visual treatments because verified screenshots are not available.
- AuthLab, SkillBridgeAI, BHOOMI-X, and Template Hive case studies are intentionally incomplete until verified details are supplied.
- The 3D hero uses a static fallback on small screens and when WebGL is unavailable.

## Accessibility

The custom cursor, magnetic buttons, intro, and 3D motion respect `prefers-reduced-motion` and are disabled or simplified on touch devices.
