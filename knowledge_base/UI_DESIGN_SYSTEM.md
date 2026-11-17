# UI Design System & Styling Guide

The styling system is implemented with **Tailwind CSS**, supplemented by CSS custom properties (variables) defined in [src/index.css](file:///C:/Users/gandl/Documents/yaseeng-md/src/index.css) and configuration extensions in [tailwind.config.ts](file:///C:/Users/gandl/Documents/yaseeng-md/tailwind.config.ts).

---

## 1. Typography

* **Sans Font**: `Inter`, sans-serif (imported via Google Fonts in `src/index.css`)
* **Mono Font**: `JetBrains Mono`, monospace
* Applied globally on `body`: `font-feature-settings: "rlig" 1, "calt" 1;`
* Smooth scrolling enabled globally on `html`: `scroll-behavior: smooth;`

---

## 2. Color Palette & Semantic Tokens (HSL)

Tokens use HSL values formatted as `<hue> <saturation>% <lightness>%`, dynamically wrapped by Tailwind with `hsl(var(--<token>))`.

| Token | Light Mode HSL | Dark Mode HSL | Role / Description |
| :--- | :--- | :--- | :--- |
| `--background` | `220 33% 98%` (Soft slate white) | `222 47% 11%` (Deep navy dark) | Page background |
| `--foreground` | `222 47% 11%` | `210 40% 98%` | Main text color |
| `--card` | `0 0% 100%` (Pure white) | `222 47% 11%` | Surface color for cards |
| `--primary` | `222 47% 11%` | `210 40% 98%` | Primary buttons & emphasis |
| `--secondary` | `210 40% 96%` | `217 33% 17%` | Subdued surface backgrounds |
| `--muted` | `210 40% 96%` | `217 33% 17%` | Subtle borders/backgrounds |
| `--muted-foreground` | `215 16% 47%` | `215 20% 65%` | Subtitles, secondary text |
| `--accent` | `224 76% 48%` (Vibrant blue) | `224 76% 48%` (Vibrant blue) | Brand accent, links, active pills |
| `--destructive` | `0 84% 60%` | `0 63% 31%` | Errors, warnings, delete actions |
| `--border` | `214 32% 91%` | `217 33% 17%` | Card borders, dividers |
| `--radius` | `0.5rem` (`8px`) | `0.5rem` (`8px`) | Default corner border radius |

---

## 3. Custom Utility Classes

Defined in `@layer components` in `src/index.css`:

### 3.1 `.hover-underline`
Creates an animated underline that expands from left-to-right on hover.
Used for header navigation links:
```css
.hover-underline {
  @apply relative after:absolute after:bg-accent after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300;
}
```

### 3.2 `.hero-gradient`
Produces a subtle radial gradient backdrop:
```css
.hero-gradient {
  @apply bg-gradient-to-br from-blue-900/10 via-purple-800/5 to-blue-900/10;
}
```

### 3.3 `.bg-grid`
Displays a subtle 32x32px geometric grid pattern:
```css
.bg-grid {
  background-image: url("data:image/svg+xml,...");
}
```

### 3.4 `.card-shine`
Adds a 2-second shimmering light effect across card surfaces:
```css
.card-shine {
  @apply relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent;
}
```

---

## 4. Keyframe Animations

Configured in `tailwind.config.ts`:
* **`animate-fade-in`**: 0.4s ease-out animation that fades opacity from 0 to 1 and slides `translateY(10px)` to `0`. Supports delay via inline CSS variable (e.g. `[--animation-delay:200ms]`).
* **`animate-scale-in`**: 0.3s ease-out scaling from `scale(0.95)` to `scale(1)`.
* **`animate-accordion-down` / `animate-accordion-up`**: Smooth height expansion for accordion items.
