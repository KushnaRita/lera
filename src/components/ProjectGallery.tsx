
import { useState, useRef, useEffect } from 'react';
import { projects, Project } from '../assets/projects';

const ProjectGallery = () => {
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial'>('all');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

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

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div 
        ref={containerRef}
        className="section-container"
      >
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-primary/70 mb-3">Our Portfolio</p>
          <h2 className="heading-lg mb-6">Featured Projects</h2>
          <p className="text-body max-w-2xl mx-auto">
            Explore our diverse collection of residential and commercial spaces,
            each crafted with attention to detail and a deep understanding of our clients' needs.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['all', 'residential', 'commercial'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category as any)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  filter === category 
                    ? 'bg-primary text-primary-foreground shadow-md' 
                    : 'bg-background hover:bg-accent text-foreground'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${
                isInView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
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
                  <span className="text-xs px-2 py-1 bg-secondary rounded-full">
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
    </section>
  );
};

export default ProjectGallery;
