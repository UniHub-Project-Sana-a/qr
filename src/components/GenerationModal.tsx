import { useState } from "react";
import { X } from "lucide-react";

interface GenerationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (settings: QRSettings) => void;
}

export interface QRSettings {
  validity: number; // in minutes
  refreshInterval: number; // in seconds
  maxStudents: number;
}

const GenerationModal = ({ isOpen, onClose, onGenerate }: GenerationModalProps) => {
  const [validity, setValidity] = useState(15);
  const [refreshInterval, setRefreshInterval] = useState(30);
  const [maxStudents, setMaxStudents] = useState(50);

  if (!isOpen) return null;

  const handleGenerate = () => {
    onGenerate({ validity, refreshInterval, maxStudents });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
      <div className="glass w-full max-w-lg p-8 rounded-3xl shadow-float relative animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2 rounded-full hover:bg-primary/20 transition-colors"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            إعدادات رمز الحضور
          </h2>
          <p className="text-muted-foreground mt-2">قم بتخصيص إعدادات الرمز</p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {/* Validity */}
          <div>
            <label className="block text-foreground font-semibold mb-2">
              صلاحية الرمز
            </label>
            <select
              value={validity}
              onChange={(e) => setValidity(Number(e.target.value))}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value={1}>دقيقة واحدة</option>
              <option value={5}>5 دقائق</option>
              <option value={15}>15 دقيقة</option>
              <option value={30}>30 دقيقة</option>
              <option value={60}>ساعة واحدة</option>
            </select>
          </div>

          {/* Refresh Interval */}
          <div>
            <label className="block text-foreground font-semibold mb-2">
              فترة تحديث الرمز
            </label>
            <select
              value={refreshInterval}
              onChange={(e) => setRefreshInterval(Number(e.target.value))}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value={10}>كل 10 ثواني</option>
              <option value={30}>كل 30 ثانية</option>
              <option value={60}>كل دقيقة</option>
            </select>
          </div>

          {/* Max Students */}
          <div>
            <label className="block text-foreground font-semibold mb-2">
              العدد الأقصى للطلاب
            </label>
            <input
              type="number"
              value={maxStudents}
              onChange={(e) => setMaxStudents(Number(e.target.value))}
              min={1}
              max={500}
              className="w-full px-4 py-3 bg-input border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full mt-8 px-8 py-4 text-lg font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-xl hover:scale-105 transition-all duration-300 neon-glow"
        >
          توليد الرمز
        </button>
      </div>
    </div>
  );
};

export default GenerationModal;
