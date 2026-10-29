"use client";

import Image from "next/image";
import {
  Smartphone,
  BellRing,
  QrCode,
  ShieldCheck,
  Zap,
  Radio,
  Download,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

export default function AppDownloadSection() {
  return (
    <section id="unduh-aplikasi" className="section">
      <div className="section-container">
        <div className="app-download-grid">
          {/* Left Column: Info, Badges & Highlights */}
          <div>
            <span className="section-tag">
              <Smartphone size={14} /> Aplikasi Mobile Resmi Pemda
            </span>

            <h2 className="section-title" style={{ fontSize: "2.35rem" }}>
              Aplikasi Cuaca & Siaga Bencana di Genggaman Anda
            </h2>

            <p className="section-subtitle" style={{ textAlign: "left", marginBottom: "28px" }}>
              Dapatkan notifikasi peringatan dini hidrometeorologi secara instan ketika ada potensi bahaya dalam
              radius 5 km dari lokasi Anda, dilengkapi tombol darurat 112 dan radar per jam.
            </p>

            {/* Feature Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "32px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    background: "rgba(0, 210, 255, 0.15)",
                    padding: "6px",
                    borderRadius: "6px",
                    color: "var(--accent-cyan)",
                  }}
                >
                  <BellRing size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "#fff" }}>
                    Push Notification Geofencing Otomatis
                  </strong>
                  <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
                    Peringatan waspada banjir atau pohon tumbang langsung dikirimkan ke layar HP Anda sebelum badai tiba.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.15)",
                    padding: "6px",
                    borderRadius: "6px",
                    color: "#f87171",
                  }}
                >
                  <Zap size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "#fff" }}>
                    Panic Button SOS 112 Terintegrasi
                  </strong>
                  <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
                    Satu sentuhan langsung menghubungkan suara & titik koordinat GPS ke regu penyelamat PUSDALOPS BPBD.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.15)",
                    padding: "6px",
                    borderRadius: "6px",
                    color: "#34d399",
                  }}
                >
                  <MessageSquare size={16} />
                </div>
                <div>
                  <strong style={{ fontSize: "0.95rem", color: "#fff" }}>
                    Tersedia Kanal Chatbot WhatsApp Resmi
                  </strong>
                  <p style={{ fontSize: "0.825rem", color: "var(--text-muted)" }}>
                    Ketik kata kunci <em>CUACA KECAMATAN</em> ke nomor WhatsApp terverifikasi pemda untuk cek otomatis.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Buttons Group */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", flexWrap: "wrap", marginBottom: "24px" }}>
              {/* Google Play Button */}
              <a
                href="#unduh-aplikasi"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#1e293b",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "var(--radius-md)",
                  padding: "10px 18px",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontSize: "1.4rem" }}>▶</div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    DAPATKAN DI
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>Google Play</div>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#unduh-aplikasi"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#1e293b",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "var(--radius-md)",
                  padding: "10px 18px",
                  color: "#fff",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                <div style={{ fontSize: "1.4rem" }}></div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.68rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    UNDUH DARI
                  </div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 700 }}>App Store</div>
                </div>
              </a>

              {/* Direct APK Link */}
              <a
                href="#unduh-aplikasi"
                className="btn btn-secondary"
                style={{ padding: "10px 16px" }}
              >
                <Download size={16} /> Unduh File APK Resmi
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.785rem", color: "var(--text-dim)" }}>
              <ShieldCheck size={15} color="#10b981" />
              <span>Aplikasi Bebas Iklan • Terdaftar Resmi di PSE Kominfo & BSSN RI</span>
            </div>
          </div>

          {/* Right Column: Realistic Phone Mockup Display */}
          <div className="app-phone-img-wrap">
            <Image
              src="/images/mobile-app.jpg"
              alt="Mockup Aplikasi Cuaca Pemerintah Daerah"
              width={380}
              height={506}
              className="app-phone-img"
              priority
            />

            {/* Floating QR Tag */}
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                right: "10px",
                background: "rgba(6, 12, 26, 0.92)",
                backdropFilter: "blur(10px)",
                border: "1px solid var(--accent-cyan)",
                borderRadius: "var(--radius-md)",
                padding: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  padding: "4px",
                  borderRadius: "6px",
                  display: "flex",
                }}
              >
                <QrCode size={38} color="#000" />
              </div>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fff" }}>Pindai QR Code</div>
                <div style={{ fontSize: "0.68rem", color: "var(--text-muted)" }}>Download Cepat Semua Perangkat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
