import './globals.css'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import { LanguageDetectionProvider } from "@/contexts/LanguageDetectionContext";

  export const metadata = {
    title: 'vite_react_shadcn_ts',
    description: 'Next.js App',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <LanguageDetectionProvider><HelmetProvider>{children}</HelmetProvider></LanguageDetectionProvider>
          </TooltipProvider>
        </body>
      </html>
    )
  }