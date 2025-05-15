
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

const Navbar = ({ activeSection }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [localActiveSection, setLocalActiveSection] = useState('hero');

  useEffect(() => {
    if (activeSection) {
      setLocalActiveSection(activeSection);
    }
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Этот код теперь резервный, если activeSection не передан через props
      if (!activeSection) {
        const sections = ['hero', 'projects', 'about', 'services', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element && element.offsetTop <= scrollPosition) {
            setLocalActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Закрываем мобильное меню
      setIsMenuOpen(false);
      
      // Остальной код для прокрутки теперь обрабатывается в Index.tsx
      // Мы просто добавляем хэш в URL, и обработчик в Index.tsx сделает всю работу
      window.location.hash = id;
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-orbitron text-2xl font-medium text-primary transition-opacity hover:opacity-80"
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
                className={`text-sm tracking-wide uppercase font-orbitron transition-all duration-300 relative ${
                  localActiveSection === id 
                    ? 'text-primary font-medium' 
                    : 'text-foreground/80 hover:text-primary'
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform transition-transform duration-300 ${
                  localActiveSection === id ? 'scale-x-100' : 'scale-x-0'
                }`}></span>
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
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md transition-all duration-500 overflow-hidden ${
          isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
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
              className={`block w-full text-left px-3 py-4 font-orbitron text-base transition-colors border-b border-border last:border-0 ${
                localActiveSection === id 
                  ? 'text-primary font-medium' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
