# Inventory Explainer Site Design

## Goal

Create a separate bright, product-led explainer site that makes the inventory decision-support service easy to understand through concise narrative pages, real product screenshots, lightweight motion, and contextual terminology help.

## Audience and success

Primary audience: internal decision makers, mentors, and product reviewers who need to understand the problem, the operating model, and the AI/human responsibility boundary quickly.

Secondary audience: inventory practitioners who need to map the narrative to their own workflow.

The current operating scope covers three subsidiaries: Hyundai Wellness, Hyundai Livart, and Hyundai Green Food. The explainer should show the shared inventory workflow while making subsidiary-specific policies, storage conditions, sales channels, and approval responsibilities explicit.

Success means a first-time visitor can answer these questions without opening the operational app:

1. What problem does the service solve?
2. Who makes decisions and when does headquarters intervene?
3. What does AI calculate/recommend, and what remains human-approved?
4. How are strategy outcomes compared financially and operationally?
5. What do the product screens look like in practice?

## Information architecture

- `/` — value proposition, proof points, decision loop, CTA
- `/problem` — subsidiary-specific pain points and why one rule cannot fit all
- `/workflow` — detect → compare → simulate → approve → execute → learn
- `/ai-judgment` — AI calculation/recommendation boundary, hard stops, uncertainty
- `/roles` — subsidiary owner, headquarters governance, collaborating functions
- `/product-tour` — annotated screenshots of the current operational app
- `/prd` — problem, users, scope, exclusions, P1/P2, success metrics
- `/glossary` — searchable terms with definition, formula, example, related terms

## Visual system

- Light canvas (`#f8fafc`), white cards, charcoal/navy text, blue primary accent, green positive, amber risk.
- Wide editorial sections with 12-column desktop grid and mobile single-column flow.
- High contrast, visible keyboard focus, semantic headings, descriptive image alt text.
- Product screenshots are the source of truth. Generated/vector visuals are limited to abstract concepts that screenshots cannot explain.

## Motion

Use Framer Motion for subtle entrance/reveal, count-up, step highlighting, and tooltip transitions. Respect `prefers-reduced-motion` and avoid motion as the only carrier of meaning.

## Content and terminology model

Terms are defined once in a shared data module. Inline `TermHint` components render a keyboard-accessible popover with definition, formula/example, and a link to the glossary. The glossary supports search and category filtering without duplicating definitions.

## Screenshot pipeline

Run the existing Next app locally, capture representative routes into the explainer site's `public/screens/` directory, and annotate those images in the product-tour page. If a route cannot be captured, use a faithful placeholder card and document the limitation rather than inventing product behavior.

## Boundaries

- No changes to existing operational app behavior.
- No consumer storefront, checkout, or autonomous price/inventory mutation.
- New site is a separate app and can be deployed independently.
- The explainer site's implementation stack is independent from the operating service's JavaScript + React 19 + Vite target stack.
