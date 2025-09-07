import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Políticas de Privacidad | Feriados Chile',
  description: 'Conoce cómo protegemos tu privacidad y manejamos tus datos en Feriados en Chile. Tu privacidad es nuestra prioridad.',
  keywords: 'políticas de privacidad, protección datos, privacidad, manejo información, cookies, feriados chile',
  openGraph: {
    title: 'Políticas de Privacidad | Feriados en Chile',
    description: 'Políticas de privacidad y manejo de datos en Feriados en Chile.',
    url: 'https://www.feriadosenchile.com/politicas-de-privacidad',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/politicas-de-privacidad',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticasDePrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Políticas de Privacidad
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <section className="prose prose-gray max-w-none">
              <p className="text-gray-600 text-sm mb-6">
                Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Introducción
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En <strong>Feriados en Chile</strong> (&ldquo;nosotros&rdquo;, &ldquo;nuestro&rdquo; o &ldquo;el Sitio&rdquo;), respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web feriadosenchile.com.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Al utilizar nuestro Sitio, usted acepta las prácticas descritas en esta Política de Privacidad.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Información que Recopilamos
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">2.1 Información de Uso</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cuando visita nuestro Sitio, podemos recopilar automáticamente cierta información sobre su dispositivo y su interacción con el Sitio, incluyendo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Dirección IP</li>
                  <li>Tipo de navegador y versión</li>
                  <li>Páginas visitadas y tiempo de permanencia</li>
                  <li>Fecha y hora de acceso</li>
                  <li>Sistema operativo</li>
                  <li>Información del dispositivo</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-3">2.2 Información que Usted Proporciona</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Cuando se comunica con nosotros a través de nuestro correo de contacto, podemos recopilar:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Nombre</li>
                  <li>Dirección de correo electrónico</li>
                  <li>Contenido del mensaje</li>
                  <li>Cualquier otra información que decida compartir</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Cómo Usamos su Información
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Proporcionar y mantener nuestro servicio</li>
                  <li>Mejorar y personalizar la experiencia del usuario</li>
                  <li>Analizar el uso del Sitio para mejorar nuestro contenido</li>
                  <li>Responder a sus consultas y solicitudes</li>
                  <li>Enviar actualizaciones importantes sobre el servicio (si se ha suscrito)</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Cookies y Tecnologías Similares
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Mantener sus preferencias</li>
                  <li>Entender cómo utiliza nuestro Sitio</li>
                  <li>Mejorar su experiencia de navegación</li>
                  <li>Analizar el tráfico del sitio</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Puede configurar su navegador para rechazar todas las cookies o para indicar cuándo se envía una cookie. Sin embargo, si no acepta cookies, es posible que no pueda usar algunas partes de nuestro Sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Compartir Información
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  No vendemos, comercializamos ni transferimos su información personal a terceros. Podemos compartir información en las siguientes circunstancias:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Con proveedores de servicios que nos ayudan a operar nuestro Sitio</li>
                  <li>Para cumplir con la ley o responder a procesos legales</li>
                  <li>Para proteger nuestros derechos, propiedad o seguridad</li>
                  <li>Con su consentimiento explícito</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Seguridad de los Datos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Implementamos medidas de seguridad apropiadas para proteger su información contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Encriptación de datos en tránsito</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de nuestros sistemas</li>
                  <li>Actualizaciones de seguridad periódicas</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro, por lo que no podemos garantizar su seguridad absoluta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Sus Derechos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted tiene derecho a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Acceder a la información personal que tenemos sobre usted</li>
                  <li>Solicitar la corrección de información inexacta</li>
                  <li>Solicitar la eliminación de su información personal</li>
                  <li>Oponerse al procesamiento de sus datos</li>
                  <li>Solicitar la portabilidad de sus datos</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Para ejercer estos derechos, contáctenos en <a href="mailto:contacto@feriadosenchile.com" className="text-blue-600 hover:text-blue-800">contacto@feriadosenchile.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Retención de Datos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más largo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Privacidad de los Niños
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestro Sitio no está dirigido a personas menores de 13 años. No recopilamos conscientemente información personal de niños menores de 13 años. Si descubrimos que hemos recopilado información personal de un niño menor de 13 años, eliminaremos esa información de inmediato.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Enlaces a Otros Sitios
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestro Sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos que lea las políticas de privacidad de cada sitio web que visite.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Cambios en Esta Política
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Podemos actualizar nuestra Política de Privacidad periódicamente. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de &ldquo;Última actualización&rdquo;.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Se recomienda revisar esta Política de Privacidad periódicamente para estar informado de cualquier cambio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Contacto
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si tiene preguntas o inquietudes sobre esta Política de Privacidad o nuestras prácticas de privacidad, contáctenos en:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:contacto@feriadosenchile.com" className="text-blue-600 hover:text-blue-800">contacto@feriadosenchile.com</a>
                  </p>
                  <p className="text-gray-700 mt-2">
                    <strong>Sitio web:</strong> <a href="https://feriadosenchile.com" className="text-blue-600 hover:text-blue-800">feriadosenchile.com</a>
                  </p>
                </div>
              </section>

              <section className="bg-blue-50 rounded-lg p-6 mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Su Privacidad es Importante
                </h3>
                <p className="text-gray-600">
                  En Feriados en Chile, valoramos la confianza que deposita en nosotros y nos comprometemos a proteger su privacidad. Si tiene alguna pregunta sobre cómo manejamos sus datos, no dude en contactarnos.
                </p>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}