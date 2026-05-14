# PRD — Wahbi Hamza Portfolio Content Launch

## 1. Objective

Launch a polished professional portfolio from the existing Tailwind Next.js Starter Blog template in approximately 4 hours.

The site must position Wahbi Hamza as a senior SAP/procurement consultant and software engineer, with a focus on P2P, S2C, SAP Ariba, SAP S/4HANA, AMOA, data automation, analytics, and AI-enabled workflows.

This is a content-only launch. The existing design should remain intact.

## 2. Target audience

Primary audiences:

- HR and recruiters
- SAP partners and integrators
- Consulting firms
- Procurement transformation teams
- Technical managers evaluating business/technical hybrid profiles

Secondary audiences:

- Technical readers interested in AI/data/R&D case studies
- Future clients or collaborators

## 3. Product positioning

The website should communicate:

> Wahbi bridges business process, SAP/procurement systems, data, automation, and documentation.

Primary title:

```txt
Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant
```

Supporting positioning:

```txt
P2P expert and S2C consultant working across SAP Ariba, SAP S/4HANA, procurement digitalization, data automation, and AI-enabled business workflows.
```

## 4. Launch scope

### In scope

- Replace starter identity and metadata.
- Simplify navigation.
- Replace About page content.
- Replace homepage copy with a professional scrollable landing page.
- Create 3 to 4 SAP/procurement-focused MDX case studies.
- Ensure build passes.

### Out of scope

- Redesign.
- New design system.
- New dependencies.
- New CMS.
- New Contentlayer document types.
- Route refactor.
- Publishing raw CV PDFs.
- Publishing raw client/Leyton material.
- Long-form Leyton use-case library for initial launch.

## 5. Site structure for launch

Use existing routes.

```txt
/       Home
/blog   Case Studies
/about  About
```

Optional:

```txt
/projects  Selected Work
```

Only include `/projects` in navigation if it is polished enough. Otherwise hide it for launch.

## 6. Homepage requirements

The homepage must explain Wahbi within 10 seconds.

Recommended sections:

1. Hero
2. Selected work areas
3. Experience snapshot
4. Featured case studies
5. Contact/CV CTA

### Hero

Headline:

```txt
Software Engineer | SAP Ariba / S2P / SAP S/4HANA Consultant
```

Body:

```txt
I turn complex procurement and business processes into structured SAP, data, and automation deliverables across P2P, S2C, SAP Ariba, SAP S/4HANA, analytics, and AI-enabled workflows.
```

### Selected work areas

Use four areas:

1. SAP P2P & S2C Transformation
2. AMOA & Business Process Design
3. Data, Analytics & Automation
4. Technical R&D & AI Use Cases

### Experience snapshot

Use the maturity progression:

- Senior SAP P2P Consultant — Mining & R&D: UM6P as BU OCP, INNOVX, OCP Group
- Confirmed SAP P2P Consultant — Energy & Distribution: Groupe Zine, Winxo
- Associate SAP Consultant — Automotive & Railway: MTA Automobile, Alstom

### Featured case studies

Launch priority:

1. SAP Ariba SLP & Sourcing Implementation — INNOVX / OCP Group
2. SAP Ariba Buying & Invoicing Implementation — UM6P
3. Procurement KPIs & Analytics Enablement — UM6P
4. OCR/AI Customs Compliance Automation — UM6P

## 7. About page requirements

The About page must be a compact HR-friendly landing page, not a full CV dump.

It should include:

- professional summary,
- sector breadth,
- current focus,
- selected work,
- how Wahbi works.

Must mention sector progression:

- automotive and railway,
- energy and distribution,
- mining and R&D.

Do not include:

- phone number by default,
- personal marital status,
- raw CV PDF content,
- private internal links.

## 8. Case-study requirements

Use `data/blog/**/*.mdx`.

Each case study should include frontmatter:

```mdx
---
title: "..."
date: "2026-05-14"
tags: ["case-study", "sap", "procurement"]
summary: "..."
draft: false
---
```

Suggested sections:

```mdx
## Context
## Problem
## My role
## System landscape
## Approach
## Outcome
## What this demonstrates
```

Tone:

- professional,
- precise,
- outcome-aware,
- careful about shared ownership.

Use verbs like:

- supported,
- contributed,
- structured,
- documented,
- helped deliver,
- acted as interface,
- analyzed.

Avoid verbs that overclaim unless clearly true.

## 9. Content facts to use

### Senior experience — Mining & R&D

Clients/contexts:

- UM6P as BU OCP
- INNOVX
- OCP Group

Themes:

- SAP Ariba SLP & Sourcing
- SAP Ariba Buying & Invoicing
- SAP S/4HANA MM
- SAP Ariba DSN / Business Network
- supplier onboarding
- RFI evaluation
- procurement KPIs
- customs compliance automation
- PR automation
- SAP Enable Now

### Confirmed experience — Energy & Distribution

Clients/contexts:

- Groupe Zine
- Winxo

Themes:

- SAP P2P
- SAP MM / Ariba
- business requirements
- functional specifications
- SIT/UAT
- incident management
- continuous improvement

### Associate experience — Automotive & Railway

Clients/contexts:

- MTA Automobile
- Alstom

Themes:

- P2P/S2C support
- testing
- documentation
- workshops
- L1/L2 support
- transaction monitoring
- process structuring

## 10. Known metrics that may be used carefully

Use only in the relevant case studies. Do not overuse on the homepage.

- Automated around 80% of supplier onboarding.
- Validated migration with no identified mapping errors.
- Reduced manual invoice analysis by an estimated 60%.
- Implemented 30+ procurement KPIs for CAPEX/OPEX and spend monitoring.
- Reduced manual effort by 50% through data cleaning, structuring, and procurement process automation.

## 11. Privacy and confidentiality

Do not publish:

- raw CV PDFs,
- phone number by default,
- personal marital status,
- raw client documents,
- internal URLs,
- private stakeholder names,
- private repository links,
- raw Leyton documentation.

Leyton use cases are secondary. They should become sanitized blog posts later.

## 12. Acceptance criteria

The launch is successful when:

- starter identity is gone,
- homepage explains Wahbi within 10 seconds,
- About page is professional and CV-aligned,
- SAP experience progression is clear,
- at least 3 SAP/procurement case studies exist,
- navigation is simple,
- no confidential material is exposed,
- `yarn build` passes.
