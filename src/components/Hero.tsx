import { useEffect, useRef } from 'react';
const Hero = () => {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Staggered animation effect
    const elements = [{
      ref: subtitleRef,
      delay: 100
    }, {
      ref: titleRef,
      delay: 300
    }, {
      ref: descriptionRef,
      delay: 500
    }, {
      ref: buttonRef,
      delay: 700
    }, {
      ref: imageRef,
      delay: 900
    }];
    elements.forEach(({
      ref,
      delay
    }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('opacity-100', 'translate-y-0');
          ref.current?.classList.remove('opacity-0', 'translate-y-8');
        }, delay);
      }
    });
  }, []);
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <p ref={subtitleRef} className="uppercase tracking-widest text-primary/70 text-sm opacity-0 translate-y-8 transition-all duration-700">СТУДИЯ ДИЗАЙНА ИНТЕРЬЕРА</p>
            
            <h1 ref={titleRef} className="heading-xl opacity-0 translate-y-8 transition-all duration-700">Дизайн интерьеров, коммерческих помещений и жилых пространств, который вдохновляет</h1>
            
            <p ref={descriptionRef} className="text-body-lg max-w-xl opacity-0 translate-y-8 transition-all duration-700">
              A boutique interior design studio dedicated to creating beautiful, functional environments that elevate everyday experiences.
            </p>
            
            <button ref={buttonRef} onClick={scrollToProjects} className="button-primary mt-4 opacity-0 translate-y-8 transition-all duration-700">
              View Projects
            </button>
          </div>
          
          <div ref={imageRef} className="relative h-[400px] md:h-[500px] lg:h-[600px] opacity-0 translate-y-8 transition-all duration-700">
            <div className="absolute inset-0 bg-studio-100 -rotate-3 transform origin-bottom-right"></div>
            <div className="absolute inset-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&auto=format&fit=crop&q=80" alt="Interior design showcase" className="w-full h-full object-cover object-center" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="animate-bounce opacity-50 cursor-pointer" onClick={scrollToProjects}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>;
};
export default Hero;