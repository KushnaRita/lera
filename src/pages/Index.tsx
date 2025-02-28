
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
        
        // Функция плавности (easeInOutQuad)
        const ease = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        
        window.scrollTo(0, startPosition + distance * ease(progress));
        
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          setIsScrolling(false);
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

    // Добавляем слушатель событий для обработки кликов
    document.addEventListener('click', handleAnchorClick);
    
    // Добавляем плавность прокрутки для всей страницы
    document.documentElement.style.scrollBehavior = 'smooth';
    
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
      document.documentElement.style.scrollBehavior = '';
    };
  }, [isScrolling]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
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
