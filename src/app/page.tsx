import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LiveDistrictWeather from "@/components/LiveDistrictWeather";
import RadarMapSection from "@/components/RadarMapSection";
import EarlyWarningSystem from "@/components/EarlyWarningSystem";
import AirQualitySection from "@/components/AirQualitySection";
import StrategicSectors from "@/components/StrategicSectors";
import AppDownloadSection from "@/components/AppDownloadSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <LiveDistrictWeather />
      <RadarMapSection />
      <EarlyWarningSystem />
      <AirQualitySection />
      <StrategicSectors />
      <AppDownloadSection />
      <script src="https://chatbot-bmkg.vercel.app/embed.js" async></script>
      <FaqSection />
      <Footer />
    </main>
  );
}
