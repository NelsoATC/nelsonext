import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ContactFAQProps {
  isSpanish: boolean;
}

const ContactFAQ = ({ isSpanish }: ContactFAQProps) => {
  const faqsENAIRE: FAQItem[] = [
    {
      question: "No tengo la Licencia civil Comunitaria de Controlador de Tránsito Aéreo ni la Licencia civil Comunitaria de Alumno Controlador, ¿Puedo presentarme al proceso selectivo de ENAIRE?",
      answer: "Sí. No es necesario tener Licencia alguna para presentarse al proceso de selección. No obstante, los interesados deben saber que una vez resulten seleccionados deberán realizar y superar la formación inicial necesaria para cumplir con los requisitos de contratación establecidos en la convocatoria de ENAIRE. Todos los gastos derivados de la formación, evaluación y expedición de documentos oficiales serán por cuenta de los interesados, y deberán realizarlo en el plazo máximo de 18 meses."
    },
    {
      question: "¿Cuáles son los Centros o Escuelas certificadas en España para obtener la Licencia Comunitaria de Alumno Controlador de Tránsito Aéreo, con todas las habilitaciones y anotaciones de habilitación exigidas por ENAIRE?",
      answer: "A estos efectos, puede consultar la página web de la AESA (Agencia Española de Seguridad Aérea) en la que encontrará el listado de empresas certificadas por dicha Agencia, en relación a la formación inicial y de unidad de ATCOS: listado_proveedores_formacion_certificadas.pdf"
    },
    {
      question: "¿Cuáles son los centros evaluadores de competencia lingüística autorizados por la AESA?",
      answer: "Puede consultar la página web de la AESA para conocer los centros autorizados para la evaluación de la competencia lingüística (inglés y castellano): www.seguridadaerea.gob.es/sites/default/files/tabla_cecl_esp.pdf"
    },
    {
      question: "¿Cómo puedo saber si cumplo con los requisitos de la capacidad psicofísica y funcional necesarias para el desempeño de las tareas propias de la profesión de controlador de tránsito aéreo?",
      answer: "Puede consultar la página web de la AESA, sobre Medicina Aeronáutica, en la que encontrará los Centros Médicos Acreditados y los Médicos Examinadores Aéreos Autorizados, en relación con el reconocimiento inicial clase 3 para controladores de tránsito aéreo: www.seguridadaerea.gob.es/es/ambitos/licencias-y-medicina-aeronautica/medicina-aeronautica"
    },
    {
      question: "¿Cuáles son los requisitos para participar en el proceso de selección de ENAIRE?",
      answer: "Los requisitos para participar en el proceso selectivo son los siguientes:\n• Tener la nacionalidad española. También podrán participar y en igualdad de condiciones los extranjeros que se hallen en los casos que se detallan en la convocatoria.\n• Tener la edad de 18 años cumplidos y no haber cumplido la edad de 65 años.\n• Estar en posesión del título que dé acceso a la universidad: título de bachiller o título, diploma o estudios equivalentes (BUP, FP II, Técnico Especialista, ...) y títulos de Técnico Superior de Formación Profesional o equivalente.\n• Poseer la capacidad psicofísica y funcional necesarias para el desempeño de las tareas propias de la profesión. Las personas discapacitadas podrán participar en igualdad de condiciones que el resto de aspirantes, siempre que posean la capacidad psicofísica y funcional necesarias para el desempeño de las tareas propias de la profesión.\n• No haber sido separado del servicio mediante expediente disciplinario del servicio de cualquiera de las Administraciones Públicas o de los organismos constitucionales o estatuarios de las Comunidades Autónomas, ni hallarse en inhabilitación absoluta o especial para empleo o cargos públicos por resolución judicial para ejercer funciones similares a las que desempeñaban en el que hubiera sido separado o inhabilitado."
    },
    {
      question: "¿Cuáles son los requisitos de contratación por parte de ENAIRE?",
      answer: "En el momento de la oportuna contratación, los candidatos deberán reunir los siguientes requisitos:\nEstar en posesión y en vigor de una licencia civil comunitaria de alumno controlador o de una licencia civil comunitaria de controlador de tránsito aéreo, de conformidad con la legislación vigente aplicable, con todas y cada una de las siguientes habilitaciones y, en su caso, anotaciones de habilitación:\n\n• Control de aeródromo visual (ADV)\n• Control de aeródromo por instrumentos (ADI), con las anotaciones de habilitación de T.W.R y R.A.D.\n• Control de aproximación por procedimientos (APP)\n• Control de vigilancia de aproximación (APS)\n• Control de área por procedimientos (ACP)\n• Control de vigilancia de área (ACS)\n\nEstar en posesión, y en vigor, de las anotaciones de idioma inglés -con un nivel mínimo Operacional (4)- y de idioma castellano -con un nivel de Experto (6)-.\nEstar en posesión del certificado médico aeronáutico clase 3, válido y en vigor, de conformidad con la legislación vigente aplicable.\nMantener todos los requisitos exigidos para la participación en el proceso selectivo."
    },
    {
      question: "¿En qué consiste el sistema de selección?",
      answer: "El procedimiento de selección constará de las siguientes fases:\n\n• Fase 1: Pruebas de conocimientos generales, gramática de inglés y evaluación psicológica.\n• Fase 2: FEAST (First European Air Traffic Controller Selection Test)\n• Fase 3: Prueba oral del idioma inglés, y evaluación clínica de personalidad y entrevista conductual"
    },
    {
      question: "¿Cómo y cuándo puedo solicitar participar en el proceso de selección?",
      answer: "• El candidato deberá ingresar, en efectivo o mediante transferencia bancaria, en la cuenta dispuesta por ENAIRE la cantidad especificada en las bases en concepto de derechos de examen.\n• La inscripción se puede realizar en formato electrónico, a través de la página web: enaire.es/empleo, en su apartado Convocatorias), añadiendo junto a la solicitud, como documento adjunto, el justificante de haber abonado los derechos de examen.\n• También puede presentarse en formato papel, según modelo del Anexo II, mediante servicio de correo certificado o postal exprés a la dirección que figura en la convocatoria, adjuntando el justificante original de haber abonado los derechos de examen"
    },
    {
      question: "¿Puedo presentar mi solicitud por correo electrónico?",
      answer: "No. La convocatoria establece la forma de presentación de solicitudes a través de la página web de ENAIRE o mediante correo certificado o postal exprés, sin perjuicio de lo previsto en el artículo 16.4 de la Ley 39/2015."
    },
    {
      question: "¿En qué casos procede la devolución del ingreso efectuado, en concepto de derechos de examen, según requieren las bases de la convocatoria?",
      answer: "El importe de los derechos de examen no se devolverá en ningún caso, a excepción del supuesto de la no realización de las pruebas selectivas por causa imputable a ENAIRE, tampoco corresponderá la devolución del ingreso efectuado en caso de exclusión, por causas imputables al interesado."
    },
    {
      question: "No tengo nacionalidad comunitaria europea, ¿Puedo presentarme al proceso de selección?",
      answer: "Si no se posee la nacionalidad española, también pueden participar y en igualdad de condiciones los extranjeros que se hallen en alguno de los casos siguientes:\n\n• Los nacionales de los estados miembros de la Unión Europea (UE) y el cónyuge del español o del nacional de un estado miembro de la UE, siempre que no esté separado de derecho, y sus descendientes o los descendientes del cónyuge no separado de derecho, menores de veintiún años o mayores de dicha edad dependientes.\n• Las personas incluidas en el ámbito de aplicación de los tratados internacionales celebrados por la Unión Europea y ratificados por España en los que sea de aplicación la libre circulación de trabajadores.\n• Las personas incluidas en el ámbito de aplicación de los tratados internacionales celebrados por la Unión Europea y ratificados por España en los que sea de aplicación la libre circulación de trabajadores.\n• Los extranjeros con residencia legal en España."
    },
    {
      question: "Tengo un título extranjero, ¿Puedo presentarme al proceso de selección?",
      answer: "En los casos de estudios y titulaciones obtenidas en el extranjero, se estará a lo dispuesto en la legislación sobre los sistemas educativos de Estados miembros de la Unión Europea o de otros Estados con los que España tiene firmado algún convenio de reconocimiento, o sobre la homologación de estudios previos para solicitantes procedentes de sistemas educativos extranjeros (Ley Orgánica 8/2013, de 9 de diciembre, para la Mejora de la Calidad Educativa y Real Decreto 412/2014, de 6 de junio, por el que se establece la normativa básica de los procedimientos de admisión a las enseñanzas universitarias oficiales de grado)."
    },
    {
      question: "Cumpliré 18 años el próximo mes de diciembre, ¿Puedo presentarme al proceso de selección?",
      answer: "Los candidatos deberán poseer los requisitos de participación en el momento de finalizar el plazo de presentación de solicitudes; con la presentación de su solicitud, los interesados declaran que son ciertos los datos consignados en la misma y que reúnen los requisitos de participación exigidos."
    },
    {
      question: "Tengo miopía y/o una minusvalía, ¿Puedo presentarme al proceso de selección?",
      answer: "Puede presentarse siempre que posea la capacidad psicofísica y funcional necesarias para el desempeño de las tareas propias de la profesión. Las personas discapacitadas podrán participar en igualdad de condiciones que el resto de aspirantes, siempre que posean la capacidad psicofísica y funcional necesarias para el desempeño de las tareas propias de la profesión."
    },
    {
      question: "¿Hay que acreditar el conocimiento del idioma inglés y/o castellano con algún título?",
      answer: "No es necesario acreditar con titulaciones el conocimiento de los idiomas, pero sí será necesario tener las anotaciones de competencia lingüística en la Licencia para formalizar la contratación."
    },
    {
      question: "¿Existe alguna limitación de edad para participar en el proceso de selección de ENAIRE?",
      answer: "El requisito de edad incluido en la convocatoria es tener la edad de 18 años cumplidos y no haber cumplido la edad de 65 años."
    },
    {
      question: "He realizado el FEAST en una escuela certificada por AESA ¿Estoy exento de realizar la fase 2?",
      answer: "Según las Bases de la Convocatoria sólo quedaran exentos de realizar las pruebas FEAST los candidatos que estén en posesión de una licencia civil comunitaria de alumno controlador de tránsito aéreo o de una licencia civil comunitaria de controlador de tránsito aéreo. Para ello, deberán aportar copia autentificada de su licencia en el plazo y forma establecido. En la convocatoria de 2018 se han considerado excentos los que superaron la fase II en la anterior convocatoria de ENAIRE."
    },
    {
      question: "Si resulto seleccionado/a, ¿De cuánto tiempo dispongo para realizar la formación inicial para obtener la licencia de alumno controlador con las habilitaciones/anotaciones previstas?",
      answer: "Dispondrá de un plazo máximo de 18 meses a contar a partir de la fecha en que se le oferte la formalización de un contrato de trabajo, para cumplir con los requisitos de contratación establecidos por ENAIRE, siendo todos los gastos derivados por su cuenta."
    },
    {
      question: "¿Cuanto gana un Controlador Aéreo?",
      answer: "Los controladores aéreos ganan entre 70.000 € brutos y 200.000€ brutos anuales dependiendo de una serie de complementos, de entrada el sueldo de los controladores aéreos es en torno a unos 31.000 € y va subiendo dependiendo del grupo y puesto al que vayas perteneciendo, para hacerse una idea más exacta se puede mirar en las tablas del cuadro resolutivo del convenido colectivo de los controladores aéreos en el BOE en el siguiente link: https://www.boe.es/diario_boe/txt.php?id=BOE-A-2019-5851 Buscar la palabra: \"ANEXO I\" o \"Cuadro retributivo\" para encontrarlo con más facilidad."
    }
  ];

  // General FAQs to use when not in Spanish or when we want to show general FAQs
  const generalFaqs: FAQItem[] = [
    // General FAQ questions
    {
      question: isSpanish ? "¿Cómo puedo solicitar información sobre los cursos?" : "How can I request information about courses?",
      answer: isSpanish 
        ? "Puedes rellenar el formulario de contacto en esta página, llamarnos por teléfono o enviarnos un correo electrónico. Nuestro equipo te responderá a la mayor brevedad posible."
        : "You can fill in the contact form on this page, call us, or send us an email. Our team will respond as soon as possible."
    },
    {
      question: isSpanish ? "¿Puedo visitar vuestras instalaciones?" : "Can I visit your facilities?",
      answer: isSpanish 
        ? "Sí, organizamos visitas guiadas a nuestros centros. Por favor, contacta con nosotros para concertar una cita."
        : "Yes, we organize guided tours of our centers. Please contact us to arrange an appointment."
    },
    
    // Process Selection Specific FAQs
    {
      question: isSpanish ? "¿Qué es el proceso de selección de ENAIRE?" : "What is the ENAIRE selection process?",
      answer: isSpanish 
        ? "El proceso de selección de ENAIRE consta de varias fases: una fase previa de comprobación de requisitos, test psicotécnicos, pruebas de inglés, pruebas de simulación ATC y entrevista personal. Todo el proceso está dirigido a encontrar candidatos con las capacidades necesarias para convertirse en controladores aéreos."
        : "The ENAIRE selection process consists of several phases: a preliminary phase checking requirements, psychometric tests, English tests, ATC simulation tests, and a personal interview. The entire process is aimed at finding candidates with the necessary capabilities to become air traffic controllers."
    },
    {
      question: isSpanish ? "¿Qué requisitos necesito para presentarme?" : "What requirements do I need to apply?",
      answer: isSpanish 
        ? "Para presentarte necesitas: ser mayor de edad, tener un título de Bachillerato o equivalente, nacionalidad española o de un estado miembro de la UE, un nivel alto de inglés (mínimo B2) y superar un reconocimiento médico aeronáutico de Clase 3."
        : "To apply you need: to be of legal age, have a high school diploma or equivalent, Spanish nationality or from an EU member state, a high level of English (minimum B2), and pass a Class 3 aeronautical medical examination."
    },
    {
      question: isSpanish ? "¿Con qué frecuencia salen convocatorias?" : "How often are there new calls for applications?",
      answer: isSpanish 
        ? "La frecuencia de las convocatorias depende de las necesidades de personal de ENAIRE. Normalmente, hay una convocatoria cada 1-2 años, pero esto puede variar. Es importante estar atento a los anuncios oficiales."
        : "The frequency of calls depends on ENAIRE's staffing needs. Typically, there is one call every 1-2 years, but this can vary. It's important to stay alert to official announcements."
    },
    {
      question: isSpanish ? "¿Cómo me preparo para las pruebas psicotécnicas?" : "How do I prepare for the psychometric tests?",
      answer: isSpanish 
        ? "Las pruebas psicotécnicas evalúan capacidades como la memoria a corto plazo, atención dividida, razonamiento abstracto y cálculo mental. Nuestro curso de preparación incluye entrenamiento específico para estas pruebas con ejercicios similares a los del proceso real."
        : "Psychometric tests evaluate capabilities such as short-term memory, divided attention, abstract reasoning, and mental calculation. Our preparation course includes specific training for these tests with exercises similar to those in the actual process."
    },
    {
      question: isSpanish ? "¿En qué consisten las pruebas de simulación?" : "What do the simulation tests consist of?",
      answer: isSpanish 
        ? "Las pruebas de simulación evalúan tu capacidad para gestionar el tráfico aéreo básico. Incluyen ejercicios donde debes dirigir aeronaves siguiendo instrucciones específicas, gestionando conflictos potenciales y manteniendo la seguridad y eficiencia del tráfico."
        : "The simulation tests evaluate your ability to manage basic air traffic. They include exercises where you must direct aircraft following specific instructions, managing potential conflicts, and maintaining traffic safety and efficiency."
    },
    {
      question: isSpanish ? "¿Qué diferencia a Nelso de otros centros de preparación?" : "What sets Nelso apart from other preparation centers?",
      answer: isSpanish 
        ? "Nelso se diferencia por contar con instructores que son controladores en activo o examinadores de procesos selectivos, utilizar simuladores profesionales idénticos a los del proceso real, y por nuestra metodología práctica con grupos reducidos que garantiza atención personalizada."
        : "Nelso is distinguished by having instructors who are active controllers or selection process examiners, using professional simulators identical to those in the real process, and our practical methodology with small groups that guarantees personalized attention."
    },
    {
      question: isSpanish ? "¿Cuál es el porcentaje de éxito de vuestros alumnos?" : "What is the success rate of your students?",
      answer: isSpanish 
        ? "Nuestros alumnos tienen una tasa de éxito del 98% en las últimas convocatorias. Este alto porcentaje se debe a nuestra formación especializada y al seguimiento personalizado que hacemos de cada estudiante durante todo el proceso."
        : "Our students have a 98% success rate in recent calls. This high percentage is due to our specialized training and the personalized monitoring we do for each student throughout the process."
    },
    {
      question: isSpanish ? "¿El curso incluye preparación para la entrevista personal?" : "Does the course include preparation for the personal interview?",
      answer: isSpanish 
        ? "Sí, nuestro curso incluye preparación específica para la entrevista personal con simulaciones y feedback de instructores experimentados. Trabajamos aspectos como la comunicación no verbal, gestión del estrés y respuestas a preguntas frecuentes."
        : "Yes, our course includes specific preparation for the personal interview with simulations and feedback from experienced instructors. We work on aspects such as non-verbal communication, stress management, and answers to frequently asked questions."
    },
    {
      question: isSpanish ? "¿Ofrecéis opciones de financiación?" : "Do you offer financing options?",
      answer: isSpanish 
        ? "Sí, disponemos de varios planes de financiación adaptados a diferentes necesidades. Contacta con nuestro departamento de admisiones para más información sobre las opciones disponibles y cómo acceder a ellas."
        : "Yes, we have several financing plans adapted to different needs. Contact our admissions department for more information on available options and how to access them."
    }
  ];

  const faqs = isSpanish ? faqsENAIRE : generalFaqs;
  
  const headerTitle = isSpanish ? 
    "CONVOCATORIA DE SELECCIÓN EXTERNA DE CONTROLADORES 2024" : 
    "EXTERNAL SELECTION PROCESS FOR AIR TRAFFIC CONTROLLERS 2024";

  return (
    <div id="faqs" className="w-full max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-lg">
              {index + 1}. {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 whitespace-pre-line">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ContactFAQ;
