
/**
 * Formatea una fecha en el formato deseado según el idioma
 * @param dateString Fecha en formato ISO o similar
 * @param locale Código de idioma ('es' o 'en')
 * @returns Fecha formateada como string
 */
export const formatDate = (dateString: string, locale: string = 'es'): string => {
  try {
    const date = new Date(dateString);
    
    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return dateString; // Si no es válida, devolver el string original
    }
    
    // Opciones para formatear la fecha
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    // Formatear según el idioma
    return date.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', options);
  } catch (error) {
    console.error('Error al formatear la fecha:', error);
    return dateString; // En caso de error, devolver el string original
  }
};
