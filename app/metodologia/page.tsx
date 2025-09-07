import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Metodología y Fuentes | Feriados Chile',
  description: 'Conoce las fuentes oficiales y la metodología que utilizamos para mantener actualizada la información sobre feriados en Chile.',
  keywords: 'metodología, fuentes oficiales, bcn, dirección trabajo, gobierno chile, verificación información, feriados chile',
  openGraph: {
    title: 'Metodología y Fuentes | Feriados en Chile',
    description: 'Fuentes oficiales y metodología para información sobre feriados en Chile.',
    url: 'https://www.feriadosenchile.com/metodologia',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/metodologia',
  },
}

export default function Metodologia() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Metodología y Fuentes
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Nuestro Proceso de Verificación
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                En <strong>Feriados en Chile</strong>, nos tomamos muy en serio la precisión de la información. Nuestro proceso de verificación incluye:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
                <li>Consulta regular de fuentes gubernamentales oficiales</li>
                <li>Verificación cruzada con múltiples fuentes</li>
                <li>Actualización inmediata ante cambios legislativos</li>
                <li>Revisión periódica de toda la información publicada</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Fuentes Oficiales
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Toda nuestra información proviene exclusivamente de fuentes oficiales del Gobierno de Chile:
              </p>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Biblioteca del Congreso Nacional (BCN)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Principal fuente para leyes y normativas relacionadas con feriados nacionales y regionales.
                  </p>
                  <Link 
                    href="https://www.bcn.cl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visitar BCN
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Dirección del Trabajo (DT)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Fuente autorizada para información sobre derechos laborales, feriados irrenunciables y normativas del trabajo.
                  </p>
                  <Link 
                    href="https://www.dt.gob.cl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visitar DT
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Gobierno de Chile (Gob.cl)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Portal oficial del Gobierno para anuncios y comunicados sobre nuevos feriados o modificaciones.
                  </p>
                  <Link 
                    href="https://www.gob.cl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Visitar Gob.cl
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Actualización de Datos
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nuestro equipo revisa constantemente las fuentes oficiales para mantener la información actualizada. Los cambios se implementan de manera inmediata cuando:
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Se promulga una nueva ley que afecta los feriados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Se establecen feriados regionales o especiales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Hay modificaciones en feriados irrenunciables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span>Se realizan cambios en la legislación laboral relacionada</span>
                </li>
              </ul>
            </section>

            <section className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Compromiso con la Transparencia
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Creemos en la transparencia total sobre nuestras fuentes y métodos. Si tienes alguna pregunta sobre cómo obtenemos o verificamos nuestra información, no dudes en <Link href="/contacto" className="text-blue-600 hover:text-blue-800 font-medium">contactarnos</Link>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}