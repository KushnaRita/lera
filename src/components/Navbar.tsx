
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Определяем активную секцию при прокрутке
      const sections = ['hero', 'projects', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // добавляем offset для лучшего определения
      
      for (const section of sections.reverse()) { // проверяем в обратном порядке - снизу вверх
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Закрываем мобильное меню
      setIsMenuOpen(false);
      
      // Определяем высоту навбара для правильного offset
      const navbar = document.querySelector('header');
      const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      const offset = navbarHeight + 20;
      
      // Используем scrollIntoView для плавной прокрутки
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-serif text-2xl font-medium text-primary transition-opacity hover:opacity-80"
            >
              Ателье
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              ['projects', 'Проекты'],
              ['about', 'О Нас'],
              ['services', 'Услуги'],
              ['contact', 'Контакты']
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  activeSection === id 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground p-2 rounded-md hover:bg-accent/50 transition-colors"
              aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {[
              ['projects', 'Проекты'],
              ['about', 'О Нас'],
              ['services', 'Услуги'],
              ['contact', 'Контакты']
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`block w-full text-left px-3 py-4 text-base transition-colors border-b border-border last:border-0 ${
                  activeSection === id 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
