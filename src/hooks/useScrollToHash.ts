
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook personalizado para desplazarse al elemento de anclaje especificado en el hash de la URL
 * cuando se navega a una página o cuando cambia el hash
 */
export const useScrollToHash = () => {
  const location = useLocation();
  const lastHashRef = useRef<string>('');

  useEffect(() => {
    // Si hay un hash en la URL
    if (location.hash) {
      // Pequeño retraso para asegurar que el DOM esté completamente cargado
      setTimeout(() => {
        const id = location.hash.substring(1); // quitar el # del hash
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      
      lastHashRef.current = location.hash;
    } else if (lastHashRef.current && !location.hash) {
      // Si se navegó desde una URL con hash a una sin hash, scroll al inicio
      window.scrollTo(0, 0);
      lastHashRef.current = '';
    }
  }, [location]);
};

/**
 * Función para desplazarse a un elemento específico por su ID
 * @param elementId ID del elemento al que se quiere desplazar
 */
export const scrollToElement = (elementId: string) => {
  setTimeout(() => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};
