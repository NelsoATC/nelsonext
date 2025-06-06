
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Calendar, MapPin, FileCheck, BookOpen, BrainCircuit, Users, Workflow } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const SelectionProcessStructure = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div id="estructura-convocatoria" className="py-16 mb-16 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {isSpanish ? "Estructura de la Convocatoria 2024" : "Structure of the 2024 Selection Process"}
        </h2>
        
        <p className="text-gray-600 max-w-3xl mx-auto">
          {isSpanish
            ? "Conoce las diferentes fases del proceso selectivo y prepárate adecuadamente para cada una de ellas"
            : "Learn about the different phases of the selection process and prepare accordingly for each one"}
        </p>
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="fase1" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="fase1" className="text-sm sm:text-base">
              {isSpanish ? "Fase 1" : "Phase 1"}
            </TabsTrigger>
            <TabsTrigger value="fase2" className="text-sm sm:text-base">
              {isSpanish ? "Fase 2" : "Phase 2"}
            </TabsTrigger>
            <TabsTrigger value="fase3" className="text-sm sm:text-base">
              {isSpanish ? "Fase 3" : "Phase 3"}
            </TabsTrigger>
          </TabsList>
          
          {/* FASE 1 */}
          <TabsContent value="fase1" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {isSpanish 
                    ? "Fase 1 – Pruebas de Conocimiento, Aptitudes y Personalidad" 
                    : "Phase 1 – Knowledge, Aptitude and Personality Tests"}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Una jornada" : "Single day"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Madrid, Barcelona y Gran Canaria" : "Madrid, Barcelona and Gran Canaria"}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Prueba de Conocimientos */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <FileCheck className="h-5 w-5 text-primary" />
                    {isSpanish ? "Prueba de Conocimientos Generales" : "General Knowledge Test"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "50 preguntas tipo test" : "50 multiple-choice questions"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Basada en el temario oficial publicado" 
                        : "Based on the official published syllabus"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Mínimo: 25 puntos" : "Minimum: 25 points"}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Prueba de Inglés */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {isSpanish ? "Prueba de Inglés Escrito (Nivel C1)" : "Written English Test (C1 Level)"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "20 preguntas tipo test" : "20 multiple-choice questions"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Mínimo: 10 puntos" : "Minimum: 10 points"}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Test de Aptitudes */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    {isSpanish ? "Test de Aptitudes" : "Aptitude Test"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Razonamiento espacial, abstracto, atención, etc." 
                        : "Spatial reasoning, abstract reasoning, attention, etc."}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Mínimo: 25 puntos" : "Minimum: 25 points"}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Test de Personalidad */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {isSpanish ? "Test de Personalidad" : "Personality Test"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Cuestionario psicométrico" : "Psychometric questionnaire"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Evaluación Apto / No Apto" : "Pass/Fail evaluation"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* FASE 2 */}
          <TabsContent value="fase2" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {isSpanish 
                    ? "Fase 2 – Pruebas Digitales" 
                    : "Phase 2 – Digital Tests"}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Una jornada" : "Single day"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Madrid" : "Madrid"}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* FEAST */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    {isSpanish 
                      ? "FEAST (First European Air Traffic Controller Selection Test)" 
                      : "FEAST (First European Air Traffic Controller Selection Test)"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Evaluación oficial de EUROCONTROL" 
                        : "Official EUROCONTROL assessment"}
                      </span>
                    </li>
                  </ul>
                </div>
                
                {/* PDEA */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Workflow className="h-5 w-5 text-primary" />
                    {isSpanish 
                      ? "PDEA (Prueba Digital en Entorno ATC)" 
                      : "PDEA (Digital Test in ATC Environment)"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Simulación de entorno operativo de control aéreo" 
                        : "Simulation of air traffic control operational environment"}
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <p className="text-gray-700 italic">
                    {isSpanish 
                      ? "Ambas pruebas deben superarse individualmente y se requiere un mínimo de 50 puntos en el total de la fase."
                      : "Both tests must be passed individually and a minimum of 50 points is required in the total phase."}
                  </p>
                </div>
              </div>
            </motion.div>
          </TabsContent>
          
          {/* FASE 3 */}
          <TabsContent value="fase3" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-md p-6"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {isSpanish 
                    ? "Fase 3 – Evaluaciones Finales" 
                    : "Phase 3 – Final Evaluations"}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Una jornada" : "Single day"}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{isSpanish ? "Madrid" : "Madrid"}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                {/* Evaluación Oral de Inglés */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    {isSpanish ? "Evaluación Oral de Inglés (Nivel C1)" : "Oral English Assessment (C1 Level)"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Entrevista oral" : "Oral interview"}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Mínimo: 25 puntos sobre 50" : "Minimum: 25 points out of 50"}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Evaluación Conductual */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    {isSpanish 
                      ? "Evaluación Conductual y Adaptación al Entorno Profesional" 
                      : "Behavioral Assessment and Adaptation to Professional Environment"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Evaluación competencial y de ajuste al perfil" 
                        : "Competency assessment and profile adjustment"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Mínimo: 60 puntos sobre 120" : "Minimum: 60 points out of 120"}</span>
                    </li>
                  </ul>
                </div>
                
                {/* Evaluación Clínica */}
                <div className="border-l-4 border-primary/70 pl-4 py-1">
                  <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <BrainCircuit className="h-5 w-5 text-primary" />
                    {isSpanish ? "Evaluación Clínica de Personalidad" : "Clinical Personality Assessment"}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish 
                        ? "Evaluación psicológica clínica para descartar inadaptaciones o riesgos" 
                        : "Clinical psychological evaluation to rule out inadaptations or risks"}
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{isSpanish ? "Resultado: Apto / No Apto" : "Result: Pass / Fail"}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SelectionProcessStructure;
