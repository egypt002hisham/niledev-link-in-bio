
import React, { useState } from 'react';
import { Consultation } from '../types';

const AskNileDev: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;
    
    // Save to localStorage (simulating consultations.json)
    const stored = localStorage.getItem('niledev_consultations');
    const consultations: Consultation[] = stored ? JSON.parse(stored) : [];
    
    const newConsultation: Consultation = {
      id: Math.random().toString(36).substr(2, 9),
      text: question,
      timestamp: Date.now(),
      showOnMain: false
    };
    
    const updatedData = [...consultations, newConsultation];
    localStorage.setItem('niledev_consultations', JSON.stringify(updatedData));

    setIsSubmitted(true);
    setQuestion('');
    
    // Notify admin panel or other UI elements of new data
    window.dispatchEvent(new CustomEvent('niledev_data_update'));
    
    setTimeout(() => {
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <div className="pixel-border-box p-6 bg-[#0a0a0a] relative overflow-hidden group">
        {/* Decorative corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 bg-emerald-500"></div>
        <div className="absolute top-0 right-0 w-2 h-2 bg-emerald-500"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-500"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500"></div>

        <h2 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
          <span className="text-emerald-400 animate-pulse">●</span>
          عندك سؤال تقني أو فكرة مشروع؟
        </h2>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="اكتب سؤالك هنا... (مثلاً: كيف أبدأ في تطوير الألعاب؟)"
              className="w-full bg-[#050505] border-2 border-[#064e3b] focus:border-emerald-500 focus:shadow-[0_0_15px_rgba(16,185,129,0.3)] p-4 rounded-md text-white placeholder-gray-600 outline-none transition-all min-h-[120px] resize-none text-sm leading-relaxed"
            />
            
            <button 
              type="submit"
              className="relative group w-full active:translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 bg-emerald-900 rounded-lg translate-y-1"></div>
              <div className="relative bg-[#10b981] group-hover:bg-[#34d399] py-3 rounded-lg flex flex-col items-center justify-center transition-all border-t border-white/20">
                <span className="pixel-font text-xl tracking-widest text-[#064e3b] font-black">START</span>
                <span className="text-sm font-bold text-[#064e3b]">إرسال الاستشارة</span>
              </div>
            </button>
          </form>
        ) : (
          <div className="py-10 text-center flex flex-col items-center gap-3 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 text-2xl">
              ✓
            </div>
            <p className="font-bold text-white">تم إرسال سؤالك بنجاح!</p>
            <p className="text-xs text-gray-400">سوف نلقي نظرة عليه قريباً.</p>
          </div>
        )}

        <p className="text-[10px] mt-4 text-center text-gray-500 font-bold border-t border-white/5 pt-3">
          أفضل الأسئلة سيتم الرد عليها في فيديوهات الشرح القادمة!
        </p>
      </div>
    </section>
  );
};

export default AskNileDev;
