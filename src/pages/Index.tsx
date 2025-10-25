import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import GenerationModal, { QRSettings } from "@/components/GenerationModal";
import QRCodeDisplay from "@/components/QRCodeDisplay";
import ResultsView from "@/components/ResultsView";

type ViewState = "hero" | "qr-display" | "results";

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>("hero");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [qrSettings, setQrSettings] = useState<QRSettings | null>(null);

  const handleCreateCode = () => {
    setIsModalOpen(true);
  };

  const handleGenerate = (settings: QRSettings) => {
    setQrSettings(settings);
    setCurrentView("qr-display");
  };

  const handleExpire = () => {
    setCurrentView("results");
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === "hero" && (
        <HeroSection onCreateCode={handleCreateCode} />
      )}
      
      {currentView === "qr-display" && qrSettings && (
        <QRCodeDisplay settings={qrSettings} onExpire={handleExpire} />
      )}
      
      {currentView === "results" && <ResultsView />}

      <GenerationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onGenerate={handleGenerate}
      />
    </div>
  );
};

export default Index;
