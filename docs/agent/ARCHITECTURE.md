# Architecture Notes

This project is a Tailwind Next.js Starter Blog clone being adapted into a professional portfolio for Wahbi Hamza.

The launch goal is content-only. Do not redesign the application.

## How the app is organized

The app uses Next.js App Router files under `app/` and content/data files under `data/`.

Important paths:

```txt
app/
  page.tsx              # Home route; loads posts and renders Main
  Main.tsx              # Homepage UI/content
  about/page.tsx        # About route; renders default author MDX
  projects/page.tsx     # Optional projects page

data/
  siteMetadata.js       # Site identity, metadata, socials, analytics, comments, search
  headerNavLinks.ts     # Top nav links
  authors/default.mdx   # About page content and author metadata
  blog/**/*.mdx         # Blog/case-study posts
  projectsData.*        # Optional projects card data

contentlayer.config.ts  # MDX schema and generated content behavior
```

## Content flow

### Homepage

`app/page.tsx` imports all generated blog posts from Contentlayer, sorts them, and passes them into `app/Main.tsx`.

For launch, keep that flow. Edit `app/Main.tsx` only if needed to replace the generic starter homepage with professional landing content.

Avoid changing `app/page.tsx` unless absolutely necessary.

### About page

`app/about/page.tsx` reads the `default` author from Contentlayer and renders `data/authors/default.mdx` inside `AuthorLayout`.

For launch, update `data/authors/default.mdx` with Wahbi's professional profile. Do not rewrite `app/about/page.tsx`.

### Case studies / blog

The existing blog system is enough for launch.

Use `data/blog/**/*.mdx` for case studies. Keep the route `/blog`, but visible navigation can call it `Case Studies`.

Do not add a new Contentlayer document type for `CaseStudy`. Use tags instead:

```txt
case-study
sap
p2p
s2c
procurement
sap-ariba
s4hana
analytics
automation
ai
```

### Projects page

The projects page is optional. It currently consumes `data/projectsData.*` and renders cards.

For launch, either hide it from nav or lightly repurpose it as `Selected Work`. Do not spend time making it the core experience.

## Contentlayer behavior

`contentlayer.config.ts` defines `Blog` and `Authors`. It also computes slugs, paths, reading time, table of contents, structured data, tag counts, and the local search index.

Do not modify Contentlayer config during the launch sprint unless build errors force it.

## Design constraints

Do not redesign. Preserve the existing typography, spacing, and component style.

Good changes: replace text, update metadata, create MDX posts, simplify navigation, remove newsletter from homepage if it distracts and can be done safely, use existing `Link` and `Tag` components.

Bad changes: new UI libraries, new animation system, custom card framework, new image-heavy hero, custom CMS, route refactor, major layout rewrite.

## Launch tone

The website must feel like a professional SAP/procurement/automation portfolio.

Primary signal: P2P expert and S2C consultant who bridges business process, enterprise systems, data, and automation.

Avoid: junior developer portfolio with many toy projects.

## Page-level launch goals

### `/`

Explain Wahbi in 10 seconds. Recommended sections: Hero, Selected work areas, Experience snapshot, Featured case studies, CTA.

### `/about`

Professional HR landing page. Include concise profile, current focus, selected work, how he works, and sector breadth: automotive, railway, energy, distribution, mining, and R&D.

### `/blog`

Use as Case Studies. Initial posts should be SAP/procurement focused, not Leyton-first.

### `/projects`

Optional. Hide from nav if not polished.

## Build discipline

After changes, run:

```bash
yarn build
```

If build fails, fix only errors required to pass. Do not refactor opportunistically.

## Confidentiality

Use sanitized professional summaries. Do not expose raw source documents, private links, private repository links, personal phone number by default, or confidential client details.