# Immutable Launch Task Contract

This file is the fixed implementation contract for the 4-hour content-only launch.

Do not use this file as a mutable task tracker. Do not add status columns. Do not mark rows as done here. Append completions to `docs/product/DONE.md` instead.

## Rules

- Execute tasks in priority order.
- Keep changes content-only.
- No redesign.
- No new dependencies.
- No route refactor.
- No Contentlayer schema changes.
- No private source documents or confidential links in public content.
- Run `yarn build` before considering the launch complete.

## Task table

| ID | Priority | Task | Files | Detailed requirement | Acceptance criteria | Risk |
|---|---:|---|---|---|---|---|
| T-001 | P0 | Replace site metadata and starter identity | `data/siteMetadata.js` | Replace starter title, author, headerTitle, description, email, LinkedIn, GitHub if available, and remove or blank irrelevant social placeholders. | No visible starter identity remains in metadata. Site description positions Wahbi as SAP Ariba / S2P / SAP S/4HANA consultant. | Low |
| T-002 | P0 | Simplify main navigation | `data/headerNavLinks.ts` | Use simple launch nav: Home, Case Studies, About. Hide Tags and Projects unless Projects is polished. Keep `/blog` as the route but label it Case Studies. | Main nav is simple and non-student-like. No Tags link in primary nav. | Low |
| T-003 | P0 | Replace About author frontmatter | `data/authors/default.mdx` | Replace starter author with Wahbi Hamza. Use professional title, ConSAP company, work email, LinkedIn. Do not include phone number or private personal status. | About page frontmatter has correct professional identity and no starter data. | Low |
| T-004 | P0 | Replace About body content | `data/authors/default.mdx` | Write compact HR-friendly narrative: profile, sector breadth, current focus, selected work, how Wahbi works. Mention associate/confirmed/senior progression without dumping full CV. | About page reads as senior SAP/procurement/AMOA profile, not a student bio. | Low |
| T-005 | P0 | Replace homepage hero copy | `app/Main.tsx` | Replace generic `Latest` starter intro with hero title and copy: Software Engineer  SAP Ariba / S2P / SAP S/4HANA Consultant; business process to SAP/data/automation deliverables. Preserve existing visual style. | Homepage explains Wahbi within 10 seconds. | Medium |
| T-006 | P0 | Add selected work areas to homepage | `app/Main.tsx` | Add 4 concise areas: SAP P2P & S2C Transformation; AMOA & Business Process Design; Data, Analytics & Automation; Technical R&D & AI Use Cases. | Homepage shows areas of expertise without a student skills cloud. | Medium |
| T-007 | P0 | Add experience snapshot to homepage | `app/Main.tsx` | Add three-level progression: Senior SAP P2P Consultant — Mining & R&D; Confirmed SAP P2P Consultant — Energy & Distribution; Associate SAP Consultant — Automotive & Railway. Include client/context names from PRD. | Recruiter can understand career maturity and sectors quickly. | Medium |
| T-008 | P0 | Create SAP Ariba SLP & Sourcing case study | `data/blog/sap-ariba-slp-sourcing-innovx-ocp.mdx` | Create sanitized case study for INNOVX / OCP Group. Include context, problem, role, system landscape, approach, outcome, what this demonstrates. | Post builds, has correct frontmatter, tags, and does not expose confidential details. | Low |
| T-009 | P0 | Create SAP Ariba Buying & Invoicing case study | `data/blog/sap-ariba-buying-invoicing-um6p.mdx` | Create case study for UM6P Buying & Invoicing with SAP Ariba DSN and SAP S/4HANA MM. | Post builds, is professional, and uses safe shared-ownership wording. | Low |
| T-010 | P0 | Create Procurement KPIs & Analytics case study | `data/blog/procurement-kpis-analytics-um6p.mdx` | Create case study on Power BI, SAP Ariba APIs, SAP S/4HANA OData, CAPEX/OPEX KPIs, spend monitoring. | Post builds and includes 30+ KPI outcome carefully. | Low |
| T-011 | P1 | Create OCR/AI Customs Compliance case study | `data/blog/ocr-ai-customs-compliance-sh-code-tracking.mdx` | Create case study on OCR/AI, Python, SAP Ariba DSN, SAP S/4HANA, ADiL customs references, SH/HS tracking. | Post builds and labels 60% reduction as estimated. | Low |
| T-012 | P0 | Add featured case-study links to homepage | `app/Main.tsx` | Link to the initial case studies. Reuse existing `Link` component. If unsure of slug behavior, verify generated URL pattern from existing blog posts. | Homepage points to at least 3 SAP case studies. | Medium |
| T-013 | P1 | Remove distracting newsletter from homepage | `app/Main.tsx` | Remove or hide newsletter block if it creates a fake newsletter CTA. Do not touch global newsletter config unless needed. | Homepage does not invite newsletter signup unless real. | Low |
| T-014 | P1 | Repurpose or hide Projects page | `data/headerNavLinks.ts`, optionally `data/projectsData.*` | If projects page is not polished, keep it out of nav. If used, label as Selected Work and use professional entries only. | No student-style project gallery in primary nav. | Low |
| T-015 | P0 | Search for remaining starter identity | entire repo | Search for visible starter strings: Tails Azimuth, TailwindBlog, Next.js Starter Blog, address@yoursite.com. Replace where safe. | No starter identity remains in visible site content. | Low |
| T-016 | P0 | Build verification | repo root | Run `yarn build`. Fix only build errors. Do not refactor opportunistically. | Build passes. | Medium |
| T-017 | P1 | Lint verification | repo root | Run `yarn lint` if time allows. Fix only simple lint errors. | Lint passes or known non-blocking lint issue is documented in DONE.md. | Medium |
| T-018 | P0 | Append completion log | `docs/product/DONE.md` | For every completed task, append a timestamped line with task ID, summary, and files changed. | DONE.md contains traceable completion log. | Low |

## Launch minimum

Minimum launch requires completion of:

- T-001
- T-002
- T-003
- T-004
- T-005
- T-006
- T-007
- T-008
- T-009
- T-010
- T-012
- T-015
- T-016
- T-018

T-011, T-013, T-014, and T-017 are useful but not launch blockers if time is tight.
