
import React from "react";
import { Navigation, Plane } from "lucide-react";

interface LicensesInfoSectionProps {
  isSpanish: boolean;
}

const LicensesInfoSection = ({ isSpanish }: LicensesInfoSectionProps) => {
  return (
    <div className="bg-primary/5 rounded-xl p-8 mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        {isSpanish 
          ? "Licencias de Torre, Ruta y Aproximación" 
          : "Tower, Route and Approach Licenses"}
      </h3>
      <p className="text-gray-700 mb-6">
        {isSpanish 
          ? "Nuestro programa de Torre, Ruta y Aproximación proporciona las competencias necesarias para controlar el tráfico aéreo en aeródromos, en aproximación a aeropuertos y en rutas de navegación aérea, siguiendo los estándares de AESA."
          : "Our Tower, Route and Approach program provides the necessary skills to control air traffic at aerodromes, on approach to airports and on air navigation routes, following AESA standards."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Navigation className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-gray-900">
              {isSpanish ? "Control de Torre" : "Tower Control"}
            </h4>
          </div>
          <ul className="space-y-2 text-gray-600 pl-10 list-disc">
            <li>{isSpanish ? "Control del área de maniobras" : "Maneuvering area control"}</li>
            <li>{isSpanish ? "Gestión de pista y rodadura" : "Runway and taxiing management"}</li>
            <li>{isSpanish ? "Coordinación con aproximación" : "Coordination with approach"}</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Plane className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-gray-900">
              {isSpanish ? "Control de Ruta" : "Route Control"}
            </h4>
          </div>
          <ul className="space-y-2 text-gray-600 pl-10 list-disc">
            <li>{isSpanish ? "Control de aeronaves en ruta" : "En-route aircraft control"}</li>
            <li>{isSpanish ? "Gestión de flujos de tráfico" : "Traffic flow management"}</li>
            <li>{isSpanish ? "Procedimientos de emergencia" : "Emergency procedures"}</li>
          </ul>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-primary/10 rounded-full p-2">
              <Navigation className="h-5 w-5 text-primary" />
            </div>
            <h4 className="font-semibold text-gray-900">
              {isSpanish ? "Control de Aproximación" : "Approach Control"}
            </h4>
          </div>
          <ul className="space-y-2 text-gray-600 pl-10 list-disc">
            <li>{isSpanish ? "Secuenciación de llegadas y salidas" : "Sequencing arrivals and departures"}</li>
            <li>{isSpanish ? "Gestión de espacios aéreos terminales" : "Terminal airspace management"}</li>
            <li>{isSpanish ? "Coordinación con torres y centros de control" : "Coordination with towers and control centers"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LicensesInfoSection;
