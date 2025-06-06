
import { Post } from '@/types/blog';
import { ArrowRight } from 'lucide-react';

export const post: Post = {
  id: "tipos-trabajos-controlador-aereo",
  title: "¿Dónde trabajan los controladores aéreos?",
  description: "Descubre los tres entornos principales de trabajo de un controlador aéreo en España: TWR, TACC y ACC. Todo lo que necesitas saber sobre las diferentes ubicaciones y responsabilidades.",
  content: `
      <div class="bg-gray-50 p-6 mb-8 rounded-xl border border-gray-100">
        <p class="text-lg text-gray-700 italic">Imagina el cielo como una autopista de miles de carriles invisibles. Mantener la seguridad y fluidez del tráfico aéreo es una tarea tan compleja como fascinante, y no todos los controladores lo hacen desde el mismo lugar.</p>
      </div>

      <p>En esta entrada te explicamos los tres entornos principales de trabajo de un controlador aéreo en España: TWR, TACC y ACC. Si estás pensando en formarte como controlador, esto te ayudará a saber dónde podrías trabajar… y cómo llegar hasta allí.</p>

      <h2>1. TWR – La Torre de Control: El contacto visual con la acción</h2>
      <p>Los controladores de torre tienen una responsabilidad crucial:</p>
      <ul>
        <li>Gestionan aterrizajes, despegues y maniobras en tierra</li>
        <li>Controlan lo que ocurre dentro del aeropuerto y su espacio aéreo inmediato</li>
        <li>Realizan un trabajo visual y muy dinámico</li>
      </ul>
      <p>Este entorno es ideal para perfiles con gran rapidez de reacción y coordinación.</p>

      <div class="bg-gradient-to-br from-green-50 to-green-100 p-8 my-8 rounded-xl border border-green-200 shadow-sm">
        <h3 class="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
          <span>🎯</span> ¿Te gustaría empezar tu carrera como controlador desde una torre?
        </h3>
        <a 
          href="/bloque-1-torre" 
          class="inline-flex items-center justify-between bg-[#2980b9] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#3498db] transition-all duration-300 shadow-md hover:shadow-lg group"
          style="color: white !important;"
        >
          Curso de Bloque 1: Formación básica + habilitación de TWR
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <h2>2. ACC – Centro de Control de Área: El gran tablero del cielo</h2>
      <p>Los controladores de centro realizan una labor fundamental:</p>
      <ul>
        <li>Supervisan el tráfico en ruta a grandes altitudes, entre aeropuertos</li>
        <li>Dividen el espacio aéreo en sectores, cada uno con cientos de millas de responsabilidad</li>
        <li>Realizan un trabajo menos visual, más abstracto</li>
      </ul>
      <p>Este entorno es ideal para mentes analíticas y organizadas.</p>

      <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-8 my-8 rounded-xl border border-purple-200 shadow-sm">
        <h3 class="text-xl font-bold text-purple-800 mb-3 flex items-center gap-2">
          <span>🎯</span> ¿Te interesa gestionar los flujos aéreos a gran escala?
        </h3>
        <a 
          href="/bloque-2-aproximacion" 
          class="inline-flex items-center justify-between bg-[#8e44ad] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#9b59b6] transition-all duration-300 shadow-md hover:shadow-lg group"
          style="color: white !important;"
        >
          Bloque 2: Ruta + Aproximación
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <h2>3. TACC – Control de Área Terminal: La aproximación estratégica</h2>
      <p>Los controladores de aproximación (solo en Santiago y Valencia en España) tienen responsabilidades específicas:</p>
      <ul>
        <li>Controlan aproximaciones y salidas de varios aeropuertos dentro de un área</li>
        <li>Gestionan tráficos que ascienden o descienden hacia/desde un aeropuerto</li>
        <li>Requieren gran capacidad de anticipación y pensamiento espacial</li>
      </ul>
      <p>El perfil ideal requiere capacidad de anticipación, pensamiento espacial y manejo de múltiples tráficos convergentes.</p>

      <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-8 my-8 rounded-xl border border-blue-200 shadow-sm">
        <h3 class="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
          <span>🎯</span> ¿Te atrae la aproximación y la estrategia en zonas complejas?
        </h3>
        <a 
          href="/bloque-2-aproximacion" 
          class="inline-flex items-center justify-between bg-[#3498db] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#2980b9] transition-all duration-300 shadow-md hover:shadow-lg group"
          style="color: white !important;"
        >
          Bloque 2: Ruta + Aproximación
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>

      <h2>¿Cuál es el camino para llegar hasta allí?</h2>
      <p>En España, todos los controladores empiezan por la torre (TWR). Después, pueden ampliar su formación con ruta y aproximación:</p>

      <div class="overflow-x-auto my-6">
        <table class="w-full border-collapse">
          <thead class="bg-gray-50">
            <tr>
              <th class="border p-3 text-left">Curso</th>
              <th class="border p-3 text-left">Qué obtienes</th>
              <th class="border p-3 text-left">¿Dónde trabajarás?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-3">Bloque 1</td>
              <td class="border p-3">Básico + TWR</td>
              <td class="border p-3">Torres de control de aeropuertos</td>
            </tr>
            <tr>
              <td class="border p-3">Bloque 2</td>
              <td class="border p-3">Ruta + Aproximación</td>
              <td class="border p-3">ACC o TACC</td>
            </tr>
            <tr>
              <td class="border p-3">Formación completa</td>
              <td class="border p-3">TWR + Ruta + Aproximación</td>
              <td class="border p-3">TWR, ACC y/o TACC</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-gradient-to-br from-primary/5 to-primary/10 p-8 my-8 rounded-xl border border-primary/20 shadow-lg text-center">
        <div class="flex items-center justify-center text-4xl mb-4">
          <span class="mr-3">🎯</span>
        </div>
        <h3 class="text-2xl font-bold mb-6">En Nelso puedes hacer toda la formación de forma modular o completa</h3>
        <a href="/cursos" class="inline-flex items-center justify-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5" style="color: white !important;">
          Explora las opciones de formación
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
        </a>
      </div>

      <h2>Conclusión: Tres entornos, una misma misión</h2>
      <p>Tanto si estás mirando el aeropuerto desde lo alto de una torre, como si gestionas decenas de vuelos en una sala de control sin ventanas, todos los controladores comparten el mismo objetivo: garantizar vuelos seguros y fluidos.</p>

      <div class="text-center my-8">
        <p class="text-xl font-semibold">Ahora que sabes dónde podrías trabajar...</p>
        <p class="text-2xl font-bold mt-2">¿Estás listo para despegar tu carrera? ✈️</p>
      </div>
    `,
  coverImage: "/lovable-uploads/eea2c008-e111-4eb9-bf30-340f42f0c9fb.png",
  date: "2025-04-23",
  author: "Equipo Docente Nelso",
  tags: ["controlador aéreo", "torre de control", "TWR", "ACC", "TACC", "control de aproximación", "control de área", "formación ATC", "carrera profesional"],
  metaTitle: "¿Dónde trabajan los controladores aéreos? TWR, ACC y TACC | Nelso",
  metaDescription: "Descubre los tres entornos principales de trabajo de un controlador aéreo en España: TWR, TACC y ACC, y cómo formarte para trabajar en cada uno de ellos."
};
