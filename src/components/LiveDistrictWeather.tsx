"use client";

import { useState } from "react";
import {
  MapPin,
  CloudSun,
  CloudRain,
  CloudLightning,
  Sun,
  Wind,
  Droplets,
  Gauge,
  Radio,
  Clock,
  Calendar,
  CloudFog,
} from "lucide-react";

interface DistrictData {
  id: string;
  name: string;
  type: string;
  temp: number;
  feelsLike: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  windDir: string;
  rainMm: number;
  pressure: number;
  uvIndex: number;
  elevation: number;
  stationCode: string;
  status: "Normal" | "Waspada" | "Siaga";
  hourly: {
    time: string;
    temp: number;
    icon: string;
    rainProb: number;
  }[];
  forecast: {
    day: string;
    condition: string;
    high: number;
    low: number;
    rainChance: number;
  }[];
}

const DISTRICT_DATA: DistrictData[] = [
  {
    id: "pusat",
    name: "Kecamatan Kota & Pusat Pemerintahan",
    type: "Kawasan Perkotaan",
    temp: 29,
    feelsLike: 33,
    condition: "Berawan Tebal",
    icon: "cloudy",
    humidity: 78,
    windSpeed: 12,
    windDir: "Barat Daya",
    rainMm: 1.5,
    pressure: 1011,
    uvIndex: 5,
    elevation: 45,
    stationCode: "AWS-KOTA-01",
    status: "Normal",
    hourly: [
      { time: "11:00", temp: 29, icon: "cloudy", rainProb: 20 },
      { time: "13:00", temp: 31, icon: "rain-light", rainProb: 45 },
      { time: "15:00", temp: 28, icon: "rain-heavy", rainProb: 80 },
      { time: "17:00", temp: 26, icon: "rain-light", rainProb: 60 },
      { time: "19:00", temp: 25, icon: "cloudy", rainProb: 30 },
      { time: "21:00", temp: 24, icon: "partly-cloudy", rainProb: 15 },
    ],
    forecast: [
      { day: "Hari Ini", condition: "Hujan Sedang Sore Hari", high: 31, low: 24, rainChance: 80 },
      { day: "Besok", condition: "Cerah Berawan", high: 32, low: 23, rainChance: 25 },
      { day: "Lusa", condition: "Hujan Ringan", high: 30, low: 24, rainChance: 55 },
      { day: "Jumat", condition: "Berawan", high: 31, low: 24, rainChance: 30 },
      { day: "Sabtu", condition: "Hujan Petir", high: 29, low: 23, rainChance: 85 },
    ],
  },
  {
    id: "pesisir",
    name: "Kecamatan Pesisir & Pelabuhan Samudera",
    type: "Kawasan Pesisir & Maritim",
    temp: 31,
    feelsLike: 36,
    condition: "Cerah Berawan & Angin Laut",
    icon: "partly-cloudy",
    humidity: 82,
    windSpeed: 24,
    windDir: "Tenggara",
    rainMm: 0.0,
    pressure: 1013,
    uvIndex: 8,
    elevation: 5,
    stationCode: "AWS-MARITIM-04",
    status: "Waspada",
    hourly: [
      { time: "11:00", temp: 31, icon: "partly-cloudy", rainProb: 10 },
      { time: "13:00", temp: 32, icon: "sunny", rainProb: 10 },
      { time: "15:00", temp: 30, icon: "windy", rainProb: 20 },
      { time: "17:00", temp: 28, icon: "partly-cloudy", rainProb: 35 },
      { time: "19:00", temp: 27, icon: "cloudy", rainProb: 40 },
      { time: "21:00", temp: 26, icon: "cloudy", rainProb: 25 },
    ],
    forecast: [
      { day: "Hari Ini", condition: "Angin Kencang & Ombak Sedang", high: 32, low: 25, rainChance: 35 },
      { day: "Besok", condition: "Cerah Terik", high: 33, low: 25, rainChance: 15 },
      { day: "Lusa", condition: "Hujan Lokal", high: 31, low: 25, rainChance: 40 },
      { day: "Jumat", condition: "Berawan", high: 31, low: 24, rainChance: 30 },
      { day: "Sabtu", condition: "Angin Kencang Pesisir", high: 30, low: 24, rainChance: 60 },
    ],
  },
  {
    id: "lereng",
    name: "Kecamatan Dataran Tinggi & Lereng Gunung",
    type: "Kawasan Hulu & Resapan",
    temp: 21,
    feelsLike: 21,
    condition: "Kabut Tebal & Hujan Deras",
    icon: "rain-heavy",
    humidity: 94,
    windSpeed: 16,
    windDir: "Selatan",
    rainMm: 28.5,
    pressure: 980,
    uvIndex: 2,
    elevation: 1150,
    stationCode: "AWS-LERENG-09",
    status: "Siaga",
    hourly: [
      { time: "11:00", temp: 21, icon: "fog", rainProb: 70 },
      { time: "13:00", temp: 20, icon: "rain-heavy", rainProb: 95 },
      { time: "15:00", temp: 19, icon: "thunder", rainProb: 90 },
      { time: "17:00", temp: 18, icon: "rain-heavy", rainProb: 85 },
      { time: "19:00", temp: 17, icon: "fog", rainProb: 65 },
      { time: "21:00", temp: 16, icon: "fog", rainProb: 50 },
    ],
    forecast: [
      { day: "Hari Ini", condition: "Siaga Banjir Aliran & Longsor", high: 22, low: 16, rainChance: 95 },
      { day: "Besok", condition: "Hujan Sedang Sore", high: 23, low: 17, rainChance: 80 },
      { day: "Lusa", condition: "Kabut Pagi & Gerimis", high: 22, low: 16, rainChance: 70 },
      { day: "Jumat", condition: "Hujan Ringan", high: 23, low: 16, rainChance: 60 },
      { day: "Sabtu", condition: "Hujan Deras Disertai Petir", high: 21, low: 15, rainChance: 90 },
    ],
  },
  {
    id: "industri",
    name: "Kecamatan Kawasan Industri & Logistik",
    type: "Kawasan Strategis Ekonomi",
    temp: 30,
    feelsLike: 34,
    condition: "Berawan Tebal",
    icon: "cloudy",
    humidity: 74,
    windSpeed: 10,
    windDir: "Timur Laut",
    rainMm: 2.1,
    pressure: 1010,
    uvIndex: 6,
    elevation: 32,
    stationCode: "AWS-IND-03",
    status: "Normal",
    hourly: [
      { time: "11:00", temp: 30, icon: "cloudy", rainProb: 15 },
      { time: "13:00", temp: 32, icon: "cloudy", rainProb: 30 },
      { time: "15:00", temp: 29, icon: "rain-light", rainProb: 60 },
      { time: "17:00", temp: 27, icon: "rain-light", rainProb: 50 },
      { time: "19:00", temp: 26, icon: "cloudy", rainProb: 20 },
      { time: "21:00", temp: 25, icon: "cloudy", rainProb: 15 },
    ],
    forecast: [
      { day: "Hari Ini", condition: "Hujan Lokal Menjelang Sore", high: 32, low: 24, rainChance: 60 },
      { day: "Besok", condition: "Cerah Berawan", high: 33, low: 24, rainChance: 20 },
      { day: "Lusa", condition: "Berawan", high: 32, low: 24, rainChance: 35 },
      { day: "Jumat", condition: "Hujan Ringan", high: 30, low: 23, rainChance: 50 },
      { day: "Sabtu", condition: "Berawan Tebal", high: 31, low: 24, rainChance: 40 },
    ],
  },
  {
    id: "agropolitan",
    name: "Kecamatan Agropolitan Pertanian Barat",
    type: "Sentra Pangan & Pertanian",
    temp: 27,
    feelsLike: 29,
    condition: "Hujan Ringan Menyegarkan",
    icon: "rain-light",
    humidity: 85,
    windSpeed: 8,
    windDir: "Barat",
    rainMm: 6.4,
    pressure: 1008,
    uvIndex: 4,
    elevation: 180,
    stationCode: "AWS-AGRO-07",
    status: "Normal",
    hourly: [
      { time: "11:00", temp: 27, icon: "rain-light", rainProb: 75 },
      { time: "13:00", temp: 28, icon: "rain-light", rainProb: 65 },
      { time: "15:00", temp: 27, icon: "cloudy", rainProb: 40 },
      { time: "17:00", temp: 25, icon: "cloudy", rainProb: 25 },
      { time: "19:00", temp: 24, icon: "partly-cloudy", rainProb: 15 },
      { time: "21:00", temp: 23, icon: "partly-cloudy", rainProb: 10 },
    ],
    forecast: [
      { day: "Hari Ini", condition: "Hujan Berkala Bagus Untuk Tanaman", high: 28, low: 22, rainChance: 75 },
      { day: "Besok", condition: "Hujan Ringan Pagi Hari", high: 29, low: 22, rainChance: 65 },
      { day: "Lusa", condition: "Cerah Berawan", high: 30, low: 22, rainChance: 30 },
      { day: "Jumat", condition: "Hujan Sedang", high: 28, low: 21, rainChance: 70 },
      { day: "Sabtu", condition: "Hujan Sedang", high: 28, low: 22, rainChance: 70 },
    ],
  },
];

