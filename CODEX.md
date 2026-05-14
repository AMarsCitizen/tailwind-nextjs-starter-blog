# Codex Implementation Brief — Wahbi Hamza Professional Portfolio

## Read this first

We are in a **4-hour launch sprint**.

The objective is **content modification only**. Do not redesign the website. Do not refactor the application. Do not introduce new UI systems, new schemas, new dependencies, animations, CMS layers, or complicated route architecture.

This repository is based on `tailwind-nextjs-starter-blog`. Keep the existing design language and layout patterns. The task is to replace starter/template content with a polished, credible, professional portfolio for **Wahbi Hamza**.

The website must go online quickly and safely. Prioritize:

1. no starter identity left,
2. clear professional positioning,
3. strong About/Home copy,
4. SAP experience presented properly,
5. a small number of strong case-study/blog entries,
6. successful build.

## Project purpose

Adapt this repository into a professional personal website for **Wahbi Hamza**, positioned as:

> Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant

The site is not a student portfolio. It should feel like a **professional knowledge base + case-study portfolio** for SAP/procurement transformation, business analysis, data automation, and AI-enabled workflows.

The site should help HR, recruiters, SAP partners, consulting firms, and technical readers understand within seconds:

- what Wahbi does,
- which sectors he has worked in,
- which SAP/procurement topics he covers,
- what kinds of business and technical problems he can structure,
- where to read deeper case studies.

## Repository facts

Current stack and structure:

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
- About page renders `data/authors/default.mdx` via `app/about/page.tsx`
- Projects page reads `data/projectsData.*` via `app/projects/page.tsx`
- Contentlayer currently defines `Blog` and `Authors`

Use existing scripts:

```bash
yarn dev
yarn build
yarn lint
yarn serve
```

Do not change the package manager.

## Hard constraint: no design change

Do not make structural design changes. No custom redesign. No heavy component work.

Allowed:

- update text/content,
- update metadata,
- update nav labels,
- add or edit MDX blog/case-study files,
- remove obvious template placeholders,
- lightly adjust `app/Main.tsx` text and section content if needed,
- use existing Tailwind classes already present in the project.

Avoid:

- new dependencies,
- new animation libraries,
- custom CMS/schema work,
- large route refactors,
- complicated filtering systems,
- new design system,
- new image-heavy layouts,
- breaking existing blog behavior.

## Core positioning

Use this positioning consistently:

> P2P expert and S2C consultant, Software Engineer and SAP Ariba / S2P / SAP S/4HANA consultant, turning complex procurement and business processes into structured performance drivers.

Professional summary:

> Software Engineer and SAP Ariba / AMOA Consultant with experience in procurement digitalization, S2P processes, SAP S/4HANA integrations, data migration, APIs, analytics, and AI-enabled automation. I translate complex business processes into functional specifications, process designs, tests, dashboards, automation logic, and user enablement materials.

Sectors to mention:

- automotive,
- railway,
- energy,
- distribution,
- mining,
- R&D,
- education / IT where relevant through UM6P.

Core capability clusters:

- SAP Ariba SLP, Sourcing, Buying & Invoicing, DSN / SAP Business Network
- SAP S/4HANA MM and P2P processes
- SAP S/4HANA integrations, CIG / Integration Suite, OData and APIs
- Procurement digitalization, S2P, P2P, S2C
- Supplier lifecycle, qualification workflows, sourcing events, supplier catalogues, 3-way match
- AMOA / business analysis: workshops, fit-to-core analysis, functional specifications, user stories, acceptance criteria, UAT
- Data migration, data cleansing, data quality checks, transaction monitoring
- Power BI, DAX, SQL, procurement KPIs, CAPEX/OPEX, spend monitoring
- Python, OCR/AI, LLM/RAG, API automation, workflow automation
- Jira, Azure DevOps, Confluence, SharePoint, Miro, Notion, Git, Excel, PowerPoint, Word, Figma

The site should communicate:

