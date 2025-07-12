'use client';

import CountdownTimer from '@/app/components/CountdownTimer';
import { Metadata } from 'next';

// Metadata must be removed from Client Components

export default function ContadorAnoNuevo() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear + 1, 0, 1); // 1 de enero del próximo año
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Fuegos artificiales animados */}
      <div className="absolute inset-0">
        <div className="firework"></div>
        <div className="firework firework-2"></div>
        <div className="firework firework-3"></div>
      </div>

      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🎆</div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce">🥂</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-300">🎉</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-bounce delay-500">✨</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-pulse delay-700">🍾</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-bounce delay-1000">🎊</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl animate-pulse">🌟</div>
        <div className="absolute top-1/4 left-1/2 text-5xl animate-bounce delay-200">🎇</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg mb-4">
            ¡FELIZ AÑO NUEVO {currentYear + 1}!
          </h1>
          <p className="text-xl sm:text-2xl text-yellow-300 drop-shadow-md">
            Que todos tus sueños se hagan realidad ✨
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto mb-12 border-4 border-yellow-400/50">
          <CountdownTimer targetDate={targetDate} eventName="el Año Nuevo" />
        </div>

        {/* Rituales de Año Nuevo en Chile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-purple-700/80 to-blue-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform border-2 border-yellow-400">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🍇 Rituales de la Suerte</h3>
            <ul className="space-y-2 text-white">
              <li>• 12 uvas a medianoche</li>
              <li>• Ropa interior amarilla</li>
              <li>• Lentejas en los bolsillos</li>
              <li>• Maleta para viajar</li>
              <li>• Abrazo de medianoche</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-700/80 to-purple-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform border-2 border-pink-400">
            <h3 className="text-2xl font-bold text-pink-300 mb-4">🎊 Celebraciones</h3>
            <ul className="space-y-2 text-white">
              <li>• Fuegos artificiales</li>
              <li>• Brindis con champagne</li>
              <li>• Fiesta hasta el amanecer</li>
              <li>• Cena familiar</li>
              <li>• Música y baile</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-pink-700/80 to-orange-700/80 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform border-2 border-orange-400">
            <h3 className="text-2xl font-bold text-orange-300 mb-4">🌅 Panoramas en Chile</h3>
            <ul className="space-y-2 text-white">
              <li>• Fuegos de Valparaíso</li>
              <li>• Fiesta en la playa</li>
              <li>• Torre Entel iluminada</li>
              <li>• Celebración en plaza</li>
              <li>• Año nuevo en la montaña</li>
            </ul>
          </div>
        </div>

        {/* Propósitos de Año Nuevo */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            📝 Mis Propósitos para {currentYear + 1}
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
              <span className="text-2xl">💪</span>
              <span className="text-gray-700">Hacer más ejercicio y cuidar mi salud</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
              <span className="text-2xl">📚</span>
              <span className="text-gray-700">Aprender algo nuevo cada día</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-100 to-orange-100 rounded-lg">
              <span className="text-2xl">❤️</span>
              <span className="text-gray-700">Pasar más tiempo con familia y amigos</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-yellow-100 to-pink-100 rounded-lg">
              <span className="text-2xl">🌍</span>
              <span className="text-gray-700">Viajar y conocer nuevos lugares</span>
            </div>
          </div>
        </div>

        {/* Mensaje de buenos deseos */}
        <div className="mt-12 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto border-2 border-yellow-400">
          <h3 className="text-2xl font-bold text-center mb-6 text-yellow-300">🥂 Brindis de Año Nuevo</h3>
          <div className="text-center text-white space-y-2">
            <p className="text-lg italic">
              &quot;Que este nuevo año traiga salud, amor y prosperidad.
            </p>
            <p className="text-lg italic">
              Que cada día sea una nueva oportunidad para ser feliz.
            </p>
            <p className="text-lg italic">
              ¡Salud por los sueños cumplidos y los que están por venir!&quot;
            </p>
            <p className="text-2xl mt-4">🥂 ¡SALUD! 🥂</p>
          </div>
        </div>

        {/* Cuenta regresiva final */}
        <div className="mt-12 text-center">
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 font-bold animate-pulse">
            ¡Prepárate para el mejor año de tu vida! 🎆
          </p>
        </div>
      </div>

      <style jsx>{`
        .firework {
          position: absolute;
          width: 4px;
          height: 4px;
          background: white;
          border-radius: 50%;
        }
        
        .firework::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 80px;
          background: linear-gradient(to top, transparent, yellow);
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .firework {
          animation: firework-launch 3s ease-out infinite;
        }
        
        .firework-2 {
          left: 70%;
          animation-delay: 1s;
        }
        
        .firework-3 {
          left: 30%;
          animation-delay: 2s;
        }
        
        @keyframes firework-launch {
          0% {
            bottom: 0;
            opacity: 1;
          }
          50% {
            bottom: 70vh;
            opacity: 1;
          }
          51% {
            opacity: 0;
          }
          100% {
            bottom: 70vh;
            opacity: 0;
          }
        }
        
        .firework::after {
          content: '✨';
          position: absolute;
          font-size: 60px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) scale(0);
          animation: explode 3s ease-out infinite;
        }
        
        @keyframes explode {
          0%, 50% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
          51% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          60% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}