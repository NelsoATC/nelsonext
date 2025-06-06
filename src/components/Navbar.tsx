'use client';

import { usePathname } from "next/navigation";
import { useState, useEffect } from 'react';
import { Menu, X, Globe, GraduationCap } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Toggle } from "@/components/ui/toggle";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setIsOpen(false);
    // Scroll to top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/cursos', label: t('nav.courses') },
    { path: '/servicios', label: t('nav.services') },
    { path: '/blog', label: t('nav.blog') },
    { path: '/contacto', label: language === 'es' ? 'Contacto' : 'Contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  const studentLinks = [
    { label: 'Aula Virtual', url: 'https://aula.nelsoformacion.com/' },
    { label: 'Microsoft 365', url: 'https://nelsoeliteatctraining.sharepoint.com/' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center">
            <img src="/logo.svg" alt="Nelso Formación" className="h-16" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Student Access Dropdown for Desktop */}
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
                <GraduationCap size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="bg-white border border-gray-200 rounded-lg shadow-lg text-gray-800 hover:text-primary transition-colors"
              >
                <DropdownMenuLabel className="text-gray-600">
                  {language === 'es' ? 'Accesos para alumnos' : 'Student Access'}
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200" />
                {studentLinks.map((link) => (
                  <DropdownMenuItem 
                    key={link.url} 
                    asChild 
                    className="hover:bg-gray-100 focus:bg-gray-100 cursor-pointer"
                  >
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full px-4 py-2 text-gray-800 hover:text-primary"
                    >
                      {link.label}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Language Switcher Toggle */}
            <Toggle 
              pressed={language === 'en'} 
              onPressedChange={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full font-medium border border-gray-200 transition-colors"
            >
              <Globe size={16} className="text-primary" />
              {language === 'es' ? 'ES' : 'EN'}
            </Toggle>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Switcher for Mobile */}
            <Toggle 
              pressed={language === 'en'} 
              onPressedChange={toggleLanguage}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full font-medium border border-gray-200 transition-colors"
            >
              <Globe size={16} className="text-primary" />
              {language === 'es' ? 'ES' : 'EN'}
            </Toggle>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/80 backdrop-blur-md border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Student Access section in mobile menu */}
            <div className="px-3 py-2">
              <div className="flex items-center gap-2 font-medium text-primary mb-2">
                <GraduationCap size={20} />
                {language === 'es' ? 'Accesos para alumnos' : 'Student Access'}
              </div>
              <div className="pl-7 space-y-2">
                {studentLinks.map((link) => (
                  <a 
                    key={link.url}
                    href={link.url} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-1.5 text-gray-700 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
