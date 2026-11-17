# Routes & Pages Specification

All routes are defined centrally in [src/App.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/App.tsx).

---

## 1. Route Registry

| Path | Page Component | File Path | Description |
| :--- | :--- | :--- | :--- |
| `/` | `Index` | [src/pages/Index.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Index.tsx) | Landing page with Hero, Skills, Featured Projects, Experience, and Contact sections |
| `/projects` | `Projects` | [src/pages/Projects.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Projects.tsx) | Complete gallery of all 6 projects |
| `/projects/:id` | `ProjectDetail` | [src/pages/ProjectDetail.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/ProjectDetail.tsx) | Dynamic detail view for an individual project (reads `:id` param) |
| `/experience` | `Experience` | [src/pages/Experience.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Experience.tsx) | Work history, publications, certifications, academic degrees, and skills |
| `/blogs` | `Blogs` | [src/pages/Blogs.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Blogs.tsx) | Gallery of Medium blog tiles categorized by topic (Generative AI, CV, MLOps, Audio) |
| `/contact` | `Contact` | [src/pages/Contact.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Contact.tsx) | Dedicated contact page rendering `<ContactForm />` |
| `*` | `NotFound` | [src/pages/NotFound.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/NotFound.tsx) | 404 error page for unmatched routes |

---

## 2. Common Layout Pattern

Every page (except `NotFound`) follows a consistent flex-column layout structure:

```tsx
<div className="min-h-screen flex flex-col">
  <Header />
  <main className="flex-grow pt-24"> {/* or custom padding */}
    {/* Page Content Here */}
  </main>
  <Footer />
</div>
```

* `<Header />` is fixed to the top (`fixed top-0 w-full z-50`).
* Sub-pages use `pt-24` on `<main>` so content is not obscured by the fixed header.

---

## 3. Page Deep Dive

### 3.1 `Index` ([src/pages/Index.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Index.tsx))
* **Route**: `/`
* **Purpose**: Single-page narrative showcase for quick evaluation by recruiters/clients.
* **Composed Components**:
  1. `<Header />`
  2. `<Hero />`: Headline, bio summary, portrait photo, CTA buttons (`/projects`, Download Resume).
  3. `<SkillsSection />`: Categorized cards for Languages, Frameworks, Tools, AWS, Spoken Languages.
  4. `<ProjectsSection />`: Curated featured projects with "All Projects" link.
  5. `<ExperienceSection />`: Work experience, **Publications (above certifications)**, and Certifications.
  6. `<BlogsSection preview={true} />`: Medium article tiles preview with "All Articles" link to `/blogs`.
  7. `<ContactForm />`: 4-column quick contact cards (Email, Phone, LinkedIn, GitHub).
  8. `<Footer />`

---

### 3.2 `Projects` ([src/pages/Projects.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Projects.tsx))
* **Route**: `/projects`
* **Purpose**: Displays the complete catalog of projects.
* **Data Source**: Local array `allProjects: ProjectCardProps[]` inside the file.
* **Layout**: Responsive grid (`grid gap-8 sm:grid-cols-2 lg:grid-cols-3`).
* **Active Projects**:
  1. `llama-website-summarization`
  2. `sar-image-colorization`
  3. `audio-deepfake-detection`
  4. `explicit-content-detection`
  5. `recommendation-system`
  6. `real-time-fight-detection`
  *(Note: `rag-qa-system` is present but commented out).*

---

### 3.3 `ProjectDetail` ([src/pages/ProjectDetail.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/ProjectDetail.tsx))
* **Route**: `/projects/:id`
* **Params**: Reads `id` via `useParams<{ id: string }>()`.
* **Behavior**:
  - `useEffect(() => { window.scrollTo(0, 0); }, [id]);` resets viewport to top on load.
  - If `id` does not match keys in `projects`, automatically renders `<NotFound />`.
* **Data Sources**:
  - `projects: Record<string, ProjectCardProps>`: Base card metadata (title, image, techStack, githubUrl, metrics).
  - `projectDetails: Record<string, string>`: In-depth multi-paragraph Markdown-style technical writeups.
* **UI Elements**:
  - "Back to Projects" back link.
  - Hero split view (aspect-video project image on left, title/description/tech badges/metrics/GitHub button on right).
  - "Project Details" section with full paragraphs.

---

### 3.4 `Experience` ([src/pages/Experience.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Experience.tsx))
* **Route**: `/experience`
* **Purpose**: Extended resume/experience view.
* **Sections**:
  1. `<ExperienceSection />`: Embedded component showing work experience and certifications.
  2. **Education Card**:
     - **M.Tech in AI & ML** (Lovely Professional University, Phagwara, 2024 - Present, GPA: 8.89).
     - **B.Tech in AI & ML** (Sri Venkateswara Engineering College, Tirupati, 2021 - 2024, GPA: 7.93).
     - **Diploma in ECE** (Government Polytechnic College, Anantapur, 2018 - 2021, GPA: 8.3).
  3. **Skills Section**: Detailed list of technical skills categorized into bulleted card blocks.

---

### 3.5 `Blogs` ([src/pages/Blogs.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Blogs.tsx))
* **Route**: `/blogs`
* **Purpose**: Dedicated publication page with responsive Medium article tiles.
* **Features**:
  * Topic filter tabs: All, Generative AI, Computer Vision, MLOps, Audio & NLP.
  * Direct Medium article links (`target="_blank"`), reading times, publication dates, claps, and tags.

---

### 3.6 `Contact` ([src/pages/Contact.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Contact.tsx))
* **Route**: `/contact`
* **Purpose**: Dedicated contact page rendering the standalone `<ContactForm />`.

---

### 3.7 `NotFound` ([src/pages/NotFound.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/NotFound.tsx))
* **Route**: `*`
* **Behavior**: Logs `console.error("404 Error: ...", location.pathname)` and provides a return home link.
