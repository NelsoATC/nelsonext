
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  MonitorPlay, 
  ClipboardCheck, 
  ArrowRight 
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NelsoServiciosSection = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary mb-4">
            {isSpanish ? "Soluciones Profesionales" : "Professional Solutions"}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isSpanish ? "Nelso Servicios" : "Nelso Services"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? "Expertise global para proveedores de servicios de navegación aérea y organizaciones del sector"
              : "Global expertise for air navigation service providers and sector organizations"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>
                {isSpanish ? "Formación para controladores en activo" : "Training for active controllers"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Programas de actualización y especialización diseñados para controladores que ya están ejerciendo y necesitan mantener o ampliar sus competencias"
                  : "Update and specialization programs designed for controllers who are already practicing and need to maintain or expand their skills"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MonitorPlay className="h-10 w-10 text-primary mb-2" />
              <CardTitle>
                {isSpanish ? "Simulaciones personalizadas" : "Customized simulations"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Desarrollo de escenarios de simulación a medida para necesidades específicas de cada cliente, recreando entornos y situaciones particulares"
                  : "Development of custom simulation scenarios for specific needs of each client, recreating particular environments and situations"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Briefcase className="h-10 w-10 text-primary mb-2" />
              <CardTitle>
                {isSpanish ? "Consultoría en procedimientos" : "Procedure consulting"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Asesoramiento experto en la optimización de procedimientos operacionales y mejora de la eficiencia en servicios de navegación aérea"
                  : "Expert advice on the optimization of operational procedures and efficiency improvement in air navigation services"}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <ClipboardCheck className="h-10 w-10 text-primary mb-2" />
              <CardTitle>
                {isSpanish ? "Evaluación y selección" : "Evaluation and selection"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                {isSpanish
                  ? "Servicios profesionales para la selección y evaluación de candidatos a controladores aéreos, con metodologías validadas internacionalmente"
                  : "Professional services for the selection and evaluation of air controller candidates, with internationally validated methodologies"}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/servicios">
              {isSpanish ? "Explora nuestros servicios" : "Explore our services"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NelsoServiciosSection;
