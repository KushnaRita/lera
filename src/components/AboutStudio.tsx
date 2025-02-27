import { useRef, useEffect, useState } from 'react';
const AboutStudio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1
    });
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);
  return <section id="about" className="py-20">
      <div ref={containerRef} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`relative h-[500px] ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="absolute left-0 top-0 w-3/4 h-3/4 bg-studio-100 rounded-lg overflow-hidden shadow-lg">
              <img src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?w=800&auto=format&fit=crop&q=80" alt="Studio workspace" className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute right-0 bottom-0 w-2/3 h-2/3 bg-studio-100 rounded-lg overflow-hidden shadow-lg border-4 border-background">
              <img src="https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&auto=format&fit=crop&q=80" alt="Design process" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div className={`space-y-6 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{
          animationDelay: '200ms'
        }}>
            <p className="text-sm uppercase tracking-widest text-primary/70">СТУДИЯ</p>
            <h2 className="heading-lg">Наша философия дизайна</h2>
            
            <p className="text-body">Создаем не просто интерьеры, а пространства с характером с 2015 года. Фокусируемся на создании продуманных и функциональных пространств, которые отражают уникальную индивидуальность наших клиентов и улучшают их повседневную жизнь.</p>
            
            <p className="text-body">Мы уверены, что хороший дизайн должен быть не только красивым, но и удобным, учитывая, как люди используют и ощущают пространство. Мы всегда работаем в тесном сотрудничестве с клиентами, чтобы лучше понять их идеи и потребности.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium mb-2">Our Approach</h3>
                <p className="text-body-sm">
                  We combine meticulous attention to detail with a holistic understanding of how spaces function to create environments that are as practical as they are beautiful.
                </p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium mb-2">Our Values</h3>
                <p className="text-body-sm">
                  Integrity, craftsmanship, and sustainability are at the core of everything we do, guiding our design decisions and partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutStudio;