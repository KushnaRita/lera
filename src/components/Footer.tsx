
import { useEffect, useState } from 'react';
import { Instagram, MapPin, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState('');
  const [companyName, setCompanyName] = useState('Pankratova_project');
  const [companyDescription, setCompanyDescription] = useState('Бутик-студия дизайна интерьера, создающая продуманные, функциональные пространства, которые вдохновляют.');
  const [contactTitle, setContactTitle] = useState('Связаться');
  const [address, setAddress] = useState('ул. Дизайнерская, 123, офис 400');
  const [city, setCity] = useState('Москва, Россия');
  const [email, setEmail] = useState('hello@ateliestudio.ru');
  const [copyrightText, setCopyrightText] = useState('Ателье Студия. Все права защищены.');
  const [privacyText, setPrivacyText] = useState('Политика Конфиденциальности');
  const [termsText, setTermsText] = useState('Условия Использования');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const socialPlatforms = [
    { icon: Instagram, name: 'instagram' },
    { icon: MapPin, name: 'pinterest' },
    { icon: Mail, name: 'houzz' },
    { icon: Linkedin, name: 'linkedin' }
  ];

  return (
    <footer className="bg-black text-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 
              className="font-orbitron text-xl font-medium text-primary transition-opacity hover:opacity-80 cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setCompanyName(e.target.textContent || '')}
            >
              {companyName}
            </h3>
            <p 
              className="text-primary/80 max-w-xs cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setCompanyDescription(e.target.textContent || '')}
            >
              {companyDescription}
            </p>
          </div>
          
          <div>
            <ul className="space-y-2">
              {[['projects', 'Проекты'], ['about', 'О Нас'], ['services', 'Услуги'], ['contact', 'Контакты']].map(([id, label]) => (
                <li key={id}>
                  <a 
                    href={`#${id}`} 
                    className="text-primary/80 hover:text-primary transition-colors" 
                    onClick={e => {
                      e.preventDefault();
                      document.getElementById(id)?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 
              className="font-medium text-lg mb-4 cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setContactTitle(e.target.textContent || '')}
            >
              {contactTitle}
            </h4>
            <div className="flex space-x-4 mb-6">
              {socialPlatforms.map(({ icon: Icon, name }) => (
                <div key={name} className="w-6 h-6 text-primary/80 hover:text-primary transition-colors cursor-pointer">
                  <Icon size={24} />
                </div>
              ))}
            </div>
            <div className="text-primary/80 text-sm">
              <p 
                className="cursor-pointer"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setAddress(e.target.textContent || '')}
              >
                {address}
              </p>
              <p 
                className="cursor-pointer"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setCity(e.target.textContent || '')}
              >
                {city}
              </p>
              <p 
                className="cursor-pointer"
                contentEditable
                suppressContentEditableWarning
                onBlur={(e) => setEmail(e.target.textContent || '')}
              >
                {email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-accent/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p 
            className="text-primary/70 text-sm mb-4 md:mb-0 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => {
              const text = e.target.textContent || '';
              const yearMatch = text.match(/\d{4}/);
              if (yearMatch) {
                setCopyrightText(text.replace(yearMatch[0], currentYear));
              } else {
                setCopyrightText(text);
              }
            }}
          >
            © {currentYear} {copyrightText}
          </p>
          <div className="flex space-x-6">
            <a 
              href="#" 
              className="text-primary/70 hover:text-primary text-sm cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setPrivacyText(e.target.textContent || '')}
            >
              {privacyText}
            </a>
            <a 
              href="#" 
              className="text-primary/70 hover:text-primary text-sm cursor-pointer"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setTermsText(e.target.textContent || '')}
            >
              {termsText}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
