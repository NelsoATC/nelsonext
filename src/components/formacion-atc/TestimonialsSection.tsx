
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  image?: string; // Make image optional
}

interface TestimonialsSectionProps {
  isSpanish: boolean;
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials = [
  {
    name: "Àngels",
    role: "Alumna de Nelso",
    comment: "El curso de preparación de Nelso proporciona grandes recursos y consejos por parte de profesionales que ayudan a entender cómo afrontar los ejercicios para las pruebas de forma más segura y amena.",
  },
  {
    name: "Eduardo",
    role: "Alumno de Nelso",
    comment: "Sin duda, de todas las opciones que hay, ¡Nelso es el único sitio en el que prepararse si quieres aprobar la oposición!",
  },
  {
    name: "Toni",
    role: "Alumno de Nelso",
    comment: "Ha sido sin duda la mejor decisión que haya podido tomar. Ha superado totalmente mis expectativas. Un centro con un gran equipo de profesionales. Y una muy buena opción para prepararse las oposiciones.",
  },
  {
    name: "Teresa",
    role: "Alumna de Nelso",
    comment: "El nivel de la academia es altísimo y se nota que les encanta formarnos para llegar a las pruebas con el mejor nivel. Sin duda es el sitio para prepararte para ser controlador aéreo.",
  },
  {
    name: "Jaime",
    role: "Alumno de Nelso",
    comment: "Estoy encantado con las clases online que he recibido por parte del profesorado. Estoy deseando que llegue Septiembre y poder empezar con las presenciales. Totalmente recomendable como primer step para ser ATC.",
  },
  {
    name: "Carlotta",
    role: "Alumna de Nelso",
    comment: "Mi experiencia en el curso de Nelso ha superado todas mis expectativas. Es la mejor apuesta para preparar las oposiciones a Controlador Aéreo. La seguridad y tranquilidad con la que me siento para afrontar la prueba es indiscutible y creo que no sólo saldrán grandes controladores de éste curso sino también mejores personas gracias al gran equipo humano de Nelso.",
  }
];

const TestimonialsSection = ({ 
  isSpanish, 
  title, 
  subtitle,
  testimonials = defaultTestimonials 
}: TestimonialsSectionProps) => {
  
  const defaultTitle = isSpanish 
    ? "Lo que dicen nuestros alumnos" 
    : "What our students say";
  
  const defaultSubtitle = isSpanish 
    ? "Experiencias de nuestros graduados y estudiantes actuales" 
    : "Experiences from our graduates and current students";

  const [api, setApi] = useState<any>(null);

  // Set up auto-rotation
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title || defaultTitle}</h3>
        <p className="text-gray-600">{subtitle || defaultSubtitle}</p>
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        <Carousel 
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full">
                    <CardContent className="pt-6 flex flex-col h-full">
                      <Quote className="h-6 w-6 text-primary/40 mb-4" />
                      <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.comment}</p>
                      <div className="flex items-center mt-auto">
                        <Avatar className="h-10 w-10 mr-3">
                          {testimonial.image ? (
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          ) : (
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {testimonial.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium text-gray-900">{testimonial.name}</p>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-2">
            <CarouselPrevious className="static transform-none mx-1" />
            <CarouselNext className="static transform-none mx-1" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsSection;
