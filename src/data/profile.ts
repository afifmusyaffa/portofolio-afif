import type { Localized } from "@/lib/i18n";

export const profile = {
  name: "Afif Musyaffa",
  location: "Pekanbaru, Riau, Indonesia",
  email: "musyaffaafif11@gmail.com",
  phone: "+62 813-6380-7008",
  socials: {
    github: "https://github.com/afifmusyaffa",
    linkedin: "https://www.linkedin.com/in/afifmusyaffa",
    instagram: "https://instagram.com/afifmusyaffa_",
  },
  heroHeadline: {
    primary: {
      id: "Mengubah Data & Jaringan",
      en: "Turning Data & Networks",
    } satisfies Localized,
    secondary: {
      id: "Jadi Sistem yang Berjalan",
      en: "Into Systems That Work",
    } satisfies Localized,
  },
  // Hero says who I am. About says how I work. Skills says what with.
  // Kept deliberately distinct so the three don't repeat each other.
  // Also careful not to overclaim: only Arsiza has real day-to-day users —
  // the rest are academic/demo projects, so the copy says "works", not
  // "used by people" or "beyond the classroom".
  heroSubline: {
    id: "Mahasiswa Teknik Informatika Politeknik Caltex Riau, fokus membangun sistem AI dan jaringan yang benar-benar berfungsi — bukan cuma teori di atas kertas.",
    en: "Informatics student at Politeknik Caltex Riau, building AI and networking systems that actually function — not just theory on paper.",
  } satisfies Localized,
  heroStatus: {
    label: { id: "Status", en: "Status" } satisfies Localized,
    title: {
      id: "Terbuka untuk magang",
      en: "Open for internships",
    } satisfies Localized,
    description: {
      id: "Yuk, ngobrol soal peluang magang.",
      en: "Let's talk internship opportunities.",
    } satisfies Localized,
  },

  /** One-line thesis for the About section. */
  aboutStatement: {
    id: "Saya betah di titik temu AI, jaringan, dan web. Model sepintar apa pun tetap butuh jaringan yang stabil dan tampilan yang enak dipakai.",
    en: "I like working where AI, networks, and the web meet. Even a smart model still needs a stable network under it and an interface people can actually use.",
  } satisfies Localized,
  aboutBody: {
    id: "Sekarang saya semester 6, membagi waktu antara kuliah, organisasi kampus, dan proyek yang saya rilis sendiri. Cara belajar tercepat buat saya ya lewat mengerjakan — dan saya masih terus menambah yang belum saya kuasai.",
    en: "I'm in my sixth semester, splitting my time between coursework, campus organisations, and projects I ship on my own. Building things is how I learn fastest — and there's still plenty I'm working on next.",
  } satisfies Localized,

  quickFacts: [
    {
      label: { id: "Program", en: "Program" } satisfies Localized,
      value: {
        id: "D4 Teknik Informatika",
        en: "B.ASc. Informatics Eng.",
      } satisfies Localized,
    },
    {
      label: { id: "Fokus", en: "Focus" } satisfies Localized,
      value: {
        id: "Computer Vision & Jaringan",
        en: "Computer Vision & Networks",
      } satisfies Localized,
    },
    {
      label: { id: "Kampus", en: "Campus" } satisfies Localized,
      value: {
        id: "Politeknik Caltex Riau",
        en: "Politeknik Caltex Riau",
      } satisfies Localized,
    },
    {
      label: { id: "Lulus", en: "Graduating" } satisfies Localized,
      value: { id: "2027", en: "2027" } satisfies Localized,
    },
  ],

  education: {
    institution: "Politeknik Caltex Riau",
    degree: {
      id: "Sarjana Terapan Teknik Informatika",
      en: "B.Eng. (Applied), Informatics Engineering",
    } satisfies Localized,
    period: "2023 — 2027",
    highlight: {
      id: "Terpilih mewakili kampus di program pertukaran mahasiswa internasional ke Politeknik Mersing, Malaysia.",
      en: "Chosen to represent my campus on an international student exchange at Politeknik Mersing, Malaysia.",
    } satisfies Localized,
  },
};
