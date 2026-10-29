import {
  CloudLightning,
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-gov">
      <div className="footer-grid">
        {/* Col 1: Government Identity */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div className="brand-emblem">
              <CloudLightning size={24} />
            </div>
            <div>
              <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>
                SI-CUACA PEMDA
              </div>
              <div style={{ fontSize: "0.725rem", color: "var(--accent-cyan)", fontWeight: 700 }}>
                PORTAL RESMI METEOROLOGI & MITIGASI BENCANA
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
            Platform terpadu pemantauan cuaca mikro, pemetaan risiko iklim, dan peringatan dini bencana
            hidrometeorologi daerah. Dikelola bersama oleh BPBD, BMKG, dan Dinas Komunikasi Informatika.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.775rem", color: "#34d399" }}>
            <ShieldCheck size={16} />
            <span>Sertifikasi Keamanan Informasi ISO/IEC 27001:2022</span>
          </div>
        </div>

        {/* Col 2: Navigasi Cepat */}
        <div className="footer-col">
          <h4>Layanan Informasi</h4>
          <ul className="footer-links">
            <li>
              <a href="#cuaca-daerah" className="footer-link-item">
                Prakiraan 42 Kecamatan
              </a>
            </li>
            <li>
              <a href="#radar" className="footer-link-item">
                Radar Doppler Curah Hujan
              </a>
            </li>
            <li>
              <a href="#peringatan-dini" className="footer-link-item">
                Peringatan Dini Bencana (EWS)
              </a>
            </li>
            <li>
              <a href="#kualitas-udara" className="footer-link-item">
                Indeks Standar Pencemar Udara
              </a>
            </li>
            <li>
              <a href="#sektor" className="footer-link-item">
                Cuaca Nelayan & Petani
              </a>
            </li>
            <li>
              <a href="#unduh-aplikasi" className="footer-link-item">
                Download Aplikasi Mobile
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Lembaga Mitra Terintegrasi */}
        <div className="footer-col">
          <h4>Instansi Terintegrasi</h4>
          <ul className="footer-links">
            <li>
              <a href="https://www.bmkg.go.id" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                BMKG Republik Indonesia <ExternalLink size={11} style={{ verticalAlign: "middle" }} />
              </a>
            </li>
            <li>
              <a href="https://bnpb.go.id" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                BPBD / BNPB Daerah <ExternalLink size={11} style={{ verticalAlign: "middle" }} />
              </a>
            </li>
            <li>
              <span className="footer-link-item">Dinas Komunikasi & Informatika</span>
            </li>
            <li>
              <span className="footer-link-item">Dinas Lingkungan Hidup (SPKU)</span>
            </li>
            <li>
              <span className="footer-link-item">Dinas Kelautan & Perikanan</span>
            </li>
            <li>
              <span className="footer-link-item">Portal Satu Data Daerah</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Posko PUSDALOPS 24 Jam */}
        <div className="footer-col">
          <h4>Pusat Pengendalian Operasi (PUSDALOPS)</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
              <MapPin size={16} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span>Gedung Command Center PUSDALOPS BPBD, Kompleks Balai Kota Daerah.</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <PhoneCall size={16} color="#f87171" style={{ flexShrink: 0 }} />
              <span>
                Call Center Darurat: <strong style={{ color: "#fff" }}>112</strong> (Bebas Pulsa)
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Mail size={16} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
              <span>pusdalops@pemda.go.id</span>
            </div>

            <div
              style={{
                marginTop: "6px",
                background: "rgba(239, 68, 68, 0.12)",
                padding: "8px 12px",
                borderRadius: "var(--radius-sm)",
                border: "1px solid rgba(239, 68, 68, 0.25)",
                color: "#fca5a5",
                fontSize: "0.75rem",
                fontWeight: 600,
              }}
            >
              Petugas Jaga Siaga 24 Jam Nonstop Siap Merespons Bencana
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="footer-bottom">
        <div>
          © 2026 Pemerintah Daerah. Seluruh hak cipta dilindungi undang-undang. Portal Informasi Cuaca &
          Peringatan Dini Terintegrasi.
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <a href="#" className="footer-link-item">
            Kebijakan Privasi
          </a>
          <a href="#" className="footer-link-item">
            Ketentuan Layanan
          </a>
          <a href="#" className="footer-link-item">
            Standar Pelayanan Publik
          </a>
        </div>
      </div>
    </footer>
  );
}
