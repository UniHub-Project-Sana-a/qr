import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { QRSettings } from "./GenerationModal";

interface QRCodeDisplayProps {
  settings: QRSettings;
  onExpire: () => void;
}

const QRCodeDisplay = ({ settings, onExpire }: QRCodeDisplayProps) => {
  const [timeLeft, setTimeLeft] = useState(settings.validity * 60); // Convert to seconds
  const [qrValue, setQrValue] = useState(generateQRValue());
  const [scannedCount] = useState(0); // Placeholder

  function generateQRValue() {
    return `qode-attendance-${Date.now()}-${Math.random().toString(36).substring(7)}`;
  }

  // Countdown timer
  useEffect(() => {
    if (timeLeft <= 0) {
      onExpire();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onExpire]);

  // QR refresh interval
  useEffect(() => {
    const refreshTimer = setInterval(() => {
      setQrValue(generateQRValue());
    }, settings.refreshInterval * 1000);

    return () => clearInterval(refreshTimer);
  }, [settings.refreshInterval]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        {/* QR Code Container with 3D effect */}
        <div className="relative mb-12">
          <div className="glass p-12 rounded-3xl shadow-float animate-float">
            <div className="bg-white p-8 rounded-2xl shadow-3d">
              <QRCodeSVG
                value={qrValue}
                size={300}
                level="H"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Decorative glow */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse-glow"></div>
        </div>

        {/* Timer and Counter */}
        <div className="space-y-6">
          {/* Countdown Timer */}
          <div className="glass p-6 rounded-2xl text-center">
            <p className="text-muted-foreground mb-2 text-lg">الوقت المتبقي</p>
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {formatTime(timeLeft)}
            </div>
          </div>

          {/* Scan Counter */}
          <div className="glass p-6 rounded-2xl text-center">
            <p className="text-muted-foreground mb-2 text-lg">عدد الطلاب الذين قاموا بالمسح</p>
            <div className="text-4xl font-bold text-foreground">
              <span className="text-primary">{scannedCount}</span>
              <span className="text-muted-foreground"> / </span>
              <span>{settings.maxStudents}</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            يتم تحديث الرمز تلقائياً كل {settings.refreshInterval} ثانية لضمان الأمان
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRCodeDisplay;
