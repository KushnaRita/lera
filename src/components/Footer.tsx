import { useEffect, useState } from 'react';
const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');
  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);
  return <footer className="bg-black text-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-orbitron text-xl font-medium text-primary transition-opacity hover:opacity-80">Pankratova_project</h3>
            <p className="text-primary/80 max-w-xs">
Бутик-студия дизайна интерьера, создающая продуманные, функциональные пространства, которые вдохновляют.</p>
          </div>
          
          <div>
            
            <ul className="space-y-2">
              {[['projects', 'Проекты'], ['about', 'О Нас'], ['services', 'Услуги'], ['contact', 'Контакты']].map(([id, label]) => <li key={id}>
                  <a href={`#${id}`} className="text-primary/80 hover:text-primary transition-colors" onClick={e => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                    {label}
                  </a>
                </li>)}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Связаться</h4>
            <div className="flex space-x-4 mb-6">
              {['instagram', 'pinterest', 'houzz', 'linkedin'].map(platform => <a key={platform} href="#" className="bg-accent p-2 rounded-full transition-colors hover:bg-accent/70" aria-label={platform}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>)}
            </div>
            <p className="text-primary/80 text-sm">
              ул. Дизайнерская, 123, офис 400<br />
              Москва, Россия<br />
              hello@ateliestudio.ru
            </p>
          </div>
        </div>
        
        <div className="border-t border-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary/70 text-sm mb-4 md:mb-0">
            © {currentYear} Ателье Студия. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-primary/70 hover:text-primary text-sm">
              Политика Конфиденциальности
            </a>
            <a href="#" className="text-primary/70 hover:text-primary text-sm">
              Условия Использования
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;