> This person understands enterprise systems, procurement processes, business stakeholders, technical teams, data, automation, documentation, and delivery.

Avoid communicating:

> I am a junior developer with a collection of toy projects.

## Professional experience structure

Present experience as a clear maturity progression. This is important for the About/Home page.

### Associate SAP Consultant — Automotive & Railway

Period: September 2020 – August 2022

Sectors / clients:

- MTA Automobile
- Alstom

Positioning:

> Early SAP consulting experience in industrial contexts, focused on P2P/S2C support, documentation, testing, stakeholder workshops, L1/L2 user support, issue resolution, data quality, transaction monitoring, and procurement process structuring.

Use safe wording:

- supported project activities,
- assisted workshops,
- contributed to testing and documentation,
- helped structure procurement processes,
- provided L1/L2 support.

### Confirmed SAP P2P Consultant — Energy & Distribution

Period: September 2022 – February 2024

Sectors / clients:

- Groupe Zine
- Winxo

Positioning:

> Confirmed SAP P2P work in energy and distribution contexts, focused on SAP MM / Ariba support, business requirements, functional specifications, testing phases, incidents, continuous improvement, and procurement process optimization.

Use safe wording:

- gathered and analyzed business requirements,
- wrote or supported functional specifications,
- participated in SIT/UAT,
- managed incidents,
- contributed to continuous improvement.

### Senior SAP P2P Consultant — Mining & R&D

Period: June 2024 – Present

Sectors / clients:

- UM6P as BU OCP
- INNOVX
- OCP Group contexts

Positioning:

> Senior SAP P2P / S2C work in mining, R&D, education/IT, procurement, customs, and industrial transformation contexts, focused on SAP Ariba implementation, rollout, evolutive support, analytics, automation, AI-enabled workflows, UAT, user enablement, and integration with SAP S/4HANA and Finance.

Use safe wording:

- led or supported end-to-end implementation depending on context,
- acted as interface between business and technical teams,
- designed and improved procurement workflows,
- contributed to S2C stream,
- supported contracts, sourcing, supplier processes,
- led UAT phases, user training, and go-live support where accurate,
- ensured or supported integration with Finance and other SAP modules.

## Detailed SAP experience inventory

Use these as the main content source for homepage, About page, and first SAP case-study posts.

### INNOVX / OCP Group — SAP Ariba SLP & Sourcing Implementation

Sector: Mining & Industry

Role: SAP Ariba Consultant

Period: 2025 – 2026

Solutions/modules:

- SAP Ariba SLP
- SAP Ariba Sourcing
- SAP S/4HANA
- CIG / Integration Suite
- Python
- APIs

Missions:

- Acted as technical-functional interface between SEIDOR and business stakeholders.
- Challenged solution design against SAP Ariba core model.
- Supported workshops, functional designs, qualification workflows, integration specifications, and supplier-data migration.

Results to use carefully:

- Delivered standalone and S/4HANA-integrated design documentation.
- Automated around 80% of supplier onboarding.
- Validated migration with no identified mapping errors.

### UM6P — SAP Ariba Buying & Invoicing Implementation

Sector: Education & IT

Role: SAP Ariba Consultant

Period: 2025

Solutions/modules:

- SAP Ariba Buying & Invoicing
- SAP Ariba DSN
- SAP S/4HANA MM

Missions:

- Supported implementation and customization of SAP Ariba Buying & Invoicing integrated with SAP S/4HANA MM and Ariba DSN.
- Contributed to workshops with procurement, requesters, and finance teams.
- Supported test scenarios, data migration follow-up, issue resolution, train-the-trainer, and key-user enablement.

Results:

- Supported full deployment readiness.
- Supported supplier enablement, invoice/ASN processing flows, and stable receipt-to-invoice operations.
- Mention no critical receipt-delay impact only where appropriate.

### UM6P — SH Code Tracking & Customs Compliance Automation

Sector: Compliance, Procurement & Customs

Role: SAP Ariba Consultant / automation contributor

