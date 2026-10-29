import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#060b18",
};

export const metadata: Metadata = {
  title: "SI-CUACA PEMDA - Portal Cuaca & Peringatan Dini Pemerintah Daerah",
  description:
    "Portal resmi pemantauan cuaca real-time tingkat kecamatan, radar cuaca satelit BMKG, Indeks Kualitas Udara (ISPU), dan sistem mitigasi bencana hidrometeorologi terpadu Pemerintah Daerah.",
  keywords: [
    "Cuaca Pemda",
    "Peringatan Dini Bencana",
    "BMKG Daerah",
    "BPBD",
    "Radar Cuaca",
    "ISPU Kualitas Udara",
    "Cuaca Kecamatan",
    "Info Banjir",
  ],
  authors: [{ name: "Pemerintah Daerah - Dinas Komunikasi & Informatika" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={jakartaSans.variable}>
      <body>{children}</body>
    </html>
  );
}
