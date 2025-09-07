import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Feriados Chile',
  description: 'Contáctanos para preguntas, sugerencias o comentarios sobre Feriados en Chile. Estamos aquí para ayudarte.',
  keywords: 'contacto, feriados chile, preguntas, sugerencias, ayuda, soporte, correo electrónico',
  openGraph: {
    title: 'Contacto | Feriados en Chile',
    description: 'Contáctanos para preguntas o sugerencias sobre Feriados en Chile.',
    url: 'https://www.feriadosenchile.com/contacto',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/contacto',
  },
}

export default function Contacto() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Contacto
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="max-w-2xl mx-auto space-y-8">
              <section className="text-center">
                <p className="text-lg text-gray-600 mb-8">
                  ¿Tienes preguntas, sugerencias o comentarios? Nos encantaría escucharte.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Correo Electrónico
                  </h2>
                  <a 
                    href="mailto:contacto@feriadosenchile.com" 
                    className="text-xl text-blue-600 hover:text-blue-800 font-medium"
                  >
                    contacto@feriadosenchile.com
                  </a>
                </div>
              </section>

              <section className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                  ¿En qué podemos ayudarte?
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Preguntas Frecuentes
                    </h3>
                    <p className="text-gray-600">
                      Consultas sobre feriados, uso de nuestras herramientas o información general.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Reportar Errores
                    </h3>
                    <p className="text-gray-600">
                      Si encuentras algún error en la información, háznoslo saber para corregirlo.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Sugerencias
                    </h3>
                    <p className="text-gray-600">
                      Tus ideas para mejorar nuestro sitio son siempre bienvenidas.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Colaboraciones
                    </h3>
                    <p className="text-gray-600">
                      Propuestas de colaboración o partnership empresarial.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Tiempo de Respuesta
                </h3>
                <p className="text-gray-600">
                  Nos esforzamos por responder todos los correos dentro de 24-48 horas hábiles. 
                  Tu opinión es muy importante para nosotros.
                </p>
              </section>

              <section className="text-center pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  También puedes seguirnos en nuestras redes sociales para estar al día con las últimas novedades sobre feriados en Chile.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}