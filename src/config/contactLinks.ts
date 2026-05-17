// src/config/contactLinks.ts
export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "instagram" | "whatsapp";
  external?: boolean;
};

export const getContactLinks = (): ContactLink[] => [
  {
    label: "Email",
    value: "zaidsaifi150105@gmail.com",
    href: "mailto:zaidsaifi150105@gmail.com",
    icon: "mail",
  },
  {
    label: "Instagram",
    value: "@__zaidsaifi__",
    href: "https://instagram.com/__zaidsaifi__",
    icon: "instagram",
    external: true,
  },
  {
    label: "WhatsApp",
    value: "+91 9899582824",
    href: "https://wa.me/919899582824",
    icon: "whatsapp",
    external: true,
  },
];
