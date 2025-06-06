
import React from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export interface FAQItem {
  question: string;
  answer: string;
}

interface CourseFAQProps {
  faqs: FAQItem[];
  title?: string;
}

const CourseFAQ = ({ faqs, title }: CourseFAQProps) => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          {title || (isSpanish ? "Preguntas Frecuentes" : "Frequently Asked Questions")}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CourseFAQ;
