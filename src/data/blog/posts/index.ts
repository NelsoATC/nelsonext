
import { Post } from '@/types/blog';
import { post as tiposTrabajos } from './tipos-trabajos-controlador-aereo';
import { post as comoProfesion } from './como-es-la-profesion-controlador-aereo';
import { post as pruebaDigital } from './que-es-la-prueba-digital-en-entorno-atc';
import { post as oposiciones } from './oposiciones-controlador-aereo';
import { post as requisitos } from './requisitos-controlador-aereo';
import { post as queEs } from './que-es-ser-controlador-aereo';
import { post as crisisDeficit } from './crisis-deficit-controladores-aereos-espana';

export const blogPosts: Post[] = [
  crisisDeficit,
  tiposTrabajos,
  comoProfesion,
  pruebaDigital,
  oposiciones,
  requisitos,
  queEs,
];
