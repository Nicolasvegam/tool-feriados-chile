import { Metadata } from 'next';
import Link from 'next/link';
import { AlertCircle, Calendar, Gavel, Users, HelpCircle } from 'lucide-react';
import { FAQJsonLd, BreadcrumbJsonLd } from '../components/JsonLd';

export const metadata: Metadata = {
  title: 'Feriados Irrenunciables en Chile - Guía Completa 2025',
  description: 'Todo sobre los feriados irrenunciables en Chile: qué son, cuáles son, derechos laborales, compensaciones y preguntas frecuentes.',
  keywords: 'feriados irrenunciables chile, feriados obligatorios, derechos laborales chile, compensación feriados, trabajadores comercio',
  openGraph: {
    title: 'Feriados Irrenunciables en Chile - Guía Completa',
    description: 'Conoce tus derechos: todo sobre los feriados irrenunciables en Chile',
    url: 'https://www.feriadosenchile.com/feriados-irrenunciables',
    type: 'article',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/feriados-irrenunciables',
  },
};

const irrenunciableHolidays = [
  { name: 'Año Nuevo', date: '1 de enero', icon: '🎊' },
  { name: 'Viernes Santo', date: 'Variable (marzo/abril)', icon: '✝️' },
  { name: 'Sábado Santo', date: 'Variable (marzo/abril)', icon: '✝️' },
  { name: 'Día del Trabajo', date: '1 de mayo', icon: '👷' },
  { name: 'Día de las Glorias Navales', date: '21 de mayo', icon: '⚓' },
  { name: 'Día de la Independencia', date: '18 de septiembre', icon: '🇨🇱' },
  { name: 'Día de las Glorias del Ejército', date: '19 de septiembre', icon: '🎖️' },
  { name: 'Navidad', date: '25 de diciembre', icon: '🎄' },
];

export default function FeriadosIrrenunciablesPage() {
  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.feriadosenchile.com' },
    { name: 'Feriados Irrenunciables', url: 'https://www.feriadosenchile.com/feriados-irrenunciables' }
  ];

  return (
    <>
      <FAQJsonLd />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <header className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Feriados Irrenunciables en Chile
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guía completa sobre los feriados obligatorios, derechos laborales y compensaciones 
              para trabajadores del comercio y servicios.
            </p>
          </header>

          {/* ¿Qué son los feriados irrenunciables? */}
          <section className="mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                ¿Qué son los feriados irrenunciables?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Los feriados irrenunciables son días festivos establecidos por ley en los cuales 
                los trabajadores del comercio tienen derecho a descanso obligatorio. Durante estos 
                días, los empleadores no pueden exigir que sus trabajadores asistan a sus labores, 
                salvo en casos excepcionales autorizados por la ley.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Esta normativa busca garantizar que todos los trabajadores puedan disfrutar de 
                ciertos días festivos importantes junto a sus familias, promoviendo el bienestar 
                laboral y el equilibrio entre trabajo y vida personal.
              </p>
            </div>
          </section>

          {/* Lista de feriados irrenunciables */}
          <section className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Los 8 Feriados Irrenunciables
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {irrenunciableHolidays.map((holiday) => (
                <div key={holiday.name} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{holiday.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-gray-800 mb-1">
                        {holiday.name}
                      </h3>
                      <p className="text-gray-600">{holiday.date}</p>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                      Irrenunciable
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Derechos y obligaciones */}
          <section className="mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Derechos y Obligaciones
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Para los trabajadores
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Derecho a descanso obligatorio en estos días</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Si trabajan, derecho a compensación adicional según lo establecido por ley</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>No pueden ser obligados a trabajar, salvo excepciones legales</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Gavel className="w-5 h-5 text-blue-600" />
                    Para los empleadores
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Deben respetar el descanso de sus trabajadores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Si requieren personal, deben pagar compensaciones adicionales</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Pueden solicitar autorización para funcionar en casos excepcionales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Compensaciones */}
          <section className="mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Compensaciones por Trabajar en Feriados Irrenunciables
              </h2>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg text-gray-800 mb-3">
                  Si trabajas en un feriado irrenunciable, tienes derecho a:
                </h3>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-semibold">
                      1
                    </span>
                    <span>El pago del día trabajado con el recargo legal correspondiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-semibold">
                      2
                    </span>
                    <span>Un día de descanso compensatorio dentro del mes siguiente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-semibold">
                      3
                    </span>
                    <span>O el pago adicional acordado con el empleador</span>
                  </li>
                </ol>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Las compensaciones específicas pueden variar según 
                  el contrato colectivo o individual. Consulta con tu empleador o sindicato para 
                  conocer los detalles exactos de tu situación.
                </p>
              </div>
            </div>
          </section>

          {/* Preguntas frecuentes */}
          <section className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Preguntas Frecuentes
            </h2>
            
            <div className="space-y-4">
              <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
                <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
                  <span>¿Todos los trabajadores tienen derecho a feriados irrenunciables?</span>
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </summary>
                <p className="mt-4 text-gray-600">
                  No, la ley de feriados irrenunciables aplica principalmente a trabajadores del 
                  comercio y servicios que atienden directamente al público. Otros sectores pueden 
                  tener regulaciones diferentes.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
                <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
                  <span>¿Qué pasa si mi empleador me obliga a trabajar?</span>
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </summary>
                <p className="mt-4 text-gray-600">
                  Si tu empleador te obliga a trabajar en un feriado irrenunciable sin justificación 
                  legal, puedes denunciar esta situación ante la Dirección del Trabajo. El empleador 
                  puede enfrentar multas y sanciones.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
                <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
                  <span>¿Los feriados irrenunciables se pueden cambiar de fecha?</span>
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </summary>
                <p className="mt-4 text-gray-600">
                  No, los feriados irrenunciables no pueden ser trasladados a otro día. Deben ser 
                  respetados en la fecha que corresponde según el calendario oficial.
                </p>
              </details>

              <details className="bg-white rounded-lg shadow p-6 cursor-pointer">
                <summary className="font-semibold text-lg text-gray-800 flex items-center justify-between">
                  <span>¿Qué comercios pueden abrir en feriados irrenunciables?</span>
                  <HelpCircle className="w-5 h-5 text-gray-400" />
                </summary>
                <p className="mt-4 text-gray-600">
                  Algunos establecimientos esenciales como farmacias de turno, estaciones de servicio, 
                  y ciertos locales de comida pueden operar con autorización especial. Sin embargo, 
                  deben cumplir con todas las compensaciones legales para sus trabajadores.
                </p>
              </details>
            </div>
          </section>

          {/* Call to action */}
          <section className="max-w-4xl mx-auto">
            <div className="bg-blue-600 text-white rounded-lg shadow-lg p-8 text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Planifica tu año con todos los feriados
              </h2>
              <p className="mb-6 text-blue-100">
                Consulta el calendario completo de feriados y optimiza tus vacaciones
              </p>
              <Link
                href="/2025"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Ver calendario 2025
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}