
import Head from "next/head";
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article';
  path?: string;
  canonical?: string;
  noindex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  image = '/images/og/home-og.jpg',
  type = 'website',
  path = '',
  canonical,
  noindex = false,
}) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Default values
  const defaultTitle = isSpanish
    ? 'Nelso Formación | Centro de Formación de Controladores Aéreos en Madrid y Canarias'
    : 'Nelso Formación | Air Traffic Controller Training School in Madrid & Canary Islands';

  const defaultDescription = isSpanish
    ? 'Formación especializada para controladores aéreos y profesionales del sector aeronáutico. Cursos certificados por AESA y preparación para oposiciones.'
    : 'Specialized training for air traffic controllers and aviation professionals. Courses certified by AESA.';
  
  const defaultKeywords = isSpanish
    ? 'controlador aéreo, formación ATC, oposiciones controlador, navegación aérea, AESA, controladores, cursos ATC, AESA'
    : 'air traffic controller, ATC training, air navigation, aviation courses, ATCO, AESA';
  
  const siteUrl = 'https://nelsoformacion.com';
  const fullUrl = `${siteUrl}${path}`;
  
  // Use provided values or defaults
  const pageTitle = title || defaultTitle;
  const pageDescription = description || defaultDescription;
  const pageKeywords = keywords || defaultKeywords;
  
  // Ensure image has absolute URL
  const imageUrl = image.startsWith('http') 
    ? image 
    : `${siteUrl}${image.startsWith('/') ? image : `/${image}`}`;
  
  // Determine image type based on extension
  const imageType = imageUrl.toLowerCase().includes('.jpg') || imageUrl.toLowerCase().includes('.jpeg') 
    ? 'image/jpeg' 
    : imageUrl.toLowerCase().includes('.png') 
      ? 'image/png' 
      : 'image/jpeg'; // default to jpeg
  
  // Use specified canonical URL or default to current URL
  const canonicalUrl = canonical || fullUrl;


  return (
    <Head>
      <html lang={isSpanish ? "es" : "en"} />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#A6A5F8" />
      <meta name="author" content="Nelso Formación" />
      {/* Robots meta tag */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      {/* FORCE OVERRIDE Open Graph / Facebook */}
      <meta property="og:type" content={type} data-react-helmet="true" />
      <meta property="og:url" content={fullUrl} data-react-helmet="true" />
      <meta property="og:title" content={pageTitle} data-react-helmet="true" />
      <meta property="og:description" content={pageDescription} data-react-helmet="true" />
      <meta property="og:image" content={imageUrl} data-react-helmet="true" />
      <meta property="og:image:url" content={imageUrl} data-react-helmet="true" />
      <meta property="og:image:secure_url" content={imageUrl} data-react-helmet="true" />
      <meta property="og:image:type" content={imageType} data-react-helmet="true" />
      <meta property="og:image:width" content="1200" data-react-helmet="true" />
      <meta property="og:image:height" content="630" data-react-helmet="true" />
      <meta property="og:image:alt" content={pageTitle} data-react-helmet="true" />
      <meta property="og:locale" content={isSpanish ? "es_ES" : "en_US"} data-react-helmet="true" />
      <meta property="og:site_name" content="Nelso Formación" data-react-helmet="true" />
      {/* FORCE OVERRIDE Twitter */}
      <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
      <meta name="twitter:url" content={fullUrl} data-react-helmet="true" />
      <meta name="twitter:title" content={pageTitle} data-react-helmet="true" />
      <meta name="twitter:description" content={pageDescription} data-react-helmet="true" />
      <meta name="twitter:image" content={imageUrl} data-react-helmet="true" />
      <meta name="twitter:site" content="@nelsoformacion" data-react-helmet="true" />
      <meta name="twitter:creator" content="@nelsoformacion" data-react-helmet="true" />
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      {/* Additional metadata for SEO */}
      {type === 'article' && (
        <>
          <meta property="article:publisher" content="https://nelsoformacion.com" />
          <meta property="article:section" content="Education" />
        </>
      )}
      {/* Enhanced JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Nelso Formación",
          "alternateName": "Centro de Formación de Controladores Aéreos Nelso",
          "url": "https://nelsoformacion.com",
          "logo": "https://nelsoformacion.com/logo.svg",
          "description": pageDescription,
          "address": [
            {
              "@type": "PostalAddress",
              "addressCountry": "ES",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "name": "Campus Madrid"
            },
            {
              "@type": "PostalAddress",
              "addressCountry": "ES",
              "addressLocality": "Las Palmas de Gran Canaria",
              "addressRegion": "Canarias",
              "name": "Campus Canarias"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["Spanish", "English"]
          },
          "sameAs": [
            "https://nelsoformacion.com"
          ],
          "hasCredential": "Certificado por SENASA",
          "educationalCredentialAwarded": "Licencia de Controlador Aéreo",
          "keywords": pageKeywords
        })}
      </script>
      {/* Additional Schema for Courses */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          "name": "Formación de Controladores Aéreos",
          "description": "Cursos especializados para la formación de controladores de tráfico aéreo",
          "provider": {
            "@type": "EducationalOrganization",
            "name": "Nelso Formación",
            "url": "https://nelsoformacion.com"
          },
          "hasCourseInstance": [
            {
              "@type": "CourseInstance",
              "name": "Bloque 1: Licencia Torre",
              "url": "https://nelsoformacion.com/bloque-1-licencia-torre",
              "courseMode": "https://schema.org/Mixed",
              "courseWorkload": "P6M",
              "courseSchedule": "Lunes a viernes, mañana o tarde",
              "offers": {
                "@type": "Offer",
                "price": "27000",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://nelsoformacion.com/bloque-1-licencia-torre"
              }
            },
            {
              "@type": "CourseInstance",
              "name": "Bloque 2: Ruta y Aproximación",
              "url": "https://nelsoformacion.com/bloque-2-licencias-ruta-aproximacion",
              "courseMode": "https://schema.org/Mixed",
              "courseWorkload": "P6M",
              "courseSchedule": "Lunes a viernes, mañana o tarde",
              "offers": {
                "@type": "Offer",
                "price": "33300",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://nelsoformacion.com/bloque-2-licencias-ruta-aproximacion"
              }
            },
            {
              "@type": "CourseInstance",
              "name": "Habilitación Completa",
              "url": "https://nelsoformacion.com/habilitacion-completa",
              "courseMode": "https://schema.org/Mixed",
              "courseWorkload": "P12M",
              "courseSchedule": "Lunes a viernes, mañana o tarde",
              "offers": {
                "@type": "Offer",
                "price": "60300",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://nelsoformacion.com/habilitacion-completa"
              }
            },
            {
              "@type": "CourseInstance",
              "name": "Preparación de Convocatoria de Controladores Aéreos",
              "url": "https://nelsoatctraining.com/preparacion-convocatoria",
              "courseMode": "https://schema.org/Mixed",
              "courseWorkload": "P2M",
              "courseSchedule": "8 semanas de formación online con clases en directo y presenciales",
              "offers": {
                "@type": "Offer",
                "price": "3000",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "url": "https://nelsoatctraining.com/preparacion-convocatoria"
              }
            }
          ]
        })}
      </script>
    </Head>
  );
};

export default SEO;
