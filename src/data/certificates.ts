import type { Localized } from "@/lib/i18n";

export type Certificate = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  file: string;
  /** Short, punchy line — the hook that makes the card worth clicking. */
  headline: Localized;
  blurb: Localized;
  /** Official logo/badge artwork shown on the card face. */
  logo: string;
  /** Where "credential" info exists (id and/or a place to verify it). */
  credential?: {
    id?: string;
    href: string;
  };
};

export const certificates: Certificate[] = [
  {
    slug: "mtcna",
    title: "MikroTik Certified Network Associate",
    issuer: "MikroTik",
    date: "2025",
    file: "/certificates/mtcna.pdf",
    headline: {
      id: "Sertifikasi Resmi MikroTik",
      en: "Official MikroTik Certification",
    },
    blurb: {
      id: "Diuji langsung oleh vendornya — bukti nyata kemampuan konfigurasi jaringan.",
      en: "Tested directly by the vendor — real proof of networking configuration skill.",
    },
    logo: "/certificates/logos/mikrotik.png",
    credential: {
      id: "2507NA0801",
      href: "https://mikrotik.com/certificateSearch",
    },
  },
  {
    slug: "ccna",
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "2025",
    file: "/certificates/ccna-introduction-to-networks.pdf",
    headline: {
      id: "Sertifikasi Cisco CCNA",
      en: "Cisco CCNA Certification",
    },
    blurb: {
      id: "Fondasi jaringan komputer: TCP/IP, routing, dan switching.",
      en: "Networking foundations: TCP/IP, routing, and switching.",
    },
    logo: "/certificates/logos/ccna.png",
    credential: {
      href: "/certificates/ccna-introduction-to-networks.pdf",
    },
  },
  {
    slug: "student-exchange",
    title: "International Student Exchange",
    issuer: "Politeknik Mersing, Malaysia",
    date: "2024",
    file: "/certificates/student-exchange-malaysia.pdf",
    headline: {
      id: "Pertukaran Mahasiswa Internasional",
      en: "International Student Exchange",
    },
    blurb: {
      id: "Terpilih mewakili kampus untuk program 11 hari di Malaysia.",
      en: "Selected to represent my campus for an 11-day program in Malaysia.",
    },
    logo: "/certificates/logos/kpt-malaysia.svg",
  },
];
