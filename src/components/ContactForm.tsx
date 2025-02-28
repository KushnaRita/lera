
import { useState, useRef, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    phone: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
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
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types (только для имени и телефона)
    if ((name === 'name' || name === 'phone') && errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };
    
    // Validate name (не пустое и содержит только буквы и пробелы)
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
      isValid = false;
    } else if (!/^[а-яА-Яa-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = 'Имя должно содержать только буквы';
      isValid = false;
    }
    
    // Validate phone (если заполнено, то проверяем формат)
    if (formData.phone.trim() && !/^(\+7|8)?[\s-]?\(?[0-9]{3}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/.test(formData.phone)) {
      newErrors.phone = 'Пожалуйста, введите корректный телефон';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, проверьте правильность заполнения полей Имя и Телефон.",
        variant: "destructive"
      });
      return;
    }
    
    // Проверка на заполнение обязательных полей
    if (!formData.email || !formData.service || !formData.message) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, заполните все обязательные поля.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });

      // Show success toast
      toast({
        title: "Сообщение отправлено",
        description: "Спасибо за ваше обращение. Мы свяжемся с вами в ближайшее время!"
      });
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-background">
      <div ref={containerRef} className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className={isInView ? 'animate-fade-in' : 'opacity-0'}>
            <p className="text-sm uppercase tracking-widest text-primary/70 mb-3">КОНТАКТЫ</p>
            <h2 className="heading-lg mb-6">Свяжитесь с нами</h2>
            
            <p className="text-body mb-8">Готовы преобразовать свое пространство? Нужен свежий взгляд? Вы по адресу. Будем рады покреативить для вас и вместе с вами.</p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-secondary/80 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"></path>
                    <polyline points="3 7 12 13 21 7"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium">Email</h3>
                  <p className="text-body-sm">hello@atelierstudio.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-secondary/80 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium">Телефон</h3>
                  <p className="text-body-sm">+7 (495) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-secondary/80 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium">Студия</h3>
                  <p className="text-body-sm">ул. Дизайнерская, 123, офис 400<br />Москва, Россия</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`bg-secondary/30 rounded-lg p-8 ${isInView ? 'animate-fade-in' : 'opacity-0'}`} style={{
            animationDelay: '200ms'
          }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-1">Имя*</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required 
                  className={`input-field ${errors.name ? 'ring-destructive focus:ring-destructive' : ''}`} 
                  placeholder="Ваше имя" 
                />
                {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-1">Email*</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                    className="input-field" 
                    placeholder="Ваш email" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground/80 mb-1">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className={`input-field ${errors.phone ? 'ring-destructive focus:ring-destructive' : ''}`} 
                    placeholder="+7 (___) ___-__-__" 
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground/80 mb-1">Услуга*</label>
                <div className="relative">
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange}
                    required 
                    className="input-field appearance-none pr-10"
                    style={{ backgroundColor: 'hsl(var(--background))', borderRadius: 'var(--radius)' }}
                  >
                    <option value="" disabled>Выберите услугу</option>
                    <option value="interior-design">Дизайн Интерьера</option>
                    <option value="space-planning">Планировка Пространства</option>
                    <option value="furniture-design">Дизайн Мебели</option>
                    <option value="commercial-design">Коммерческий Дизайн</option>
                    <option value="renovation">Реновация</option>
                    <option value="consultation">Консультация по Дизайну</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-1">Сообщение*</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange}
                  required 
                  className="input-field min-h-[120px]" 
                  placeholder="Расскажите о вашем проекте"
                ></textarea>
              </div>
              
              <button type="submit" disabled={isSubmitting} className="button-primary w-full">
                {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
