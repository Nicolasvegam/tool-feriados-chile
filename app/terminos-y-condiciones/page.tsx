import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Feriados Chile',
  description: 'Términos y condiciones de uso del sitio web Feriados en Chile. Lee nuestras políticas antes de usar nuestros servicios.',
  keywords: 'términos y condiciones, políticas uso, feriados chile, condiciones servicio, términos legales',
  openGraph: {
    title: 'Términos y Condiciones | Feriados en Chile',
    description: 'Términos y condiciones de uso del sitio web Feriados en Chile.',
    url: 'https://www.feriadosenchile.com/terminos-y-condiciones',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/terminos-y-condiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TerminosYCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Términos y Condiciones
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
            <section className="prose prose-gray max-w-none">
              <p className="text-gray-600 text-sm mb-6">
                Última actualización: {new Date().toLocaleDateString('es-CL', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  1. Aceptación de los Términos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Al acceder y utilizar el sitio web <strong>feriadosenchile.com</strong> (&ldquo;el Sitio&rdquo;), usted acepta cumplir y estar sujeto a estos Términos y Condiciones de Uso. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestro Sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  2. Descripción del Servicio
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Feriados en Chile proporciona información sobre días festivos, feriados nacionales y regionales en Chile, así como herramientas relacionadas como calculadoras de vacaciones y optimizadores de días libres. El servicio es de carácter informativo y está sujeto a cambios sin previo aviso.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  3. Uso del Sitio
                </h2>
                <h3 className="text-xl font-semibold text-gray-700 mb-3">3.1 Uso Permitido</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted puede utilizar el Sitio únicamente para fines legales y de acuerdo con estos Términos. Se compromete a:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>No utilizar el Sitio de manera que pueda dañar, deshabilitar o perjudicar el servicio</li>
                  <li>No intentar acceder sin autorización a ninguna parte del Sitio</li>
                  <li>No utilizar el Sitio para transmitir material publicitario no solicitado</li>
                  <li>No recopilar información personal de otros usuarios</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-700 mb-3">3.2 Uso Prohibido</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Está expresamente prohibido:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Usar el Sitio para cualquier propósito ilegal o no autorizado</li>
                  <li>Reproducir, duplicar, copiar o revender cualquier parte del Sitio sin autorización</li>
                  <li>Utilizar sistemas automatizados para acceder al Sitio sin permiso previo</li>
                  <li>Interferir con el funcionamiento adecuado del Sitio</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  4. Propiedad Intelectual
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Todo el contenido presente en el Sitio, incluyendo pero no limitado a texto, gráficos, logos, iconos, imágenes y software, es propiedad de Feriados en Chile o sus proveedores de contenido y está protegido por las leyes de propiedad intelectual aplicables.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Se otorga una licencia limitada para acceder y hacer uso personal del Sitio. Esta licencia no incluye:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Modificación o copia del material del Sitio</li>
                  <li>Uso del material para fines comerciales sin autorización</li>
                  <li>Eliminación de avisos de derechos de autor</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  5. Exactitud de la Información
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Aunque nos esforzamos por proporcionar información precisa y actualizada sobre los feriados en Chile, no garantizamos la exactitud, integridad o actualidad de la información presentada. La información se proporciona &ldquo;tal cual&rdquo; y puede estar sujeta a cambios sin previo aviso.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Recomendamos verificar la información crítica con fuentes oficiales antes de tomar decisiones importantes basadas en el contenido del Sitio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  6. Enlaces a Terceros
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  El Sitio puede contener enlaces a sitios web de terceros. Estos enlaces se proporcionan únicamente para su conveniencia. No tenemos control sobre el contenido de estos sitios y no asumimos responsabilidad por ellos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  7. Limitación de Responsabilidad
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  En ningún caso Feriados en Chile, sus directores, empleados o afiliados serán responsables por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar el Sitio.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Esto incluye, pero no se limita a, daños por pérdida de beneficios, interrupción del negocio, pérdida de información o cualquier otra pérdida pecuniaria.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  8. Indemnización
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Usted acepta indemnizar y mantener indemne a Feriados en Chile de cualquier reclamo, daño, obligación, pérdida, responsabilidad, costo o deuda, y gastos (incluyendo honorarios de abogados) que surjan de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4 ml-4">
                  <li>Su uso del Sitio</li>
                  <li>Su violación de estos Términos</li>
                  <li>Su violación de cualquier derecho de terceros</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  9. Privacidad
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Su uso del Sitio también está regido por nuestra <Link href="/politicas-de-privacidad" className="text-blue-600 hover:text-blue-800 font-medium">Política de Privacidad</Link>. 
                  Al utilizar el Sitio, usted consiente las prácticas descritas en dicha política.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  10. Modificaciones
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. 
                  Las modificaciones entrarán en vigor inmediatamente después de su publicación en el Sitio. 
                  Su uso continuado del Sitio después de dichos cambios constituye su aceptación de los nuevos términos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  11. Ley Aplicable
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la República de Chile, 
                  sin dar efecto a ningún principio de conflictos de leyes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  12. Contacto
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en:
                </p>
                <div className="bg-gray-50 rounded-lg p-4 mt-4">
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href="mailto:contacto@feriadosenchile.com" className="text-blue-600 hover:text-blue-800">contacto@feriadosenchile.com</a>
                  </p>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}