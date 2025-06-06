'use client';

import { usePathname, useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLanguage } from './LanguageContext';

// Define Spanish speaking countries ISO codes
const SPANISH_SPEAKING_COUNTRIES = [
  'ES', 'MX', 'AR', 'CO', 'PE', 'VE', 'CL', 'EC', 'GT', 'CU', 
  'BO', 'DO', 'HN', 'PY', 'SV', 'NI', 'CR', 'PA', 'UY', 'PR', 'GQ'
];

// URL mappings between languages
const URL_MAPPINGS: Record<string, Record<string, string>> = {
  // Spanish to English
  'es': {
    '/cursos': '/courses',
    '/servicios': '/services',
    '/contacto': '/contact',
    '/madrid': '/madrid-campus',
    '/canarias': '/canary-islands',
    '/formacion-avanzada': '/advanced-training',
    '/habilitacion-completa': '/complete-rating',
    '/bloque-1-torre': '/block-1-tower',
    '/bloque-2-aproximacion': '/block-2-approach',
    '/procesos-selectivos': '/selection-process',
    '/preparacion-convocatoria': '/call-preparation',
    '/politica-privacidad': '/privacy-policy',
    '/politica-cookies': '/cookie-policy'
  },
  // English to Spanish
  'en': {
    '/courses': '/cursos',
    '/services': '/servicios',
    '/contact': '/contacto',
    '/madrid-campus': '/madrid',
    '/canary-islands': '/canarias',
    '/advanced-training': '/formacion-avanzada',
    '/complete-rating': '/habilitacion-completa',
    '/block-1-tower': '/bloque-1-torre',
    '/block-2-approach': '/bloque-2-aproximacion',
    '/selection-process': '/procesos-selectivos',
    '/call-preparation': '/preparacion-convocatoria',
    '/privacy-policy': '/politica-privacidad',
    '/cookie-policy': '/politica-cookies'
  }
};

// Define the valid routes for both languages
const VALID_ROUTES = [
  '/', '/home', '/cursos', '/servicios', '/blog', '/contacto', '/madrid', '/canarias', 
  '/success', '/procesos-selectivos', '/preparacion-convocatoria', '/habilitacion-completa',
  '/bloque-1-torre', '/modulo-1-torre', '/modulo1-torre', '/bloque-2-aproximacion', 
  '/modulo-2-aproximacion', '/modulo2-aproximacion', '/formacion-avanzada',
  '/politica-privacidad', '/politica-cookies',
  '/courses', '/services', '/contact', '/madrid-campus', '/canary-islands',
  '/selection-process', '/call-preparation', '/complete-rating',
  '/block-1-tower', '/block-2-approach', '/advanced-training',
  '/privacy-policy', '/cookie-policy'
];

interface LanguageDetectionContextType {
  isFromSpain: boolean;
  userCountry: string | null;
  setForcedLanguage: (lang: string | null) => void;
}

const defaultContext: LanguageDetectionContextType = {
  isFromSpain: false,
  userCountry: null,
  setForcedLanguage: () => {}
};

const LanguageDetectionContext = createContext<LanguageDetectionContextType>(defaultContext);

interface LanguageDetectionProviderProps {
  children: React.ReactNode;
}

export const LanguageDetectionProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const { setLanguage, language } = useLanguage();
  const [isFromSpain, setIsFromSpain] = useState<boolean>(false);
  const [userCountry, setUserCountry] = useState<string | null>(null);
  const [forcedLanguage, setForcedLanguage] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  // Check if a route exists in the app
  const isValidRoute = (path: string): boolean => {
    // Check exact match
    if (VALID_ROUTES.includes(path)) {
      return true;
    }
    // Check if it's a blog post route
    if (path.startsWith('/blog/')) {
      return true;
    }
    return false;
  };

  // Handle URL changes when language changes
  useEffect(() => {
    const currentPath = pathname;
    
    // Skip redirect for home, blog, or non-mapped paths
    if (currentPath === '/' || currentPath === '/home' || currentPath.startsWith('/blog')) {
      return;
    }
    
    // Check if there's a mapping for the current path
    const languageKey = language === 'es' ? 'en' : 'es';
    const mappings = URL_MAPPINGS[languageKey];
    
    for (const [sourcePath, targetPath] of Object.entries(mappings)) {
      if (currentPath === sourcePath) {
        // Check if the target path is valid before redirecting
        if (isValidRoute(targetPath)) {
          // Don't navigate if we just changed the URL
          if (!sessionStorage.getItem('recentUrlChange')) {
            sessionStorage.setItem('recentUrlChange', 'true');
            setTimeout(() => sessionStorage.removeItem('recentUrlChange'), 1000);
            router.push(targetPath, { replace: true });
          }
        } else {
          // If the target path is not valid, navigate to the home page
          console.warn(`Target path ${targetPath} is not valid. Navigating to home page.`);
          router.push('/', { replace: true });
        }
        break;
      }
    }
  }, [language, pathname, router]);

  useEffect(() => {
    const detectLanguageAndLocation = async () => {
      try {
        // If language is forced, use it
        if (forcedLanguage) {
          setLanguage(forcedLanguage as 'es' | 'en');
          return;
        }
        
        // Check if language preference is already stored
        const storedLanguage = localStorage.getItem('nelso-language-preference');
        
        // Try to get user's country from IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data && data.country) {
          const countryCode = data.country;
          setUserCountry(countryCode);
          
          // Check if user is from Spain
          setIsFromSpain(countryCode === 'ES');
          
          // Set language based on country if not already set
          if (!storedLanguage) {
            const languageToSet = SPANISH_SPEAKING_COUNTRIES.includes(countryCode) ? 'es' : 'en';
            setLanguage(languageToSet);
            localStorage.setItem('nelso-language-preference', languageToSet);
          } else {
            setLanguage(storedLanguage as 'es' | 'en');
          }
        }
      } catch (error) {
        console.error("Error detecting language or location:", error);
        // Default to Spanish if detection fails
        if (!localStorage.getItem('nelso-language-preference')) {
          setLanguage('es');
        }
      }
    };

    detectLanguageAndLocation();
  }, [setLanguage, forcedLanguage]);

  return (
    <LanguageDetectionContext.Provider value={{ 
      isFromSpain, 
      userCountry, 
      setForcedLanguage 
    }}>
      {children}
    </LanguageDetectionContext.Provider>
  );
};

export const useLanguageDetection = () => {
  return useContext(LanguageDetectionContext);
};
