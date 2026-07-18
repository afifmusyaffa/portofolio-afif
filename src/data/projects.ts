import type { Localized } from "@/lib/i18n";

export type Project = {
  slug: string;
  title: string;
  domain: string;
  year: string;
  /** Headline result, not a feature list. */
  outcome: Localized;
  description: Localized;
  tech: string[];
  links: { label: Localized; href: string; primary?: boolean }[];
  featured?: boolean;
};

/** Order drives the layout: the first entry becomes the flagship card. */
export const projects: Project[] = [
  {
    slug: "roadtierbers",
    title: "Roadtierbers",
    domain: "AI / Systems",
    year: "2025",
    featured: true,
    outcome: {
      id: "Satu dashboard untuk memantau jalan sekaligus memperkirakan kepadatannya.",
      en: "One dashboard to watch the road and predict congestion before it builds.",
    },
    description: {
      id: "Purwarupa command center lalu lintas. AI mendeteksi kendaraan dan insiden dari rekaman kamera, lalu memprakirakan pola kepadatan supaya petugas bisa bertindak lebih awal.",
      en: "A traffic command-centre prototype. AI spots vehicles and incidents from camera feeds, then forecasts congestion patterns so operators can act early.",
    },
    tech: ["TypeScript", "Python", "Computer Vision"],
    links: [
      {
        label: { id: "Buka demo", en: "Open demo" },
        href: "http://roadtierbers.pocari.id/",
        primary: true,
      },
      {
        label: { id: "Kode", en: "Code" },
        href: "https://github.com/afifmusyaffa/roadtierbers-monitoring-system.git",
      },
    ],
  },
  {
    slug: "trafficsense",
    title: "TrafficSense",
    domain: "AI / Computer Vision",
    year: "2025",
    outcome: {
      id: "Mengenali rambu lalu lintas Indonesia langsung dari kamera, tanpa jeda.",
      en: "Recognises Indonesian road signs live from a camera, with no noticeable lag.",
    },
    description: {
      id: "Model YOLOv8 membaca rambu dari kamera. Gambarnya dikirim lewat WebSocket ke backend FastAPI, hasilnya tampil seketika di antarmuka React.",
      en: "A YOLOv8 model reads signs from a camera feed. Frames travel over WebSocket to a FastAPI backend, and results land in a React interface instantly.",
    },
    tech: ["YOLOv8", "FastAPI", "React 19", "WebSocket", "SQLite"],
    links: [
      {
        label: { id: "Lihat kode", en: "View code" },
        href: "https://github.com/afifmusyaffa/ProjectDL_Kel5.git",
        primary: true,
      },
    ],
  },
  {
    slug: "crime-news-nlp-classifier",
    title: "Crime News Classifier",
    domain: "NLP",
    year: "2025",
    outcome: {
      id: "Akurasi F1 89,15% — dan siapa pun bisa mencobanya sekarang.",
      en: "89.15% F1-score — and anyone can try it right now.",
    },
    description: {
      id: "Memilah berita kriminal berbahasa Indonesia ke enam kategori memakai TF-IDF dengan Logistic Regression dan SVM. Sudah tayang di Hugging Face Spaces.",
      en: "Sorts Indonesian crime news into six categories using TF-IDF with Logistic Regression and SVM. Live on Hugging Face Spaces.",
    },
    tech: ["Python", "scikit-learn", "TF-IDF"],
    links: [
      {
        label: { id: "Coba demo", en: "Try the demo" },
        href: "https://afifmusyaffa-crime-news-nlp-classifier.hf.space",
        primary: true,
      },
      {
        label: { id: "Kode", en: "Code" },
        href: "https://huggingface.co/spaces/afifmusyaffa/crime-news-nlp-classifier/tree/main",
      },
    ],
  },
  {
    slug: "arsiza-tennis-club",
    title: "Arsiza Tennis Club",
    domain: "Web",
    year: "2024",
    outcome: {
      id: "Website klub yang dipakai anggotanya sehari-hari.",
      en: "A club website its members use day to day.",
    },
    description: {
      id: "Jadwal, keanggotaan, dan agenda klub dikumpulkan jadi satu. Dibangun dengan Next.js dan TypeScript, sudah tayang di Vercel.",
      en: "Schedules, membership, and club activities gathered in one place. Built with Next.js and TypeScript, live on Vercel.",
    },
    tech: ["Next.js", "TypeScript", "Vercel"],
    links: [
      {
        label: { id: "Buka situs", en: "Visit site" },
        href: "https://arsiza-tennis-club.vercel.app/",
        primary: true,
      },
      {
        label: { id: "Kode", en: "Code" },
        href: "https://github.com/afifmusyaffa/arsiza-tennis-club.git",
      },
    ],
  },
];
