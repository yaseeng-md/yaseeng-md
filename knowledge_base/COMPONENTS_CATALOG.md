# Components Catalog

This catalog outlines all custom UI and layout components located in `src/components/`.

---

## 1. Feature Components Overview

### 1.1 `Header` ([src/components/Header.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Header.tsx))
* **Type**: Fixed Navigation Bar
* **State**:
  * `isOpen: boolean` — controls mobile hamburger menu open/close.
  * `scrolled: boolean` — tracks `window.scrollY > 20`. When scrolled, adds `bg-background/80 backdrop-blur-lg shadow-sm`.
* **Routing Detection**: Uses `useLocation()` to highlight active links (`text-accent`) and automatically closes the mobile drawer on route transition.
* **Navigation Links**:
  * Home (`/`)
  * Projects (`/projects`)
  * Experience (`/experience`)
  * Contact (`/contact`)
  * Resume Button (`/resume.pdf` opened in a new tab)

---

### 1.2 `Footer` ([src/components/Footer.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Footer.tsx))
* **Type**: Page Footer
* **Layout**: Responsive flexbox (`flex flex-col md:flex-row justify-between items-center`).
* **Content**:
  * Branding: Name "Yaseen G", tagline "Machine Learning Engineer | MLOps Enthusiast".
  * Social Icon Buttons (`variant="ghost" size="icon"`):
    * GitHub: `https://github.com/yaseeng-md`
    * LinkedIn: `https://linkedin.com/in/yaseeng-md`
    * Email: `mailto:gandlurumohammedyaseen@gmail.com`

---

### 1.3 `Hero` ([src/components/Hero.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Hero.tsx))
* **Type**: Landing Hero Section (Split layout)
* **Layout**:
  * Desktop: Two-column split layout with text/introduction on left and portrait photograph on right.
  * Mobile: Gracefully reordered (`flex-col-reverse lg:flex-row`) with responsive portrait sizing.
* **Photograph**:
  * Sourced from centralized `PROFILE.image.src` (`/images/profile.webp`).
  * Squircle crop with `rounded-2xl sm:rounded-3xl`, clean `border-2 border-border/80`, ambient glow, and `object-cover object-top`.
  * Eager loading with `fetchPriority="high"` and descriptive alt text: `"Portrait of Gandluru Mohammed Yaseen"`.
* **Calls to Action**:
  * Primary Button: `View Projects` (`navigate('/projects')`) with Lucide `ArrowRight`.
  * Secondary Outline Button: `Download Resume` (links to `/resume.pdf` with `download` attribute and Lucide `Download`).

---

### 1.4 `AboutSection` ([src/components/AboutSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/AboutSection.tsx))
* **Type**: Biography & Professional Overview Card (used in Experience page)
* **Content**:
  * Portrait photograph in a squircle frame (`rounded-2xl`, lazy-loaded).
  * Professional badge tags: AI Engineer, MLOps Enthusiast, Deep Learning & CV.
  * Detailed bio, academic highlights (M.Tech GPA 8.89), and skill specializations.

---

### 1.4 `ProjectCard` ([src/components/ProjectCard.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ProjectCard.tsx))
* **Type**: Reusable Card for project galleries
* **Props Interface**:
  ```ts
  export interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    metrics?: string;
    githubUrl?: string;
    demoUrl?: string;
  }
  ```
* **Card Anatomy**:
  1. **Image Container**: Aspect ratio 16:9 (`aspect-video`), zoom on hover (`group-hover:scale-105`).
  2. **Badges**: Shows first 3 technologies, followed by a `+N` badge if more than 3 exist.
  3. **Title & Description**: `line-clamp-2` for uniform height.
  4. **Metrics**: Bold "Results:" label with metrics string.
  5. **Card Footer**: GitHub / Demo button links on left; "Details" link (`/projects/${id}`) on right.

---

### 1.5 `ProjectsSection` ([src/components/ProjectsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ProjectsSection.tsx))
* **Type**: Featured Projects Preview (used on Home page)
* **Featured Projects Included**:
  1. `sar-image-colorization`
  2. `audio-deepfake-detection`
  3. `explicit-content-detection`
* **CTAs**: Header link to `/projects` and mobile bottom button to `/projects`.

---

