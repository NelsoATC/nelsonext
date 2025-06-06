
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Award } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [decodedEmail, setDecodedEmail] = useState('');

  // Function to decode the obfuscated email for real users when they click
  const revealEmail = () => {
    // Set directly to the correct email
    const element = document.getElementById('footer-protected-email');
    if (element) {
      const correctEmail = 'info@nelsoformacion.com';
      element.setAttribute('href', 'mailto:' + correctEmail);
      setDecodedEmail(correctEmail);
      setEmailRevealed(true);
    }
  };

  return <footer className="bg-gray-900 text-gray-200 py-12 mt-auto">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-white font-bold text-xl">Nelso Formación</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              {isSpanish 
                ? "Centro de referencia en la formación de controladores aéreos." 
                : "Reference center in air traffic controller training."}
            </p>
            <a 
              href="https://www.seguridadaerea.gob.es/es/ambitos/navegacion-aerea/organizaciones-de-formacion-ats" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <Award size={16} className="text-primary" />
              <span>
                {isSpanish 
                  ? "Centro certificado por AESA · Código PFATC-19" 
                  : "AESA certified center · Code PFATC-19"}
              </span>
            </a>
            <div className="flex space-x-4 pt-2">
              <a href="https://www.facebook.com/nelsoaeroformacion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nelsoformacion/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/nelsoformacion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 512 462.799" className="fill-current">
                  <path fillRule="evenodd" clipRule="evenodd" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/nelso-elite-atc-training" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Centro Madrid */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {isSpanish ? "Centro Madrid" : "Madrid Center"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-400">
                  Calle Ferrer del Río, 35, 28028 Madrid
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-400">+34 648 00 01 32</p>
              </div>
              <Link to="/madrid" className="text-primary hover:text-primary/80 text-sm flex items-center transition-colors">
                {isSpanish ? "Ver instalaciones" : "View facilities"}
              </Link>
            </div>
          </div>

          {/* Columna 3: Centro Gran Canaria */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              {isSpanish ? "Centro Gran Canaria" : "Gran Canaria Center"}
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-gray-400">Calle Antonio María Manrique, 3, 35011 Las Palmas</p>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-primary flex-shrink-0" />
                <p className="text-sm text-gray-400">+34 610 771 234</p>
              </div>
              <Link to="/canarias" className="text-primary hover:text-primary/80 text-sm flex items-center transition-colors">
                {isSpanish ? "Ver instalaciones" : "View facilities"}
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center px-4">
          <div className="flex items-center mb-4 md:mb-0">
            <Mail size={18} className="mr-2 text-primary" />
            <a 
              id="footer-protected-email" 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                revealEmail();
              }}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {emailRevealed 
                ? decodedEmail
                : isSpanish ? "Haz clic para mostrar" : "Click to reveal"
              }
            </a>
          </div>
          <div className="text-xs text-gray-500 space-y-2">
            <p>&copy; {new Date().getFullYear()} Nelso Formación. {isSpanish ? "Todos los derechos reservados." : "All rights reserved."}</p>
            <div className="flex space-x-4 justify-center md:justify-end">
              <Link to="/politica-privacidad" className="hover:text-white transition-colors">
                {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
              </Link>
              <Link to="/politica-cookies" className="hover:text-white transition-colors">
                {isSpanish ? "Política de Cookies" : "Cookie Policy"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};

export default Footer;
