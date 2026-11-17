# Repository Knowledge Base: yaseeng-md

> **For Coding Agents & Developers:** This knowledge base is designed to give you complete architectural, component, routing, and data context for this repository **without needing to parse the entire codebase**. Read this index and jump directly to the relevant document to execute changes immediately.

---

## 🧭 Knowledge Base Navigation

| Document | Purpose | When to Consult |
| :--- | :--- | :--- |
| [ARCHITECTURE.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/ARCHITECTURE.md) | High-level architecture, build tools, Vite config, alias `@`, and setup | When understanding app bootstrapping, tooling, or setup |
| [RELATIONSHIP_GRAPH.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/RELATIONSHIP_GRAPH.md) | Visual dependency graph, component hierarchy, and import maps | When tracing what imports what, or understanding blast radius of edits |
| [ROUTES_AND_PAGES.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/ROUTES_AND_PAGES.md) | Comprehensive route map, page layouts, URL parameters | When adding or altering pages, routes, or navigation |
| [COMPONENTS_CATALOG.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/COMPONENTS_CATALOG.md) | Complete component dictionary, props, UI primitives, and hooks | When altering UI components, headers, cards, or sections |
| [DATA_MODELS.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/DATA_MODELS.md) | Project data schemas, experience records, certifications, and skills | When adding/modifying projects, skills, education, or contacts |
| [UI_DESIGN_SYSTEM.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/UI_DESIGN_SYSTEM.md) | Colors, Tailwind tokens, CSS variables, utility classes, animations | When tweaking styling, themes, colors, or visual effects |
| [AGENT_PLAYBOOK.md](file:///C:/Users/gandl/Documents/yaseeng-md/knowledge_base/AGENT_PLAYBOOK.md) | Actionable recipes (e.g. how to add a project, add a page, change info) | **Start here when executing specific modifications** |

---

## ⚡ Repository Quick Facts

- **Subject / Profile**: Gandluru Mohammed Yaseen (Machine Learning Engineer, MLOps Enthusiast, AI Researcher)
- **App Type**: Interactive Developer Portfolio & Project Showcase
- **Tech Stack**:
  - **Framework**: [React 18](file:///C:/Users/gandl/Documents/yaseeng-md/package.json#L51) + [TypeScript 5](file:///C:/Users/gandl/Documents/yaseeng-md/package.json#L79)
  - **Build Tool**: [Vite 5](file:///C:/Users/gandl/Documents/yaseeng-md/vite.config.ts) (`@vitejs/plugin-react-swc`) running on port `8080`
  - **Routing**: [React Router DOM v6](file:///C:/Users/gandl/Documents/yaseeng-md/src/App.tsx#L6)
  - **Styling**: [Tailwind CSS 3](file:///C:/Users/gandl/Documents/yaseeng-md/tailwind.config.ts) with CSS variables & `tailwindcss-animate`
  - **UI Primitives**: Radix UI primitives with [shadcn/ui](file:///C:/Users/gandl/Documents/yaseeng-md/components.json)
  - **Icons**: `lucide-react`
  - **State / Query**: `@tanstack/react-query`

---

## 📂 Codebase Directory Structure

```
yaseeng-md/
├── public/                 # Static assets (project images: sar.jpg, audio.jpg, etc., resume.pdf)
├── src/
│   ├── components/         # Custom portfolio components
│   │   ├── ui/             # shadcn/ui primitive components (button, card, badge, etc.)
│   │   ├── AboutSection.tsx      # About bio card with portrait photo
│   │   ├── BlogCard.tsx          # Medium article tile card
│   │   ├── BlogsSection.tsx      # Medium blogs grid & category filter
│   │   ├── ContactForm.tsx       # Contact information grid
│   │   ├── ExperienceSection.tsx # Work experience, publications & certifications
│   │   ├── Footer.tsx            # Footer with social links & Medium
│   │   ├── Header.tsx            # Sticky navbar with mobile drawer & links
│   │   ├── Hero.tsx              # Landing hero banner with portrait & CTA buttons
│   │   ├── ProjectCard.tsx       # Reusable project card with tags & links
│   │   ├── ProjectsSection.tsx   # Featured projects grid for Home page
│   │   ├── PublicationsSection.tsx # Research papers & publications card grid
│   │   └── SkillsSection.tsx     # Categorized skill badges grid
│   ├── constants/          # Application constants (profile.ts)
│   ├── data/               # Structured data models (publications.ts, blogs.ts)
│   ├── hooks/              # Custom React hooks (use-mobile.tsx, use-toast.ts)
│   ├── lib/                # Utilities (utils.ts -> cn class merger)
│   ├── pages/              # Routed view pages
│   │   ├── Index.tsx             # Home route ("/")
│   │   ├── Projects.tsx          # All projects list ("/projects")
│   │   ├── ProjectDetail.tsx     # Dynamic project page ("/projects/:id")
│   │   ├── Experience.tsx        # Career, publications & education ("/experience")
│   │   ├── Blogs.tsx             # Medium publication tiles ("/blogs")
│   │   ├── Contact.tsx           # Contact page ("/contact")
│   │   └── NotFound.tsx          # 404 fallback page ("*")
│   ├── App.css
│   ├── App.tsx             # Root router, QueryClient, Tooltip & Toast providers
│   ├── index.css           # Global Tailwind layers, CSS variables & animations
│   ├── main.tsx            # React DOM root render
│   └── vite-env.d.ts
├── components.json         # shadcn UI CLI configuration
├── index.html              # HTML entry point
├── package.json            # Dependencies and npm scripts
├── tailwind.config.ts      # Tailwind design system extensions
├── tsconfig.json           # TypeScript configuration with @ alias to ./src
└── vite.config.ts          # Vite build & dev server config
```
