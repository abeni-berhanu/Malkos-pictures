# 📸 MALKOS | Professional Artistry Portfolio

A high-performance, cinematic photography portfolio for **MALKOS**. This platform is built with a data-driven architecture, ensuring that content updates are seamless and decoupled from the UI logic.

## 🛠 Tech Stack

- **Core:** React 18 (TypeScript) + Vite
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Interactive:** Swiper.js (Carousels), Lucide React (Icons)

---

## 🏗 Project Structure

- **`public/gallery/`**: Organized subfolders (`wedding`, `melse`, etc.) for all image assets.
- **`src/components/`**: Modular UI sections like the Bento `Works.tsx` and `SliderSection.tsx`.
- **`src/data/`**: The "Source of Truth" containing `config.tsx` and `galleryData.tsx`.
- **`src/pages/`**: Main view controllers for the landing page and filterable gallery.

---

## ⚙️ Content Management

Updates are handled centrally in the `src/data/` directory. **No coding knowledge is required to update the content.**

### 1. Studio Info (`config.tsx`)

Modify brand taglines, contact details, social links, and the team member array.

### 2. Portfolio Gallery (`galleryData.tsx`)

To add new work:

1. Drop the image into the corresponding `public/gallery/` folder.
2. Add a new entry to `GALLERY_ITEMS` with a unique ID and category.

---

## 🎨 Design System

### Adaptive Media

- **Desktop:** Images use a cinematic grayscale-to-color transition on hover.
- **Mobile:** Images appear in full color by default to ensure visual vibrancy on touch devices.

### Smart Navigation

- **Bento Logic:** The gallery uses a dynamic `grid-flow-dense` pattern for a rhythmic layout.
- **Scroll Orchestration:** Cross-page navigation (e.g., Gallery → Home #Team) includes automatic offsets for the fixed Navbar.

---

## 🚀 Deployment

1. **Install:** `npm install`
2. **Dev:** `npm run dev`
3. **Build:** `npm run build`

---

_Created for MALKOS Pictures — Elevating memories through professional artistry._
