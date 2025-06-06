
import React from 'react';
import { MapPin } from 'lucide-react';

interface ContactMapProps {
  location: 'madrid' | 'canarias';
  isSpanish: boolean;
}

const ContactMap = ({ location, isSpanish }: ContactMapProps) => {
  const locations = {
    madrid: {
      title: isSpanish ? "Nelso Madrid" : "Nelso Madrid",
      address: "Calle Ferrer del Río, 35",
      postalCode: "28028 Madrid",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.8962079547166!2d-3.6689694!3d40.4336096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422f9fc399cd75%3A0x8dba24acb1813582!2sC.%20de%20Ferrer%20del%20R%C3%ADo%2C%2035%2C%2028028%20Madrid!5e0!3m2!1sen!2ses!4v1696582862349!5m2!1sen!2ses",
      transportation: isSpanish 
        ? [
            "Autobús: 1, 200, 224, 61, C1",
            "Tren: C10, C2, C7",
            "Metro: M-4, M-5, M-6, M-7, M-9"
          ] 
        : [
            "Bus: 1, 200, 224, 61, C1",
            "Train: C10, C2, C7",
            "Metro: M-4, M-5, M-6, M-7, M-9"
          ],
      description: isSpanish 
        ? "Ubicación estratégica cerca del centro de Madrid, con excelentes conexiones de transporte."
        : "Strategic location near the center of Madrid, with excellent transport connections."
    },
    canarias: {
      title: isSpanish ? "Nelso Gran Canaria" : "Nelso Gran Canaria",
      address: "Calle Antonio María Manrique, 3",
      postalCode: "35011 Las Palmas de Gran Canaria",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.5428382436187!2d-15.4346611!3d28.1028926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095850ef20cf7%3A0xf2e249fe4866c530!2sC.%20Antonio%20Mar%C3%ADa%20Manrique%2C%203%2C%2035011%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1sen!2ses!4v1696582996942!5m2!1sen!2ses",
      transportation: isSpanish 
        ? ["Guaguas: 10, 32, 9, L2", "A 20 minutos del aeropuerto de Gran Canaria"] 
        : ["Buses: 10, 32, 9, L2", "20 minutes from Gran Canaria Airport"],
      description: isSpanish 
        ? "La primera escuela de controladores de Canarias. Instalaciones adecuadas para una formación de calidad."
        : "The first air traffic controller school in the Canary Islands. Adequate facilities for quality training."
    }
  };

  const locationData = locations[location];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-4">{locationData.title}</h3>
      <div className="flex items-start mb-4">
        <MapPin className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
        <div className="text-gray-700">
          <p>{locationData.address}</p>
          <p>{locationData.postalCode}</p>
        </div>
      </div>
      <div className="h-80 rounded-lg overflow-hidden mb-4">
        <iframe 
          src={locationData.mapSrc}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <p className="text-gray-600 mb-4">{locationData.description}</p>
      <h4 className="font-medium text-gray-900 mb-2">
        {isSpanish ? "Cómo llegar:" : "How to get there:"}
      </h4>
      <ul className="list-disc pl-5 text-gray-600 mb-4">
        {locationData.transportation.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactMap;
