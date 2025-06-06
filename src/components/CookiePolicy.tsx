
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const CookiePolicy = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl mb-16">
      <h1 className="text-3xl font-bold mb-8 text-center">
        {isSpanish ? "Política de Cookies" : "Cookie Policy"}
      </h1>
      
      <div className="prose prose-lg max-w-none">
        {isSpanish ? (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de datos que se envían al ordenador del usuario, teléfono móvil u otro dispositivo desde un sitio web y se almacenan en el disco duro del dispositivo. Se utilizan para que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">¿Qué cookies utilizamos?</h2>
            <p>Este sitio utiliza cookies propias y de terceros para ayudar a mejorar la experiencia de navegación. Las cookies que utilizamos en nuestro sitio web son las siguientes:</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Cookies técnicas (propias)</h3>
            <p>Son aquellas que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existen, incluyendo aquellas que el editor utiliza para permitir la gestión y operativa de la página web y habilitar sus funciones y servicios.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Cookies de preferencias o personalización (propias)</h3>
            <p>Son aquellas que permiten recordar información para que el usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar, etc.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Cookies de análisis o medición (terceros)</h3>
            <p>Son aquellas que permiten al responsable de las mismas el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas, incluida la cuantificación de los impactos de los anuncios. La información recogida mediante este tipo de cookies se utiliza en la medición de la actividad de los sitios web, aplicación o plataforma, con el fin de introducir mejoras en función del análisis de los datos de uso que hacen los usuarios del servicio.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">¿Cómo puedo controlar las cookies?</h2>
            <p>Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Si no está seguro de qué tipo y versión de navegador utiliza para acceder a Internet:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Para Windows: Haga clic en 'Ayuda' en la parte superior de la ventana de su navegador y seleccione la opción 'Acerca de'.</li>
              <li>Para Mac: Con la ventana del navegador abierta, haga clic en el menú Apple y seleccione la opción 'Acerca de...'.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Configuración de cookies en los navegadores comunes</h2>
            <p>A continuación, le proporcionamos enlaces sobre cómo acceder a la configuración de cookies de los navegadores más comunes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Actualización de la Política de Cookies</h2>
            <p>Nelso Aviation S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos, por ello se aconseja a los usuarios que la visiten periódicamente.</p>
          </>
        ) : (
          <>
            <h2 className="text-xl font-semibold mt-8 mb-4">What are cookies?</h2>
            <p>Cookies are small data files that are sent to the user's computer, mobile phone or other device from a website and are stored on the device's hard drive. They are used to make websites work, or work more efficiently, as well as to provide information to the site owners.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">What cookies do we use?</h2>
            <p>This site uses first-party and third-party cookies to help improve the browsing experience. The cookies we use on our website are as follows:</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Technical cookies (first-party)</h3>
            <p>These are those that allow the user to navigate through the website and use the different options or services that exist on it, including those that the editor uses to enable the management and operation of the website and enable its functions and services.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Preference or personalization cookies (first-party)</h3>
            <p>These are those that allow information to be remembered so that the user accesses the service with certain characteristics that can differentiate their experience from that of other users, such as, for example, the language, the number of results to display, etc.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3">Analysis or measurement cookies (third-party)</h3>
            <p>These are those that allow the person responsible for them to monitor and analyze the behavior of users of the websites to which they are linked, including the quantification of the impacts of advertisements. The information collected through this type of cookies is used to measure the activity of websites, applications or platforms, with the aim of introducing improvements based on the analysis of the data on the use of the service by users.</p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How can I control cookies?</h2>
            <p>You can allow, block or delete cookies installed on your computer by configuring the options of the browser installed on your computer. If you are not sure what type and version of browser you use to access the Internet:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>For Windows: Click on 'Help' at the top of your browser window and select the 'About' option.</li>
              <li>For Mac: With the browser window open, click on the Apple menu and select the 'About...' option.</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Cookie settings in common browsers</h2>
            <p>Below we provide links on how to access the cookie settings of the most common browsers:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><a href="https://support.google.com/chrome/answer/95647?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Cookie Policy Update</h2>
            <p>Nelso Aviation S.L. may modify this Cookie Policy based on legislative, regulatory requirements, or in order to adapt this policy to the instructions issued by the Spanish Data Protection Agency, therefore users are advised to visit it periodically.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CookiePolicy;
