

import { useEffect } from 'react';

interface TallyConfig {
  hideTitle?: boolean;
  transparentBackground?: boolean;
  customCSS?: string;
  onFormSubmit?: () => void;
}

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
    TallyConfig?: TallyConfig;
    dataLayer?: any[];
  }
}

/**
 * Custom hook to load and configure Tally forms with URL tracking, GCLID capture and conversion tracking
 * @param isOpen Optional param to only load the script when a modal/form is open
 */
export const useTallyForm = (isOpen?: boolean) => {
  useEffect(() => {
    // Only proceed if isOpen is not provided or is true
    if (isOpen === undefined || isOpen) {
      // Capture GCLID from URL and store in localStorage
      const captureGclid = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const gclid = urlParams.get('gclid');
        
        if (gclid) {
          localStorage.setItem('gclid', gclid);
          console.log('GCLID captured and stored:', gclid);
        }
      };
      
      // Capture origin URL (referrer) and store in sessionStorage
      const captureOriginUrl = () => {
        // Only capture if we don't already have one in this session
        if (!sessionStorage.getItem('origin_url')) {
          const referrer = document.referrer;
          if (referrer && referrer !== window.location.href) {
            sessionStorage.setItem('origin_url', referrer);
            console.log('Origin URL captured and stored:', referrer);
          }
        }
      };
      
      // Run captures
      captureGclid();
      captureOriginUrl();
      
      // Get current page URL, stored GCLID, and origin URL
      const currentUrl = window.location.href;
      const storedGclid = localStorage.getItem('gclid');
      const storedOriginUrl = sessionStorage.getItem('origin_url');
      
      // Configure Tally with enhanced custom CSS
      window.TallyConfig = {
        hideTitle: true,
        transparentBackground: true,
        customCSS: `
          /* General form styling */
          .tally-form {
            font-family: Inter, system-ui, sans-serif !important;
          }
          
          /* Adjust page margins */
          .tally-page { 
            margin-top: 10px !important; 
            margin-bottom: 10px !important;
          }
          
          /* Container adjustments */
          .cxEjdi {
            margin-top: 10px !important;
            margin-bottom: 10px !important;
          }
          
          /* Input field styling */
          .tally-input {
            border-radius: 0.375rem !important;
            border: 1px solid #E2E8F0 !important;
            transition: border-color 0.2s ease-in-out !important;
          }
          
          .tally-input:focus, .tally-input:hover {
            border-color: #ba263a !important;
            box-shadow: 0 0 0 1px rgba(186, 38, 58, 0.2) !important;
          }
          
          /* Labels styling */
          .tally-label {
            font-weight: 500 !important;
            color: #222222 !important;
          }
          
          /* Radio and checkbox styling */
          .tally-radio-input, .tally-checkbox-input {
            accent-color: #ba263a !important;
          }
          
          /* Button styling to match your primary color */
          .tally-submit-button, .tally-next-button {
            background-color: #ba263a !important;
            border-radius: 0.375rem !important;
            font-weight: 500 !important;
            transition: background-color 0.2s ease-in-out !important;
          }
          
          .tally-submit-button:hover, .tally-next-button:hover {
            background-color: #9a1b2e !important;
          }
          
          /* Error message styling */
          .tally-error-message {
            color: #ba263a !important;
          }
          
          /* Drop shadow for form elements */
          .tally-form-wrapper {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important;
          }
        `,
        onFormSubmit: () => {
          console.log('Tally form submitted, redirecting to success page');
          
          // Enviar evento a dataLayer (Google Tag Manager)
          if (window.dataLayer) {
            window.dataLayer.push({
              'event': 'formSubmission',
              'formName': 'tallyForm',
              'formLocation': currentUrl
            });
            console.log('GTM event pushed: formSubmission');
          }
          
          // Enviar evento a Google Analytics
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              'event_category': 'form',
              'event_label': 'tally_form',
              'value': 1
            });
            console.log('GA4 event sent: form_submit');
          }
          
          // Enviar evento de conversión a Google Ads
          if (window.gtag) {
            // Enviar conversión estándar
            window.gtag('event', 'conversion', {
              'send_to': 'AW-971027451/4HPBCP2UnnUQ--eCzwM'
            });
            console.log('Google Ads conversion event sent');
          }
          
          // Redirigir a la página de éxito después de registrar todos los eventos
          setTimeout(() => {
            window.location.href = '/exito';
          }, 1000);
        }
      };
      
      // Add all three parameters to Tally forms after the script loads
      const addParamsToForms = () => {
        // Find all iframe elements with 'data-tally-src' attribute
        const tallyIframes = document.querySelectorAll('iframe[data-tally-src]');
        
        tallyIframes.forEach(iframe => {
          const tallyIframe = iframe as HTMLIFrameElement;
          const originalSrc = tallyIframe.getAttribute('data-tally-src');
          
          if (originalSrc) {
            // Extract the base URL (without query parameters)
            const baseUrl = originalSrc.split('?')[0];
            
            // Create a URLSearchParams object for the existing query parameters
            const searchParams = new URLSearchParams(originalSrc.includes('?') ? originalSrc.split('?')[1] : '');
            
            // Add page_url parameter with the current page URL
            searchParams.set('page_url', currentUrl);
            console.log('Adding page_url to form:', currentUrl);
            
            // Add GCLID if available
            if (storedGclid) {
              searchParams.set('gclid', storedGclid);
              console.log('Adding GCLID to form:', storedGclid);
            }
            
            // Add origin_url if available
            if (storedOriginUrl) {
              searchParams.set('origin_url', storedOriginUrl);
              console.log('Adding origin_url to form:', storedOriginUrl);
            }
            
            // Reconstruct the URL with the updated parameters
            const newSrc = `${baseUrl}?${searchParams.toString()}`;
            
            console.log('Updating Tally form URL with all parameters:', newSrc);
            
            // Update the iframe's data-tally-src attribute
            tallyIframe.setAttribute('data-tally-src', newSrc);
            
            // If iframe already has a src attribute, update it too
            if (tallyIframe.src && tallyIframe.src.includes('tally.so')) {
              tallyIframe.src = newSrc;
            }
          }
        });
        
        // Set up message listener for Tally form submissions
        const handleTallyMessage = (event: MessageEvent) => {
          // Only process messages from Tally
          if (event.origin !== 'https://tally.so') return;
          
          try {
            const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;
            
            // Check if this is a form submission event
            if (data && data.type === 'tally-form-submission') {
              console.log('Tally form submitted via postMessage');
              
              // Enviar eventos de conversión
              if (window.dataLayer) {
                window.dataLayer.push({
                  'event': 'formSubmission',
                  'formName': 'tallyForm',
                  'formLocation': currentUrl
                });
                console.log('GTM event pushed: formSubmission');
              }
              
              // Enviar conversión de Google Ads
              if (window.gtag) {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-971027451/4HPBCP2UnnUQ--eCzwM'
                });
                console.log('Google Ads conversion event sent via postMessage');
              }
              
              // Redirigir a página de éxito
              setTimeout(() => {
                window.location.href = '/exito';
              }, 1000);
            }
          } catch (error) {
            console.error('Error processing Tally message:', error);
          }
        };
        
        // Add event listener for postMessage from Tally
        window.addEventListener('message', handleTallyMessage);
        
        // Reload embeds to apply changes
        if (window.Tally) {
          window.Tally.loadEmbeds();
        }
        
        // Return cleanup function
        return () => {
          window.removeEventListener('message', handleTallyMessage);
        };
      };
      
      // Load the Tally script
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.setAttribute('SameSite', 'None');
      script.setAttribute('Secure', 'true');
      document.body.appendChild(script);
      
      // Set up the event listener for script loading
      script.onload = () => {
        setTimeout(() => {
          // Delay execution to ensure all Tally iframes are loaded
          const cleanupFn = addParamsToForms();
          
          // Initialize Tally forms after script loads
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }, 500);
      };
      
      // Try to run the function in case script is already loaded
      if (window.Tally) {
        setTimeout(addParamsToForms, 500);
      }

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [isOpen]);
};

export default useTallyForm;

