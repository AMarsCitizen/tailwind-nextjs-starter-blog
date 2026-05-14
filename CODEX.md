# Codex Implementation Brief — Wahbi Hamza Professional Portfolio

## Purpose

This repository is being adapted from `tailwind-nextjs-starter-blog` into a professional personal website for **Wahbi Hamza**, positioned as a **Software Engineer and SAP Ariba / S2P / SAP S/4HANA Consultant**.

The goal is not to build a student-style portfolio. The goal is to launch a polished, credible, professional site that helps HR, recruiters, SAP partners, consulting firms, and technical readers understand Wahbi's profile quickly, then explore deeper case studies if they want more detail.

The site should feel like a **professional knowledge base + case-study portfolio**, not a flashy developer résumé template.

## Current repository facts

This project is based on the Tailwind Next.js Starter Blog architecture.

Important stack and repo facts:

- Next.js 15
- React 19
- Tailwind CSS 4
- Contentlayer2 / next-contentlayer2
- Pliny components and utilities
- MDX content in `data/blog/**/*.mdx`
- Author profile in `data/authors/default.mdx`
- Site config in `data/siteMetadata.js`
- Navigation config in `data/headerNavLinks.ts`
- Homepage component in `app/Main.tsx`
- About page renders `data/authors/default.mdx` through `app/about/page.tsx`
- Projects page reads `data/projectsData.*` through `app/projects/page.tsx`
- Contentlayer currently defines only two document types: `Blog` and `Authors`

Package scripts:

```bash
yarn dev
yarn build
yarn lint
yarn serve
```

The launch deadline is tight. Prefer low-risk edits over architectural rewrites.

## Core positioning

Use this positioning throughout the site:

> Software Engineer and SAP Ariba / S2P Consultant working across procurement digitalization, SAP S/4HANA integration, data automation, and AI-enabled business workflows.

Supporting themes:

- SAP Ariba SLP, Sourcing, Buying & Invoicing
- SAP S/4HANA MM integration
- Procurement digitalization and S2P processes
- Supplier lifecycle and supplier onboarding
- Data migration, data cleansing, APIs, OData, CIG / Integration Suite
- Power BI, procurement KPIs, CAPEX/OPEX reporting
- Python, OCR/AI, LLM/RAG, workflow automation
- AMOA / business analysis: workshops, fit-to-core, functional specs, UAT, user enablement
- Technical R&D documentation and analysis from Leyton/CIR-CII style work

The site should communicate:

> This person understands enterprise systems, business processes, data, automation, and technical documentation.

Avoid communicating:

> I am a student developer with a list of toy projects.

## Visual and UX direction

The desired homepage is scroll-friendly and self-explanatory. Users should be able to keep scrolling and understand the profile without guessing where to click.

However, do not copy junior/student portfolio patterns such as:

- Huge hackathon sections
- Competition lists
- Education cards dominating the page
- Too many small project cards
- Toy project language
- Excessive screenshots
- “Skills cloud” as the main proof of ability

Use fewer, heavier sections.

Professional homepage flow:

1. Hero / quick positioning
2. Selected work areas
3. Experience snapshot
4. Featured case studies
5. Writing / notes
6. CV and contact CTA

The homepage should feel like:

> Here is who I am. Here is the kind of work I do. Here are selected proof points. Here is where to read more. Here is how to contact me.

## Recommended information architecture

Top-level navigation should be simple:

```txt
Home
Case Studies
Writing
About
CV
```

For a first launch, do not spend time building a complex custom content system. The existing `Blog` MDX content type can be reused for both case studies and writing.

Recommended low-risk implementation:

- Keep the existing `/blog` route if changing routes is risky.
- Change visible nav label from `Blog` to `Case Studies` if most initial content is case studies.
- Use tags such as `case-study`, `sap`, `procurement`, `ai-data`, `industrial-software`, `writing`.
- If time allows, add a `/case-studies` route that reuses the same blog listing logic but filters posts tagged `case-study`.
- Keep `/projects` only if it is repurposed as “Selected Work” or “Technical Projects”. Do not make it a student project gallery.

Ideal longer-term structure:

```txt
/
/about
/case-studies
/case-studies/sap-ariba-procurement-digitalization
/case-studies/a2mac1-industrial-data-mapping
/case-studies/ankorstore-llm-rag-vector-search
/case-studies/procurement-analytics-automation
/writing
/projects
/cv
/contact
```

