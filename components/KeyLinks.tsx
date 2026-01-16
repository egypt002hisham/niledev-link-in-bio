
import React, { useState, useEffect } from 'react';
import { LinkItem } from '../types';

interface KeyLinksProps {
  links: LinkItem[];
}

const KeyLinks: React.FC<KeyLinksProps> = ({ links }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleClick = (e: React.MouseEvent, label: string) => {
    if (label === 'حجز استشارة تقنية') {
      e.preventDefault();
      setShowMessage(true);
    }
  };

  return (
    <nav className="flex flex-col gap-4 relative">
      {/* Pixel Notification Message */}
      {showMessage && (
        <div className="fixed top-10 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="pixel-border-box p-4 flex flex-col items-center gap-2">
            <span className="text-emerald-400 pixel-font text-sm">SYSTEM MESSAGE</span>
            <p className="font-bold text-white text-center">تم استلام طلبك! سنتواصل معك قريباً 🚀</p>
          </div>
        </div>
      )}

      {links.map((link) => (
        <a
          key={link.id}
          href={link.url}
          onClick={(e) => handleClick(e, link.label)}
          className="group relative flex items-center gap-4 bg-[#064e3b]/30 border-2 border-[#10b981]/20 hover:border-[#34d399] p-4 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:bg-[#10b981]/20 active:scale-95"
        >
          <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
            {link.icon}
          </span>
          <span className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">
            {link.label}
          </span>
          <span className="mr-auto text-emerald-400 group-hover:translate-x-[-8px] transition-transform">
            ←
          </span>
        </a>
      ))}
    </nav>
  );
};

export default KeyLinks;
