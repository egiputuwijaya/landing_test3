"use client";

import { useState } from "react";
import {
  CloudLightning,
  AlertTriangle,
  PhoneCall,
  Menu,
  X,
  ShieldCheck,
  Radio,
  ExternalLink,
} from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Government Bulletin Bar */}
      <aside aria-label="Pengumuman Siaga Cuaca" className="gov-topbar">
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span className="gov-topbar-badge">
            <ShieldCheck size={14} /> PORTAL RESMI PEMERINTAH DAERAH
          </span>
          <div className="gov-topbar-alert">
            <AlertTriangle size={14} />
            <span>
              <strong>UPDATE PERINGATAN (10:15 WIB):</strong> Waspada potensi hujan disertai kilat/petir di Wilayah Selatan & Lereng Perbukitan.
            </span>
          </div>
        </div>

        <div className="gov-topbar-links">
          <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", color: "#38bdf8" }}>
            <Radio size={13} className="live-dot" /> Sensor Telemetri Terhubung: <strong>42 Stasiun</strong>
          </span>
          <a
            href="tel:112"
            style={{
              color: "#fca5a5",
              fontWeight: 700,
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <PhoneCall size={13} /> Call Center Darurat: 112
          </a>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header className="header-nav">
        <div className="header-container">
          {/* Brand Logo */}
          <a href="#" className="brand-wrapper" aria-label="Beranda SI-CUACA PEMDA">
            <div className="brand-emblem">
              <CloudLightning size={24} />
            </div>
            <div className="brand-text">
              <h1>
                SI-CUACA <span>PEMDA</span>
              </h1>
              <p>PUSDALOPS BPBD & BMKG INTEGRATED</p>
            </div>
          </a>

          {/* Navigation Menu */}
          <nav aria-label="Menu Utama" className="nav-menu">
            <a href="#beranda" className="nav-link active">
              Beranda
            </a>
            <a href="#cuaca-daerah" className="nav-link">
              Prakiraan Kecamatan
            </a>
            <a href="#radar" className="nav-link">
              Radar Doppler
            </a>
            <a href="#peringatan-dini" className="nav-link">
              Peringatan Dini (EWS)
            </a>
            <a href="#kualitas-udara" className="nav-link">
              ISPU Udara
            </a>
            <a href="#sektor" className="nav-link">
              Sektor Maritim & Tani
            </a>
            <a href="#unduh-aplikasi" className="nav-link">
              Aplikasi Mobile
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="nav-actions">
            <a href="#peringatan-dini" className="btn btn-emergency" style={{ fontSize: "0.8rem", padding: "8px 14px" }}>
              <AlertTriangle size={15} /> Status Siaga
            </a>
            <a
              href="#unduh-aplikasi"
              className="btn btn-primary"
              style={{ fontSize: "0.8rem", padding: "8px 14px" }}
            >
              Unduh Aplikasi
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: "none",
                background: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "4px",
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "#091224",
              borderTop: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Beranda
            </a>
            <a
              href="#cuaca-daerah"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Prakiraan Kecamatan
            </a>
            <a
              href="#radar"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Radar Doppler
            </a>
            <a
              href="#peringatan-dini"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Peringatan Dini (EWS)
            </a>
            <a
              href="#kualitas-udara"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              ISPU Udara
            </a>
            <a
              href="#sektor"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Sektor Maritim & Tani
            </a>
            <a
              href="#unduh-aplikasi"
              onClick={() => setMobileMenuOpen(false)}
              className="nav-link"
            >
              Aplikasi Mobile
            </a>
            <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
              <a
                href="tel:112"
                className="btn btn-emergency"
                style={{ width: "100%" }}
              >
                <PhoneCall size={16} /> Hubungi Call Center 112
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