For tomorrow's deployment, the minimum useful structure is:

```txt
/
/about
/blog   -> visible label can be “Case Studies”
/projects -> optional; can be hidden from nav if not ready
```

## Homepage requirements

Modify `app/Main.tsx` conservatively.

Current homepage is a generic “Latest” blog list. Replace it with a professional landing page.

Do not introduce large new dependencies. Use existing Tailwind classes and existing components like `Link`, `Tag`, and standard JSX.

Suggested homepage sections:

### 1. Hero

Headline examples:

```txt
Software Engineer & SAP Ariba / S2P Consultant
```

or

```txt
Enterprise procurement, SAP Ariba, data automation, and AI-enabled workflows.
```

Hero copy:

```txt
I work at the intersection of procurement digitalization, SAP Ariba, SAP S/4HANA integration, data automation, and AI-enabled business workflows.
```

CTA links:

- View case studies
- Read about me
- Download CV

### 2. Selected work areas

Use 3 or 4 cards only.

Recommended cards:

1. **SAP & Procurement Transformation**
   - SAP Ariba SLP, Sourcing, Buying & Invoicing, SAP S/4HANA MM, supplier lifecycle, sourcing events, invoice flows.

2. **AI & Data Systems**
   - LLM/RAG, vector search, product embeddings, SQL generation, metadata pipelines, marketplace data systems.

3. **Industrial Software Analysis**
   - Automotive benchmarking, 3D product structures, BOM mapping, hierarchical data aggregation, performance constraints.

4. **Analytics & Automation**
   - Procurement KPIs, Power BI, OData/API extraction, Python automation, OCR/AI, workflow visibility.

### 3. Experience snapshot

Keep this short. Do not copy the full CV.

Suggested copy:

```txt
ConSAP — Software Engineer / SAP Ariba Consultant
SAP Ariba and digital transformation assignments covering implementation, rollout, evolutive support, requirements workshops, fit-to-core analysis, functional specifications, integration testing, UAT, user enablement, data migration, analytics, and AI-enabled automation.
```

Second experience cluster:

```txt
Leyton / R&D technical documentation work
Technical analysis and CIR-CII documentation across software, AI/data, industrial platforms, marketplace systems, and R&D project dossiers.
```

### 4. Featured case studies

Launch with 4 strong items, not 15.

Initial case studies:

1. **SAP Ariba & S/4HANA Procurement Digitalization**
2. **A2MAC1 — Industrial Data Mapping & 3D Product Structures**
3. **Ankorstore — LLM, RAG & Vector Search for Marketplace Data**
4. **Procurement Analytics & Automation**

Each card should have:

- title
- one-sentence summary
- tags
- link to MDX page

### 5. Writing / technical notes

This can be very small at launch.

Examples:

- Lessons from SAP Ariba implementations
- How to write a strong technical R&D case study
- What makes enterprise AI workflows hard in practice

### 6. Contact / CV CTA

End with a direct CTA:

```txt
Looking for a SAP Ariba / S2P consultant who can bridge business process, systems, data, and automation?
```

Links:

- Download CV
- Email
- LinkedIn

## About page requirements

The About page is the main HR landing page. It should be professional, compact, and narrative.

Update `data/authors/default.mdx` and metadata.

Recommended frontmatter:

```mdx
---
name: Wahbi Hamza
avatar: /static/images/avatar.png
occupation: Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant
company: ConSAP
email: wahbi.workmail@gmail.com
linkedin: <insert-linkedin-url>
github: <insert-github-url>
---
```

Do not expose phone number unless explicitly requested.

Suggested About structure:

```mdx
I am a Software Engineer and SAP Ariba / S2P Consultant working across procurement digitalization, SAP S/4HANA integration, data automation, and AI-enabled business workflows.

My work combines functional consulting, technical analysis, process mapping, automation, documentation, and delivery follow-up. I have contributed to SAP Ariba implementation and rollout contexts, procurement analytics, supplier lifecycle workflows, RFI evaluation automation, and technical R&D documentation for software and data-intensive projects.

## Current focus

- SAP Ariba SLP, Sourcing, Buying & Invoicing
- SAP S/4HANA MM integration
- Supplier lifecycle and S2P workflows
- Procurement KPIs and Power BI analytics
- APIs, OData, Python automation, OCR/AI, LLM/RAG
- Requirements workshops, fit-to-core analysis, functional specifications, UAT, user enablement

## Selected work

- Supplier onboarding and SAP Ariba SLP/Sourcing implementation
- Buying & Invoicing deployment support
- Customs / SH code automation with OCR and AI
- AI-driven RFI evaluation and supplier scoring
- Procurement KPI analytics across SAP Ariba and SAP S/4HANA
- Technical R&D analysis for AI/data and industrial software systems

## How I work

I translate business needs into structured functional and technical deliverables: process maps, specifications, test scenarios, migration checks, dashboards, automation logic, and user enablement materials.
```

