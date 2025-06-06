'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, PlaneIcon, TowerControl, Headset } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactCTAProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  variant?: 'default' | 'business';
}

export const ContactCTA = ({ 
  title, 
  description, 
  buttonText, 
  onButtonClick, 
  variant = 'default' 
}: ContactCTAProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`rounded-xl p-12 text-center shadow-sm ${
        variant === 'business' ? 'bg-[#111827]/5 border border-[#111827]/10' : 'bg-gray-100'
      }`}
    >
      <div className={`p-4 rounded-full inline-block mb-6 shadow-sm ${
        variant === 'business' ? 'bg-[#111827]/10' : 'bg-white'
      }`}>
        {variant === 'business' ? (
          <Briefcase className="h-12 w-12 text-[#111827]" />
        ) : (
          <TowerControl className="h-12 w-12 text-primary" />
        )}
      </div>
      <h2 className="text-3xl font-bold mb-4 text-gray-900">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
        {description}
      </p>
      <Button 
        className={`text-white hover:bg-primary/90 px-6 py-2 h-auto shadow-sm hover:shadow-md transition-all ${
          variant === 'business' ? 'bg-[#111827]' : 'bg-primary'
        }`}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </motion.div>
  );
};
