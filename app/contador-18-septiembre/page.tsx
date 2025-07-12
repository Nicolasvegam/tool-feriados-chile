import CountdownTimer from '@/app/components/CountdownTimer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuánto falta para el 18 de Septiembre - Fiestas Patrias Chile',
  description: 'Descubre cuánto falta para las Fiestas Patrias de Chile. ¡Prepárate para celebrar con empanadas, chicha y cueca!',
};

export default function Contador18Septiembre() {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(currentYear, 8, 18); // Septiembre es el mes 8 (0-indexed)
  
  // Si ya pasó este año, usar el próximo año
  if (targetDate < new Date()) {
    targetDate.setFullYear(currentYear + 1);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-white to-blue-600 relative overflow-hidden">
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 text-6xl animate-bounce">🇨🇱</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse">🥟</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-bounce delay-300">🍷</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse delay-500">🎸</div>
        <div className="absolute top-1/2 left-10 text-4xl animate-bounce delay-700">🌟</div>
        <div className="absolute top-1/3 right-1/4 text-5xl animate-pulse delay-1000">🎊</div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-6xl font-black text-white drop-shadow-lg mb-4">
            ¡Viva Chile! 🇨🇱
          </h1>
          <p className="text-xl sm:text-2xl text-white drop-shadow-md">
            Fiestas Patrias 2024
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto mb-12">
          <CountdownTimer targetDate={targetDate} eventName="el 18 de Septiembre" />
        </div>

        {/* Sección de tradiciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-red-600 mb-3">🥟 Comidas Típicas</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Empanadas de pino</li>
              <li>• Anticuchos</li>
              <li>• Choripán</li>
              <li>• Pastel de choclo</li>
              <li>• Sopaipillas</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">🍷 Bebidas Tradicionales</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Chicha</li>
              <li>• Terremoto</li>
              <li>• Pisco sour</li>
              <li>• Vino tinto</li>
              <li>• Mote con huesillo</li>
            </ul>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <h3 className="text-2xl font-bold text-green-600 mb-3">🎸 Tradiciones</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Baile de cueca</li>
              <li>• Fondas y ramadas</li>
              <li>• Juegos típicos</li>
              <li>• Rodeo chileno</li>
              <li>• Volantines</li>
            </ul>
          </div>
        </div>

        {/* Paya chilena */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-red-600">🎤 Paya Dieciochera</h3>
          <div className="text-center italic text-gray-700 space-y-2">
            <p>&quot;En septiembre florece el campo,</p>
            <p>y Chile se viste de gala,</p>
            <p>con empanadas y vino tinto,</p>
            <p>la cueca ya se baila.&quot;</p>
            <br />
            <p>&quot;Que viva Chile señores,</p>
            <p>con su cielo azul brillante,</p>
            <p>con su cordillera altiva,</p>
            <p>y su pueblo pujante.&quot;</p>
          </div>
        </div>

        {/* Dichos chilenos */}
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-4">Dichos Chilenos</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              &quot;Al tiro&quot; 🏃‍♂️
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              &quot;Cachai?&quot; 🤔
            </span>
            <span className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-medium">
              &quot;La raja&quot; 👍
            </span>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              &quot;Bacán&quot; 😎
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              &quot;Po&apos;&quot; 💬
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}