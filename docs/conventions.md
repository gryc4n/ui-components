# Project Conventions

This document defines the conventions used across the UI Components repository.

---

## Naming

### Components

Use PascalCase.

Examples:

- Button
- Navbar
- Sidebar
- LoginForm

---

### CSS Classes

Class names should describe the purpose of the element, not its appearance.

✅ Good

```css
.btn
.navbar
.brand
.site-title
.side-item
```

❌ Avoid

```css
.blue-text
.left-box
.big-div
```

---

### CSS Variants

Use shared classes with variants.

```html
<button class="btn primary"></button>
<button class="btn secondary"></button>
<button class="btn danger"></button>
```

---

## HTML

- Use semantic HTML whenever possible.
- Keep markup simple.
- Group related elements together.

---

## CSS

- Prefer Flexbox for layout.
- Keep styles reusable.
- Avoid unnecessary nesting.
- Reuse common classes whenever possible.

---

## Folder Structure

Each component should contain:

- index.html
- style.css
- README.md
- img/

---

## Git

Follow Conventional Commits.

Examples:

```text
feat: build navbar component
feat: build sidebar component
feat: build button component

fix: correct button spacing

docs: update roadmap
```