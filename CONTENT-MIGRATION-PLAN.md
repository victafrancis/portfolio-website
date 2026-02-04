# Portfolio Migration Plan

This document maps content from the legacy static site (`victafrancis.github.io`) to the new Next.js app (`portfolio-website`). Sections are organized so you can migrate one at a time. **NASA** and **Dad Joke** sections are excluded for now.

---

## ✅ Scope (Included)
- Hero / About - DONE
- Experience - DONE
- Projects (Developer, Data, Game) - DONE
- Education - DONE
- Skills - DONE
- More Life - DONE
- Footer - DONE

## ⛔️ Excluded (For Now)
- NASA section
- Dad Joke section

---

## Section-by-Section Migration

### 1) Hero / About
**Source (legacy):** `#about` in `victafrancis.github.io/index.html`

**Target (Next.js):**
- `components/sections/HeroSection.tsx`

**Content to Move:**
- Name, title/subtitle
- Short bio paragraph(s)
- Location + email
- Philosophy snippet (“Magis” / Student of Life)
- Social links (LinkedIn / GitHub)

**Assets:**
- Profile image: `img/profile.png` → replace `/public/images/profile.png` if needed

**Notes / Decisions:**
- Decide if the long “Philosophy” text becomes a short snippet + “Read more” or collapsible.

**Checklist:**
- [ ] Replace headline text + bio copy
- [ ] Confirm email + social links
- [ ] Decide philosophy length/presentation

---

### 2) Experience
**Source (legacy):** `#experience`

**Target (Next.js):**
- `components/sections/ExperienceSection.tsx`
- `lib/data/experiences.ts`

**Content to Move:**
- All job roles and descriptions
- Company name + location
- Date ranges

**Notes / Decisions:**
- The legacy descriptions are long; consider summarizing into 2–4 bullets each or keep as paragraph.

**Checklist:**
- [ ] Replace placeholder roles with real experience list
- [ ] Decide format (bullets vs paragraph)

---

### 3) Projects (Developer / Data / Game)
**Source (legacy):**
- `#projects` (Developer Projects)
- `#dataprojects` (Data Projects)
- `#gameprojects` (Game Projects)

**Target (Next.js):**
- `components/sections/ProjectsSection.tsx`
- `lib/data/projects.ts`

**Content to Move:**
- Project titles, descriptions, tech stack, links
- Project images (`img/*.png`, `img/*.jpg`)

**Assets:**
- Copy relevant images from `victafrancis.github.io/img/` to `/public/images/`

**Notes / Decisions:**
- Option A: keep a single “Featured Projects” grid with **category badges** (Dev/Data/Game)
- Option B: split into multiple sections (requires new components)

**Checklist:**
- [ ] Decide single vs multiple sections
- [ ] Add category labels if keeping one grid
- [ ] Migrate images to `/public/images/`
- [ ] Update `lib/data/projects.ts`

---

### 4) Education
**Source (legacy):** `#education`

**Target (Next.js):**
- `components/sections/EducationSection.tsx`
- `lib/data/education.ts`

**Content to Move:**
- George Brown College + Ateneo de Manila University entries
- Degrees, descriptions, dates, honors

**Assets:**
- Logos: `img/gbc.png`, `img/ateneo.png` → `/public/images/`

**Checklist:**
- [ ] Replace current education placeholder entries
- [ ] Add logo images (optional if you want to display)

---

### 5) Skills
**Source (legacy):** `#skills`

**Target (Next.js):**
- `components/sections/SkillsSection.tsx`
- `lib/data/tech-stack.ts`

**Content to Move:**
- Full skill list (Web/Software, Database, Architecture, Data/ML, Cloud)

**Notes / Decisions:**
- Current UI is a flat list; if you want categories, we’ll need data changes + UI updates.

**Checklist:**
- [ ] Expand `techStack` list to match legacy skills
- [ ] Decide if you want grouping categories

---

### 6) More Life
**Source (legacy):** `#more`

**Target (Next.js):**
- `components/sections/MoreLifeSection.tsx`
- `lib/data/more-life.ts`

**Content to Move:**
- VR Learning Publication
- Never The Strangers (music)
- Collabs / SoundCloud
- Heart of a Champion

**Notes / Decisions:**
- Legacy has embedded YouTube/SoundCloud. Decide if we link out or embed inside cards.
- Images should be copied to `/public/images/` if used.

**Checklist:**
- [ ] Replace current cards with legacy content
- [ ] Decide embed vs external links
- [ ] Move images to `/public/images/`

---

### 7) Footer
**Source (legacy):** footer block

**Target (Next.js):**
- `components/sections/Footer.tsx`

**Content to Move:**
- Email
- Social links
- Tagline (“Live with intention and purpose!”)

**Checklist:**
- [ ] Update email + social links
- [ ] Add tagline copy

---

## Suggested Migration Order
1. Hero / About
2. Experience
3. Projects (Developer → Data → Game)
4. Education
5. Skills
6. More Life
7. Footer

---

## Notes
- Legacy images live in `victafrancis.github.io/img/`
- New site images should live in `portfolio-website/public/images/`
- For new sections or UI changes, we can create additional components as needed.
