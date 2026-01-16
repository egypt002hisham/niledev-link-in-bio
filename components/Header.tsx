
import React from 'react';

interface HeaderProps {
  name: string;
  bio: string;
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ name, bio, logoUrl }) => {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="relative w-28 h-28 p-1 bg-gradient-to-tr from-[#10b981] to-[#064e3b] rounded-full mb-4">
        <div className="w-full h-full rounded-full border-4 border-[#050505] overflow-hidden bg-white flex items-center justify-center">
            {/* Using a placeholder that resembles the requested logo style if needed */}
            <div className="flex flex-col items-center">
                <span className="text-4xl">🎮</span>
                <span className="text-[#064e3b] font-bold text-xs uppercase pixel-font mt-1">NileDev</span>
            </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-2 text-white">
        {name}
        <span className="inline-block mr-2 text-emerald-400">✓</span>
      </h1>
      <p className="text-gray-300 leading-relaxed max-w-[280px]">
        {bio}
      </p>
    </header>
  );
};

export default Header;
