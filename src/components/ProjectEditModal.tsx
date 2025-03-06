
import { useState } from 'react';
import { X } from 'lucide-react';
import { Project } from '../assets/projects';
import { toast } from 'sonner';

interface ProjectEditModalProps {
  project: Project;
  onClose: () => void;
  onSave: (updatedProject: Project) => void;
}

const ProjectEditModal = ({ project, onClose, onSave }: ProjectEditModalProps) => {
  const [form, setForm] = useState<Project>({...project});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const updatedImages = [...form.images];
    updatedImages[index] = value;
    setForm(prev => ({ ...prev, images: updatedImages }));
    
    // Also update main image if changing the first image
    if (index === 0) {
      setForm(prev => ({ ...prev, image: value }));
    }
  };
  
  const handleAddImage = () => {
    setForm(prev => ({ 
      ...prev, 
      images: [...prev.images, '']
    }));
  };
  
  const handleRemoveImage = (index: number) => {
    const updatedImages = [...form.images];
    updatedImages.splice(index, 1);
    setForm(prev => ({ ...prev, images: updatedImages }));
    
    // Update main image if first image was removed
    if (index === 0 && updatedImages.length > 0) {
      setForm(prev => ({ ...prev, image: updatedImages[0] }));
    }
  };
  
  const handleAddService = () => {
    setForm(prev => ({ 
      ...prev, 
      services: [...prev.services, '']
    }));
  };
  
  const handleRemoveService = (index: number) => {
    const updatedServices = [...form.services];
    updatedServices.splice(index, 1);
    setForm(prev => ({ ...prev, services: updatedServices }));
  };
  
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    const updatedServices = [...form.services];
    updatedServices[index] = value;
    setForm(prev => ({ ...prev, services: updatedServices }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!form.title.trim() || !form.description.trim()) {
      toast("Заголовок и описание обязательны", {
        description: "Пожалуйста, заполните все обязательные поля",
      });
      return;
    }
    
    // Make sure main image is set
    if (!form.image && form.images.length > 0) {
      form.image = form.images[0];
    }
    
    onSave(form);
    toast("Проект обновлен", {
      description: "Изменения успешно сохранены",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      <div className="bg-background rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 z-10 flex justify-between items-center p-4 border-b bg-secondary">
          <h2 className="font-serif text-xl font-medium">Редактировать проект</h2>
          <button 
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Заголовок *</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Категория *</label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="residential">Жилой</option>
                  <option value="commercial">Коммерческий</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Местоположение</label>
                <input
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Год</label>
                <input
                  name="year"
                  type="number"
                  value={form.year}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={form.featured || false}
                  onChange={(e) => setForm(prev => ({ ...prev, featured: e.target.checked }))}
                  className="h-4 w-4"
                />
                <label htmlFor="featured" className="text-sm font-medium">Избранный проект</label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Описание *</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={5}
                className="w-full p-2 border rounded-md"
                required
              />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Изображения</label>
              <button 
                type="button" 
                onClick={handleAddImage}
                className="text-sm px-2 py-1 bg-secondary rounded-md"
              >
                + Добавить изображение
              </button>
            </div>
            <div className="space-y-2">
              {form.images.map((img, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    value={img}
                    onChange={(e) => handleImageChange(e, index)}
                    className="flex-1 p-2 border rounded-md text-sm"
                    placeholder="URL изображения"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleRemoveImage(index)}
                    className="text-destructive hover:text-destructive/80"
                    disabled={form.images.length <= 1}
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Первое изображение будет использовано как основное</p>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium">Услуги</label>
              <button 
                type="button" 
                onClick={handleAddService}
                className="text-sm px-2 py-1 bg-secondary rounded-md"
              >
                + Добавить услугу
              </button>
            </div>
            <div className="space-y-2">
              {form.services.map((service, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    value={service}
                    onChange={(e) => handleServiceChange(e, index)}
                    className="flex-1 p-2 border rounded-md text-sm"
                    placeholder="Название услуги"
                  />
                  <button 
                    type="button" 
                    onClick={() => handleRemoveService(index)}
                    className="text-destructive hover:text-destructive/80"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectEditModal;
