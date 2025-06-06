'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormField, FormItem, FormLabel, FormControl } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

interface AdmissionContactFormProps {
  isSpanish: boolean;
}

const AdmissionContactForm = ({ isSpanish }: AdmissionContactFormProps) => {
  const [emailRevealed, setEmailRevealed] = useState(false);
  const [decodedEmail, setDecodedEmail] = useState('');
  
  // Form setup
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });
  
  const onSubmit = (values: any) => {
    // This would typically send the data to your backend
    console.log(values);
    toast.success(isSpanish ? 'Mensaje enviado correctamente' : 'Message sent successfully');
    form.reset();
  };

  // Function to decode the obfuscated email for real users when they click
  const revealEmail = (event: React.MouseEvent, elementId: string) => {
    event.preventDefault();
    // Set directly to the correct email
    const element = document.getElementById(elementId);
    if (element) {
      const correctEmail = 'info@nelsoformacion.com';
      element.setAttribute('href', 'mailto:' + correctEmail);
      setDecodedEmail(correctEmail);
      setEmailRevealed(true);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
        <p className="text-gray-600">
          {isSpanish 
            ? 'Ponte en contacto con nosotros y te informaremos sobre todos los detalles' 
            : 'Contact us and we will inform you about all the details'}
        </p>
        <div>
          <p className="font-medium">{isSpanish ? 'Email' : 'Email'}:</p>
          <p className="text-primary">
            <a 
              id="admission-protected-email" 
              href="#" 
              onClick={(e) => revealEmail(e, 'admission-protected-email')}
              className="text-primary hover:text-primary/80"
            >
              {emailRevealed 
                ? decodedEmail
                : isSpanish ? "Haz clic para mostrar" : "Click to reveal"
              }
            </a>
          </p>
        </div>
        <div>
          <p className="font-medium">{isSpanish ? 'Teléfono' : 'Phone'}:</p>
          <p className="text-primary">+34 910 000 000</p>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {isSpanish ? 'Nombre' : 'Name'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      id="name"
                      placeholder={isSpanish ? 'Tu nombre' : 'Your name'} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {isSpanish ? 'Email' : 'Email'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder={isSpanish ? 'Tu email' : 'Your email'} 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {isSpanish ? 'Mensaje' : 'Message'}
                  </FormLabel>
                  <FormControl>
                    <textarea 
                      id="message"
                      rows={4} 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder={isSpanish ? 'Tu mensaje' : 'Your message'}
                      {...field}
                    ></textarea>
                  </FormControl>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              {isSpanish ? 'Enviar' : 'Submit'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AdmissionContactForm;
