import React from 'react';
import { Highlight } from '../types';
import { Instagram } from 'lucide-react'; // تأكد من تثبيت lucide-react

interface HighlightsProps {
  items: Highlight[];
}

const Highlights: React.FC<HighlightsProps> = ({ items }) => {
  return (
    <section className="py-6">
      <div className="flex justify-between items-end mb-4">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <span className="text-emerald-400 pixel-font text-xs">#</span>
          أفضل الشروحات على إنستجرام
        </h2>
      </div>
      
      {/* شبكة المنشورات بشكل احترافي */}
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <a 
            key={item.id} 
            href={item.postUrl} // الرابط الفعلي للمنشور
            target="_blank" 
            rel="noopener noreferrer"
            className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#111] hover:border-emerald-500/50 transition-all shadow-lg"
          >
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
            />
            
            {/* أيقونة إنستجرام تظهر عند الحوم (Hover) */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white w-8 h-8 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </div>

            {/* علامة Reels الصغيرة في الزاوية */}
            <div className="absolute top-2 right-2 p-1 bg-black/50 backdrop-blur-md rounded-md">
               <Instagram className="text-white w-3 h-3" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Highlights;