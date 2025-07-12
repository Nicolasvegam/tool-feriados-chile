'use client';

import CountdownTimer from '@/app/components/CountdownTimer';
import { Metadata } from 'next';

// Metadata must be removed from Client Components

export default function ContadorNavidad() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 11, 25); // Diciembre es el mes 11 (0-indexed)
  
  // Si ya pasó este año, usar el próximo año
  if (targetDate < new Date()) {
    targetDate.setFullYear(currentYear + 1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-700 via-green-800 to-red-900 relative overflow-hidden">
      {/* Nieve cayendo */}
      <div className="absolute inset-0">
        <div className="snow"></div>
        <div className="snow"></div>
        <div className="snow"></div>
      </div>

      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🎅</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce">🎄</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-300">🎁</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce delay-500">⭐</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-pulse delay-700">🔔</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-bounce delay-1000">❄️</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl animate-pulse">🦌</div>
        <div className="absolute top-1/4 left-1/2 text-5xl animate-bounce delay-200">🎄</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg mb-4">
            🎄 ¡Feliz Navidad! 🎅
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-300 drop-shadow-md">
            Ho Ho Ho! La magia está en el aire
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto mb-12 border-4 border-white/30">
          <CountdownTimer targetDate={targetDate} eventName="la Navidad" />
        </div>

        {/* Carta a Santa */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-red-700 mb-6 text-center">📜 Carta a Santa Claus</h3>
          <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
            <p className="text-gray-700 mb-4">Querido Santa:</p>
            <p className="text-gray-600 italic mb-4">
              Este año me he portado muy bien. He ayudado en casa, he compartido con mis amigos 
              y he sido amable con todos. Espero que puedas visitarnos en Chile esta Navidad.
            </p>
            <p className="text-gray-700">Con cariño desde Chile 🇨🇱</p>
          </div>
        </div>

        {/* Tradiciones navideñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-green-700 mb-4">🎄 Tradiciones Navideñas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Decorar el árbol de Navidad</li>
              <li>• Cena familiar del 24</li>
              <li>• Intercambio de regalos</li>
              <li>• Villancicos navideños</li>
              <li>• Pan de Pascua y cola de mono</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-red-700 mb-4">🎁 Lista de Regalos</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Juguetes para los niños</li>
              <li>• Chocolates y dulces</li>
              <li>• Ropa nueva</li>
              <li>• Libros y juegos</li>
              <li>• Mucho amor y alegría</li>
            </ul>
          </div>
        </div>

        {/* Villancico */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-red-700">🎵 Villancico Chileno</h3>
          <div className="text-center italic text-gray-700 space-y-2">
            <p>&quot;Noche de paz, noche de amor,</p>
            <p>todo duerme en derredor.</p>
            <p>En los campos de Belén,</p>
            <p>los pastores no duermen también.&quot;</p>
            <br />
            <p>&quot;Vamos, vamos pastorcillos,</p>
            <p>vamos, vamos a Belén,</p>
            <p>que en Chile también celebramos,</p>
            <p>el nacimiento del bien.&quot;</p>
          </div>
        </div>

        {/* Mensaje final */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-white drop-shadow-lg font-bold">
            ¡Que la magia de la Navidad llene tu hogar de alegría! 🌟
          </p>
        </div>
      </div>

      <style jsx>{`
        .snow {
          position: absolute;
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          animation: snowfall linear infinite;
        }
        
        .snow:nth-child(1) {
          left: 10%;
          animation-duration: 10s;
          animation-delay: 0s;
        }
        
        .snow:nth-child(2) {
          left: 50%;
          animation-duration: 15s;
          animation-delay: 3s;
        }
        
        .snow:nth-child(3) {
          left: 80%;
          animation-duration: 12s;
          animation-delay: 7s;
        }
        
        @keyframes snowfall {
          from {
            transform: translateY(-100vh);
          }
          to {
            transform: translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}