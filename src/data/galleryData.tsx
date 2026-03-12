// src/data/galleryData.ts

export interface GalleryItem {
  id: number;
  src: string;
  category: "wedding" | "melse" | "birthday" | "portrait";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  // WEDDINGS
  { id: 1, src: "/gallery/wedding/img-01.jpg", category: "wedding" },
  { id: 2, src: "/gallery/wedding/img-02.jpg", category: "wedding" },

  // MELSE
  { id: 3, src: "/gallery/melse/img-01.jpg", category: "melse" },
  { id: 4, src: "/gallery/melse/img-02.jpg", category: "melse" },
  { id: 5, src: "/gallery/melse/img-03.jpg", category: "melse" },
  { id: 6, src: "/gallery/melse/img-04.jpg", category: "melse" },

  // BIRTHDAY
  { id: 4, src: "/gallery/birthday/img-01.jpg", category: "birthday" },
  { id: 5, src: "/gallery/birthday/img-02.jpg", category: "birthday" },
  { id: 6, src: "/gallery/birthday/img-03.jpg", category: "birthday" },
];
