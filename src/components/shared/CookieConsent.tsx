import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

// This function will manage Google Analytics based on user preferences
const handleAnalyticsCookies = (allowed: boolean) => {
  if (window.gtag) {
    if (allowed) {
      // Enable Google Analytics
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_user_data': 'granted'
      });
      console.log('Analytics cookies enabled');
    } else {
      // Disable Google Analytics
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_user_data': 'denied'
      });
      
      // Remove Google Analytics cookies
      document.cookie = '_ga=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      document.cookie = '_ga_7Y8V0XRXLJ=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      document.cookie = '_gid=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      document.cookie = '_gat=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      console.log('Analytics cookies disabled');
    }
  }
};

// This function will manage marketing cookies based on user preferences
const handleMarketingCookies = (allowed: boolean) => {
  if (window.gtag) {
    if (allowed) {
      // Enable marketing cookies (Google Ads, etc.)
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_personalization': 'granted'
      });
      console.log('Marketing cookies enabled');
    } else {
      // Disable marketing cookies
      window.gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_personalization': 'denied'
      });
      
      // Remove marketing cookies
      document.cookie = '_fbp=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      document.cookie = '_gcl_au=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Domain=' + window.location.hostname + ';';
      console.log('Marketing cookies disabled');
    }
  }
};

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);
  const [showPreferencesDialog, setShowPreferencesDialog] = useState(false);
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  // Cookie preferences state
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true and cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    
    if (hasConsented) {
      // Load saved preferences
      try {
        const savedPrefs = JSON.parse(localStorage.getItem('cookie-preferences') || '{}');
        const loadedPrefs = {
          necessary: true, // Always true
          analytics: savedPrefs.analytics || false,
          marketing: savedPrefs.marketing || false
        };
        
        setPreferences(loadedPrefs);
        console.log('Loaded cookie preferences:', loadedPrefs);
        
        // Apply saved preferences (they should already be applied from index.html but double-check)
        handleAnalyticsCookies(loadedPrefs.analytics);
        handleMarketingCookies(loadedPrefs.marketing);
      } catch (e) {
        console.error('Error parsing saved cookie preferences');
      }
    } else {
      // Always show the consent banner if no consent has been given
      console.log('No cookie consent found, showing banner');
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 2000); // Increased delay to ensure page is loaded
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Apply cookie settings based on preferences
  useEffect(() => {
    if (localStorage.getItem('cookie-consent')) {
      handleAnalyticsCookies(preferences.analytics);
      handleMarketingCookies(preferences.marketing);
    }
  }, [preferences.analytics, preferences.marketing]);

  const savePreferences = () => {
    // Store consent in localStorage
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(preferences));
    
    console.log('Saving cookie preferences:', preferences);
    
    // Apply the preferences
    handleAnalyticsCookies(preferences.analytics);
    handleMarketingCookies(preferences.marketing);
    
    // Close dialogs
    setShowConsent(false);
    setShowPreferencesDialog(false);
    
    toast.success(isSpanish ? "Preferencias de cookies guardadas" : "Cookie preferences saved");
  };

  const acceptAll = () => {
    const allAcceptedPrefs = {
      necessary: true,
      analytics: true,
      marketing: true
    };
    
    setPreferences(allAcceptedPrefs);
    
    // Store consent immediately
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(allAcceptedPrefs));
    
    console.log('Accepting all cookies:', allAcceptedPrefs);
    
    // Apply all preferences
    handleAnalyticsCookies(true);
    handleMarketingCookies(true);
    
    // Close dialogs
    setShowConsent(false);
    setShowPreferencesDialog(false);
    
    toast.success(isSpanish ? "Todas las cookies aceptadas" : "All cookies accepted");
  };

  const rejectAll = () => {
    const rejectedPrefs = {
      necessary: true,
      analytics: false,
      marketing: false
    };
    
    setPreferences(rejectedPrefs);
    
    // Store consent immediately
    localStorage.setItem('cookie-consent', 'true');
    localStorage.setItem('cookie-preferences', JSON.stringify(rejectedPrefs));
    
    console.log('Rejecting non-essential cookies:', rejectedPrefs);
    
    // Apply rejected preferences
    handleAnalyticsCookies(false);
    handleMarketingCookies(false);
    
    // Close dialogs
    setShowConsent(false);
    setShowPreferencesDialog(false);
    
    toast.success(isSpanish ? "Solo cookies necesarias aceptadas" : "Only necessary cookies accepted");
  };

  const openPreferencesDialog = () => {
    setShowPreferencesDialog(true);
    setShowConsent(false);
  };

  const manageCookies = () => {
    // Load current preferences if they exist
    try {
      const savedPrefs = JSON.parse(localStorage.getItem('cookie-preferences') || '{}');
      setPreferences({
        necessary: true, // Always true
        analytics: savedPrefs.analytics || false,
        marketing: savedPrefs.marketing || false
      });
    } catch (e) {
      // Handle error
    }
    
    setShowPreferencesDialog(true);
  };

  // Force show banner for testing - remove this if needed
  useEffect(() => {
    // Remove this effect in production if needed
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('test-cookies') === 'true') {
      localStorage.removeItem('cookie-consent');
      localStorage.removeItem('cookie-preferences');
      setShowConsent(true);
    }
  }, []);

  return (
    <>
      {/* Main cookie banner */}
      {showConsent && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:p-6 z-50 shadow-lg">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {isSpanish ? "Este sitio utiliza cookies" : "This site uses cookies"}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  {isSpanish 
                    ? "Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptar todas las cookies, configurar tus preferencias o rechazar las cookies no esenciales." 
                    : "We use our own and third-party cookies to improve your experience. You can accept all cookies, configure your preferences, or reject non-essential cookies."}
                </p>
                <div className="mt-2">
                  <Link to={isSpanish ? "/politica-cookies" : "/cookie-policy"} className="text-primary text-sm hover:underline">
                    {isSpanish ? "Política de Cookies" : "Cookie Policy"}
                  </Link>
                </div>
              </div>
              <div className="flex gap-2 md:flex-shrink-0 flex-wrap">
                <Button variant="outline" onClick={rejectAll}>
                  {isSpanish ? "Solo necesarias" : "Only necessary"}
                </Button>
                <Button variant="outline" onClick={openPreferencesDialog}>
                  {isSpanish ? "Configurar" : "Configure"}
                </Button>
                <Button onClick={acceptAll}>
                  {isSpanish ? "Aceptar todas" : "Accept all"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie settings dialog */}
      <Dialog open={showPreferencesDialog} onOpenChange={setShowPreferencesDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{isSpanish ? "Preferencias de cookies" : "Cookie preferences"}</DialogTitle>
            <DialogDescription>
              {isSpanish 
                ? "Gestiona tus preferencias de cookies. Las cookies necesarias son esenciales para el funcionamiento básico del sitio web." 
                : "Manage your cookie preferences. Necessary cookies are essential for the basic functioning of the website."}
            </DialogDescription>
          </DialogHeader>
          
          <Tabs defaultValue="settings" className="mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="settings">{isSpanish ? "Configuración" : "Settings"}</TabsTrigger>
              <TabsTrigger value="details">{isSpanish ? "Detalles" : "Details"}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="settings">
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="necessary-cookies" className="font-medium">
                      {isSpanish ? "Cookies necesarias" : "Necessary cookies"}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {isSpanish ? "Siempre activas" : "Always active"}
                    </p>
                  </div>
                  <Switch 
                    id="necessary-cookies" 
                    checked={true} 
                    disabled={true}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="analytics-cookies" className="font-medium">
                      {isSpanish ? "Cookies analíticas" : "Analytics cookies"}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {isSpanish ? "Google Analytics para análisis del sitio" : "Google Analytics for site analysis"}
                    </p>
                  </div>
                  <Switch 
                    id="analytics-cookies" 
                    checked={preferences.analytics} 
                    onCheckedChange={(checked) => setPreferences({...preferences, analytics: checked})}
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="marketing-cookies" className="font-medium">
                      {isSpanish ? "Cookies de marketing" : "Marketing cookies"}
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      {isSpanish ? "Google Ads para publicidad personalizada" : "Google Ads for personalized advertising"}
                    </p>
                  </div>
                  <Switch 
                    id="marketing-cookies" 
                    checked={preferences.marketing} 
                    onCheckedChange={(checked) => setPreferences({...preferences, marketing: checked})}
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="details" className="max-h-[50vh] overflow-y-auto">
              <div className="space-y-4 py-2">
                <div>
                  <h4 className="font-medium mb-2">{isSpanish ? "Cookies necesarias" : "Necessary cookies"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {isSpanish 
                      ? "Estas cookies son esenciales para el funcionamiento básico del sitio web y no pueden ser desactivadas." 
                      : "These cookies are essential for the basic functioning of the website and cannot be disabled."}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">{isSpanish ? "Cookies analíticas" : "Analytics cookies"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {isSpanish 
                      ? "Nos permiten recopilar información sobre cómo se utiliza nuestro sitio web, para mejorar su funcionamiento y contenido. Incluyen Google Analytics." 
                      : "These allow us to collect information about how our website is used, to improve its functioning and content. They include Google Analytics."}
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">{isSpanish ? "Cookies de marketing" : "Marketing cookies"}</h4>
                  <p className="text-sm text-muted-foreground">
                    {isSpanish 
                      ? "Se utilizan para rastrear a los visitantes en los sitios web con el fin de mostrar anuncios relevantes y personalizados. Incluyen Google Ads." 
                      : "These are used to track visitors across websites in order to display relevant and personalized advertisements. They include Google Ads."}
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
          
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setShowPreferencesDialog(false)}>
              {isSpanish ? "Cancelar" : "Cancel"}
            </Button>
            <Button onClick={savePreferences}>
              {isSpanish ? "Guardar preferencias" : "Save preferences"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Cookie management floating button (only shown after initial consent) */}
      {localStorage.getItem('cookie-consent') && !showConsent && !showPreferencesDialog && (
        <Button 
          variant="outline" 
          size="sm" 
          onClick={manageCookies} 
          className="fixed bottom-4 left-4 z-40 shadow-md rounded-full p-2 h-auto"
          aria-label={isSpanish ? "Gestionar cookies" : "Manage cookies"}
        >
          <span className="sr-only">{isSpanish ? "Gestionar cookies" : "Manage cookies"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
            <path d="M8.5 8.5v.01" />
            <path d="M16 15.5v.01" />
            <path d="M12 12v.01" />
          </svg>
        </Button>
      )}
    </>
  );
};

export default CookieConsent;
