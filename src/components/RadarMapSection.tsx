"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Radar,
  Layers,
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Info,
  Radio,
  MapPin,
  AlertTriangle,
  Zap,
} from "lucide-react";

interface SensorPin {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  rainRate: string;
  wind: string;
  status: "Normal" | "Waspada" | "Siaga";
}

const SENSOR_PINS: SensorPin[] = [
  { id: "p1", name: "AWS Sektor Barat (Lereng)", x: 32, y: 56, rainRate: "28.5 mm/j", wind: "16 km/j", status: "Siaga" },
  { id: "p2", name: "AWS Pelabuhan Samudera", x: 44, y: 64, rainRate: "0.0 mm/j", wind: "24 km/j", status: "Waspada" },
  { id: "p3", name: "AWS Pusat Kota & Pemda", x: 38, y: 52, rainRate: "1.5 mm/j", wind: "12 km/j", status: "Normal" },
  { id: "p4", name: "AWS Industri Timur", x: 50, y: 48, rainRate: "2.1 mm/j", wind: "10 km/j", status: "Normal" },
  { id: "p5", name: "AWS Hulu Sungai Citarang", x: 28, y: 44, rainRate: "18.2 mm/j", wind: "14 km/j", status: "Waspada" },
];

export default function RadarMapSection() {
  const [activeLayer, setActiveLayer] = useState<"radar" | "satelit" | "banjir" | "sensor">("radar");
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeStep, setTimeStep] = useState(3); // index in times array
  const [selectedPin, setSelectedPin] = useState<SensorPin | null>(null);

  const timeLabels = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00"];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setTimeStep((prev) => (prev + 1) % timeLabels.length);
      }, 1400);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLabels.length]);

  return (
    <section id="radar" className="section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <Radar size={14} /> Telemetri Doppler 5.6 GHz
          </span>
          <h2 className="section-title">Radar Cuaca & Citra Satelit Interaktif</h2>
          <p className="section-subtitle">
            Pantau pergerakan awan konvektif penghasil hujan lebat, hembusan angin kencang, dan daerah tangkapan
            air di seluruh wilayah kabupaten/kota secara real-time.
          </p>
        </div>

        {/* Layer Selector Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveLayer("radar")}
              className={`district-tab-btn ${activeLayer === "radar" ? "active" : ""}`}
            >
              <Radar size={15} /> Radar Hujan Doppler
            </button>
            <button
              onClick={() => setActiveLayer("satelit")}
              className={`district-tab-btn ${activeLayer === "satelit" ? "active" : ""}`}
            >
              <Layers size={15} /> Satelit Himawari-9 (IR)
            </button>
            <button
              onClick={() => setActiveLayer("banjir")}
              className={`district-tab-btn ${activeLayer === "banjir" ? "active" : ""}`}
            >
              <AlertTriangle size={15} /> Peta Kerentanan Banjir
            </button>
            <button
              onClick={() => setActiveLayer("sensor")}
              className={`district-tab-btn ${activeLayer === "sensor" ? "active" : ""}`}
            >
              <Radio size={15} /> Jaringan Sensor AWS
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span className="live-dot" /> Radar Sweep: <strong>Aktif (Update Tiap 2 Menit)</strong>
            </span>
          </div>
        </div>

        {/* Main Radar Screen & HUD */}
        <div className="radar-container">
          <div className="radar-screen-wrapper">
            <Image
              src="/images/radar-map.jpg"
              alt="Peta Radar Cuaca Daerah"
              fill
              className="radar-screen-img"
              priority
            />

            {/* Simulated Animated Sweep Effect Overlay */}
            <div
              style={{
                position: "absolute",
                top: "35%",
                left: "32%",
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "1px dashed rgba(0, 210, 255, 0.4)",
                pointerEvents: "none",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, rgba(0, 210, 255, 0.25) 0deg, rgba(0, 210, 255, 0) 60deg, transparent 360deg)",
                  animation: "radarSweep 4s linear infinite",
                }}
              />
            </div>

            {/* Sensor Hotspot Pins on the Map */}
            {SENSOR_PINS.map((pin) => (
              <div
                key={pin.id}
                onClick={() => setSelectedPin(pin)}
                style={{
                  position: "absolute",
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  zIndex: 20,
                }}
                title={pin.name}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    background:
                      pin.status === "Siaga"
                        ? "rgba(239, 68, 68, 0.9)"
                        : pin.status === "Waspada"
                        ? "rgba(245, 158, 11, 0.9)"
                        : "rgba(16, 185, 129, 0.9)",
                    border: "2px solid #ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 12px rgba(0, 210, 255, 0.6)",
                    transition: "transform 0.2s ease",
                  }}
                >
                  <MapPin size={13} color="#fff" />
                </div>
              </div>
            ))}

            {/* Selected Pin Popover */}
            {selectedPin && (
              <div
                style={{
                  position: "absolute",
                  left: `${selectedPin.x}%`,
                  top: `${Math.max(10, selectedPin.y - 18)}%`,
                  transform: "translate(-50%, -100%)",
                  background: "rgba(6, 12, 26, 0.95)",
                  border: "1px solid var(--accent-cyan)",
                  borderRadius: "var(--radius-md)",
                  padding: "12px 16px",
                  zIndex: 30,
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.8)",
                  minWidth: "220px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <strong style={{ fontSize: "0.85rem", color: "#fff" }}>{selectedPin.name}</strong>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPin(null);
                    }}
                    style={{ background: "transparent", border: "none", color: "#94a3b8", cursor: "pointer" }}
                  >
                    ✕
                  </button>
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "3px" }}>
                  <div>Intensitas Hujan: <strong style={{ color: "#38bdf8" }}>{selectedPin.rainRate}</strong></div>
                  <div>Kecepatan Angin: <strong style={{ color: "#a78bfa" }}>{selectedPin.wind}</strong></div>
                  <div>Status Mitigasi: <strong style={{ color: selectedPin.status === "Siaga" ? "#f87171" : "#34d399" }}>{selectedPin.status}</strong></div>
                </div>
              </div>
            )}

            {/* HUD Overlay Elements */}
            <div className="radar-screen-hud">
              <div className="radar-hud-top">
                <div
                  style={{
                    background: "rgba(6, 12, 26, 0.75)",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "0.8rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Radio size={14} color="#00d2ff" />
                  <span>Stasiun Radar: <strong>DOPPLER-REGIONAL-01</strong></span>
                </div>

                <div
                  style={{
                    background: "rgba(6, 12, 26, 0.75)",
                    padding: "6px 14px",
                    borderRadius: "8px",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    fontSize: "0.8rem",
                    color: "var(--accent-cyan)",
                    fontWeight: 700,
                  }}
                >
                  {timeLabels[timeStep]} WIB (Playback Real-Time)
                </div>
              </div>

              {/* Bottom Scrubber & Controls */}
              <div className="radar-hud-bottom">
                <div
                  style={{
                    background: "rgba(6, 12, 26, 0.88)",
                    backdropFilter: "blur(10px)",
                    padding: "12px 18px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    width: "100%",
                    maxWidth: "520px",
                  }}
                >
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="btn btn-primary"
                    style={{ padding: "6px 14px", fontSize: "0.775rem" }}
                  >
                    {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                    {isPlaying ? "Jeda" : "Putar"}
                  </button>

                  <button
                    onClick={() => setTimeStep(0)}
                    style={{
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "6px",
                      color: "#fff",
                      padding: "6px 10px",
                      cursor: "pointer",
                    }}
                    title="Reset Timeline"
                  >
                    <RotateCcw size={14} />
                  </button>

                  {/* Scrubber slider */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
                    <input
                      type="range"
                      min={0}
                      max={timeLabels.length - 1}
                      value={timeStep}
                      onChange={(e) => setTimeStep(Number(e.target.value))}
                      style={{
                        width: "100%",
                        accentColor: "var(--accent-cyan)",
                        cursor: "pointer",
                      }}
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.68rem", color: "var(--text-muted)" }}>
                      <span>09:00</span>
                      <span>12:00</span>
                      <span>15:00</span>
                    </div>
                  </div>
                </div>

                {/* Legend Bar */}
                <div
                  style={{
                    background: "rgba(6, 12, 26, 0.88)",
                    backdropFilter: "blur(10px)",
                    padding: "8px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    fontSize: "0.75rem",
                  }}
                >
                  <div style={{ color: "var(--text-dim)", marginBottom: "4px", fontSize: "0.7rem" }}>
                    Skala Reflektifitas Hujan (dBZ)
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ display: "inline-block", width: "12px", height: "8px", background: "#38bdf8", borderRadius: "2px" }} /> Ringan (15-25)
                    <span style={{ display: "inline-block", width: "12px", height: "8px", background: "#facc15", borderRadius: "2px", marginLeft: "4px" }} /> Sedang (30-40)
                    <span style={{ display: "inline-block", width: "12px", height: "8px", background: "#ef4444", borderRadius: "2px", marginLeft: "4px" }} /> Lebat (50+)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Telemetry Diagnostics Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="card-glass" style={{ padding: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fff", fontWeight: 700, marginBottom: "16px" }}>
                <Zap size={18} color="#00d2ff" />
                Spesifikasi Radar Pemda
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--text-muted)" }}>Tipe Radar</span>
                  <span style={{ fontWeight: 700, color: "#fff" }}>Doppler Dual-Polarisasi</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--text-muted)" }}>Frekuensi Kerja</span>
                  <span style={{ fontWeight: 700, color: "#fff" }}>5.6 GHz (C-Band)</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--text-muted)" }}>Radius Pemindaian</span>
                  <span style={{ fontWeight: 700, color: "var(--accent-cyan)" }}>120 Kilometer</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
                  <span style={{ color: "var(--text-muted)" }}>Resolusi Spasial</span>
                  <span style={{ fontWeight: 700, color: "#fff" }}>250 Meter / Grid</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "var(--text-muted)" }}>Latensi Telemetri</span>
                  <span style={{ fontWeight: 700, color: "#10b981" }}>1.2 Detik (Real-Time)</span>
                </div>
              </div>
            </div>

            {/* Active Radar Warning Alert Box */}
            <div
              className="card-glass"
              style={{
                padding: "20px",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                background: "linear-gradient(145deg, rgba(245, 158, 11, 0.08) 0%, rgba(14, 25, 45, 0.9) 100%)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#fbbf24", fontWeight: 700, marginBottom: "8px" }}>
                <AlertTriangle size={16} />
                Analisis Dinamika Awan
              </div>
              <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                Citra radar mendeteksi pertumbuhan sel awan Cumulonimbus (CB) aktif di koridor barat daya bergerak
                dengan kecepatan 18 knot menuju wilayah permukiman padat. Potensi kilat dan angin kencang berdurasi
                singkat antara pukul 13:30 - 15:00 WIB.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