## Case study content strategy

Case studies are the core proof of work.

Important: sanitize all client-sensitive content. Do not publish raw client documents, raw internal links, names of confidential stakeholders, private repositories, exact financial data, or anything that appears confidential. Use public-safe summaries.

Case studies should not read like “I built X.” They should read like professional consulting notes.

Use this structure for each case study:

```mdx
---
title: "..."
date: "2026-05-13"
tags: ["case-study", "sap", "procurement"]
summary: "One-sentence professional summary."
draft: false
---

## Context

What was the business or system environment?

## Problem

What was inefficient, manual, unclear, risky, hard to scale, or hard to track?

## My role

What did Wahbi analyze, document, configure, automate, test, structure, or support?

## System landscape

SAP Ariba, SAP S/4HANA, APIs, Power BI, Python, OCR/AI, LLM/RAG, etc.

## Approach

1. Discovery / requirements
2. Process or data mapping
3. Functional / technical analysis
4. Testing / validation
5. Documentation / enablement

## Outcome

Quantified or qualitative result. Use estimates only when clearly stated as estimates.

## What this demonstrates

The capabilities this case study proves.
```

## Initial case study drafts

### 1. SAP Ariba & S/4HANA Procurement Digitalization

Suggested slug:

```txt
sap-ariba-s4hana-procurement-digitalization
```

Suggested summary:

```txt
A professional overview of SAP Ariba and SAP S/4HANA procurement transformation work across supplier lifecycle, sourcing, buying, invoicing, integration, data migration, testing, and user enablement.
```

Topics to cover:

- SAP Ariba SLP and Sourcing
- SAP Ariba Buying & Invoicing
- SAP Ariba DSN / Business Network
- SAP S/4HANA MM
- CIG / Integration Suite
- supplier onboarding
- qualification workflows
- sourcing events
- invoice/ASN/receipt flows
- UAT, data migration, user enablement

Tone:

- enterprise consulting
- process/system clarity
- no exaggerated ownership claims

### 2. A2MAC1 — Industrial Data Mapping & 3D Product Structures

Suggested slug:

```txt
a2mac1-industrial-data-mapping-3d-product-structures
```

Suggested summary:

```txt
How industrial product data, automotive benchmarking, 3D structures, and hierarchical aggregation create complex software and data architecture challenges.
```

Topics to cover:

- automotive benchmarking platform
- product/component data
- BOM-like hierarchical structures
- mapping source structures to destination structures
- aggregation across heterogeneous hierarchies
- 3D visualization constraints
- performance constraints
- data consistency
- query optimization

Safe wording:

- “In a technical documentation and analysis context...”
- “This case study is a sanitized synthesis of the type of problem analyzed.”
- “Client-sensitive details have been removed.”

### 3. Ankorstore — LLM, RAG & Vector Search for Marketplace Data

Suggested slug:

```txt
ankorstore-llm-rag-vector-search-marketplace-data
```

Suggested summary:

```txt
A sanitized technical case study on LLM/RAG, vector search, product embeddings, SQL generation, and metadata preparation in a B2B marketplace data environment.
```

Topics to cover:

- marketplace product data
- product attributes
- category-specific metadata
- vector embeddings
- product/brand/merchant similarity
- RAG for internal search
- natural-language-to-SQL
- table metadata
- dbt documentation
- whitelisting and guardrails
- safe SQL generation
- data confidentiality

### 4. Procurement Analytics & Automation

Suggested slug:

```txt
procurement-analytics-automation
```

Suggested summary:

```txt
How SAP Ariba and SAP S/4HANA procurement data can be structured into operational KPIs, dashboards, workflow tracking, and automation opportunities.
```

Topics to cover:

