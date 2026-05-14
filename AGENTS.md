# Agent Instructions

## Default behavior when Codex starts

If the user starts Codex in this repository without a specific prompt, treat the default task as:

> Execute the 4-hour content-only launch plan for Wahbi Hamza's professional SAP/P2P/S2C portfolio.

Do not ask for another high-level prompt before reading the repository context.

## Required reading order

Before editing anything, read these files in order:

1. `CODEX.md` — strategic brief and content source of truth.
2. `docs/agent/REPO_MAP.yaml` — machine-readable repo map.
3. `docs/agent/ARCHITECTURE.md` — human-readable architecture notes.
4. `docs/product/PRD.md` — product requirements for the launch.
5. `docs/product/TASKS_IMMUTABLE.md` — fixed implementation task contract.
6. `docs/product/DONE.md` — append-only completion log.

## Operating mode

This is a launch sprint. The priority is to get the site live fast with professional content.

Work mode:

- Content-only changes.
- No redesign.
- No new dependencies.
- No route refactor unless already required by the template.
- No new CMS/schema.
- Keep the existing Tailwind Next.js Starter Blog structure.
- Prefer safe, minimal edits over clever changes.

## Scope allowed

You may edit:

- `data/siteMetadata.js`
- `data/headerNavLinks.ts`
- `data/authors/default.mdx`
- `app/Main.tsx`
- `data/blog/**/*.mdx`
- `data/projectsData.*` only if needed and low risk
- `docs/product/DONE.md` as an append-only log

You may add:

- 3 to 4 SAP/procurement case-study MDX files in `data/blog/`
- small static text-only docs if needed for traceability

## Scope forbidden

Do not:

- redesign the website,
- add animations,
- add UI libraries,
- add images that do not exist,
- change package manager,
- rename Contentlayer document types,
- create a new content model,
- expose private CV PDFs,
- expose phone number by default,
- expose private client documents,
- publish internal Drive/Notion/Jira/Azure/SharePoint links,
- invent metrics,
- overstate ownership.

## Implementation discipline

Use `docs/product/TASKS_IMMUTABLE.md` as the task contract. Do not edit that file except to correct obvious typos.

When a task is completed, append one line to `docs/product/DONE.md` with:

```txt
- YYYY-MM-DD HH:mm — T-XXX completed — short description — files changed
```

After content changes, run:

```bash
yarn build
```

Run lint only if useful or requested:

```bash
yarn lint
```

Fix build errors only. Do not over-polish.

## Definition of done

The launch is done when:

- starter identity is gone,
- homepage explains Wahbi within 10 seconds,
- About page is professional and CV-aligned,
- SAP experience progression is clear: Associate → Confirmed → Senior,
- at least 3 SAP/procurement case studies exist,
- Leyton is secondary blog/use-case material,
- navigation is simple,
- no confidential material is exposed,
- `yarn build` passes.
