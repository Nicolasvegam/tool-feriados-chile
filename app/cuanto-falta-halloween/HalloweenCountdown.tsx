'use client';

import CountdownTimer from '@/app/components/CountdownTimer';

export default function HalloweenCountdown() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 9, 31); // Octubre es el mes 9 (0-indexed)
  
  // Si ya pasó este año, usar el próximo año
  if (targetDate < new Date()) {
    targetDate.setFullYear(currentYear + 1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-orange-900 relative overflow-hidden">
      {/* Murciélagos volando */}
      <div className="absolute inset-0">
        <div className="bat"></div>
        <div className="bat bat-2"></div>
        <div className="bat bat-3"></div>
      </div>

      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🎃</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse">👻</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-300">🕷️</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-500">💀</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce delay-700">🦇</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-pulse delay-1000">🕸️</div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl animate-bounce">🧙‍♀️</div>
        <div className="absolute top-1/4 left-1/2 text-5xl animate-pulse delay-200">⚰️</div>
      </div>

      {/* Luna llena */}
      <div className="absolute top-20 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-80 shadow-2xl"></div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-orange-500 drop-shadow-lg mb-4 horror-text">
            🎃 HALLOWEEN 🎃
          </h1>
          <p className="text-xl sm:text-2xl text-purple-300 drop-shadow-md">
            La noche más terrorífica se acerca...
          </p>
        </div>

        <div className="bg-black/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto mb-12 border-4 border-orange-500/50">
          <div className="halloween-timer">
            <CountdownTimer targetDate={targetDate} eventName="Halloween" />
          </div>
        </div>

        {/* Historia de terror */}
        <div className="bg-purple-900/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto mb-12 border-2 border-orange-500">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 text-center horror-text">👻 La Leyenda</h3>
          <div className="text-purple-100 space-y-4">
            <p>
              Cuentan que cada 31 de octubre, cuando la luna está llena y el viento sopla frío,
              las almas perdidas vagan por las calles buscando dulces...
            </p>
            <p className="italic">
              &quot;Dulce o truco&quot;, susurran en la oscuridad, mientras las calabazas iluminadas
              son la única protección contra los espíritus traviesos.
            </p>
          </div>
        </div>

        {/* Actividades de Halloween */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-orange-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform border-2 border-purple-600">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎃 Tradiciones de Halloween</h3>
            <ul className="space-y-2 text-orange-100">
              <li>• Tallar calabazas terroríficas</li>
              <li>• Dulce o truco</li>
              <li>• Disfraces espeluznantes</li>
              <li>• Decorar la casa embrujada</li>
              <li>• Contar historias de terror</li>
            </ul>
          </div>

          <div className="bg-purple-800/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform border-2 border-orange-600">
            <h3 className="text-2xl font-bold text-orange-300 mb-4">👻 Criaturas de la Noche</h3>
            <ul className="space-y-2 text-purple-100">
              <li>• Vampiros sedientos</li>
              <li>• Zombies hambrientos</li>
              <li>• Brujas voladoras</li>
              <li>• Fantasmas errantes</li>
              <li>• Hombres lobo aulladores</li>
            </ul>
          </div>
        </div>

        {/* Conjuro de Halloween */}
        <div className="mt-12 bg-black/80 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto border-2 border-red-600">
          <h3 className="text-2xl font-bold text-center mb-6 text-red-500 horror-text">🧙‍♀️ Conjuro de Protección</h3>
          <div className="text-center italic text-green-400 space-y-2 font-mono">
            <p>&quot;En esta noche de Halloween,</p>
            <p>cuando las brujas vuelan sin fin,</p>
            <p>que los dulces nos protejan bien,</p>
            <p>y los sustos sean de mentir.&quot;</p>
            <br />
            <p>&quot;Calabazas iluminadas,</p>
            <p>espíritus alejad,</p>
            <p>que esta noche embrujada,</p>
            <p>sea de pura felicidad.&quot;</p>
          </div>
        </div>

        {/* Advertencia final */}
        <div className="mt-12 text-center">
          <p className="text-2xl text-red-500 drop-shadow-lg font-bold animate-pulse">
            ⚠️ ¡CUIDADO! Los monstruos acechan en la oscuridad... ⚠️
          </p>
        </div>
      </div>

      <style jsx>{`
        .horror-text {
          text-shadow: 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6);
        }
        
        .bat {
          position: absolute;
          width: 30px;
          height: 30px;
          background: black;
          animation: fly 15s linear infinite;
        }
        
        .bat::before,
        .bat::after {
          content: '';
          position: absolute;
          width: 15px;
          height: 10px;
          background: black;
          border-radius: 50% 50% 0 0;
        }
        
        .bat::before {
          left: -10px;
          transform: rotate(-30deg);
        }
        
        .bat::after {
          right: -10px;
          transform: rotate(30deg);
        }
        
        .bat-2 {
          animation-delay: 5s;
          top: 20%;
        }
        
        .bat-3 {
          animation-delay: 10s;
          top: 40%;
        }
        
        @keyframes fly {
          from {
            left: -50px;
          }
          to {
            left: 100%;
          }
        }
        
        .halloween-timer :global(.text-blue-600) {
          color: #f97316 !important;
        }
      `}</style>
    </div>
  );
}