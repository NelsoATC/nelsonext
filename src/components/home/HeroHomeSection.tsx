
import Link from "next/link";
import { motion } from 'framer-motion';
import { TowerControl, Plane, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const HeroHomeSection = () => {
  const { t } = useLanguage();
  const isSpanish = t('language') === 'es';

  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('/images/atc-hero.jpg')",
          filter: "brightness(0.85)"
        }}
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Radar Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Radar Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-10">
            {/* Radar circles */}
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-[15%] border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-[30%] border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-[45%] border-2 border-primary/20 rounded-full"></div>
            {/* Radar sweep */}
            <div className="absolute inset-0 origin-center animate-radar-sweep">
              <div className="h-1/2 w-1 bg-gradient-to-t from-primary/50 to-transparent ml-[299px]"></div>
            </div>
            {/* Radar blips */}
            <div className="absolute top-[30%] left-[40%] w-2 h-2 bg-primary rounded-full animate-radar-ping"></div>
            <div className="absolute top-[60%] left-[70%] w-2 h-2 bg-primary rounded-full animate-radar-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-[45%] left-[55%] w-2 h-2 bg-primary rounded-full animate-radar-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Upcoming Course Alert */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-2xl mx-auto"
          >
            <Alert className="border-primary/40 bg-primary/10 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-primary" />
              <AlertTitle className="text-white font-medium ml-2">
                {isSpanish ? "Próxima convocatoria" : "Upcoming course"}
              </AlertTitle>
              <AlertDescription className="text-gray-200 ml-7">
                {isSpanish 
                  ? "El Bloque 1 (Básica y Torre) comienza en Mayo. ¡Plazas limitadas!"
                  : "Block 1 (Basic and Tower) starts in May. Limited seats available!"}
                <Link href="/bloque-1-torre" className="inline-block text-primary ml-2 underline-offset-2 hover:underline">
                  {isSpanish ? "Más información" : "More info"}
                </Link>
              </AlertDescription>
            </Alert>
          </motion.div>
          
          <TowerControl className="mx-auto h-16 w-16 text-white" />
          <Badge variant="outline" className="bg-primary border-primary/60 text-white px-4 py-1 text-sm font-medium">
            {t('home.badge')}
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            {t('home.title')}
            <br />
            <span className="text-primary">{t('home.titleHighlight')}</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-white">
            {t('home.subtitle')}
          </p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <Link href="/cursos">
              <Button size="lg" className="text-base">
                {t('home.cta.courses')}
              </Button>
            </Link>
            <Link href="/servicios">
              <Button size="lg" variant="secondary" className="text-base bg-white/90 text-gray-800 hover:bg-white">
                {t('home.cta.services')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHomeSection;
