
import React from 'react';

interface AdmissionDatesProps {
  isSpanish: boolean;
}

const AdmissionDates = ({ isSpanish }: AdmissionDatesProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">{isSpanish ? 'Fechas importantes' : 'Important dates'}</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-base">{isSpanish ? 'Convocatoria primavera' : 'Spring intake'}</h4>
          <p className="text-gray-600">{isSpanish ? 'Marzo - Julio' : 'March - July'}</p>
          <p className="text-sm text-gray-500 mt-1">{isSpanish ? 'Solicitudes: Enero - Febrero' : 'Applications: January - February'}</p>
        </div>
        <div>
          <h4 className="font-medium text-base">{isSpanish ? 'Convocatoria otoño' : 'Fall intake'}</h4>
          <p className="text-gray-600">{isSpanish ? 'Septiembre - Enero' : 'September - January'}</p>
          <p className="text-sm text-gray-500 mt-1">{isSpanish ? 'Solicitudes: Julio - Agosto' : 'Applications: July - August'}</p>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-100">
        <h4 className="font-medium text-base">{isSpanish ? 'Coste del curso' : 'Course cost'}</h4>
        <p className="text-gray-600">{isSpanish ? 'Consultar según programa' : 'Check according to program'}</p>
      </div>
    </>
  );
};

export default AdmissionDates;
