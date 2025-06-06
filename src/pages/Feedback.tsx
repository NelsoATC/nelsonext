
import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, User } from "lucide-react";

interface InstructorFeedbackProps {
  name: string;
  formUrl: string;
  imageUrl: string;
}

const instructors: InstructorFeedbackProps[] = [
  {
    name: "Jesús López de Lerma",
    formUrl: "https://tally.so/r/wLoZNJ",
    imageUrl: "/images/feedback/Jesus López-min.jpg"
  },
  {
    name: "Abel Hernández",
    formUrl: "https://tally.so/r/mJB9WY",
    imageUrl: "/images/feedback/Abel Hernández-min.jpg"
  },
  {
    name: "Blanca Barranco",
    formUrl: "https://tally.so/r/3l4b1X",
    imageUrl: "/images/feedback/Blanca Barranco-min.jpg"
  },
  {
    name: "Ángel Ramos",
    formUrl: "https://tally.so/r/nG7x4O",
    imageUrl: "/images/feedback/Ángel Ramos-min.jpg"
  },
  {
    name: "Azucena Castejón",
    formUrl: "https://tally.so/r/nPPdex",
    imageUrl: "/images/feedback/Azucena Castejón-min.jpg"
  },
  {
    name: "Joaquín San Juan",
    formUrl: "https://tally.so/r/w2REyM",
    imageUrl: "/images/feedback/Joaquín San Juan-min.jpg"
  },
  {
    name: "José Morales",
    formUrl: "https://tally.so/r/3x6X1k",
    imageUrl: "/images/feedback/Jose Morales-min.jpg"
  },
  {
    name: "Ramón del Valle",
    formUrl: "https://tally.so/r/wQEKa1",
    imageUrl: "/images/feedback/Ramón del Valle-min.jpg"
  },
  {
    name: "Raúl Fernández",
    formUrl: "https://tally.so/r/w7PRg2",
    imageUrl: "/images/feedback/Raul Fernández-min.jpg"
  },
  {
    name: "Pascual Bitaubé",
    formUrl: "https://tally.so/r/3y79q4",
    imageUrl: "/images/feedback/placeholder.svg"
  },
  {
    name: "Berardo Peñalba",
    formUrl: "https://tally.so/r/n9xXBG",
    imageUrl: "/images/feedback/Berardo Peñalba-min.jpg"
  },
  {
    name: "Aurelio Vázquez",
    formUrl: "https://tally.so/r/w82zNA",
    imageUrl: "/images/feedback/Aurelio Vázquez-min.jpg"
  }
];

const InstructorFeedbackCard: React.FC<InstructorFeedbackProps> = ({ name, formUrl, imageUrl }) => {
  const [imageError, setImageError] = useState(false);
  
  const openFeedbackForm = () => {
    window.open(formUrl, "_blank", "noreferrer");
  };

  return (
    <Card className="overflow-hidden border-2 border-primary/10 hover:border-primary/30 transition-all">
      <div className="relative h-48 overflow-hidden">
        {!imageError ? (
          <img 
            src={imageUrl} 
            alt={`${name}`} 
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <User size={64} className="text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-white text-xl font-bold">{name}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 mb-4">Deja tu valoración y comentarios para mejorar la formación.</p>
        <Button 
          onClick={openFeedbackForm}
          className="w-full flex items-center justify-center gap-2"
        >
          Dar feedback <ExternalLink className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

const Feedback: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Feedback para instructores | Nelso Formación</title>
        <meta name="description" content="Página interna para dejar feedback a los instructores de Nelso Formación" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="container mx-auto py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Feedback para instructores</h1>
          <p className="text-gray-600 text-center mb-12">Selecciona un instructor para dejar tu valoración y comentarios</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor) => (
              <InstructorFeedbackCard 
                key={instructor.name}
                name={instructor.name}
                formUrl={instructor.formUrl}
                imageUrl={instructor.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
