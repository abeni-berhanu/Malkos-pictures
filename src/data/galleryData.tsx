/**
 * Gallery Data Types
 */
export type Category = "wedding" | "melse" | "birthday" | "portrait";

export interface GalleryItem {
  id: number;
  src: string;
  category: Category;
}

/**
 * Global Gallery Assets
 * Organised by category to manage the portfolio collection.
 * Ensure all IDs remain unique to prevent React reconciliation errors.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  // --- WEDDINGS ---
  { id: 1, src: "/images/gallery/wedding/img-01.jpg", category: "wedding" },
  { id: 2, src: "/images/gallery/wedding/img-02.jpg", category: "wedding" },

  // --- MELSE ---
  { id: 3, src: "/images/gallery/melse/img-01.jpg", category: "melse" },
  { id: 4, src: "/images/gallery/melse/img-02.jpg", category: "melse" },
  { id: 5, src: "/images/gallery/melse/img-03.jpg", category: "melse" },
  { id: 6, src: "/images/gallery/melse/img-04.jpg", category: "melse" },

  // --- BIRTHDAY ---
  { id: 7, src: "/images/gallery/birthday/img-01.jpg", category: "birthday" },
  { id: 8, src: "/images/gallery/birthday/img-02.jpg", category: "birthday" },
  { id: 9, src: "/images/gallery/birthday/img-03.jpg", category: "birthday" },

  // --- PORTRAIT ---
  { id: 10, src: "/images/gallery/portrait/img-01.jpg", category: "portrait" },
];

/**
 * Filter Helper
 * Utility for retrieving the available categories dynamically if needed.
 */
export const GALLERY_CATEGORIES: Category[] = [
  "wedding",
  "melse",
  "birthday",
  "portrait",
];
