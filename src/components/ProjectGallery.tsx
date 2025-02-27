import { useState, useRef, useEffect } from 'react';
import { projects, Project } from '../assets/projects';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ProjectGallery = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const filteredProjects = filter === 'all' 
      ? projects 
      : projects.filter(project => project.category === filter);
    
    setVisibleProjects(filteredProjects);
  }, [filter]);

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

  useEffect(() => {
    if (isAutoPlaying && selectedProject) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentImageIndex(prev => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isAutoPlaying, selectedProject]);

  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      setIsAutoPlaying(true);
    } else {
      setIsAutoPlaying(false);
    }
  }, [selectedProject]);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setIsAutoPlaying(false);
    document.body.style.overflow = 'auto';
  };

  const handlePrevImage = () => {
    setIsAutoPlaying(false);
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    setIsAutoPlaying(false);
    if (selectedProject) {
      setCurrentImageIndex(prev => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      
      if (e.key === 'Escape') {
        handleCloseProject();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === ' ') {
        toggleAutoPlay();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div 
        ref={containerRef}
        className="section-container"
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-3">Наше Портфолио</p>
          <h2 className="heading-lg mb-6">Избранные Проекты</h2>
          <p className="text-body max-w-2xl mx-auto">
            Исследуйте нашу разнообразную коллекцию жилых и коммерческих пространств,
            каждое из которых создано с вниманием к деталям и глубоким пониманием потребностей наших клиентов.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              ['all', 'Все'],
              ['residential', 'Жилые'],
              ['commercial', 'Коммерческие']
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => setFilter(value as any)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  filter === value 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-accent hover:bg-accent/80 text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-secondary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              } cursor-pointer`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => handleOpenProject(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-sm font-medium">{project.location}</p>
                  <p className="text-xs opacity-80">{project.year}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg font-medium">{project.title}</h3>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-body-sm line-clamp-3 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.services.slice(0, 2).map((service, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-accent rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                  {project.services.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-accent rounded-full">
                      +{project.services.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-8">
          <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-secondary rounded-lg shadow-xl flex flex-col">
            <div className="relative px-6 py-4 flex justify-between items-center border-b border-border">
              <h3 className="font-serif text-xl md:text-2xl font-medium truncate pr-10">
                {selectedProject.title}
              </h3>
              <button 
                onClick={handleCloseProject}
                className="absolute right-4 top-4 text-foreground/70 hover:text-foreground transition-colors"
                aria-label="Закрыть"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="relative flex-grow overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="relative w-full h-[50vh] md:h-[60vh]">
                  {selectedProject.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                    >
                      <img 
                        src={image} 
                        alt={`${selectedProject.title} - view ${index + 1}`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors z-10"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div className="flex justify-center items-center gap-2 overflow-x-auto py-2 px-2 scrollbar-hide">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`w-16 h-12 md:w-20 md:h-16 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                        currentImageIndex === index 
                          ? 'ring-2 ring-primary scale-105'
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">
                    {selectedProject.location}
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">
                    {selectedProject.year}
                  </span>
                  <span className="text-xs px-2 py-1 bg-accent rounded-full">
                    {selectedProject.category === 'residential' ? 'Жилой' : 'Коммерческий'}
                  </span>
                </div>
                <p className="text-sm text-foreground/80">{selectedProject.description}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="text-xs md:text-sm text-foreground/70">
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </div>
                <button
                  onClick={toggleAutoPlay}
                  className={`px-4 py-2 rounded text-xs md:text-sm transition-colors ${
                    isAutoPlaying 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-secondary hover:bg-accent text-foreground'
                  }`}
                >
                  {isAutoPlaying ? 'Остановить слайдшоу' : 'Запустить слайдшоу'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
