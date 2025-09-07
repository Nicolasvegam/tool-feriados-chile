import CountdownTimer from '@/app/components/CountdownTimer';
import ChileanSayings from '@/app/components/ChileanSayings';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuánto Falta para el 18 de Septiembre - Fiestas Patrias Chile | Feriados Chile',
  description: 'Descubre cuánto falta para el 18 de Septiembre y las Fiestas Patrias de Chile. Contador en tiempo real con tradiciones, comidas típicas y celebraciones chilenas.',
  keywords: '18 de septiembre, fiestas patrias, chile, contador, cuánto falta, dieciocho, empanadas, cueca, tradiciones chilenas',
  openGraph: {
    title: 'Cuánto Falta para el 18 de Septiembre - Fiestas Patrias Chile',
    description: 'Cuenta regresiva para las Fiestas Patrias con tradiciones y celebraciones chilenas.',
    url: 'https://www.feriadosenchile.com/cuanto-falta-18-septiembre',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/cuanto-falta-18-septiembre',
  },
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
          <p className="text-xl sm:text-2xl text-white drop-shadow-md mb-2">
            Fiestas Patrias 2024 - 18 de Septiembre
          </p>
          <p className="text-lg text-white/90 drop-shadow">
            Celebremos juntos las Fiestas Patrias de Chile
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-bold text-white text-center mb-4">
            Cuenta Regresiva para el 18 de Septiembre
          </h2>
          <CountdownTimer targetDate={targetDate} eventName="el 18 de Septiembre - Fiestas Patrias" />
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

        {/* Información sobre el 18 de Septiembre */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6 text-red-600">¿Qué son las Fiestas Patrias?</h2>
          <p className="text-gray-700 mb-4 text-lg">
            El 18 de Septiembre, conocido popularmente como las Fiestas Patrias o &ldquo;el Dieciocho&rdquo;, conmemora 
            la Primera Junta Nacional de Gobierno de Chile en 1810, marcando el inicio del proceso de 
            independencia. Es una de las celebraciones más importantes del país, donde los chilenos 
            celebran con música, bailes tradicionales y comida típica.
          </p>
          <p className="text-gray-700 text-lg">
            Durante las Fiestas Patrias, las fondas y ramadas se llenan de música, se baila la cueca 
            (baile nacional), y se disfruta de las tradiciones que hacen único al 18 de Septiembre en Chile.
          </p>
        </div>

        {/* Paya chilena */}
        <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-red-600">🎤 Paya Dieciochera para las Fiestas Patrias</h3>
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
        <div className="mt-12">
          <ChileanSayings />
        </div>
      </div>
    </div>
  );
}