Period: 2025 – Present

Solutions/modules:

- OCR & AI
- Python
- SAP Ariba DSN
- SAP S/4HANA
- ADiL customs API
- DMP / ONSSA references

Missions:

- Contributed to OCR/AI solution extracting SH/HS codes from supplier invoices retrieved through SAP Ariba DSN.
- Developed Python processing logic.
- Cross-checked codes through ADiL customs references and Moroccan regulatory requirements.
- Structured outputs for compliance tracking and customs-clearance users.

Results:

- Reduced manual invoice analysis by an estimated 60%.
- Improved anticipation of customs requirements.
- Accelerated clearance preparation through structured SH code tracking.

### UM6P — AI-Driven RFI Evaluation & Supplier Scoring Automation

Sector: Procurement & Sourcing

Role: SAP Ariba / AI Consultant

Period: 2025

Solutions/modules:

- LLM / AI
- Python
- SAP Ariba Sourcing APIs
- SAP S/4HANA

Missions:

- Supported automation of RFI evaluation.
- Extracted sourcing documents from SAP Ariba.
- Applied LLM/rule-based scoring logic.
- Generated structured supplier-scoring outputs based on turnover, certifications, references, and compliance attestations.

Results:

- Improved evaluation speed and objectivity.
- Standardized supplier data.
- Contributed to efficiency gains in sourcing assessment workflows.

### Confidential Construction & Public Sector — Strategic Procurement Digitalization

Sector: Construction & Public Sector

Role: SAP Ariba Consultant

Period: 2025 – Present

Solutions/modules:

- SAP Ariba Sourcing
- SAP Ariba Buying
- SAP S/4HANA MM
- Autodesk Revit API / BIM

Missions:

- Contributed to rollout of SAP Ariba Sourcing and Buying for BTP procurement.
- Facilitated workshops for raw materials, site deliveries, and multi-lot tenders.
- Translated business needs into functional designs.
- Configured or challenged sourcing templates.
- Prepared integration/UAT scenarios for supplier catalogues, 3-way match, and material tracking.

Results:

- Helped centralize procurement for construction and public-sector infrastructure projects.
- Improved BTP material traceability.
- Strengthened sourcing transparency.

Keep client confidential. Do not invent a name.

### DICE UM6P — SAP Ariba P2P Rollout & Post-Go-Live Support

Sector: Education R&D Entity

Role: SAP Ariba Consultant

Period: 2025

Solutions/modules:

- SAP Ariba SLP
- SAP Ariba Sourcing
- Contract Administration
- DSN

Missions:

- Adapted existing SAP Ariba core model to entity-specific requirements.
- Supported fit-to-core decisions, UI demonstrations, POCs, enablement materials, and key-user sessions.
- Contributed to go-live preparation and L1/L2 post-go-live support for supplier registration, qualification, and RFx processes.

Results:

- Improved rollout adoption by aligning local processes with central core model.
- Supported supplier/RFx operational continuity after go-live.

### UM6P — Procurement KPIs Implementation & Analytics Enablement

Sector: Procurement & IT

Role: SAP Ariba / Data Consultant

Period: 2025

Solutions/modules:

- Power BI
- SAP S/4HANA OData
- SAP Ariba APIs
- CAPEX/OPEX KPIs

Missions:

- Extracted and modelled SAP Ariba and SAP S/4HANA data into Power BI.
- Designed structured data model.
- Supported KPI-definition workshops.
- Produced enablement documentation for operational reporting.

Results:

- Implemented 30+ procurement KPIs for CAPEX/OPEX and spend monitoring.
- Supported transition from static visualization to proactive monitoring.

### UM6P — Customs Clearance & Importation Flow Tracking

Sector: Logistics & Procurement

Role: SAP Ariba / S/4HANA Support Consultant

Period: 2024 – 2025

Solutions/modules:

- Power Automate
- SAP S/4HANA
- SAP Ariba DSN
- workflow automation

Missions:

