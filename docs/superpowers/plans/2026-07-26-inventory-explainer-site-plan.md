# Inventory Explainer Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a standalone bright explainer site for the inventory decision-support service with page-level narratives, annotated screenshots, motion, and a contextual glossary.

**Architecture:** Add a sibling Next.js app under `explainer-site/`; keep all content in typed data modules and render pages through a shared shell. Copy locally captured images into `explainer-site/public/screens/` so the site is deployable without coupling to the operational app.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS, lucide-react, Framer Motion.

> 이 문서는 운영 서비스와 별도로 배포하는 설명 사이트의 구현 계획입니다. 운영 서비스의 목표 스택은 JavaScript + React 19 + Vite + React Router이며, 설명 사이트는 현재 독립 앱의 실행 환경을 유지합니다.

## Global Constraints

- Keep the existing operational app unchanged.
- Use Korean copy and accessible semantic HTML.
- Respect `prefers-reduced-motion`.
- Prefer real captured app screens over fabricated UI claims.
- Glossary definitions must have one source of truth.

### Task 1: Scaffold the independent app

**Files:**
- Create: `explainer-site/package.json`
- Create: `explainer-site/tsconfig.json`
- Create: `explainer-site/next.config.ts`
- Create: `explainer-site/postcss.config.mjs`
- Create: `explainer-site/tailwind.config.ts`
- Create: `explainer-site/src/app/layout.tsx`
- Create: `explainer-site/src/app/globals.css`

- [ ] Create a minimal Next app with scripts `dev`, `build`, and `start`.
- [ ] Add Framer Motion and lucide-react dependencies.
- [ ] Define typography, color tokens, focus styles, and responsive container utilities.
- [ ] Run `npm install` in `explainer-site/` and verify `npm run build`.

### Task 2: Add shared content, glossary, and shell

**Files:**
- Create: `explainer-site/src/lib/content.ts`
- Create: `explainer-site/src/components/site-shell.tsx`
- Create: `explainer-site/src/components/term-hint.tsx`
- Create: `explainer-site/src/components/reveal.tsx`

- [ ] Define typed page content and glossary records for 기준선, 증분이익, 기여현금이익, 매몰원가, 회피비용, 위험재고, 하드 차단.
- [ ] Implement shared navigation, footer, mobile menu, and CTA.
- [ ] Implement an accessible inline term popover with glossary link.
- [ ] Implement reduced-motion-safe reveal wrappers.

### Task 3: Implement narrative pages

**Files:**
- Create: `explainer-site/src/app/page.tsx`
- Create: `explainer-site/src/app/problem/page.tsx`
- Create: `explainer-site/src/app/workflow/page.tsx`
- Create: `explainer-site/src/app/ai-judgment/page.tsx`
- Create: `explainer-site/src/app/roles/page.tsx`
- Create: `explainer-site/src/app/prd/page.tsx`

- [ ] Render each route with a distinct hero, proof/stat cards, diagrams, and contextual term hints.
- [ ] Use responsive grids and accessible headings.
- [ ] Add lightweight motion to hero and workflow sections.

### Task 4: Capture and present product screens

**Files:**
- Create: `explainer-site/public/screens/README.md`
- Create: `explainer-site/src/app/product-tour/page.tsx`
- Create: `explainer-site/src/components/screenshot-card.tsx`

- [ ] Start the existing app and capture dashboard, inventory, strategy, simulation, and execution routes.
- [ ] Copy captures into `explainer-site/public/screens/`.
- [ ] Render annotated screenshot cards with alt text and “what to notice” callouts.

### Task 5: Implement glossary and verification

**Files:**
- Create: `explainer-site/src/app/glossary/page.tsx`
- Create: `explainer-site/src/components/glossary-browser.tsx`

- [ ] Add client-side search and category filtering.
- [ ] Link every inline term to its glossary entry and back.
- [ ] Run `npm run build` and smoke-test every route at mobile and desktop widths.
- [ ] Run `git diff --check` and verify the existing app remains unchanged.
