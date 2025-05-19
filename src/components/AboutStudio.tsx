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
            <p className="text-sm uppercase tracking-widest text-primary/70">Философия дизайна</p>
            <h2 className="heading-lg">Продуманные до мелочей пространства, в которых хочется жить и работать.</h2>
            
            <p className="text-body">Моя философия дизайна — это гармония эстетики и функциональности. Я создаю интерьеры, исходя из того, как люди чувствуют и используют пространство в повседневной жизни. Эти два начала не должны конкурировать — они дополняют друг друга, образуя целостный симбиоз. </p>
            
            <p className="text-body">Такой баланс возможен, когда каждую деталь ты проживаешь сам. Именно в этом и состоит моя работа.
          </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium mb-2">Наш подход</h3>
                <p className="text-body-sm">Сочетаем тщательное внимание к деталям с целостным пониманием функциональности пространств</p>
              </div>
              
              <div className="bg-secondary/50 p-6 rounded-lg">
                <h3 className="font-serif text-lg font-medium mb-2">Функциональность</h3>
                <p className="text-body-sm">Работа строится в тесном сотрудничестве с клиентами, чтобы лучше понять источники идей и потребностей.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutStudio;