import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Feriados Chile',
  description: 'Conoce a Feriados en Chile, tu fuente confiable para información actualizada sobre días festivos, calculadora de vacaciones y herramientas para planificar tu tiempo libre.',
  keywords: 'quienes somos, feriados chile, mision, vision, herramientas feriados, calculadora vacaciones',
  openGraph: {
    title: 'Quiénes Somos | Feriados en Chile',
    description: 'Conoce a Feriados en Chile, tu fuente confiable para información actualizada sobre días festivos.',
    url: 'https://www.feriadosenchile.com/quienes-somos',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/quienes-somos',
  },
}

export default function QuienesSomos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Quiénes Somos
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Nuestra Misión
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En <strong>Feriados en Chile</strong>, nos dedicamos a proporcionar información precisa, actualizada y confiable sobre todos los días festivos en Chile. Nuestro objetivo es ayudarte a planificar mejor tu tiempo libre, vacaciones y actividades familiares.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Sabemos lo importante que es conocer con anticipación los días feriados para organizar viajes, reuniones familiares o simplemente disfrutar de un merecido descanso. Por eso, hemos creado esta plataforma integral que no solo te informa sobre los feriados, sino que también te ofrece herramientas útiles para optimizar tu tiempo libre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ¿Qué Ofrecemos?
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Calendario Actualizado:</strong> Información completa sobre todos los feriados nacionales, regionales e irrenunciables.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Calculadora de Vacaciones:</strong> Herramienta inteligente para planificar tus días libres de manera óptima.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Cuentas Regresivas:</strong> Para los feriados más esperados del año.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Información Legal:</strong> Detalles sobre las leyes que rigen cada feriado.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span><strong>Optimizador de Puentes:</strong> Sugerencias para maximizar tus días de descanso.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Nuestro Compromiso
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nos comprometemos a mantener toda la información actualizada y verificada a través de fuentes oficiales. Trabajamos constantemente para mejorar nuestros servicios y agregar nuevas funcionalidades que faciliten la planificación de tu tiempo libre.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>Feriados en Chile</strong> es más que un calendario: es tu compañero confiable para aprovechar al máximo cada día festivo y crear momentos inolvidables con quienes más quieres.
              </p>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Contenido Confiable
              </h2>
              <p className="text-gray-600 leading-relaxed">
                En línea con los principios de Google sobre contenido útil y confiable (people-first content), nos enfocamos en crear información que realmente ayude a las personas. Cada artículo, herramienta y recurso está diseñado pensando en las necesidades reales de nuestros usuarios chilenos.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}