- Supported digitalization of customs-clearance and importation flows from import engagement to delivery authorization and liquidation follow-up.
- Modelled clearance stages, control points, and workflow visibility needs.
- Connected procurement and logistics data from SAP Ariba DSN and SAP S/4HANA.

Results:

- Improved traceability of importation workflows, customs deadlines, and logistics KPIs.

### UM6P — Purchase Requisition Automation & Data Structuring

Sector: Procurement Operations

Role: SAP Automation Consultant

Period: 2024 – 2025

Solutions/modules:

- UiPath / Power Automate
- SAP S/4HANA
- SAP Ariba
- data cleansing

Missions:

- Analyzed PR creation workflows.
- Identified automation opportunities.
- Supported bot/process automation scenarios to reduce manual data entry in SAP S/4HANA / SAP Ariba.
- Contributed to exception handling, data cleaning, business-rule validation, and operational documentation.

Results:

- Reduced manual effort by 50% through data cleaning, structuring, and procurement process automation.

### OCP Group — SAP Enable Now / Pipeline Start-Up Process

Sector: Mining & Chemical Industries

Role: SAP Enable Now Consultant

Period: 2024

Solutions/modules:

- SAP Enable Now
- Producer
- dynamic demos
- support documentation
- training materials

Missions:

- Supported digitalization of operational start-up process through SAP Enable Now.
- Created guided demos, process documentation, and training materials for trainers and key users.

Results:

- Improved user enablement and operational readiness through reusable digital documentation and structured training assets.

## Leyton / R&D use cases

Leyton projects are important but **secondary for the immediate launch**.

They should be used mainly as blog/case-study material after the core SAP content is polished.

Use Leyton work to show:

- technical R&D analysis,
- CIR/CII documentation,
- ability to structure complex engineering work,
- software/AI/data system understanding,
- technical writing and synthesis.

Use Leyton client cases as sanitized blog posts, not as the main homepage focus.

Candidate Leyton-derived case-study topics:

- A2MAC1 — industrial data mapping, 3D product structures, automotive benchmarking, BOM-like hierarchies, performance constraints
- A2MAC1 — part commonality, image similarity, CNN/ResNet, embeddings, data quality, manufacturing reuse
- Ankorstore — LLM/RAG, vector search, product embeddings, SQL generation, product metadata, marketplace data systems
- Technical R&D dossier methodology — how to identify technical uncertainty, state of the art, contribution, approach, tests, and results

Confidentiality rule: never publish raw Leyton/client documents or raw internal details. Use sanitized summaries.

## Home page direction

Keep the existing design as much as possible. Replace the generic “Latest” starter homepage with a professional landing page only if this can be done safely and quickly.

Homepage sections:

1. Hero / quick positioning
2. Selected work areas
3. Experience snapshot
4. Featured SAP case studies
5. Blog/use cases teaser
6. CV/contact CTA

### Hero copy

Use:

```txt
Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant
```

Supporting copy:

```txt
I turn complex procurement and business processes into structured SAP, data, and automation deliverables across P2P, S2C, SAP Ariba, SAP S/4HANA, analytics, and AI-enabled workflows.
```

Alternative shorter copy:

```txt
P2P expert and S2C consultant working across SAP Ariba, SAP S/4HANA, procurement digitalization, data automation, and AI-enabled business workflows.
```

CTA links:

- View case studies
- About
- CV

### Selected work areas

Use 4 cards maximum:

1. **SAP P2P & S2C Transformation**
   - SAP Ariba SLP, Sourcing, Buying & Invoicing, SAP S/4HANA MM, supplier lifecycle, sourcing, invoicing, contracts.

2. **AMOA & Business Process Design**
   - Workshops, requirements, fit-to-core, functional specifications, UAT, user enablement, stakeholder management.

3. **Data, Analytics & Automation**
   - Power BI, OData, SAP Ariba APIs, Python, OCR/AI, workflow automation, procurement KPIs.

