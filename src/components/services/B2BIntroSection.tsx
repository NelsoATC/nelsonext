import { SectionHeader } from '@/components/services/SectionHeader';
import { useLanguage } from '@/contexts/LanguageContext';
export const B2BIntroSection = () => {
  const {
    language
  } = useLanguage();
  const isSpanish = language === 'es';
  return <div className="mb-24 mt-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader badge={isSpanish ? "Servicios B2B" : "B2B Services"} title={isSpanish ? "Soluciones de formación para empresas del sector aeronáutico" : "Training solutions for aeronautical sector companies"} subtitle={isSpanish ? "Ofrecemos servicios integrales de formación y consultoría para organizaciones del sector aeronáutico, incluyendo proveedores de servicios de navegación aérea y aerolíneas." : "We offer comprehensive training and consulting services for organizations in the aeronautical sector, including air navigation service providers and airlines."} centerText={false} badgeColor="#111827" badgeBackgroundColor="rgba(17, 24, 39, 0.05)" />
          <p className="text-gray-600 mb-6">
            {isSpanish ? "En Nelso entendemos los retos específicos a los que se enfrentan las organizaciones aeronáuticas. Nuestros programas formativos están diseñados para mejorar la eficiencia operativa, garantizar el cumplimiento normativo y desarrollar las competencias profesionales de su personal." : "At Nelso we understand the specific challenges faced by aviation organizations. Our training programs are designed to improve operational efficiency, ensure regulatory compliance and develop the professional skills of your staff."}
          </p>
          <ul className="space-y-3 mb-8">
            {[isSpanish ? "Programas adaptados a las necesidades específicas de su organización" : "Programs adapted to the specific needs of your organization", isSpanish ? "Formación impartida por profesionales en activo del sector" : "Training delivered by active professionals in the sector", isSpanish ? "Modalidades presencial, online o híbrida según sus requisitos" : "Face-to-face, online or hybrid modalities according to your requirements"].map((item, i) => <li key={i} className="flex items-start">
                <span className="text-[#111827] mr-2">•</span>
                <span>{item}</span>
              </li>)}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img alt="Business Training" className="w-full h-96 object-cover" src="/lovable-uploads/bf4a234a-1bd1-4820-b74e-a09b930fe76e.jpg" />
        </div>
      </div>
    </div>;
};