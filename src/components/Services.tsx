
import { useRef, useEffect, useState } from 'react';
import { studioServices } from '../assets/projects';

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [sectionTitle, setSectionTitle] = useState('Наши Услуги');
  const [sectionSubtitle, setSectionSubtitle] = useState('Что Мы Предлагаем');
  const [sectionDescription, setSectionDescription] = useState('Мы предоставляем комплексные дизайнерские решения, адаптированные под уникальные требования каждого проекта, от разработки концепции до финальной стилизации и всего между ними.');
  const [bottomDescription, setBottomDescription] = useState('Каждый проект начинается с детальной консультации для понимания ваших потребностей, видения и бюджета. Затем мы разрабатываем индивидуальный подход для воплощения вашего проекта в жизнь, сопровождая вас на каждом этапе процесса.');
  const [buttonText, setButtonText] = useState('Связаться с Нами');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-black">
      <div 
        ref={containerRef}
        className="section-container"
      >
        <div className="text-center mb-16">
          <p 
            className="text-sm uppercase tracking-widest text-primary/70 mb-3 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setSectionSubtitle(e.target.textContent || '')}
          >
            {sectionSubtitle}
          </p>
          <h2 
            className="heading-lg mb-6 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setSectionTitle(e.target.textContent || '')}
          >
            {sectionTitle}
          </h2>
          <p 
            className="text-body max-w-2xl mx-auto cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setSectionDescription(e.target.textContent || '')}
          >
            {sectionDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studioServices.map((service, index) => (
            <div 
              key={service.id}
              className={`group bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-medium mb-3">{service.title}</h3>
                <p className="text-body-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p 
            className="text-body max-w-2xl mx-auto mb-8 cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setBottomDescription(e.target.textContent || '')}
          >
            {bottomDescription}
          </p>
          <a 
            href="#contact" 
            className="button-primary cursor-pointer"
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => setButtonText(e.target.textContent || '')}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
