
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Plane } from "lucide-react";

interface ModuleCardProps {
  moduleNumber: string;
  title: string;
  description: string;
  items: string[];
  isPrimaryModule?: boolean; // To determine which icon to use
  isSpanish: boolean;
  isBloque?: boolean; // New property to determine if we show "Bloque" or "Módulo"
}

const ModuleCard = ({ 
  moduleNumber, 
  title, 
  description, 
  items, 
  isPrimaryModule = true,
  isSpanish,
  isBloque = false
}: ModuleCardProps) => {
  const Icon = isPrimaryModule ? School : Plane;
  const moduleType = isBloque ? (isSpanish ? "Bloque" : "Block") : (isSpanish ? "Módulo" : "Module");

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader className="bg-primary/5">
        <Badge className="bg-primary text-white mb-2">
          {`${moduleType} ${moduleNumber}`}
        </Badge>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <ul className="space-y-3 text-gray-600">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="mt-1 bg-accent/10 rounded-full p-1">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ModuleCard;
