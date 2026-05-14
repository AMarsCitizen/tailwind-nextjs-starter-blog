# Codex Bootstrap Protocol

This file exists so Codex can start from repository context without needing a long CLI prompt.

## Default task when Codex starts

When Codex is launched in this repository with no extra task description, assume the active task is:

> Prepare and execute the content-only 4-hour launch plan for Wahbi Hamza's professional SAP/P2P/S2C portfolio.

## Bootstrap sequence

Before editing source/content files, do this:

1. Read `AGENTS.md`.
2. Read `CODEX.md`.
3. Read `docs/agent/REPO_MAP.yaml`.
4. Read `docs/agent/ARCHITECTURE.md`.
5. Read `docs/product/PRD.md`.
6. Read `docs/product/TASKS_IMMUTABLE.md`.
7. Read `docs/product/DONE.md`.
8. Inspect the current repository files named in `REPO_MAP.yaml`.
9. Execute the launch tasks in `TASKS_IMMUTABLE.md` order.
10. Append completed task lines to `DONE.md`.
11. Run `yarn build` before declaring the work done.

## Implementation mode

This sprint is not exploratory design work. It is controlled implementation.

Use the task contract. Make the smallest safe set of edits that satisfies the PRD.

## What to do if uncertain

If uncertain between two implementation options:

1. choose the lower-risk content-only option,
2. preserve existing routes and template behavior,
3. avoid adding dependencies,
4. avoid changing schemas,
5. document the decision in `DONE.md` if it affects launch scope.

## What completion means

Completion means:

- the site content is no longer starter/template content,
- the homepage and About page reflect Wahbi's SAP/P2P/S2C positioning,
- at least 3 SAP/procurement case-study posts exist,
- navigation is simple,
- confidential material is not exposed,
- `yarn build` passes.