### 1.6 `SkillsSection` ([src/components/SkillsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/SkillsSection.tsx))
* **Type**: Skills grid
* **Layout**: Responsive grid (`md:grid-cols-2 lg:grid-cols-3`).
* **Categories**:
  * **Programming Languages**: Python, SQL
  * **Frameworks**: MLOps, Scikit-Learn, NLTK, PyTorch, TensorFlow, Keras, Flask, Streamlit, MongoDB, Huggingface
  * **Tools**: Docker, GIT, MySQL, Power BI, Tableau, Microsoft Excel, MongoDB Compass
  * **Amazon Web Services**: S3, EC2, Kinesis Data Streams, Kinesis Data Firehose, FSx, Lambda
  * **Languages**: English, Hindi, Telugu, Kannada

---

### 1.7 `PublicationsSection` ([src/components/PublicationsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/PublicationsSection.tsx))
* **Type**: Research & Publications Component (rendered directly above Certifications)
* **Data Source**: `publications` from `src/data/publications.ts`
* **Card Content**:
  * Status badge (`Published`, `Preprint`), publication year, venue name.
  * Title linking to paper/article with external link icon.
  * Authors, Abstract ("About the Paper"), Key Contributions bullet points, Quantitative Metrics banner, and topic tags.
  * Action buttons: "View Publication" (paper URL) and "Code" (GitHub repo).

---

### 1.8 `ExperienceSection` ([src/components/ExperienceSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ExperienceSection.tsx))
* **Type**: Career History & Credentials Container
* **Layout Structure**:
  1. **Work Experience**: Data Valley.ai (Machine Learning Intern)
  2. **Publications** (`<PublicationsSection />` placed directly above Certifications)
  3. **Certifications & Education**: 5 deep learning & ML certifications

---

### 1.9 `BlogsSection` ([src/components/BlogsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/BlogsSection.tsx))
* **Type**: Medium Articles Grid with topic filtering
* **Props**: `preview?: boolean` (in preview mode, shows top 3 featured articles with "All Articles" link; in full mode, shows category filter tabs)
* **Categories**: All, Generative AI, Computer Vision, MLOps, Audio & NLP

---

### 1.10 `BlogCard` ([src/components/BlogCard.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/BlogCard.tsx))
* **Type**: Medium Article Tile
* **Card Anatomy**:
  * Header: Medium monogram badge, category badge, publication date, read time, and claps count.
  * Title with hover accent color and arrow indicator.
  * 3-line clamped excerpt, topic badges.
  * Footer: "Published on Medium" label with "Read on Medium" external link button.

---

### 1.11 `ContactForm` ([src/components/ContactForm.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ContactForm.tsx))
* **Type**: Contact Channels Grid (Note: Despite the name `ContactForm`, it is an information link grid, not an HTML form element).
* **Channels**:
  * **Email**: `gandlurumohammedyaseen@gmail.com`
  * **Phone**: `+91 8328377285`
  * **LinkedIn**: `https://linkedin.com/in/yaseeng-md`
  * **GitHub**: `https://github.com/yaseeng-md`

---

## 2. UI Primitives (`src/components/ui/`)

The repository includes standard shadcn/ui components configured with Radix UI and Tailwind CSS.
The actively used primitives are:
* **`button.tsx`**: Supports variants (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`) and sizes (`default`, `sm`, `lg`, `icon`). Supports `asChild` for composition with React Router `Link` or anchor `<a>`.
* **`card.tsx`**: `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`.
* **`badge.tsx`**: `Badge` with `default`, `secondary`, `destructive`, `outline` variants.
* **`toaster.tsx` & `sonner.tsx`**: Toast notification viewports registered in `App.tsx`.
* **`tooltip.tsx`**: Tooltip provider and tooltip components.

---

## 3. Utility Functions & Hooks

### Class Name Utility ([src/lib/utils.ts](file:///C:/Users/gandl/Documents/yaseeng-md/src/lib/utils.ts))
* **`cn(...inputs: ClassValue[])`**: Combines `clsx` (conditional class names) and `tailwind-merge` (deduplicating conflicting Tailwind classes). Always use `cn` when computing dynamic classes.

### Hooks ([src/hooks/](file:///C:/Users/gandl/Documents/yaseeng-md/src/hooks))
* **`use-mobile.tsx`**: Detects if window width is below `768px` (`MOBILE_BREAKPOINT`).
* **`use-toast.ts`**: Dispatcher and hook to show system toast messages.
