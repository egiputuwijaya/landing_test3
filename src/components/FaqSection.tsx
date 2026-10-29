"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Dari mana sumber data prakiraan cuaca dan radar di portal SI-CUACA PEMDA?",
    answer:
      "Data meteorologi merupakan integrasi resmi antara jaringan Radar Cuaca Doppler dan Citra Satelit Himawari-9 milik Badan Meteorologi, Klimatologi, dan Geofisika (BMKG) Republik Indonesia dengan 18 stasiun telemetri AWS (Automatic Weather Station) IoT mandiri yang dipasang oleh Pemerintah Daerah di titik-titik rawan hidrometeorologi.",
  },
  {
    question: "Apakah data cuaca dan peringatan dini dapat diakses untuk penelitian atau API publik?",
    answer:
      "Ya. Pemerintah Daerah berkomitmen pada transparansi Open Data. Pengembang aplikasi, peneliti universitas, dan relawan kebencanaan dapat mengakses REST API dan format GeoJSON cuaca daerah secara gratis melalui registrasi di Portal Satu Data Daerah.",
  },
  {
    question: "Bagaimana cara kerja notifikasi darurat kebencanaan di aplikasi mobile?",
    answer:
      "Aplikasi mobile dilengkapi teknologi Geofencing pintar. Jika sistem telemetri mendeteksi curah hujan ekstrem atau BPBD menetapkan status Siaga di kecamatan lokasi Anda, aplikasi akan membunyikan sirine peringatan dini secara otomatis bahkan dalam mode hening.",
  },
  {
    question: "Apa perbedaan antara status WASPADA, SIAGA, dan AWAS pada sistem peringatan dini?",
    answer:
      "WASPADA (Kuning): Kondisi cuaca berpotensi mengganggu aktivitas, masyarakat diimbau lebih berhati-hati. SIAGA (Oranye): Cuaca ekstrem berpotensi menimbulkan bencana/kerugian, warga di daerah rawan harus menyiapkan tas siaga mandiri. AWAS (Merah): Bencana sedang berlangsung atau tak terhindarkan, segera lakukan evakuasi sesuai jalur yang ditetapkan BPBD.",
  },
  {
    question: "Bagaimana cara melaporkan kejadian bencana atau pohon tumbang yang baru terjadi?",
    answer:
      "Masyarakat dapat langsung menghubungi Call Center Darurat Bebas Pulsa 112 (beroperasi 24 jam) atau menggunakan tombol 'Lapor WhatsApp PUSDALOPS' di portal ini dengan menyertakan foto dan titik koordinat GPS.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="section" style={{ backgroundColor: "rgba(6, 11, 24, 0.7)" }}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">
            <HelpCircle size={14} /> Pusat Edukasi & Bantuan
          </span>
          <h2 className="section-title">Pertanyaan Sering Diajukan (FAQ)</h2>
          <p className="section-subtitle">
            Pelajari bagaimana sistem meteorologi daerah bekerja untuk melindungi keselamatan dan ketahanan
            masyarakat terhadap bencana iklim.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button
                onClick={() => toggle(idx)}
                className="faq-question"
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={18}
                  style={{
                    transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                    color: openIndex === idx ? "var(--accent-cyan)" : "var(--text-muted)",
                    flexShrink: 0,
                  }}
                />
              </button>
              {openIndex === idx && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