4. **Technical R&D & AI Use Cases**
   - LLM/RAG, vector search, product embeddings, technical documentation, industrial software analysis.

### Experience snapshot

Use this concise three-level structure:

```txt
Senior SAP P2P Consultant — Mining & R&D
UM6P as BU OCP, INNOVX, OCP Group contexts. SAP Ariba implementation, rollout, evolutive support, analytics, automation, UAT, enablement, and S/4HANA integration.

Confirmed SAP P2P Consultant — Energy & Distribution
Groupe Zine and Winxo contexts. SAP MM / Ariba support, requirements, functional specifications, SIT/UAT, incidents, and continuous improvement.

Associate SAP Consultant — Automotive & Railway
MTA Automobile and Alstom contexts. P2P/S2C support, testing, documentation, L1/L2 support, transaction monitoring, and process structuring.
```

### Featured case studies for launch

Use 3 or 4 items. SAP first.

Priority order:

1. **SAP Ariba SLP & Sourcing Implementation — INNOVX / OCP Group**
2. **SAP Ariba Buying & Invoicing Implementation — UM6P**
3. **Procurement KPIs & Analytics Enablement — UM6P**
4. **AI/OCR Customs Compliance Automation — UM6P**

If adding a Leyton item, make it fifth or in a separate “From the blog” section.

## About page direction

The About page is the HR landing page.

It should be short, dense, and professional. It should not be a full CV dump.

Update `data/authors/default.mdx`.

Recommended frontmatter:

```mdx
---
name: Wahbi Hamza
avatar: /static/images/avatar.png
occupation: Expert P2P & S2C Consultant | Software Engineer | SAP Ariba / SAP S/4HANA
company: ConSAP
email: wahbi.workmail@gmail.com
linkedin: https://www.linkedin.com/in/softwaresap
github: <insert-github-url-if-public-and-clean>
---
```

Do not expose phone number by default. Do not include “Fiancé”. Do not include private personal status.

Suggested About copy:

```mdx
I am a Software Engineer and SAP Ariba / AMOA Consultant specializing in P2P, S2C, SAP Ariba, SAP S/4HANA, procurement digitalization, data automation, and AI-enabled business workflows.

I translate complex business processes into clear functional specifications, process designs, test scenarios, data models, dashboards, automation logic, documentation, and user enablement materials.

My experience spans automotive and railway, energy and distribution, mining, R&D, education, IT, procurement, customs, and industrial transformation contexts.

## Current focus

- SAP Ariba SLP, Sourcing, Buying & Invoicing, DSN / SAP Business Network
- SAP S/4HANA MM and P2P integration
- Supplier lifecycle, qualification workflows, sourcing events, contracts, 3-way match
- Requirements workshops, fit-to-core analysis, functional specifications, UAT, change management
- Power BI, OData, SAP Ariba APIs, Python, OCR/AI, LLM/RAG, workflow automation

## Selected work

- SAP Ariba SLP & Sourcing implementation for INNOVX / OCP Group
- SAP Ariba Buying & Invoicing implementation for UM6P
- Procurement KPI analytics across SAP Ariba and SAP S/4HANA
- Customs compliance and SH code tracking automation with OCR/AI
- AI-driven RFI evaluation and supplier scoring
- SAP Ariba P2P rollout and post-go-live support
- Technical R&D analysis for AI/data and industrial software systems

## How I work

I work between business stakeholders, integrators, developers, key users, and management. My value is in structuring unclear business needs into deliverables that teams can implement, test, monitor, and improve.
```

## Case-study/blog content strategy

For launch, use the existing `data/blog/**/*.mdx` system.

Do not create a new content type. Do not rename Contentlayer schemas.

Use tags to distinguish content:

```txt
case-study
sap
p2p
s2c
procurement
sap-ariba
s4hana
amoa
automation
analytics
ai
leyton
rnd
```

Case-study format:

