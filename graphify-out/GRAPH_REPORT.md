# Graph Report - Portfolio  (2026-04-20)

## Corpus Check
- 35 files · ~193,126 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 30 nodes · 6 edges · 24 communities detected
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Core UI Context & Cursor|Core UI Context & Cursor]]
- [[_COMMUNITY_Utility Functions|Utility Functions]]
- [[_COMMUNITY_App Shell|App Shell]]
- [[_COMMUNITY_Loading Experience|Loading Experience]]
- [[_COMMUNITY_Linting Config|Linting Config]]
- [[_COMMUNITY_Build Configuration|Build Configuration]]
- [[_COMMUNITY_App Content Layout|App Content Layout]]
- [[_COMMUNITY_Application Entry|Application Entry]]
- [[_COMMUNITY_Contact Section|Contact Section]]
- [[_COMMUNITY_Era Transition UI|Era Transition UI]]
- [[_COMMUNITY_Hero Section|Hero Section]]
- [[_COMMUNITY_Lore Timeline Journey|Lore Timeline Journey]]
- [[_COMMUNITY_Navigation System|Navigation System]]
- [[_COMMUNITY_Project Showcase|Project Showcase]]
- [[_COMMUNITY_Skills & Expertise|Skills & Expertise]]
- [[_COMMUNITY_Global Content|Global Content]]
- [[_COMMUNITY_Project Data|Project Data]]
- [[_COMMUNITY_Lore Dataset|Lore Dataset]]
- [[_COMMUNITY_Timeline Configuration|Timeline Configuration]]
- [[_COMMUNITY_TypeScript Definitions|TypeScript Definitions]]
- [[_COMMUNITY_1800s Era Data|1800s Era Data]]
- [[_COMMUNITY_1900s Era Data|1900s Era Data]]
- [[_COMMUNITY_Future Era Data|Future Era Data]]
- [[_COMMUNITY_Present Era Data|Present Era Data]]

## God Nodes (most connected - your core abstractions)
1. `CustomCursor()` - 2 edges
2. `useTimeline()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `CustomCursor()` --calls--> `useTimeline()`  [INFERRED]
  app\src\components\CustomCursor.tsx → app\src\contexts\TimelineContext.tsx

## Communities

### Community 0 - "Core UI Context & Cursor"
Cohesion: 0.5
Nodes (2): CustomCursor(), useTimeline()

### Community 1 - "Utility Functions"
Cohesion: 1.0
Nodes (0): 

### Community 2 - "App Shell"
Cohesion: 1.0
Nodes (0): 

### Community 3 - "Loading Experience"
Cohesion: 1.0
Nodes (0): 

### Community 4 - "Linting Config"
Cohesion: 1.0
Nodes (0): 

### Community 5 - "Build Configuration"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "App Content Layout"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Application Entry"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Contact Section"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Era Transition UI"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Hero Section"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Lore Timeline Journey"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Navigation System"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Project Showcase"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Skills & Expertise"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Global Content"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "Project Data"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Lore Dataset"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Timeline Configuration"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "TypeScript Definitions"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "1800s Era Data"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "1900s Era Data"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Future Era Data"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Present Era Data"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Utility Functions`** (2 nodes): `cn.ts`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Shell`** (2 nodes): `App()`, `App.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Loading Experience`** (2 nodes): `WormholeLoader.tsx`, `WormholeLoader()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Linting Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Build Configuration`** (1 nodes): `vite.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Content Layout`** (1 nodes): `AppContent.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Application Entry`** (1 nodes): `main.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Contact Section`** (1 nodes): `Contact.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Era Transition UI`** (1 nodes): `EraJumpOverlay.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Hero Section`** (1 nodes): `Hero.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Lore Timeline Journey`** (1 nodes): `LoreJourney.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Navigation System`** (1 nodes): `Navigation.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Showcase`** (1 nodes): `Projects.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Skills & Expertise`** (1 nodes): `Skills.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Global Content`** (1 nodes): `content.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Project Data`** (1 nodes): `globalProjects.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Lore Dataset`** (1 nodes): `loreData.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Timeline Configuration`** (1 nodes): `timelineData.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `TypeScript Definitions`** (1 nodes): `types.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `1800s Era Data`** (1 nodes): `1800s.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `1900s Era Data`** (1 nodes): `1900s.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Future Era Data`** (1 nodes): `future.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Present Era Data`** (1 nodes): `present.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Not enough signal to generate questions. This usually means the corpus has no AMBIGUOUS edges, no bridge nodes, no INFERRED relationships, and all communities are tightly cohesive. Add more files or run with --mode deep to extract richer edges._