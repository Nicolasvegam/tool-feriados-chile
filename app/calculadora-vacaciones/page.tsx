import { Metadata } from 'next';
import VacationCalculator from '../components/VacationCalculator';
import { BreadcrumbJsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Calculadora de Vacaciones - Optimiza tus Días Libres | Feriados Chile',
  description: 'Calcula y optimiza tus vacaciones en Chile. Encuentra las mejores fechas para solicitar días libres y maximiza tu descanso aprovechando los feriados.',
  keywords: 'calculadora vacaciones, optimizar vacaciones chile, planificar vacaciones, días libres chile, calculadora días hábiles',
  openGraph: {
    title: 'Calculadora de Vacaciones Chile',
    description: 'Herramienta gratuita para optimizar tus vacaciones aprovechando los feriados en Chile',
    url: 'https://www.feriadosenchile.com/calculadora-vacaciones',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/calculadora-vacaciones',
  },
};

export default function CalculadoraVacacionesPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.feriadosenchile.com' },
    { name: 'Calculadora de Vacaciones', url: 'https://www.feriadosenchile.com/calculadora-vacaciones' }
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Calculadora de Vacaciones
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Optimiza tus días libres y descubre las mejores fechas para solicitar vacaciones 
              aprovechando los feriados en Chile.
            </p>
          </header>

          <VacationCalculator />

          <section className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ¿Cómo funciona la calculadora?
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  1. Selecciona el año
                </h3>
                <p className="text-gray-600">
                  Elige el año para el cual deseas planificar tus vacaciones. La calculadora 
                  considerará todos los feriados oficiales de ese año.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  2. Ingresa tus días disponibles
                </h3>
                <p className="text-gray-600">
                  Indica cuántos días de vacaciones tienes disponibles. El sistema calculará 
                  las mejores combinaciones para maximizar tu tiempo libre.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  3. Revisa las recomendaciones
                </h3>
                <p className="text-gray-600">
                  La calculadora te mostrará las fechas óptimas para solicitar vacaciones, 
                  indicando cuántos días libres totales obtendrás con cada opción.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  💡 Tip de optimización
                </h3>
                <p className="text-gray-600">
                  Busca períodos donde los feriados caen cerca de fines de semana. 
                  Solicitar días entre estos puede darte semanas completas de descanso 
                  usando pocos días de vacaciones.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Preguntas Frecuentes
            </h2>
            
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ¿Cuántos días de vacaciones tengo por ley en Chile?
                </h3>
                <p className="text-gray-600">
                  Los trabajadores con un año de servicio tienen derecho a 15 días hábiles 
                  de vacaciones al año. Estos días no incluyen sábados, domingos ni feriados.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ¿Los feriados cuentan como días de vacaciones?
                </h3>
                <p className="text-gray-600">
                  No, los feriados no se descuentan de tus días de vacaciones. Si un feriado 
                  cae durante tu período de vacaciones, ese día no se cuenta como día de vacaciones usado.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ¿Puedo acumular mis vacaciones?
                </h3>
                <p className="text-gray-600">
                  Sí, puedes acumular hasta dos períodos consecutivos de vacaciones, previo 
                  acuerdo con tu empleador. Sin embargo, el empleador debe otorgar al menos 
                  10 días hábiles continuos cada año.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}