export default function LiveDistrictWeather() {
  const [activeTab, setActiveTab] = useState(DISTRICT_DATA[0].id);

  const current = DISTRICT_DATA.find((d) => d.id === activeTab) || DISTRICT_DATA[0];

  const renderIcon = (icon: string, size = 24) => {
    switch (icon) {
      case "sunny":
        return <Sun size={size} color="#f59e0b" />;
      case "partly-cloudy":
        return <CloudSun size={size} color="#38bdf8" />;
      case "cloudy":
        return <CloudSun size={size} color="#94a3b8" />;
      case "rain-light":
        return <CloudRain size={size} color="#60a5fa" />;
      case "rain-heavy":
        return <CloudRain size={size} color="#00d2ff" />;
      case "thunder":
        return <CloudLightning size={size} color="#f59e0b" />;
      case "fog":
        return <CloudFog size={size} color="#cbd5e1" />;
      default:
        return <CloudSun size={size} color="#38bdf8" />;
    }
  };

  return (
    <section id="cuaca-daerah" className="section" style={{ backgroundColor: "rgba(10, 18, 36, 0.4)" }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <MapPin size={14} /> Jaringan Sensor Presisi Wilayah
          </span>
          <h2 className="section-title">Prakiraan Cuaca Per Kecamatan Real-Time</h2>
          <p className="section-subtitle">
            Pilih wilayah kecamatan untuk memantau data meteorologi real-time dari sensor telemetri otomatis
            AWS IoT pemerintah daerah yang diperbarui setiap 10 menit.
          </p>
        </div>

        {/* District Selector Tabs */}
        <div className="district-tabs" role="tablist">
          {DISTRICT_DATA.map((dist) => (
            <button
              key={dist.id}
              onClick={() => setActiveTab(dist.id)}
              className={`district-tab-btn ${activeTab === dist.id ? "active" : ""}`}
              role="tab"
              aria-selected={activeTab === dist.id}
            >
              <MapPin size={14} />
              <span>{dist.name}</span>
              {dist.status === "Siaga" && (
                <span
                  style={{
                    backgroundColor: "#ef4444",
                    color: "#fff",
                    borderRadius: "999px",
                    padding: "1px 6px",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                  }}
                >
                  SIAGA
                </span>
              )}
              {dist.status === "Waspada" && (
                <span
                  style={{
                    backgroundColor: "#f59e0b",
                    color: "#000",
                    borderRadius: "999px",
                    padding: "1px 6px",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                  }}
                >
                  WASPADA
                </span>
              )}
            </button>
          ))}
        </div>

        {/* District Detail Showcase */}
        <div
          className="card-glass"
          style={{
            padding: "36px",
            background: "linear-gradient(145deg, rgba(16, 29, 54, 0.85) 0%, rgba(9, 17, 33, 0.95) 100%)",
          }}
        >
          {/* Top Bar of Active District */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              borderBottom: "1px solid var(--border-subtle)",
              paddingBottom: "24px",
              marginBottom: "28px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#fff" }}>
                  {current.name}
                </h3>
                <span
                  style={{
                    padding: "4px 10px",
                    borderRadius: "6px",
                    backgroundColor: "rgba(0, 210, 255, 0.12)",
                    color: "var(--accent-cyan)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    border: "1px solid rgba(0, 210, 255, 0.25)",
                  }}
                >
                  {current.type}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  marginTop: "8px",
                  flexWrap: "wrap",
                }}
              >
                <span>
                  <Radio size={14} style={{ verticalAlign: "middle", marginRight: "4px", color: "#10b981" }} />
                  ID Stasiun: <strong>{current.stationCode}</strong>
                </span>
                <span>• Elevasi: <strong>{current.elevation} mdpl</strong></span>
                <span>• Status Jaringan: <strong style={{ color: "#34d399" }}>Online (Delay 0.8s)</strong></span>
              </div>
            </div>

            {/* Severity Tag */}
            <div>
              {current.status === "Siaga" ? (
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    border: "1px solid rgba(239, 68, 68, 0.4)",
                    color: "#fca5a5",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span className="live-dot" style={{ backgroundColor: "#ef4444" }} />
                  STATUS SIAGA: Potensi Longsor & Banjir Aliran
                </div>
              ) : current.status === "Waspada" ? (
                <div
                  style={{
                    background: "rgba(245, 158, 11, 0.15)",
                    border: "1px solid rgba(245, 158, 11, 0.4)",
                    color: "#fcd34d",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span className="live-dot" style={{ backgroundColor: "#f59e0b" }} />
                  STATUS WASPADA: Angin Kencang Pesisir
                </div>
              ) : (
                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    color: "#6ee7b7",
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span className="live-dot" />
                  KONDISI AMAN & TERKENDALI
                </div>
              )}
            </div>
          </div>

          {/* Current Telemetry Dashboard */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginBottom: "32px",
            }}
          >
            {/* Primary Temp Box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                background: "rgba(255, 255, 255, 0.03)",
                padding: "20px",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div
                style={{
                  width: "74px",
                  height: "74px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(0, 210, 255, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(0, 210, 255, 0.3)",
                }}
              >
                {renderIcon(current.icon, 40)}
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
                  <span style={{ fontSize: "3.5rem", fontWeight: 900, lineHeight: 1, color: "#fff" }}>
                    {current.temp}
                  </span>
                  <span style={{ fontSize: "2rem", color: "var(--accent-cyan)", fontWeight: 700 }}>
                    °C
                  </span>
                </div>
                <div style={{ fontWeight: 700, color: "#93c5fd", fontSize: "1.05rem" }}>
                  {current.condition}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-dim)" }}>
                  Terasa seperti {current.feelsLike}°C
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
              }}
            >
              <div className="hwc-metric">
                <span className="hwc-metric-label">
                  <Droplets size={14} color="#38bdf8" /> Kelembapan
                </span>
                <span className="hwc-metric-val">{current.humidity}%</span>
              </div>
              <div className="hwc-metric">
                <span className="hwc-metric-label">
                  <Wind size={14} color="#a78bfa" /> Kecepatan Angin
                </span>
                <span className="hwc-metric-val">{current.windSpeed} km/j ({current.windDir})</span>
              </div>
              <div className="hwc-metric">
                <span className="hwc-metric-label">
                  <CloudRain size={14} color="#60a5fa" /> Curah Hujan
                </span>
                <span className="hwc-metric-val">{current.rainMm} mm/jam</span>
              </div>
              <div className="hwc-metric">
                <span className="hwc-metric-label">
                  <Gauge size={14} color="#f59e0b" /> Tekanan Udara
                </span>
                <span className="hwc-metric-val">{current.pressure} hPa</span>
              </div>
            </div>
          </div>

          {/* Hourly Timeline */}
          <div style={{ marginTop: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "14px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "#fff" }}>
                <Clock size={16} color="var(--accent-cyan)" />
                Prakiraan Per 2 Jam Mendatang
              </div>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                Model Prediksi Cuaca Berbasis AI (WRF-NWP Daerah)
              </span>
            </div>

            <div className="hourly-timeline">
              {current.hourly.map((h, idx) => (
                <div key={idx} className="hourly-card">
                  <div className="hourly-time">{h.time} WIB</div>
                  <div style={{ display: "flex", justifyContent: "center", margin: "6px 0" }}>
                    {renderIcon(h.icon, 24)}
                  </div>
                  <div className="hourly-temp">{h.temp}°</div>
                  <div className="hourly-rain">💧 {h.rainProb}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Outlook */}
          <div style={{ marginTop: "32px", borderTop: "1px solid var(--border-subtle)", paddingTop: "24px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              <Calendar size={16} color="var(--accent-cyan)" />
              Prakiraan Cuaca 5 Hari ke Depan
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
              }}
            >
              {current.forecast.map((f, i) => (
                <div
                  key={i}
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 16px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "#fff", fontSize: "0.9rem" }}>{f.day}</span>
                    <span style={{ fontSize: "0.75rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                      Hujan {f.rainChance}%
                    </span>
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", margin: "4px 0 8px 0" }}>
                    {f.condition}
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
                    <span style={{ color: "#f87171", fontWeight: 700 }}>Max: {f.high}°C</span>
                    <span style={{ color: "#60a5fa", fontWeight: 600 }}>Min: {f.low}°C</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
