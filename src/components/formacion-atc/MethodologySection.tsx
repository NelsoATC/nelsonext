
import React from "react";

interface MethodologySectionProps {
  isSpanish: boolean;
}

const MethodologySection = ({ isSpanish }: MethodologySectionProps) => {
  return (
    <div className="bg-primary/5 rounded-xl p-8 mb-12">
      <h3 className="text-2xl font-semibold text-primary mb-4">
        {isSpanish 
          ? "Metodología basada en simulación avanzada" 
          : "Methodology based on advanced simulation"}
      </h3>
      <p className="text-gray-700 mb-6">
        {isSpanish 
          ? "Nuestra metodología se basa en la práctica intensiva en simuladores que recrean escenarios reales, complementada con teoría aplicada y seguimiento personalizado."
          : "Our methodology is based on intensive practice in simulators that recreate real scenarios, complemented with applied theory and personalized monitoring."}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="font-semibold text-primary mb-2">+500 {isSpanish ? "horas" : "hours"}</div>
          <div className="text-gray-600">
            {isSpanish ? "de práctica en simulador" : "of simulator practice"}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="font-semibold text-primary mb-2">+200 {isSpanish ? "escenarios" : "scenarios"}</div>
          <div className="text-gray-600">
            {isSpanish ? "basados en situaciones reales" : "based on real situations"}
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="font-semibold text-primary mb-2">{isSpanish ? "Entorno adaptado" : "Adapted environment"}</div>
          <div className="text-gray-600">
            {isSpanish ? "para la formación y de última generación" : "for training and state-of-the-art"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySection;
