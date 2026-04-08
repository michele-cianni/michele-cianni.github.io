# Michele Cianni — Portfolio

Personal portfolio site for Michele Cianni.

**Live site:** <https://michele-cianni.github.io>

## Tech Stack

- [Astro](https://astro.build) v6
- [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/vite`)
- TypeScript
- `@astrojs/sitemap`

## Project Structure

```text
/
├── .github/workflows/deploy.yml   # GitHub Actions → GitHub Pages
├── public/
├── src/
│   ├── components/                # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   ├── data/
│   │   ├── profile.json           # Personal info, social links, skills
│   │   └── projects.json          # Portfolio projects
│   ├── layouts/
│   │   └── Layout.astro           # Master template (SEO, fonts, dark theme)
│   ├── pages/
│   │   └── index.astro            # Single-page entry point
│   └── styles/
│       └── global.css
└── package.json
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

## Updating Content

- **Profile, skills, social links** → `src/data/profile.json`
- **Projects** → `src/data/projects.json`

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys it to GitHub Pages automatically.
