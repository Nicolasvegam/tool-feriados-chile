'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Saying {
  id: number;
  phrase: string;
  meaning: string;
  example?: string;
}

const chileanSayings: Saying[] = [
  {
    id: 1,
    phrase: "Al tiro",
    meaning: "Inmediatamente, de forma rápida.",
    example: "Voy al tiro para allá."
  },
  {
    id: 2,
    phrase: "Cachai",
    meaning: "¿Entiendes? ¿Comprendes? Viene del inglés 'to catch'.",
    example: "El examen es mañana, ¿cachai?"
  },
  {
    id: 3,
    phrase: "La raja",
    meaning: "Excelente, muy bueno, genial.",
    example: "¡La fiesta estuvo la raja!"
  },
  {
    id: 4,
    phrase: "Fome",
    meaning: "Aburrido, sin gracia, tedioso.",
    example: "La película estuvo super fome."
  },
  {
    id: 5,
    phrase: "Pololo/Polola",
    meaning: "Novio o novia, pareja sentimental.",
    example: "Te presento a mi polola."
  },
  {
    id: 6,
    phrase: "Carrete",
    meaning: "Fiesta, salida nocturna, juerga.",
    example: "¿Vamos al carrete de Juan?"
  },
  {
    id: 7,
    phrase: "Pega",
    meaning: "Trabajo, empleo.",
    example: "Encontré una nueva pega."
  },
  {
    id: 8,
    phrase: "Guagua",
    meaning: "Bebé, niño pequeño.",
    example: "La guagua está durmiendo."
  },
  {
    id: 9,
    phrase: "Plata",
    meaning: "Dinero.",
    example: "No tengo plata para salir."
  },
  {
    id: 10,
    phrase: "Bacán",
    meaning: "Genial, estupendo, muy bueno.",
    example: "¡Qué bacán tu auto nuevo!"
  },
  {
    id: 11,
    phrase: "Weón/Wea",
    meaning: "Término muy versátil: puede ser amigo, tonto, cosa, situación, etc.",
    example: "Oye weón, pásame esa wea."
  },
  {
    id: 12,
    phrase: "Cahuín",
    meaning: "Chisme, rumor, habladuría.",
    example: "No me gusta el cahuín."
  },
  {
    id: 13,
    phrase: "Pololear",
    meaning: "Tener una relación de noviazgo.",
    example: "Llevamos 3 años pololeando."
  },
  {
    id: 14,
    phrase: "Achuntar",
    meaning: "Acertar, atinar, dar en el blanco.",
    example: "Le achuntaste con el regalo."
  },
  {
    id: 15,
    phrase: "Aperrar",
    meaning: "Aguantar, soportar una situación difícil.",
    example: "Hay que aperrar nomás."
  },
  {
    id: 16,
    phrase: "Cachar",
    meaning: "Entender, comprender, darse cuenta.",
    example: "Ya caché cómo funciona."
  },
  {
    id: 17,
    phrase: "Chancho",
    meaning: "Cerdo, pero también se usa para decir sucio o desordenado.",
    example: "Deja de ser tan chancho."
  },
  {
    id: 18,
    phrase: "Cuático",
    meaning: "Impresionante, fuerte, intenso.",
    example: "¡Qué cuático lo que pasó!"
  },
  {
    id: 19,
    phrase: "Gallo/Galla",
    meaning: "Tipo, sujeto, persona.",
    example: "Ese gallo es mi vecino."
  },
  {
    id: 20,
    phrase: "Huacho",
    meaning: "Originalmente huérfano, ahora se usa como insulto.",
    example: "No seas huacho."
  },
  {
    id: 21,
    phrase: "La cagó",
    meaning: "Expresión de asombro o para decir que algo está muy bueno/malo.",
    example: "¡La cagó con el gol!"
  },
  {
    id: 22,
    phrase: "Luca",
    meaning: "Mil pesos chilenos.",
    example: "Me costó 5 lucas."
  },
  {
    id: 23,
    phrase: "Paco",
    meaning: "Carabinero, policía.",
    example: "Ahí viene un paco."
  },
  {
    id: 24,
    phrase: "Peludo",
    meaning: "Difícil, complicado.",
    example: "El examen estuvo peludo."
  },
  {
    id: 25,
    phrase: "Pituto",
    meaning: "Contacto, influencia para conseguir algo.",
    example: "Consiguió la pega por pituto."
  },
  {
    id: 26,
    phrase: "Rajarse",
    meaning: "Presumir, jactarse o también gastar mucho dinero.",
    example: "Se rajó con el asado."
  },
  {
    id: 27,
    phrase: "Taco",
    meaning: "Embotellamiento, congestión vehicular.",
    example: "Hay terrible taco en la Alameda."
  },
  {
    id: 28,
    phrase: "Copuchar",
    meaning: "Chismear, cotillear.",
    example: "Les encanta copuchar."
  },
  {
    id: 29,
    phrase: "Mina",
    meaning: "Mujer, chica.",
    example: "Esa mina es doctora."
  },
  {
    id: 30,
    phrase: "Pasarlo chancho",
    meaning: "Divertirse mucho, pasarlo muy bien.",
    example: "La pasamos chancho en la playa."
  },
  {
    id: 31,
    phrase: "Quedarse en pana",
    meaning: "Averiarse (generalmente un vehículo).",
    example: "El auto se quedó en pana."
  },
  {
    id: 32,
    phrase: "Sacar la cresta",
    meaning: "Golpear fuertemente o trabajar muy duro.",
    example: "Me saqué la cresta trabajando."
  },
  {
    id: 33,
    phrase: "Tener buena/mala pata",
    meaning: "Tener buena o mala suerte.",
    example: "Siempre tiene buena pata."
  },
  {
    id: 34,
    phrase: "Hacer perro muerto",
    meaning: "Irse sin pagar de un lugar.",
    example: "Hicieron perro muerto en el restorán."
  },
  {
    id: 35,
    phrase: "Estar pato",
    meaning: "No tener dinero.",
    example: "No puedo salir, estoy pato."
  },
  {
    id: 36,
    phrase: "A la chucha",
    meaning: "Muy lejos.",
    example: "Vive a la chucha."
  },
  {
    id: 37,
    phrase: "Cabro chico",
    meaning: "Niño pequeño.",
    example: "Los cabros chicos están jugando."
  },
  {
    id: 38,
    phrase: "Dar jugo",
    meaning: "Causar problemas o dificultades.",
    example: "Este trabajo me está dando jugo."
  },
  {
    id: 39,
    phrase: "Echar la foca",
    meaning: "Regañar, retar severamente.",
    example: "Mi jefe me echó la foca."
  },
  {
    id: 40,
    phrase: "Hacer tuto",
    meaning: "Dormir.",
    example: "El bebé está haciendo tuto."
  }
];

