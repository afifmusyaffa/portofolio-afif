import type { Localized } from "@/lib/i18n";

export type ExperienceItem = {
  organization: string;
  role: Localized;
  period: string;
  location: string;
  /** The single outcome worth leading with. */
  headline: Localized;
  points: Localized[];
  metric: { value: string; label: Localized };
  kind: "internship" | "organization";
};

/** Ordered by weight to a hiring team: real work first, then leadership scale. */
export const experience: ExperienceItem[] = [
  {
    organization: "Stasiun Klimatologi Kelas I Sumatera Utara",
    role: {
      id: "Magang IT & Komunikasi Digital",
      en: "IT & Digital Communications Intern",
    },
    period: "Aug–Sep 2025",
    location: "Deli Serdang",
    kind: "internship",
    headline: {
      id: "Memimpin tim konten sampai menang Juara 1 Nasional.",
      en: "Led the content team to a first-place national win.",
    },
    points: [
      {
        id: "Menggarap konten TikTok & Reels HMKG ke-78 dari konsep sampai rilis.",
        en: "Handled TikTok & Reels for HMKG's 78th anniversary, from concept to release.",
      },
      {
        id: "Melatih 12 pegawai memakai AI untuk mempercepat pekerjaan harian mereka.",
        en: "Trained 12 staff to use AI tools that sped up their daily work.",
      },
    ],
    metric: {
      value: "#1",
      label: { id: "Nasional", en: "Nationally" },
    },
  },
  {
    organization: "IT Student Association (ITSA)",
    role: {
      id: "Presidium Komisi Kepanitiaan",
      en: "Presidium, Committee Oversight",
    },
    period: "2024–2025",
    location: "Pekanbaru",
    kind: "organization",
    headline: {
      id: "Mengawal 11 kepanitiaan selama satu periode kepengurusan.",
      en: "Kept 11 committees on track through a full leadership term.",
    },
    points: [
      {
        id: "Evaluasi rutin lintas divisi supaya setiap kepanitiaan tetap sesuai target.",
        en: "Ran regular cross-division reviews so every committee stayed on target.",
      },
    ],
    metric: {
      value: "11",
      label: { id: "Kepanitiaan", en: "Committees" },
    },
  },
  {
    organization: "CTS UI/UX Competition II",
    role: {
      id: "Koordinator Acara",
      en: "Event Coordinator",
    },
    period: "2024",
    location: "Pekanbaru",
    kind: "organization",
    headline: {
      id: "Menjalankan kompetisi UI/UX nasional dengan 47 peserta.",
      en: "Ran a national UI/UX competition with 47 participants.",
    },
    points: [
      {
        id: "Mengoordinasi peserta lintas kampus bersama 12 media partner.",
        en: "Coordinated participants across campuses alongside 12 media partners.",
      },
    ],
    metric: {
      value: "47",
      label: { id: "Peserta", en: "Participants" },
    },
  },
];
