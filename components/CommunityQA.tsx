
import React, { useEffect, useState, useRef } from 'react';
import { Consultation } from '../types';
import { INITIAL_CONSULTATIONS } from '../constants';
import Swiper from 'swiper';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';

const CommunityQA: React.FC = () => {
  const [questions, setQuestions] = useState<Consultation[]>([]);
  const swiperRef = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<Swiper | null>(null);

  const loadQuestions = () => {
    const stored = localStorage.getItem('niledev_consultations');
    let all: Consultation[] = [];
    
    if (stored) {
      try {
        all = JSON.parse(stored);
      } catch (e) {
        console.error("Failed to parse stored consultations", e);
        all = INITIAL_CONSULTATIONS;
      }
    } else {
      all = INITIAL_CONSULTATIONS;
      localStorage.setItem('niledev_consultations', JSON.stringify(all));
    }
    
    const filtered = all.filter(q => q.showOnMain).sort((a, b) => b.timestamp - a.timestamp);
    setQuestions(filtered);
  };

  useEffect(() => {
    loadQuestions();
    
    const handleUpdate = () => loadQuestions();
    
    window.addEventListener('storage', handleUpdate);
    window.addEventListener('niledev_data_update', handleUpdate);
    
    return () => {
      window.removeEventListener('storage', handleUpdate);
      window.removeEventListener('niledev_data_update', handleUpdate);
    };
  }, []);

  useEffect(() => {
    if (questions.length > 0 && swiperRef.current) {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }

      swiperInstance.current = new Swiper(swiperRef.current, {
        modules: [Autoplay, Pagination, EffectCoverflow],
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1.2,
        spaceBetween: 20,
        loop: questions.length > 1,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        },
      });
    }
  }, [questions]);

  if (questions.length === 0) return null;

  return (
    <section className="animate-fade-in py-4" style={{ animationDelay: '0.3s' }}>
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2 px-2 text-white">
        <span className="text-emerald-400 pixel-font text-xs">?</span>
        أسئلة من مجتمع NileDev
      </h2>
      
      <div className="swiper relative pb-10" ref={swiperRef}>
        <div className="swiper-wrapper">
          {questions.map((q) => (
            <div key={q.id} className="swiper-slide">
              <div className="relative p-6 bg-[#0a0a0a] border-2 border-[#10b981] rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.15)] group hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-shadow">
                <div className="absolute -bottom-3 right-8 w-6 h-6 bg-[#0a0a0a] border-r-2 border-b-2 border-[#10b981] rotate-45 transform"></div>
                
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-emerald-500"></div>
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500"></div>
                
                <div className="mb-3 flex items-center gap-2 opacity-60">
                   <div className="w-2 h-2 bg-emerald-500 animate-pulse"></div>
                   <span className="pixel-font text-[8px] text-emerald-400 tracking-tighter uppercase">Community_Input</span>
                </div>

                <p className="text-white text-sm leading-relaxed relative z-10 font-medium h-[4.5em] overflow-hidden">
                  "{q.text}"
                </p>
                
                <div className="mt-6 flex items-center justify-between text-[9px] text-emerald-500 font-bold pixel-font border-t border-emerald-900/50 pt-3">
                  <span className="flex items-center gap-1">
                    <span className="text-emerald-300">#</span>
                    {q.id.toUpperCase().slice(0, 8)}
                  </span>
                  <span className="opacity-50">{new Date(q.timestamp).toLocaleDateString('ar-EG')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination !bottom-2"></div>
      </div>
    </section>
  );
};

export default CommunityQA;
