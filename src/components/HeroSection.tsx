"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CloudSun,
  CloudRain,
  Wind,
  Droplets,
  Compass,
  ArrowRight,
  ShieldCheck,
  Activity,
  Download,
  AlertCircle,
  Eye,
  Thermometer,
} from "lucide-react";

export default function HeroSection() {
  const [selectedCapitalCity, setSelectedCapitalCity] = useState("Kecamatan Kota");

  return (
    <section id="beranda" className="hero-section">
      <div className="section-container">
        <div className="hero-grid">
          {/* Left Column: Headlines & CTA */}
          <div>
            <div className="hero-badge-row">
              <div className="badge-official">
                <ShieldCheck size={16} /> Sistem Resmi PUSDALOPS BPBD
              </div>
              <div className="badge-live-pulse">
                <span className="live-dot" /> Sensor Telemetri Live (AWS IoT)
              </div>
            </div>

            <h1 className="hero-title">
              Sistem Informasi Cuaca &{" "}
              <span className="hero-title-gradient">Peringatan Dini</span> Daerah
            </h1>

            <p className="hero-desc">
              Portal resmi pemerintah daerah untuk pemantauan meteorologi presisi tinggi hingga skala desa.
              Terintegrasi langsung dengan jaringan radar cuaca BMKG, stasiun otomatis AWS IoT, dan komando
              siaga bencana BPBD selama 24 jam nonstop.
            </p>

            <div className="hero-cta-group">
              <a href="#radar" className="btn btn-primary" style={{ padding: "12px 24px" }}>
                <Eye size={18} /> Buka Radar Doppler Live
              </a>
              <a href="#unduh-aplikasi" className="btn btn-secondary" style={{ padding: "12px 24px" }}>
                <Download size={18} /> Unduh Aplikasi Mobile
              </a>
              <a href="#peringatan-dini" className="btn btn-ghost" style={{ padding: "12px 18px" }}>
                <AlertCircle size={18} color="#f59e0b" /> Cek 3 Peringatan Aktif <ArrowRight size={16} />
              </a>
            </div>

            {/* Quick Telemetry Counters */}
            <div className="hero-stats-row">
              <div className="hero-stat-item">
                <h3>42</h3>
                <p>Kecamatan Terpantau Penuh</p>
              </div>
              <div className="hero-stat-item">
                <h3 style={{ color: "#38bdf8" }}>18 AWS</h3>
                <p>Stasiun Cuaca Otomatis IoT</p>
              </div>
              <div className="hero-stat-item">
                <h3 style={{ color: "#10b981" }}>99.8%</h3>
                <p>Uptime Sensor Real-Time</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Live Weather Glass Card */}
          <div>
            <div className="card-glass hero-weather-card">
              <div className="hwc-header">
                <div>
                  <div className="hwc-district">
                    <CloudSun size={20} color="#00d2ff" />
                    <span>Ibu Kota Kabupaten / Daerah</span>
                  </div>
                  <span className="hwc-time">Stasiun AWS Pusat • Diperbarui 3 menit lalu</span>
                </div>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "#34d399",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                  }}
                >
                  STATUS AMAN
                </span>
              </div>

              {/* Weather Main Display */}
              <div className="hwc-main">
                <div>
                  <div className="hwc-temp-block">
                    <span className="hwc-temp">29</span>
                    <span className="hwc-degree">°C</span>
                  </div>
                  <div className="hwc-condition">Berawan Sebagian (Partly Cloudy)</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "4px" }}>
                    Suhu Terasa: 32°C • Titik Embun: 24°C
                  </div>
                </div>

                <div className="hwc-icon-glow">
                  <CloudSun size={44} />
                </div>
              </div>

              {/* 6 Key Weather Telemetry Metrics */}
              <div className="hwc-metrics-grid">
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <Droplets size={13} color="#38bdf8" /> Kelembapan
                  </span>
                  <span className="hwc-metric-val">76%</span>
                </div>
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <Wind size={13} color="#a78bfa" /> Angin
                  </span>
                  <span className="hwc-metric-val">14 km/j B</span>
                </div>
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <CloudRain size={13} color="#60a5fa" /> Curah Hujan
                  </span>
                  <span className="hwc-metric-val">0.2 mm/j</span>
                </div>
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <Activity size={13} color="#f59e0b" /> Tekanan
                  </span>
                  <span className="hwc-metric-val">1012 hPa</span>
                </div>
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <Thermometer size={13} color="#f87171" /> Indeks UV
                  </span>
                  <span className="hwc-metric-val">4 (Moderat)</span>
                </div>
                <div className="hwc-metric">
                  <span className="hwc-metric-label">
                    <Compass size={13} color="#34d399" /> ISPU Udara
                  </span>
                  <span className="hwc-metric-val" style={{ color: "#34d399" }}>
                    48 (Baik)
                  </span>
                </div>
              </div>

              {/* Live Radar Thumbnail Box */}
              <a href="#radar" style={{ textDecoration: "none", display: "block" }}>
                <div className="hwc-radar-preview">
                  <Image
                    src="/images/radar-map.jpg"
                    alt="Radar Cuaca Daerah"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="hwc-radar-overlay">
                    <div>
                      <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#fff" }}>
                        Pantauan Radar Doppler Live
                      </div>
                      <div style={{ fontSize: "0.725rem", color: "#38bdf8" }}>
                        Awan konvektif terpantau bergerak ke arah barat daya
                      </div>
                    </div>
                    <span
                      style={{
                        padding: "4px 8px",
                        background: "rgba(0, 210, 255, 0.2)",
                        border: "1px solid var(--accent-cyan)",
                        borderRadius: "6px",
                        fontSize: "0.7rem",
                        color: "#fff",
                        fontWeight: 600,
                      }}
                    >
                      Buka Peta &rarr;
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
