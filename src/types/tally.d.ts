
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
    TallyConfig?: {
      hideTitle?: boolean;
      transparentBackground?: boolean;
      customCSS?: string;
      onFormSubmit?: () => void;
    };
    dataLayer?: any[];
    gtag?: (
      command: string,
      action: string,
      params?: {
        send_to?: string;
        value?: number;
        currency?: string;
        event_category?: string;
        event_label?: string;
        // Add consent-related properties
        analytics_storage?: 'granted' | 'denied';
        ad_storage?: 'granted' | 'denied';
        functionality_storage?: 'granted' | 'denied';
        personalization_storage?: 'granted' | 'denied';
        security_storage?: 'granted' | 'denied';
        ad_user_data?: 'granted' | 'denied';
        ad_personalization?: 'granted' | 'denied';
        regions?: string[];
      }
    ) => void;
  }
}

export {};
