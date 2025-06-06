
import { motion } from 'framer-motion';
import { Plane, BrainCircuit, Network } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroHome2Section = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#221F26] to-[#403E43]">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-20">
        {[...Array(72)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            className="bg-[#8B5CF6] rounded-full blur-sm"
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              variant="outline" 
              className="bg-[#8B5CF6] border-[#8B5CF6]/60 text-white px-4 py-1 text-sm font-medium mb-6"
            >
              {isSpanish ? "FUTURO DE LA AVIACIÓN" : "FUTURE OF AVIATION"}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            {isSpanish ? "El Control Aéreo del" : "Air Traffic Control of the"}{" "}
            <span className="text-[#8B5CF6]">{isSpanish ? "Mañana" : "Future"}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl"
          >
            {isSpanish 
              ? "Formamos a los profesionales que controlarán el espacio aéreo del futuro usando tecnología de vanguardia"
              : "Training the professionals who will control tomorrow's airspace using cutting-edge technology"}
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mb-12"
          >
            {[
              {
                icon: <Plane className="h-8 w-8" />,
                text: isSpanish ? "Control Aéreo" : "Air Control"
              },
              {
                icon: <BrainCircuit className="h-8 w-8" />,
                text: isSpanish ? "IA Avanzada" : "Advanced AI"
              },
              {
                icon: <Network className="h-8 w-8" />,
                text: isSpanish ? "Redes Globales" : "Global Networks"
              }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
                  {item.icon}
                </div>
                <span className="text-gray-300 text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              asChild
              size="lg" 
              className="bg-[#8B5CF6] hover:bg-[#8B5CF6]/90 text-white px-8"
            >
              <Link to="/cursos">
                {isSpanish ? "Explorar Cursos" : "Explore Courses"}
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="text-white border-white/20 hover:bg-white/10"
            >
              <Link to="/servicios">
                {isSpanish ? "Servicios ATC" : "ATC Services"}
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroHome2Section;
