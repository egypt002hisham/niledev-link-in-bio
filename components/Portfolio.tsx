import React from 'react';
import { Project } from '../types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full group cursor-pointer">
      {/* تكبير الـ aspect ratio وتغيير الحدود لتكون أوضح */}
      <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-white/5 mb-4 bg-[#111] group-hover:border-emerald-500/50 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex items-end p-6">
          {/* تكبير حجم الـ Label */}
          <span className="text-[12px] font-bold px-3 py-1.5 bg-emerald-600 border border-emerald-400/50 text-white rounded-lg pixel-font backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>
      {/* تكبير حجم عنوان المشروع */}
      <h3 className="font-bold text-gray-100 text-lg md:text-xl px-2 group-hover:text-emerald-400 transition-colors">
        {project.title}
      </h3>
    </div>
  );
};

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-emerald-400 pixel-font text-sm">#</span>
        أحدث المشاريع المطورة
      </h2>
      
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={25}
        // تعديل slidesPerView ليصبح الكارت أكبر بكثير على الموبايل
        slidesPerView={1.15} 
        centeredSlides={true} // جعل الكارت في المنتصف ليعطي شعوراً بالحجم الأكبر
        loop={projects.length > 1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          // على الشاشات المتوسطة (Tablets)
          640: { 
            slidesPerView: 1.8,
            centeredSlides: false 
          },
          // على الكمبيوتر (Desktop)
          1024: { 
            slidesPerView: 2.5,
            centeredSlides: false
          }
        }}
        className="projects-swiper pb-14"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <ProjectCard 
              project={project} 
              index={index} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;