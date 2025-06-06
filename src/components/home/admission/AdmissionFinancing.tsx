
import Link from "next/link";
import React from 'react';
import { Button } from '@/components/ui/button';

interface AdmissionFinancingProps {
  isSpanish: boolean;
}

const AdmissionFinancing = ({ isSpanish }: AdmissionFinancingProps) => {
  return (
    <>
      <h3 className="text-xl font-semibold mb-4">{isSpanish ? 'Financiación' : 'Financing'}</h3>
      <p className="text-gray-600 mb-4">
        {isSpanish 
          ? 'Ofrecemos diferentes opciones de financiación para que puedas realizar tu formación' 
          : 'We offer different financing options so you can complete your training'}
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5" aria-hidden="true">•</span>
          <span>{isSpanish ? 'Pago fraccionado sin intereses' : 'Installment payment without interest'}</span>
        </li>
        <li className="flex items-start">
          <span className="text-primary mr-2 pt-0.5" aria-hidden="true">•</span>
          <span>{isSpanish ? 'Financiación bancaria' : 'Bank financing'}</span>
        </li>
      </ul>
      <Button 
        variant="outline" 
        className="w-full"
        aria-label={isSpanish ? 'Más información sobre financiación' : 'More information about financing'}
      >
        <Link href="/contact">
          {isSpanish ? 'Más información' : 'More information'}
        </Link>
      </Button>
    </>
  );
};

export default AdmissionFinancing;
