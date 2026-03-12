import React from "react";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Youtube as YoutubeIcon,
  Twitter as TwitterIcon,
  Send as TelegramIcon,
} from "lucide-react";

/**
 * Custom Brand Icons
 */
const TikTokIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

/**
 * MALKOS Global Configuration
 * Central source of truth for brand assets, contact info, and section content.
 */
export const MALKOS_CONFIG = {
  brand: {
    name: "MALKOS",
    tagline:
      "Elevating memories through the lens of professional artistry. We capture the soul of every moment in Addis Ababa and beyond.",
    foundedYear: 2014,
  },

  contact: {
    phone: "+251 936115060",
    email: "dagimzeleke60@gmail.com",
    address: "Bethel, Addis Ababa, Ethiopia",
    googleMapsLink:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3940.720998739359!2d38.6934320750185!3d8.997799991062292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwNTknNTIuMSJOIDM4wrA0MSc0NS42IkU!5e0!3m2!1sen!2sit!4v1773256273364!5m2!1sen!2sit",
  },

  socials: [
    {
      icon: InstagramIcon,
      href: "https://instagram.com/malkospictures",
      label: "Instagram",
    },
    { icon: FacebookIcon, href: "#", label: "Facebook" },
    { icon: YoutubeIcon, href: "#", label: "Youtube" },
    { icon: TwitterIcon, href: "#", label: "Twitter" },
    { icon: TelegramIcon, href: "#", label: "Telegram" },
    { icon: TikTokIcon, href: "#", label: "Tiktok" },
  ],

  services: [
    {
      title: "Wedding",
      image: "/images/gallery/wedding/img-02.jpg",
      reverse: false,
      description:
        "Professional wedding photography capturing your most precious moments.",
    },
    {
      title: "Melse",
      image: "/images/gallery/melse/img-02.jpg",
      reverse: true,
      description:
        "Capturing the rich traditions of the Melse ceremony with artistic precision.",
    },
    {
      title: "Birthday",
      image: "/images/gallery/birthday/img-03.jpg",
      reverse: false,
      description: "Vibrant and joyful birthday photography for all ages.",
    },
  ],

  popularWorks: [
    {
      id: 1,
      title: "The Royal Union",
      category: "Wedding",
      image: "/images/gallery/wedding/img-01.jpg",
      gridClass: "md:col-span-8 md:row-span-2",
    },
    {
      id: 2,
      title: "Our Golden Heritage",
      category: "Melse",
      image: "/images/gallery/melse/img-02.jpg",
      gridClass: "md:col-span-4 md:row-span-1",
    },
    {
      id: 3,
      title: "The Modern Muse",
      category: "Portrait",
      image: "/images/gallery/wedding/img-03.jpg",
      gridClass: "md:col-span-4 md:row-span-1",
    },
    {
      id: 4,
      title: "Memorable Birthdays",
      category: "Birthday",
      image: "/images/gallery/birthday/img-01.jpg",
      gridClass: "md:col-span-12 md:row-span-1",
    },
  ],

  stats: [
    { value: 15, title: "Years Experience" },
    { value: 500, title: "Happy Clients" },
    { value: 3000000, title: "Photos Taken" },
    { value: 6, title: "Awards Won" },
  ],

  team: [
    {
      id: 1,
      name: "Dagim Zeleke",
      role: "Lead Photographer",
      image: "./images/team-members/img-01.png",
    },
    {
      id: 2,
      name: "Bemnet Berhanu",
      role: "Creative Director",
      image: "./images/team-members/img-02.png",
    },
    {
      id: 3,
      name: "Biruk Temesgen",
      role: "Editor",
      image: "./images/team-members/img-04.png",
    },
    {
      id: 4,
      name: "Emnet Tesfaye",
      role: "Editor",
      image: "./images/team-members/img-03.png",
    },
  ],
};
