interface HeroSectionProps {
  onCreateCode: () => void;
}

const HeroSection = ({ onCreateCode }: HeroSectionProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-primary/20 rounded-full animate-rotate-slow"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-primary animate-fade-in">
          نظام الحضور الذكي
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in delay-200">
          تقنية QR الديناميكي للحضور الآمن والفعال
        </p>
        
        <button
          onClick={onCreateCode}
          className="group relative px-12 py-6 text-xl font-bold text-primary-foreground bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 neon-glow-strong animate-fade-in delay-400"
        >
          <span className="relative z-10">أنشئ رمز حضور جديد</span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* 3D Decorative Elements */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-32 h-32 border-4 border-primary/30 rounded-lg rotate-45 animate-float"></div>
      </div>
    </div>
  );
};

export default HeroSection;
