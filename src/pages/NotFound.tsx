'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Home, Plane, Radio, Radar } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const pathname = usePathname();
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname
    );
  }, [pathname]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 relative overflow-hidden">
      {/* Radar grid background effect */}
      <div className="absolute inset-0 w-full h-full opacity-10">
        <div className="absolute inset-0 mesh-grid"></div>
        
        {/* Radar circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
          <div className="absolute inset-0 border-2 border-primary/40 rounded-full"></div>
          <div className="absolute inset-[15%] border-2 border-primary/30 rounded-full"></div>
          <div className="absolute inset-[30%] border-2 border-primary/20 rounded-full"></div>
          <div className="absolute inset-[45%] border-2 border-primary/10 rounded-full"></div>
          
          {/* Radar sweep */}
          <div className="absolute inset-0 origin-center animate-radar-sweep">
            <div className="h-1/2 w-1 bg-gradient-to-t from-primary/60 to-transparent ml-[249px]"></div>
          </div>
        </div>
      </div>
      <div className="relative z-10 text-center max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex justify-center">
            <div className="relative">
              <Radar className="h-20 w-20 text-primary opacity-80" />
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-0 h-20 w-20"
              >
                <div className="h-[10px] w-[10px] bg-primary rounded-full absolute top-[15px] right-[15px]"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-8xl font-bold text-gray-800 mb-2">404</h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-primary"></div>
            <h2 className="text-xl font-semibold text-gray-700">
              {isSpanish ? 'Señal perdida' : 'Signal lost'}
            </h2>
            <div className="h-[2px] w-8 bg-primary"></div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Radio size={16} className="text-primary animate-pulse" />
            <p className="text-gray-600 font-mono">
              {isSpanish ? 'Torre a aeronave: ruta no encontrada' : 'Tower to aircraft: route not found'}
            </p>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <p className="text-gray-600 mb-2 font-mono text-sm">
              <span className="text-primary font-semibold">&gt; ERROR:</span> {isSpanish ? 'Coordenadas' : 'Coordinates'} "{pathname}"
            </p>
            <p className="text-gray-600 font-mono text-sm">
              <span className="text-primary font-semibold">&gt; STATUS:</span> {isSpanish ? 'Fuera de espacio aéreo controlado' : 'Outside controlled airspace'}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/">
            <Button 
              size="lg"
              className="gap-2 bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              <Home size={18} />
              {isSpanish ? 'Volver a la torre' : 'Return to tower'}
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors"
          >
            <div className="relative">
              <ArrowLeft size={18} />
              <motion.div
                initial={{ x: 15, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  repeatType: "reverse"
                }}
              >
                <Plane size={18} className="absolute -top-4 -left-8 rotate-[320deg]" />
              </motion.div>
            </div>
            {isSpanish ? 'Regresar a ruta anterior' : 'Return to previous route'}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