- Power BI
- SAP Ariba APIs
- SAP S/4HANA OData
- CAPEX/OPEX KPIs
- spend monitoring
- customs/import flow tracking
- PR automation
- data cleansing
- workflow visibility

## What not to do

Do not:

- Turn the homepage into a junior portfolio clone.
- Add a Hackathons section.
- Add many toy project cards.
- Publish confidential client documents or raw details.
- Invent metrics or overstate ownership.
- Add heavy animations or dependencies.
- Rewrite the whole content architecture before launch.
- Create a complex CMS or custom MDX schema unless requested.
- Break the build with route refactors.
- Change the package manager.
- Add images that do not exist in `public/static/images`.
- Leave starter template names like “Tails Azimuth,” “TailwindBlog,” or “Next.js Starter Blog.”

## Low-risk implementation plan for tomorrow

Priority 1: Update identity and metadata

- `data/siteMetadata.js`
  - title
  - author
  - headerTitle
  - description
  - siteUrl if known
  - email
  - github
  - linkedin
  - remove or blank irrelevant social links

- `data/authors/default.mdx`
  - replace starter author with Wahbi profile

- `data/headerNavLinks.ts`
  - Suggested nav:

```ts
const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Case Studies' },
  { href: '/about', title: 'About' },
  { href: '/projects', title: 'Selected Work' },
]
```

If `/projects` is not ready, remove it from nav.

Priority 2: Replace homepage

- Edit `app/Main.tsx`
- Keep the component simple.
- It can still receive `posts`.
- Use `posts.filter((post) => post.tags?.includes('case-study'))` for featured case studies if needed.
- Avoid complex fetching or new data layers.

Priority 3: Add 3–4 MDX case-study files

Place in:

```txt
data/blog/
```

Use tags:

```txt
case-study
sap
procurement
ai-data
industrial-software
analytics
automation
```

Priority 4: Disable or remove distracting template features

- Newsletter form can be removed from homepage unless there is a real newsletter.
- Comments can remain unused but do not emphasize them.
- Tags page can remain, but it does not need nav priority.

Priority 5: Build and lint

Run:

```bash
yarn build
yarn lint
```

Fix only actual errors. Do not over-polish.

## Suggested final visible copy

Site description:

```txt
Software engineer and SAP Ariba / S2P consultant working across procurement digitalization, SAP S/4HANA integration, data automation, and AI-enabled business workflows.
```

Homepage hero:

```txt
Software Engineer & SAP Ariba / S2P Consultant

I work at the intersection of procurement digitalization, SAP Ariba, SAP S/4HANA integration, data automation, and AI-enabled business workflows.
```

Selected work intro:

```txt
Selected work across enterprise procurement, AI/data systems, industrial software analysis, and analytics automation.
```

Case studies intro:

```txt
Sanitized case studies and technical notes based on professional work across SAP, procurement, AI/data, and software R&D analysis.
```

CTA:

```txt
Looking for a consultant who can bridge business process, enterprise systems, data, and automation?
```

## Confidentiality and accuracy rules

The site must be credible because it is accurate.

Rules:

- Use “contributed to,” “supported,” “analyzed,” “structured,” “documented,” or “helped deliver” when ownership is shared.
- Do not claim sole ownership of client projects.
- Do not publish exact private client documents.
- Do not include private stakeholder names.
- Do not include internal links from Drive, Notion, Jira, Azure DevOps, SharePoint, or client systems.
- Use “sanitized case study” language for Leyton/client-derived work.
- Use estimated metrics only if the source CV or notes already state them, and label as estimated when applicable.

Known CV-aligned outcomes that can be used carefully:

- Automated around 80% of supplier onboarding in one SAP Ariba SLP/Sourcing context.
- Reduced manual invoice analysis by an estimated 60% in an OCR/AI SH-code tracking context.
- Implemented 30+ procurement KPIs for CAPEX/OPEX and spend monitoring.
- Reduced manual effort by 50% through data cleaning, structuring, and procurement process automation.

Use these only in the relevant case studies and avoid exaggeration.

## Definition of done for launch

The site is ready when:

- No starter identity remains.
- Homepage explains Wahbi within 10 seconds.
- About page is professional and CV-aligned.
- At least 3 strong case studies exist.
- Navigation is clear.
- No confidential documents or raw client material are exposed.
- `yarn build` passes.
- The site still feels like a professional Next.js/MDX knowledge base, not a student portfolio.
