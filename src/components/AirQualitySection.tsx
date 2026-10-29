"use client";

import { useState } from "react";
import {
  Wind,
  ShieldCheck,
  HeartPulse,
  Baby,
  Smile,
  AlertCircle,
  Home,
  Check,
} from "lucide-react";

export default function AirQualitySection() {
  const [selectedCity, setSelectedCity] = useState("Pusat Kota");

  return (
    <section id="kualitas-udara" className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag" style={{ background: "rgba(16, 185, 129, 0.15)", color: "#34d399", borderColor: "rgba(16, 185, 129, 0.3)" }}>
            <Wind size={14} /> SPKU DLH & KLHK Terintegrasi
          </span>
          <h2 className="section-title">Indeks Standar Pencemar Udara (ISPU)</h2>
          <p className="section-subtitle">
            Pemantauan partikulat mikroskopis PM2.5, PM10, dan gas polutan secara real-time dari Stasiun Pemantau
            Kualitas Udara Otomatis Dinas Lingkungan Hidup daerah.
          </p>
        </div>

        <div className="card-glass ispu-container" style={{ padding: "40px" }}>
          {/* Left Column: Gauge & Main Score */}
          <div className="ispu-gauge-card">
            <div className="ispu-gauge-circle">
              <span className="ispu-number">48</span>
              <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", marginTop: "2px" }}>
                Skala ISPU (0-500)
              </span>
            </div>

            <div className="ispu-status-tag" style={{ color: "#34d399" }}>
              KATEGORI: BAIK (GOOD)
            </div>

            <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "8px", maxWidth: "260px" }}>
              Kualitas udara tidak memberikan efek negatif terhadap kesehatan manusia atau hewan.
            </p>

            <div
              style={{
                marginTop: "16px",
                fontSize: "0.75rem",
                color: "var(--text-dim)",
                background: "rgba(255, 255, 255, 0.04)",
                padding: "6px 14px",
                borderRadius: "999px",
                border: "1px solid var(--border-subtle)",
              }}
            >
              Stasiun SPKU-01 Balai Kota • Update: 10:20 WIB
            </div>
          </div>

          {/* Right Column: Pollutant Matrix & Health Advisory */}
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "16px" }}>
              Konsentrasi Polutan Utama
            </h3>

            {/* Pollutants Matrix */}
            <div className="pollutant-grid" style={{ marginBottom: "28px" }}>
              <div className="pollutant-item">
                <div className="pollutant-name">PM 2.5</div>
                <div className="pollutant-val" style={{ color: "#34d399" }}>12.4 <span style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>µg/m³</span></div>
                <div style={{ fontSize: "0.68rem", color: "#34d399", marginTop: "2px" }}>Sangat Baik</div>
              </div>
              <div className="pollutant-item">
                <div className="pollutant-name">PM 10</div>
                <div className="pollutant-val">28.1 <span style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>µg/m³</span></div>
                <div style={{ fontSize: "0.68rem", color: "#34d399", marginTop: "2px" }}>Aman</div>
              </div>
              <div className="pollutant-item">
                <div className="pollutant-name">CO (Karbon)</div>
                <div className="pollutant-val">0.6 <span style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>ppm</span></div>
                <div style={{ fontSize: "0.68rem", color: "#34d399", marginTop: "2px" }}>Rendah</div>
              </div>
              <div className="pollutant-item">
                <div className="pollutant-name">O₃ (Ozon)</div>
                <div className="pollutant-val">34.0 <span style={{ fontSize: "0.7rem", color: "var(--text-dim)" }}>µg/m³</span></div>
                <div style={{ fontSize: "0.68rem", color: "#34d399", marginTop: "2px" }}>Normal</div>
              </div>
            </div>

            {/* Health Recommendations */}
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginBottom: "14px" }}>
              Panduan Aktivitas Warga
            </h3>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <Smile size={18} color="#34d399" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Olahraga Luar Ruang</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Sangat direkomendasikan, kualitas udara bersih dan segar.</div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <Baby size={18} color="#38bdf8" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Anak & Lansia</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Aman bermain di luar tanpa batasan waktu khusus.</div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <Home size={18} color="#a78bfa" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Ventilasi Ruangan</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Jendela rumah dapat dibuka untuk sirkulasi udara alami.</div>
                </div>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 14px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <ShieldCheck size={18} color="#10b981" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>Penggunaan Masker</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>Tidak diwajibkan untuk parameter polusi saat ini.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
