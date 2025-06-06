
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const NuestrosCampusSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Instalaciones" : "Facilities"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Nuestros Centros" : "Our Centers"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish ? "Contamos con dos centros completamente equipados para ofrecer la mejor experiencia formativa" : "We have two fully equipped centers to offer the best training experience"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Link to="/madrid" className="block transition-transform hover:scale-105">
            <Card className="overflow-hidden h-full">
              <img alt="Centro Madrid" className="w-full h-64 object-cover" src="/lovable-uploads/7a68e7ef-6f09-4ed0-b3a9-c45a75733265.jpg" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>{isSpanish ? "Centro Madrid" : "Madrid Center"}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• {isSpanish ? "Ubicación estratégica cerca del aeropuerto Adolfo Suárez Madrid-Barajas" : "Strategic location near Adolfo Suárez Madrid-Barajas Airport"}</li>
                  <li>• {isSpanish ? "Simuladores de última generación para torre y ruta" : "State-of-the-art simulators for tower and route"}</li>
                  <li>• {isSpanish ? "Aulas equipadas con tecnología avanzada" : "Classrooms equipped with advanced technology"}</li>
                  <li>• {isSpanish ? "Excelentes conexiones de transporte" : "Excellent transport connections"}</li>
                </ul>
              </CardContent>
            </Card>
          </Link>

          <Link to="/canarias" className="block transition-transform hover:scale-105">
            <Card className="overflow-hidden h-full relative">
              {/* Cinta de "Próximamente" */}
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-10 pointer-events-none">
                <div className="absolute top-[30px] right-[-50px] bg-primary text-white py-1 px-12 font-semibold transform rotate-45 shadow-md text-sm">
                  {isSpanish ? "PRÓXIMAMENTE" : "COMING SOON"}
                </div>
              </div>
              <img alt="Centro Gran Canaria" className="w-full h-64 object-cover" src="/lovable-uploads/f94d1c09-4429-48bf-a9d0-5e0d7edbe10a.png" />
              <CardHeader>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <CardTitle>{isSpanish ? "Centro Gran Canaria" : "Gran Canaria Center"}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• {isSpanish ? "La primera escuela de controladores de Canarias" : "The first air traffic controller school in the Canary Islands"}</li>
                  <li>• {isSpanish ? "Instalaciones adecuadas para una formación de calidad" : "Adequate facilities for quality training"}</li>
                  <li>• {isSpanish ? "Entorno estratégico y hub internacional" : "Strategic environment and international hub"}</li>
                  <li>• {isSpanish ? "Simuladores de última generación para control aéreo" : "State-of-the-art simulators for air traffic control"}</li>
                </ul>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NuestrosCampusSection;
