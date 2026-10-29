"use client";

import { useState } from "react";
import {
  AlertTriangle,
  ShieldAlert,
  Bell,
  Waves,
  Wind,
  PhoneCall,
  CheckCircle2,
  Share2,
  Clock,
  MapPin,
  ChevronRight,
} from "lucide-react";

interface AlertItem {
  id: string;
  level: "siaga" | "waspada" | "aman";
  category: string;
  title: string;
  regions: string[];
  validUntil: string;
  source: string;
  description: string;
  guidelines: string[];
  icon: "storm" | "wave" | "wind" | "safe";
}

const ALERTS: AlertItem[] = [
  {
    id: "alt-1",
    level: "siaga",
    category: "Hidrometeorologi Ekstrem",
    title: "Potensi Banjir Aliran Sungai & Longsor Lereng",
    regions: ["Kecamatan Lereng Hulu", "Bantaran Sungai Citarang Bawah", "Desa Sukamaju"],
    validUntil: "Hari Ini, Pukul 18:00 WIB",
    source: "PUSDALOPS BPBD & BMKG Stasiun Meteorologi",
    description:
      "Curah hujan dengan intensitas lebat (>50 mm/jam) terpantau di daerah hulu pegunungan berpotensi memicu lonjakan debit air dan instabilitas lereng curam.",
    guidelines: [
      "Warga di bantaran sungai radius 50m diminta siaga evakuasi mandiri.",
      "Amankan dokumen penting dalam kantong kedap air (Tas Siaga).",
      "Aktifkan pos ronda lingkungan dan pantau sirine EWS otomatis.",
    ],
    icon: "storm",
  },
  {
    id: "alt-2",
    level: "waspada",
    category: "Peringatan Gelombang Laut & Rob",
    title: "Gelombang Tinggi 2.0 - 2.8 Meter di Wilayah Pesisir",
    regions: ["Kecamatan Pelabuhan", "Pantai Karang Baru", "TPI Muara Indah"],
    validUntil: "Besok, Pukul 06:00 WIB",
    source: "BMKG Maritim & Dinas Kelautan Perikanan Daerah",
    description:
      "Peningkatan kecepatan angin muson timur memicu kenaikan gelombang signifikan dan potensi banjir rob pada waktu pasang maksimum air laut.",
    guidelines: [
      "Perahu nelayan tradisional di bawah 10 GT diimbau tidak melaut.",
      "Pengelola wisata pantai melarang aktivitas berenang di bibir pantai.",
      "Tambatkan kapal di dermaga dengan tali pengaman ganda.",
    ],
    icon: "wave",
  },
  {
    id: "alt-3",
    level: "waspada",
    category: "Angin Kencang & Cuaca Buruk",
    title: "Potensi Angin Kencang (Gust) dan Pohon Tumbang",
    regions: ["Kecamatan Kota & Pusat", "Koridor Jalan Provinsi KM 12-24"],
    validUntil: "Hari Ini, Pukul 16:30 WIB",
    source: "Dinas Lingkungan Hidup & BPBD",
    description:
      "Awan konvektif memicu embusan angin kencang berdurasi singkat hingga kecepatan 45 km/jam berpotensi menumbangkan dahan pohon lapuk dan papan reklame.",
    guidelines: [
      "Pengendara motor hindari berteduh di bawah pohon rindang & papan reklame besar.",
      "Kurangi kecepatan berkendara di ruas jalan terbuka.",
      "Segera lapor jika mendapati tiang listrik miring ke Hotline 112.",
    ],
    icon: "wind",
  },
];

