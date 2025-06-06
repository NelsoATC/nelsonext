import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
const InstalacionesSection = () => {
  const {
    language
  } = useLanguage();
  const isSpanish = language === 'es';
  return <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Equipamiento" : "Equipment"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Instalaciones y Tecnología" : "Facilities and Technology"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish ? "Contamos con la tecnología más avanzada para garantizar una formación de máxima calidad" : "We have the most advanced technology to ensure maximum quality training"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img alt="Simuladores" className="w-full h-80 object-cover rounded-lg shadow-md mb-6" src="/lovable-uploads/2a30cc77-48f7-4763-859e-a2fbd3ac5f73.jpg" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {isSpanish ? "Simuladores de última generación" : "State-of-the-art simulators"}
            </h3>
            <p className="text-gray-700">
        {isSpanish 
          ? "Nuestros simuladores recrean con precisión entornos reales de control aéreo, incluyendo torres de 360° y posiciones de control radar avanzadas. Ambos campus están equipados con tecnología de vanguardia certificada." 
          : "Our simulators accurately recreate real air control environments, including 360° towers and advanced radar control positions. Both campuses are equipped with certified cutting-edge technology."}
      </p>
          </div>

          <div>
            <img alt="Software" className="w-full h-80 object-cover rounded-lg shadow-md mb-6" src="/lovable-uploads/2b1d412c-d837-40f9-bfc8-3fe76eabcb03.jpg" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">
              {isSpanish ? "Software y entornos inmersivos" : "Software and immersive environments"}
            </h3>
            <p className="text-gray-700">
              {isSpanish ? "Utilizamos software especializado que permite crear escenarios personalizados y simular todo tipo de situaciones operativas, desde condiciones normales hasta emergencias complejas y situaciones de alta carga de trabajo." : "We use specialized software that allows us to create custom scenarios and simulate all types of operational situations, from normal conditions to complex emergencies and high workload situations."}
            </p>
          </div>
        </div>

        
      </div>
    </section>;
};
export default InstalacionesSection;
