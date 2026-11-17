# Agent Playbook: Modification Recipes

> **Quick Execution Recipes**: Follow these concise recipes to implement common changes without inspecting other files across the repository.

---

## Recipe 1: Adding a New Project

When a user asks to add a new project to the portfolio, edit the following files:

1. **Place Project Image**:
   * Add the image file into [public/](file:///C:/Users/gandl/Documents/yaseeng-md/public) (e.g. `/my-new-project.jpg`).

2. **Add to All Projects List** in [src/pages/Projects.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Projects.tsx):
   * Insert a new object into the `allProjects` array:
     ```ts
     {
       id: "my-project-slug",
       title: "My Project Title",
       description: "Brief 1-2 sentence description.",
       image: "/my-new-project.jpg",
       techStack: ["PyTorch", "FastAPI", "Docker"],
       metrics: "Achieved 95% accuracy...",
       githubUrl: "https://github.com/...",
       demoUrl: "https://..." // optional
     }
     ```

3. **Add to Dynamic Detail View** in [src/pages/ProjectDetail.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/ProjectDetail.tsx):
   * Add the same metadata object under `projects["my-project-slug"]`.
   * Add the extended technical writeup under `projectDetails["my-project-slug"]`.

4. *(Optional)* **Promote to Featured Projects** in [src/components/ProjectsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ProjectsSection.tsx):
   * Add to `featuredProjects` array if it should appear on the homepage (`/`).

---

## Recipe 2: Modifying an Existing Project

* If updating cards on `/projects` or `/`: Edit `allProjects` in [src/pages/Projects.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Projects.tsx) and `featuredProjects` in [src/components/ProjectsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ProjectsSection.tsx).
* If updating the detail page: Edit `projects` and `projectDetails` in [src/pages/ProjectDetail.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/ProjectDetail.tsx).

---

## Recipe 3: Updating Work Experience, Certifications, or Education

1. **Work Experience & Certifications**:
   * File: [src/components/ExperienceSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ExperienceSection.tsx)
   * Modify `experiences` array for jobs.
   * Modify `certifications` array for certificates.
   *(Note: This component is rendered both on `/` and on `/experience`).*

2. **Degrees & Academic Education**:
   * File: [src/pages/Experience.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Experience.tsx#L25-L77)
   * Modify the Education card content directly.

---

## Recipe 4: Updating Skills

1. **Homepage Skills Section**:
   * File: [src/components/SkillsSection.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/SkillsSection.tsx)
   * Modify `skillCategories` array.
2. **Experience Page Skills List**:
   * File: [src/pages/Experience.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/pages/Experience.tsx#L81-L121)
   * Update the bulleted list under the "Skills" section.

---

## Recipe 5: Adding a New Page & Route

1. **Create Page Component**:
   * Create `src/pages/MyNewPage.tsx` using the standard layout:
     ```tsx
     import Header from "@/components/Header";
     import Footer from "@/components/Footer";

     const MyNewPage = () => {
       return (
         <div className="min-h-screen flex flex-col">
           <Header />
           <main className="flex-grow pt-24">
             <div className="container mx-auto px-4 py-12">
               {/* Page Content */}
             </div>
           </main>
           <Footer />
         </div>
       );
     };

     export default MyNewPage;
     ```
2. **Register Route in [src/App.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/App.tsx)**:
   * Import `MyNewPage` and add `<Route path="/new-path" element={<MyNewPage />} />`.
3. **Add Navigation Link in [src/components/Header.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Header.tsx)**:
   * Add `{ name: 'New Page', href: '/new-path' }` to the `navigation` array.

---

## Recipe 6: Updating Personal Info, Socials, or Bio

* **Name / Title / Bio**:
  * [src/components/Hero.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Hero.tsx#L19-L27)
  * [src/components/Header.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Header.tsx#L49)
  * [src/components/Footer.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Footer.tsx#L13-L16)
* **Social Links (GitHub, LinkedIn, Email, Phone)**:
  * [src/components/ContactForm.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/ContactForm.tsx)
  * [src/components/Footer.tsx](file:///C:/Users/gandl/Documents/yaseeng-md/src/components/Footer.tsx#L19-L48)
* **Resume PDF**:
  * Replace [public/resume.pdf](file:///C:/Users/gandl/Documents/yaseeng-md/public/resume.pdf).

---

## Recipe 7: Local Execution & Building

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (serves on http://localhost:8080)
npm run dev

# 3. Build for production (outputs to dist/)
npm run build

# 4. Check TypeScript & Linting
npm run lint
```