export default function EarlyWarningSystem() {
  const [filter, setFilter] = useState<"all" | "siaga" | "waspada">("all");

  const filteredAlerts = ALERTS.filter((item) => {
    if (filter === "all") return true;
    return item.level === filter;
  });

  return (
    <section id="peringatan-dini" className="section" style={{ backgroundColor: "rgba(12, 21, 39, 0.45)" }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag" style={{ background: "rgba(239, 68, 68, 0.15)", color: "#f87171", borderColor: "rgba(239, 68, 68, 0.3)" }}>
            <ShieldAlert size={14} /> Pusat Komando EWS Daerah
          </span>
          <h2 className="section-title">Sistem Peringatan Dini Kebencanaan</h2>
          <p className="section-subtitle">
            Pemberitahuan resmi dan arahan keselamatan warga yang dirilis secara sah oleh PUSDALOPS BPBD bersama BMKG
            untuk meminimalkan risiko bahaya hidrometeorologi.
          </p>
        </div>

        {/* Filter Pills & Siren Indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "14px",
            marginBottom: "28px",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setFilter("all")}
              className={`district-tab-btn ${filter === "all" ? "active" : ""}`}
            >
              Semua Peringatan ({ALERTS.length})
            </button>
            <button
              onClick={() => setFilter("siaga")}
              className={`district-tab-btn ${filter === "siaga" ? "active" : ""}`}
              style={filter === "siaga" ? { borderColor: "#ef4444", color: "#fca5a5" } : {}}
            >
              Level Siaga (1)
            </button>
            <button
              onClick={() => setFilter("waspada")}
              className={`district-tab-btn ${filter === "waspada" ? "active" : ""}`}
              style={filter === "waspada" ? { borderColor: "#f59e0b", color: "#fcd34d" } : {}}
            >
              Level Waspada (2)
            </button>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              borderRadius: "999px",
              background: "rgba(239, 68, 68, 0.12)",
              border: "1px solid rgba(239, 68, 68, 0.3)",
              fontSize: "0.8rem",
              color: "#fca5a5",
            }}
          >
            <Bell size={14} className="live-dot" style={{ backgroundColor: "#ef4444" }} />
            <span>Protokol Sirene EWS Wilayah: <strong>SIAP AKTIF</strong></span>
          </div>
        </div>

        {/* Alert Cards Grid */}
        <div className="alert-card-grid" style={{ marginBottom: "40px" }}>
          {filteredAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`alert-card ${alert.level}`}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                {/* Header Tag */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "14px",
                  }}
                >
                  <span
                    style={{
                      padding: "4px 10px",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      backgroundColor:
                        alert.level === "siaga"
                          ? "#ef4444"
                          : alert.level === "waspada"
                          ? "#f59e0b"
                          : "#10b981",
                      color: alert.level === "waspada" ? "#000" : "#fff",
                    }}
                  >
                    STATUS {alert.level.toUpperCase()}
                  </span>

                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={13} /> {alert.validUntil}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#fff", marginBottom: "8px", lineHeight: 1.3 }}>
                  {alert.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                  {alert.description}
                </p>

                {/* Regions Affected */}
                <div style={{ marginBottom: "16px" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontWeight: 600, marginBottom: "6px" }}>
                    Wilayah Terdampak:
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {alert.regions.map((reg, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          padding: "3px 8px",
                          borderRadius: "4px",
                          fontSize: "0.75rem",
                          color: "#93c5fd",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        <MapPin size={11} style={{ verticalAlign: "middle", marginRight: "3px" }} />
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Guidelines Checklist */}
                <div
                  style={{
                    background: "rgba(0, 0, 0, 0.25)",
                    padding: "14px",
                    borderRadius: "var(--radius-md)",
                    marginBottom: "20px",
                  }}
                >
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                    Tindakan Keselamatan Warga:
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                    {alert.guidelines.map((g, idx) => (
                      <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "6px", fontSize: "0.785rem", color: "var(--text-muted)" }}>
                        <CheckCircle2 size={13} color="#34d399" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{g}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid var(--border-subtle)",
                  paddingTop: "14px",
                  fontSize: "0.75rem",
                  color: "var(--text-dim)",
                }}
              >
                <span>Sumber: {alert.source}</span>
                <a
                  href="tel:112"
                  style={{
                    color: "#f87171",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <PhoneCall size={12} /> Bantuan 112
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Hotline Banner */}
        <div
          className="card-glass"
          style={{
            padding: "28px 36px",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(12, 21, 39, 0.95) 100%)",
            border: "1px solid rgba(239, 68, 68, 0.35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ maxWidth: "680px" }}>
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
              Menemukan Kejadian Pohon Tumbang, Tanggul Jebol, atau Genangan Tinggi?
            </h4>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
              Hubungi Tim Tanggap Darurat PUSDALOPS BPBD Daerah melalui sambungan bebas pulsa 112 atau posko siaga
              bencana 24 jam untuk evakuasi cepat.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="tel:112" className="btn btn-emergency">
              <PhoneCall size={18} /> Panggil Bebas Pulsa 112
            </a>
            <a
              href="https://wa.me/628110000112?text=Lapor%20Kejadian%20Bencana%20Cuaca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              Lapor WhatsApp PUSDALOPS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
