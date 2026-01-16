
import React, { useState } from 'react';
import Header from './components/Header';
import KeyLinks from './components/KeyLinks';
import AskNileDev from './components/AskNileDev';
import CommunityQA from './components/CommunityQA';
import Portfolio from './components/Portfolio';
import Highlights from './components/Highlights';
import FooterCTA from './components/FooterCTA';
import AdminPanel from './components/AdminPanel';
import { SOCIAL_LINKS, PROJECTS, HIGHLIGHTS } from './constants';

const App: React.FC = () => {
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  return (
    <div className="min-h-screen max-w-md mx-auto relative overflow-hidden bg-[#050505] pb-20">
      {/* Spiderweb Background Textures */}
      <div className="absolute top-0 right-0 w-48 h-48 spiderweb-bg opacity-40 -scale-x-100 rotate-12 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-48 h-48 spiderweb-bg opacity-40 rotate-12 pointer-events-none"></div>

      <div className="relative z-10 px-6 py-12 flex flex-col gap-10">
        <Header 
          name="NileDev" 
          bio="مرشدك التقني: تطوير ألعاب، مواقع، وتحليل بيانات."
          logoUrl="https://picsum.photos/seed/niledevlogo/200/200" 
        />

        <KeyLinks links={SOCIAL_LINKS} />

        <AskNileDev />

        <CommunityQA />

        <Portfolio projects={PROJECTS} />

        <Highlights items={HIGHLIGHTS} />

        <FooterCTA />

        <footer className="mt-8 text-center text-gray-500 text-xs flex flex-col gap-4">
          <p>© {new Date().getFullYear()} NileDev. جميع الحقوق محفوظة.</p>
          <button 
            onClick={() => setIsAdminOpen(true)}
            className="text-[10px] text-emerald-900 hover:text-emerald-700 transition-colors uppercase tracking-widest pixel-font"
          >
            Terminal Login
          </button>
        </footer>
      </div>

      {isAdminOpen && <AdminPanel onClose={() => setIsAdminOpen(false)} />}
    </div>
  );
};

export default App;
