
import { Project, LinkItem, Highlight, Consultation } from './types';

export const SOCIAL_LINKS: LinkItem[] = [
  { id: '1', label: 'GitHub (المشاريع والأكواد)', url: 'https://github.com/egypt002hisham', icon: '🖥️' },
  { id: '2', label: 'LinkedIn (للتواصل المهني)', url: 'https://www.linkedin.com/in/hisham-youssef-736617347', icon: '💼' },
  { 
    id: '3', 
    label: 'لعبة Biopulse (نسخة 2025)', 
    url: 'https://my-biopulse2025version.vercel.app/', 
    icon: '🎮' 
  },
];

export const PROJECTS: Project[] = [
  { id: '1', title: 'لعبة Biopulse', imageUrl: 'assest/Untitled.png', category: 'تطوير ألعاب' },
  { id: '2', title: 'موقع تعليمي تفاعلي', imageUrl: 'assest/5b338eb5-ec9a-4207-a78b-390aedb56600.png', category: 'تطوير مواقع' },
];

export const HIGHLIGHTS: Highlight[] = [
  { 
    id: '1', 
    title: 'Computer Classic', 
    imageUrl: 'assest/457874294_1052403342601752_5133005500537056066_n.jpg', // استبدلها بصورة البوست الحقيقية
    postUrl: 'https://www.instagram.com/p/C_fgBSdiXQM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' // رابط البوست من إنستجرام
  },
  { 
    id: '2', 
    title: 'Coding Tips', 
    imageUrl: 'assest/ps.PNG',
    postUrl: 'https://www.instagram.com/reel/DTNRNMIjSX7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' 
  },
  { 
    id: '3', 
    title: 'NileDev Live', 
    imageUrl: 'assest/462053750_435917002399076_1749888022422791682_n.jpg',
    postUrl: 'https://www.instagram.com/p/DAyjAyxi6yc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' 
  },
];
export const INITIAL_CONSULTATIONS: Consultation[] = [
  {
    id: 'c1',
    text: 'ما هي أفضل لغة برمجة للبدء في تطوير الألعاب في عام 2025؟',
    timestamp: Date.now() - 1000000,
    showOnMain: true
  },
  {
    id: 'c2',
    text: 'كيف يمكنني تحويل مشروعي البرمجي البسيط إلى شركة ناشئة ناجحة؟',
    timestamp: Date.now() - 2000000,
    showOnMain: true
  },
  {
    id: 'c3',
    text: 'هل تحليل البيانات يحتاج إلى خلفية رياضية قوية جداً؟',
    timestamp: Date.now() - 3000000,
    showOnMain: true
  },
  {
    id: 'c4',
    text: 'أريد نصيحة لتنظيم الوقت بين التعلم الذاتي والعمل الحر.',
    timestamp: Date.now() - 4000000,
    showOnMain: false
  }
];
