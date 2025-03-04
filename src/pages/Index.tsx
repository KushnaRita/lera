
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectGallery from '../components/ProjectGallery';
import AboutStudio from '../components/AboutStudio';
import Services from '../components/Services';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Index = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Улучшенная функция плавной прокрутки с дополнительными параметрами
    const smoothScroll = (targetId: string, duration: number = 800, offset: number = 0) => {
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime: number | null = null;
      
      setIsScrolling(true);

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Функция плавности (easeInOutCubic для более плавного эффекта)
        const ease = (t: number) => {
          return t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        };
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          setTimeout(() => setIsScrolling(false), 100); // Небольшая задержка для предотвращения быстрых повторных кликов
        }
      };
      
      requestAnimationFrame(animation);
    };

    // Обработчик кликов по якорным ссылкам
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorElement = target.closest('a');
      
      if (anchorElement && anchorElement.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        
        // Предотвращаем повторные клики во время анимации прокрутки
        if (isScrolling) return;
        
        const id = anchorElement.getAttribute('href')?.substring(1);
        if (id) {
          // Вычисляем offset в зависимости от высоты навбара
          const navbar = document.querySelector('header');
          const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
          const offset = navbarHeight + 20; // Добавляем немного дополнительного отступа
          
          smoothScroll(id, 800, offset);
        }
      }
    };

    // Определяем видимые секции для анимации появления при скроллинге
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const newVisibleSections = new Set<string>();
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        if (!sectionId) return;
        
        const rect = section.getBoundingClientRect();
        const isVisible = 
          rect.top <= window.innerHeight * 0.7 && 
          rect.bottom >= window.innerHeight * 0.3;
        
        if (isVisible) {
          newVisibleSections.add(sectionId);
          section.classList.add('section-visible');
        }
      });
      
      setVisibleSections(newVisibleSections);
    };

    // Добавляем слушатель событий для обработки кликов
    document.addEventListener('click', handleAnchorClick);
    
    // Добавляем слушатель для определения видимых секций
    window.addEventListener('scroll', handleScroll);
    
    // Вызываем один раз при загрузке для инициализации видимых секций
    handleScroll();
    
    // Обработчик для прокрутки к определенной секции при загрузке, если в URL есть хэш
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      // Откладываем выполнение, чтобы страница успела загрузиться
      setTimeout(() => {
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        smoothScroll(id, 800, navbarHeight + 20);
      }, 300);
    }
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolling]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={[...visibleSections][0]} />
      <main className="flex-grow">
        <Hero />
        <ProjectGallery />
        <AboutStudio />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