export default function ChileanSayings() {
  const [selectedSaying, setSelectedSaying] = useState<number | null>(null);
  const [hoveredSaying, setHoveredSaying] = useState<number | null>(null);

  const emojis = ['🌶️', '🥟', '🍷', '🎸', '🇨🇱', '🎊', '🌟', '💃', '🎪', '🎭'];
  
  const getRandomEmoji = (index: number) => {
    return emojis[index % emojis.length];
  };

  return (
    <section className="mb-12 max-w-7xl mx-auto px-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-3">
            Dichos y Modismos Chilenos
          </h2>
          <p className="text-lg text-gray-600">
            ¡Descubre el sabor de nuestro lenguaje! Haz clic en cualquier carta para conocer su significado
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {chileanSayings.map((saying, index) => (
            <div
              key={saying.id}
              className="relative group"
              onMouseEnter={() => setHoveredSaying(saying.id)}
              onMouseLeave={() => setHoveredSaying(null)}
            >
              <button
                onClick={() => setSelectedSaying(saying.id === selectedSaying ? null : saying.id)}
                className={`
                  w-full h-32 p-4 rounded-2xl shadow-lg transform transition-all duration-300
                  ${selectedSaying === saying.id 
                    ? 'scale-105 rotate-2 bg-gradient-to-br from-red-500 to-blue-600 text-white shadow-2xl' 
                    : hoveredSaying === saying.id
                    ? 'scale-105 -rotate-2 bg-gradient-to-br from-red-100 to-blue-100 shadow-xl'
                    : 'bg-white hover:shadow-xl'
                  }
                  border-2 ${selectedSaying === saying.id ? 'border-white' : 'border-gray-200'}
                  flex flex-col items-center justify-center gap-2
                  focus:outline-none focus:ring-4 focus:ring-blue-400 focus:ring-opacity-50
                `}
              >
                <span className="text-3xl animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                  {getRandomEmoji(index)}
                </span>
                <h3 className={`font-bold text-sm text-center leading-tight ${
                  selectedSaying === saying.id ? 'text-white' : 'text-gray-800'
                }`}>
                  &ldquo;{saying.phrase}&rdquo;
                </h3>
              </button>
              
              {hoveredSaying === saying.id && selectedSaying !== saying.id && (
                <div className="absolute z-10 top-full left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white text-xs rounded-lg whitespace-nowrap opacity-90">
                  Clic para ver significado
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedSaying && (
          <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-6 shadow-inner animate-fadeIn">
            {(() => {
              const saying = chileanSayings.find(s => s.id === selectedSaying);
              return saying ? (
                <div className="max-w-2xl mx-auto text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    &ldquo;{saying.phrase}&rdquo;
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-white/80 rounded-xl p-4 shadow">
                      <p className="text-gray-700">
                        <span className="font-semibold text-red-600">📖 Significado:</span> {saying.meaning}
                      </p>
                    </div>
                    {saying.example && (
                      <div className="bg-white/80 rounded-xl p-4 shadow">
                        <p className="text-gray-600 italic">
                          <span className="font-semibold text-blue-600">💬 Ejemplo:</span> &ldquo;{saying.example}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedSaying(null)}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    ✕ Cerrar
                  </button>
                </div>
              ) : null;
            })()}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-100 to-blue-100 rounded-full">
            <span className="text-2xl animate-spin-slow">🇨🇱</span>
            <p className="text-sm font-medium text-gray-700">
              ¡{chileanSayings.length} modismos que nos hacen únicos!
            </p>
            <span className="text-2xl animate-spin-slow" style={{ animationDirection: 'reverse' }}>🇨🇱</span>
          </div>
        </div>
      </div>
    </section>
  );
}