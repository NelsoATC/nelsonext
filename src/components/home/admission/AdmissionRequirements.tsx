
import React from 'react';

interface AdmissionRequirementsProps {
  isSpanish: boolean;
}

const AdmissionRequirements = ({ isSpanish }: AdmissionRequirementsProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">
        {isSpanish ? 'Requisitos mínimos' : 'Minimum Requirements'}
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5">•</span>
          <span>{isSpanish ? 'Tener 18 años cumplidos' : 'Be at least 18 years old'}</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5">•</span>
          <span>{isSpanish ? 'Bachillerato o equivalente' : 'High school diploma or equivalent'}</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5">•</span>
          <span>{isSpanish ? 'Buen nivel de inglés' : 'Good English proficiency'}</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5">•</span>
          <span>{isSpanish ? 'Superar pruebas psicotécnicas' : 'Pass psychotechnical tests'}</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5">•</span>
          <span>{isSpanish 
            ? 'Obtener certificado médico aeronáutico Clase 3 al finalizar el curso' 
            : 'Obtain Class 3 aeronautical medical certificate by the end of the course'}</span>
        </li>
      </ul>
    </>
  );
};

export default AdmissionRequirements;
