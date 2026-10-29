"use client";

import { useState } from "react";
import {
  Ship,
  Sprout,
  Truck,
  Compass,
  Waves,
  Droplets,
  Sun,
  Eye,
  Wind,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";

export default function StrategicSectors() {
  const [activeSector, setActiveSector] = useState<"maritim" | "pertanian" | "transportasi" | "wisata">("maritim");

  return (
    <section id="sektor" className="section" style={{ backgroundColor: "rgba(10, 18, 36, 0.4)" }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} /> Layanan Lintas Organisasi Perangkat Daerah (OPD)
          </span>
          <h2 className="section-title">Informasi Cuaca Sektor Strategis</h2>
          <p className="section-subtitle">
            Dukungan meteorologi terapan yang disesuaikan khusus untuk nelayan, petani, operator logistik transportasi,
            dan industri pariwisata daerah.
          </p>
        </div>

        {/* Sector Grid Cards */}
        <div className="sector-grid">
          {/* 1. Maritim & Nelayan */}
          <div className="sector-card">
            <div
              className="sector-icon-box"
              style={{ background: "rgba(0, 210, 255, 0.15)", color: "var(--accent-cyan)", border: "1px solid rgba(0, 210, 255, 0.3)" }}
            >
              <Ship size={26} />
            </div>
            <h3 className="sector-title">Maritim & Nelayan</h3>
            <p className="sector-desc">
              Panduan keselamatan melaut bagi nelayan pesisir dan operator pelabuhan penyeberangan rakyat.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Tinggi Gelombang:</span>
                <strong style={{ color: "#38bdf8" }}>1.0 - 1.5 m (Sedang)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Kecepatan Angin Laut:</span>
                <strong style={{ color: "#fff" }}>14 knot (Tenggara)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Pasang Tertinggi:</span>
                <strong style={{ color: "#fff" }}>19:40 WIB (+1.2m)</strong>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.25)",
                  borderRadius: "6px",
                  color: "#6ee7b7",
                  fontSize: "0.785rem",
                  fontWeight: 600,
                }}
              >
                ✓ Kapal Motor & Nelayan Tradisional Aman Melaut
              </div>
            </div>
          </div>

          {/* 2. Pertanian & Ketahanan Pangan */}
          <div className="sector-card">
            <div
              className="sector-icon-box"
              style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399", border: "1px solid rgba(16, 185, 129, 0.3)" }}
            >
              <Sprout size={26} />
            </div>
            <h3 className="sector-title">Pertanian & Agrikultur</h3>
            <p className="sector-desc">
              Kalender tanam presisi berbasis curah hujan dan kadar air tanah untuk sentra agropolitan daerah.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Hari Tanpa Hujan (HTH):</span>
                <strong style={{ color: "#34d399" }}>3 Hari (Sangat Pendek)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Kelembapan Tanah 10cm:</span>
                <strong style={{ color: "#fff" }}>78% (Ideal Padi)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Potensi Hama Musim Hujan:</span>
                <strong style={{ color: "#facc15" }}>Moderat (Wereng)</strong>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  borderRadius: "6px",
                  color: "#7dd3fc",
                  fontSize: "0.785rem",
                  fontWeight: 600,
                }}
              >
                ✓ Waktu Tepat Pengolahan Lahan Sawah
              </div>
            </div>
          </div>

          {/* 3. Transportasi & Logistik */}
          <div className="sector-card">
            <div
              className="sector-icon-box"
              style={{ background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b", border: "1px solid rgba(245, 158, 11, 0.3)" }}
            >
              <Truck size={26} />
            </div>
            <h3 className="sector-title">Transportasi & Jalan</h3>
            <p className="sector-desc">
              Monitoring jarak pandang kabut pegunungan, titik genangan jalan provinsi, dan angin lintang jalan tol.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Visibilitas Jalan Tol:</span>
                <strong style={{ color: "#fff" }}>&gt; 9.0 km (Sangat Baik)</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Jalur Lereng Tanjakan:</span>
                <strong style={{ color: "#f87171" }}>Kabut Pukul 17:00 WIB</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Risiko Aquaplaning:</span>
                <strong style={{ color: "#facc15" }}>Sedang Saat Hujan</strong>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  background: "rgba(245, 158, 11, 0.1)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  borderRadius: "6px",
                  color: "#fde68a",
                  fontSize: "0.785rem",
                  fontWeight: 600,
                }}
              >
                ⚠ Kurangi Kecepatan di Jalur Tanjakan Selatan
              </div>
            </div>
          </div>

          {/* 4. Pariwisata & Alam Terbuka */}
          <div className="sector-card">
            <div
              className="sector-icon-box"
              style={{ background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", border: "1px solid rgba(168, 85, 247, 0.3)" }}
            >
              <Sun size={26} />
            </div>
            <h3 className="sector-title">Pariwisata Daerah</h3>
            <p className="sector-desc">
              Informasi kenyamanan biometeorologi bagi wisatawan di destinasi pantai, air terjun, dan bumi perkemahan.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.85rem", borderTop: "1px solid var(--border-subtle)", paddingTop: "14px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Indeks Wisata Pantai:</span>
                <strong style={{ color: "#34d399" }}>Kenyamanan Tinggi</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Wisata Air Terjun/Curug:</span>
                <strong style={{ color: "#f87171" }}>Waspada Air Bah Sore</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "var(--text-muted)" }}>Suhu Kawasan Puncak:</span>
                <strong style={{ color: "#fff" }}>19°C (Sejuk)</strong>
              </div>
              <div
                style={{
                  marginTop: "8px",
                  padding: "8px 12px",
                  background: "rgba(168, 85, 247, 0.1)",
                  border: "1px solid rgba(168, 85, 247, 0.25)",
                  borderRadius: "6px",
                  color: "#e9d5ff",
                  fontSize: "0.785rem",
                  fontWeight: 600,
                }}
              >
                ✓ Destinasi Wisata Pesisir Buka Normal
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
