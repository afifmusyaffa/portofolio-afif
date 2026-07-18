import type { Localized } from "@/lib/i18n";

export type SkillItem = {
  name: string;
  /** The one or two tools worth calling out above the rest of the tag list. */
  featured?: boolean;
};

export type SkillGroup = {
  label: Localized;
  blurb: Localized;
  items: SkillItem[];
  /** Bento weight — drives how wide the tile sits on larger screens. */
  span: "wide" | "narrow";
  icon: "vision" | "network" | "code" | "data";
};

export const skillGroups: SkillGroup[] = [
  {
    label: { id: "AI & Computer Vision", en: "AI & Computer Vision" },
    blurb: {
      id: "Melatih model deteksi objek sampai klasifikasi teks, lalu merilisnya.",
      en: "Training detection and text-classification models, then getting them released.",
    },
    items: [
      { name: "YOLOv8", featured: true },
      { name: "Machine Learning" },
      { name: "Computer Vision" },
      { name: "NLP" },
      { name: "scikit-learn" },
    ],
    span: "wide",
    icon: "vision",
  },
  {
    label: { id: "Jaringan", en: "Networking" },
    blurb: {
      id: "Merancang dan menelusuri masalah jaringan. Bersertifikat MikroTik & Cisco.",
      en: "Setting up and troubleshooting networks. MikroTik & Cisco certified.",
    },
    items: [
      { name: "MikroTik", featured: true },
      { name: "Cisco", featured: true },
      { name: "TCP/IP" },
      { name: "Routing & Switching" },
      { name: "Linux" },
    ],
    span: "narrow",
    icon: "network",
  },
  {
    label: { id: "Web & Backend", en: "Web & Backend" },
    blurb: {
      id: "Menggarap tampilan sekaligus API di belakangnya.",
      en: "Building the interface and the API that feeds it.",
    },
    items: [
      { name: "Next.js", featured: true },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Tailwind" },
      { name: "FastAPI" },
      { name: "MySQL" },
    ],
    span: "narrow",
    icon: "code",
  },
  {
    label: { id: "Data", en: "Data" },
    blurb: {
      id: "Merapikan data mentah sampai jadi bahan pengambilan keputusan.",
      en: "Cleaning up raw data until it's something you can decide on.",
    },
    items: [
      { name: "Python", featured: true },
      { name: "Data Analysis" },
      { name: "Tableau" },
      { name: "Git" },
    ],
    span: "wide",
    icon: "data",
  },
];

export const interpersonalSkills: Localized<string>[] = [
  { id: "Kepemimpinan", en: "Leadership" },
  { id: "Komunikasi", en: "Communication" },
  { id: "Kerja Sama Tim", en: "Teamwork" },
  { id: "Pemecahan Masalah", en: "Problem Solving" },
  { id: "Berpikir Analitis", en: "Analytical Thinking" },
  { id: "Adaptabilitas", en: "Adaptability" },
];