```mdx
---
title: "..."
date: "2026-05-13"
tags: ["case-study", "sap", "procurement"]
summary: "One-sentence professional summary."
draft: false
---

## Context

## Problem

## My role

## System landscape

## Approach

## Outcome

## What this demonstrates
```

Use “supported,” “contributed,” “acted as interface,” “structured,” “documented,” “helped deliver,” unless direct ownership is explicitly clear.

## Initial MDX case studies to create

Create only 3–4 for the 4-hour launch.

### 1. SAP Ariba SLP & Sourcing Implementation — INNOVX / OCP Group

Slug:

```txt
sap-ariba-slp-sourcing-innovx-ocp
```

Summary:

```txt
A SAP Ariba SLP and Sourcing implementation case study covering supplier onboarding, qualification workflows, S/4HANA integration, supplier-data migration, and technical-functional coordination.
```

Tags:

```txt
case-study, sap, sap-ariba, s2c, procurement, s4hana, mining, rnd
```

### 2. SAP Ariba Buying & Invoicing Implementation — UM6P

Slug:

```txt
sap-ariba-buying-invoicing-um6p
```

Summary:

```txt
A SAP Ariba Buying & Invoicing implementation case study covering SAP S/4HANA MM integration, Ariba DSN, invoice and ASN flows, testing, data migration follow-up, and key-user enablement.
```

Tags:

```txt
case-study, sap, sap-ariba, p2p, procurement, invoicing, s4hana
```

### 3. Procurement KPIs & Analytics Enablement — UM6P

Slug:

```txt
procurement-kpis-analytics-um6p
```

Summary:

```txt
A procurement analytics case study on structuring SAP Ariba and SAP S/4HANA data into Power BI KPIs for CAPEX/OPEX, spend monitoring, and operational procurement visibility.
```

Tags:

```txt
case-study, sap, procurement, analytics, power-bi, automation, s4hana
```

### 4. OCR/AI Customs Compliance Automation — UM6P

Slug:

```txt
ocr-ai-customs-compliance-sh-code-tracking
```

Summary:

```txt
A customs compliance automation case study using OCR/AI, Python, SAP Ariba DSN, SAP S/4HANA, and customs references to structure SH/HS code tracking from supplier invoices.
```

Tags:

```txt
case-study, sap, ai, automation, customs, python, procurement
```

## Leyton blog entries later

Only add Leyton entries if the main SAP content is done and build is passing.

Possible future posts:

- A2MAC1 — Industrial Data Mapping & 3D Product Structures
- A2MAC1 — Part Commonality and Image Similarity in Automotive Benchmarking
- Ankorstore — LLM, RAG & Vector Search for Marketplace Data
- How to Structure a Technical R&D Dossier

## Navigation

For launch, use simple nav.

Recommended `data/headerNavLinks.ts`:

```ts
const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Case Studies' },
  { href: '/about', title: 'About' },
]

export default headerNavLinks
```

Optional only if already ready:

```ts
{ href: '/projects', title: 'Selected Work' }
```

Do not include Tags in main nav for launch unless requested.

## Site metadata

Update `data/siteMetadata.js`.

Suggested values:

```js
title: 'Wahbi Hamza — SAP Ariba / S2P Consultant',
author: 'Wahbi Hamza',
headerTitle: 'Wahbi Hamza',
description: 'P2P expert and S2C consultant working across SAP Ariba, SAP S/4HANA, procurement digitalization, data automation, and AI-enabled business workflows.',
language: 'en-us',
theme: 'system',
email: 'wahbi.workmail@gmail.com',
linkedin: 'https://www.linkedin.com/in/softwaresap',
locale: 'en-US',
```

Remove or blank irrelevant social links if they are starter placeholders.

## Contact and privacy

Use:

- email: `wahbi.workmail@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/softwaresap`
- location: Casablanca / Rabat / Hybrid, Morocco

Do not show phone number unless explicitly requested.

Do not show private marital/personal status.

## Suggested final visible copy

Homepage hero:

