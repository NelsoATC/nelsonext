
import React from "react";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  isSpanish: boolean;
}

const SectionHeader = ({ isSpanish }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-primary/10 text-primary mb-4">
        {isSpanish ? "Programas" : "Programs"}
      </Badge>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {isSpanish ? "Formación Inicial ATC" : "Initial ATC Training"}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {isSpanish 
          ? "Nuestra formación está diseñada para preparar controladores de tránsito aéreo de alto nivel" 
          : "Our training is designed to prepare high-level air traffic controllers"}
      </p>
    </div>
  );
};

export default SectionHeader;
