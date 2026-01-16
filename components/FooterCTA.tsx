
import React from 'react';

const FooterCTA: React.FC = () => {
  return (
    <div className="mt-4">
      <button 
        className="w-full relative group"
        onClick={() => alert('شكراً لانضمامك للنشرة البرمجية!')}
      >
        {/* Pixel Art Styled Button Shadow Effect */}
        <div className="absolute inset-0 bg-emerald-900 rounded-lg translate-y-1 transition-transform group-hover:translate-y-2"></div>
        
        <div className="relative bg-[#10b981] group-hover:bg-[#34d399] active:translate-y-1 py-5 rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-300 shadow-xl border-t border-white/20">
          <span className="pixel-font text-2xl tracking-widest text-[#064e3b] font-black group-hover:scale-110 transition-transform">START</span>
          <span className="text-lg font-bold text-[#064e3b]">ابدأ رحلتك البرمجية معنا</span>
          <span className="text-xs text-[#064e3b]/70 font-bold uppercase">(اشترك في النشرة)</span>
        </div>
      </button>
      
      <p className="text-center mt-6 text-emerald-500/60 text-sm animate-pulse">
        انضم لـ +10,000 مبرمج شغوف ⚡
      </p>
    </div>
  );
};

export default FooterCTA;
