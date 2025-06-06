
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl mb-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {isSpanish ? "Política de Privacidad" : "Privacy Policy"}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        {isSpanish ? (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">Responsable del Tratamiento</h2>
            <p>La empresa responsable del tratamiento de sus datos personales en virtud de esta Política de Privacidad es:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>NELSO ASOCIADOS CANARIOS S.L.</strong></li>
              <li><strong>CIF:</strong> B76050327</li>
              <li><strong>Domicilio:</strong> Calle Ferrer del Río, nº 35. 28028 MADRID</li>
              <li><strong>E-mail:</strong> direccion@nelsoformacion.com</li>
              <li><strong>Teléfono:</strong> 917 24 29 50 ó 610 771 234</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Finalidad del Tratamiento</h2>
            <p>En NELSO ASOCIADOS CANARIOS S.L., tratamos la información que nos facilitan las personas interesadas con el fin de:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Gestionar el envío de la información que nos soliciten.</li>
              <li>Facilitar a los interesados ofertas de productos y servicios de su interés.</li>
              <li>Poder ofrecerles nuestros productos y servicios.</li>
              <li>Comercialización de nuestros servicios.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Legitimación del Tratamiento</h2>
            <p>La base legal para el tratamiento de sus datos es:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>El consentimiento del interesado.</li>
              <li>Interés legítimo.</li>
              <li>Relación contractual.</li>
              <li>Cumplimiento de obligaciones legales.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Conservación de los Datos</h2>
            <p>Los datos personales proporcionados se conservarán:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Mientras se mantenga la relación comercial.</li>
              <li>No se solicite su supresión por el interesado.</li>
              <li>Podrán conservarse durante el tiempo necesario para cumplir con las obligaciones legales.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Comunicación de los Datos</h2>
            <p>Los datos no se comunicarán a terceros, excepto en los siguientes casos:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Obligación legal.</li>
              <li>Aplicación de medidas precontractuales o contractuales.</li>
              <li>Cesiones previstas en avisos de información que se le hayan comunicado en el momento de recabar sus datos.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Derechos</h2>
            <p>Como usuario e interesado, usted tiene derecho a:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Acceder a sus datos.</li>
              <li>Rectificar o suprimir sus datos.</li>
              <li>Limitar el tratamiento de sus datos.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de sus datos.</li>
            </ul>
            <p>Estos derechos pueden ejercitarse mediante comunicación dirigida a:</p>
            <p className="mb-6"><strong>NELSO ASOCIADOS CANARIOS S.L.</strong><br />
            Calle Ferrer del Río, nº 35. 28028 MADRID<br />
            E-mail: direccion@nelsoformacion.com<br />
            Teléfono: 917 24 29 50 ó 610 771 234</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Seguridad de los Datos</h2>
            <p>Para garantizar la seguridad y confidencialidad de los datos que nos proporciona, hemos adoptado los niveles de seguridad requeridos y hemos instalado los medios técnicos a nuestro alcance para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos que nos facilite.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Además, le informamos</h2>
            <p>Que tiene derecho a reclamar ante la Autoridad de Control (Agencia Española de Protección de Datos www.agpd.es).</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Controller</h2>
            <p>The company responsible for processing your personal data under this Privacy Policy is:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><strong>NELSO ASOCIADOS CANARIOS S.L.</strong></li>
              <li><strong>Tax ID:</strong> B76050327</li>
              <li><strong>Address:</strong> Calle Ferrer del Río, nº 35. 28028 MADRID</li>
              <li><strong>E-mail:</strong> direccion@nelsoformacion.com</li>
              <li><strong>Phone:</strong> 917 24 29 50 or 610 771 234</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Purpose of Data Processing</h2>
            <p>At NELSO ASOCIADOS CANARIOS S.L., we process the information provided by interested parties for the purpose of:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Managing the sending of information requested.</li>
              <li>Providing interested parties with offers of products and services of interest to them.</li>
              <li>Being able to offer our products and services.</li>
              <li>Marketing our services.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Legitimacy of Processing</h2>
            <p>The legal basis for processing your data is:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>The consent of the data subject.</li>
              <li>Legitimate interest.</li>
              <li>Contractual relationship.</li>
              <li>Compliance with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Data Retention</h2>
            <p>The personal data provided will be kept:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>While the commercial relationship is maintained.</li>
              <li>Until the data subject requests its deletion.</li>
              <li>They may be kept for the time necessary to comply with legal obligations.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Communication</h2>
            <p>The data will not be communicated to third parties, except in the following cases:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Legal obligation.</li>
              <li>Application of pre-contractual or contractual measures.</li>
              <li>Transfers foreseen in information notices that have been communicated to you when collecting your data.</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Rights</h2>
            <p>As a user and data subject, you have the right to:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Access your data.</li>
              <li>Rectify or delete your data.</li>
              <li>Limit the processing of your data.</li>
              <li>Oppose the processing of your data.</li>
              <li>Request the portability of your data.</li>
            </ul>
            <p>These rights can be exercised by communication addressed to:</p>
            <p className="mb-6"><strong>NELSO ASOCIADOS CANARIOS S.L.</strong><br />
            Calle Ferrer del Río, nº 35. 28028 MADRID<br />
            E-mail: direccion@nelsoformacion.com<br />
            Phone: 917 24 29 50 or 610 771 234</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
            <p>To guarantee the security and confidentiality of the data you provide, we have adopted the required security levels and have installed the technical means at our disposal to prevent the loss, misuse, alteration, unauthorized access and theft of the data you provide us.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Additionally, we inform you</h2>
            <p>That you have the right to file a complaint with the Control Authority (Spanish Data Protection Agency www.agpd.es).</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