```txt
Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant

I turn complex procurement and business processes into structured SAP, data, and automation deliverables across P2P, S2C, SAP Ariba, SAP S/4HANA, analytics, and AI-enabled workflows.
```

Selected work intro:

```txt
Selected work across SAP procurement transformation, AMOA, business process design, analytics, automation, and technical R&D use cases.
```

Case studies intro:

```txt
Professional case studies and sanitized use cases based on SAP, procurement, data automation, AI, and technical R&D work.
```

CTA:

```txt
Looking for a consultant who can bridge business process, enterprise systems, data, and automation?
```

About intro:

```txt
I am a P2P expert, S2C consultant, and Software Engineer working across SAP Ariba, SAP S/4HANA, procurement digitalization, data automation, and AI-enabled business workflows.
```

## Confidentiality and accuracy rules

The site must be credible because it is accurate.

Rules:

- Use “contributed to,” “supported,” “analyzed,” “structured,” “documented,” or “helped deliver” when ownership is shared.
- Do not claim sole ownership of client projects unless clearly true.
- Do not publish raw client documents.
- Do not include private stakeholder names.
- Do not include internal links from Drive, Notion, Jira, Azure DevOps, SharePoint, client systems, preprod systems, or private repositories.
- Keep confidential clients confidential.
- Use “sanitized case study” language for Leyton/client-derived work.
- Use estimated metrics only if already stated in the CV/source notes.
- Label estimates as estimates.

Known outcome metrics that may be used carefully:

- Automated around 80% of supplier onboarding in the SAP Ariba SLP/Sourcing implementation context.
- Validated supplier-data migration with no identified mapping errors in that context.
- Reduced manual invoice analysis by an estimated 60% in the OCR/AI SH-code tracking context.
- Implemented 30+ procurement KPIs for CAPEX/OPEX and spend monitoring.
- Reduced manual effort by 50% through data cleaning, structuring, and procurement process automation.

## What not to do

Do not:

- Redesign the website.
- Turn the homepage into a junior portfolio clone.
- Add hackathons, competitions, or student-style sections.
- Add many toy project cards.
- Publish confidential client material.
- Invent metrics.
- Overstate seniority or ownership.
- Add heavy animations or dependencies.
- Rewrite the content architecture.
- Create a new CMS or schema.
- Break routes.
- Change package manager.
- Leave starter template names like “Tails Azimuth,” “TailwindBlog,” or “Next.js Starter Blog.”

## 4-hour launch plan

### Hour 1 — Identity and metadata

- Update `data/siteMetadata.js`.
- Update `data/headerNavLinks.ts`.
- Update `data/authors/default.mdx`.
- Remove starter author/template identity.

### Hour 2 — Homepage content

- Update `app/Main.tsx` content only.
- Keep layout simple.
- Use existing Tailwind and existing components.
- Add hero, selected work areas, experience snapshot, featured case studies, CTA.

### Hour 3 — Case-study MDX content

Create 3–4 MDX files in `data/blog/`.

Minimum viable set:

1. `sap-ariba-slp-sourcing-innovx-ocp.mdx`
2. `sap-ariba-buying-invoicing-um6p.mdx`
3. `procurement-kpis-analytics-um6p.mdx`
4. `ocr-ai-customs-compliance-sh-code-tracking.mdx`

Use concise, sanitized, professional case-study structure.

### Hour 4 — Build and deployment readiness

Run:

```bash
yarn build
yarn lint
```

Fix only actual build/lint errors.

Do not keep polishing if build is passing.

## Definition of done

Ready for launch when:

- No starter identity remains.
- Homepage explains Wahbi within 10 seconds.
- About page is professional and CV-aligned.
- SAP experience progression is clear: Associate → Confirmed → Senior.
- At least 3 SAP/procurement case studies exist.
- Leyton is positioned as secondary blog/use-case material, not the main homepage focus.
- Navigation is simple.
- No confidential material is exposed.
- `yarn build` passes.
- The site feels like a professional SAP/procurement/automation knowledge base, not a student portfolio.
