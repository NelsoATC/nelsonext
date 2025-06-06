'use client';

import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

interface ContactInfoProps {
  isSpanish: boolean;
}

const ContactInfo = ({ isSpanish }: ContactInfoProps) => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [decodedEmail, setDecodedEmail] = useState('');
  
  // Function to decode the obfuscated email for real users when they click
  const revealEmail = () => {
    // Set directly to the correct email
    const element = document.getElementById('protected-email');
    if (element) {
      const correctEmail = 'info@nelsoformacion.com';
      element.setAttribute('href', 'mailto:' + correctEmail);
      setDecodedEmail(correctEmail);
      setEmailRevealed(true);
    }
  };

  return (
    <div className="space-y-6 mb-12">
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Mail className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-xl font-semibold">{isSpanish ? "Correo Electrónico" : "Email"}</h3>
        </div>
        <p className="text-gray-700">
          <a 
            id="protected-email" 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              revealEmail();
            }}
            className="hover:text-primary transition-colors"
          >
            {emailRevealed 
              ? decodedEmail 
              : isSpanish ? "Haz clic para mostrar" : "Click to reveal"
            }
          </a>
        </p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Phone className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-xl font-semibold">{isSpanish ? "Teléfono" : "Phone"}</h3>
        </div>
        <p className="text-gray-700">Madrid: +34 648 00 01 32</p>
        <p className="text-gray-700">Gran Canaria: +34 610 771 234</p>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-primary mr-2" />
          <h3 className="text-xl font-semibold">{isSpanish ? "Horario de Atención" : "Office Hours"}</h3>
        </div>
        <p className="text-gray-700">{isSpanish ? "Lunes a Viernes: 9:00 - 18:00" : "Monday to Friday: 9:00 - 18:00"}</p>
        <p className="text-gray-700">{isSpanish ? "Sábados y Domingos: Cerrado" : "Weekends: Closed"}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
