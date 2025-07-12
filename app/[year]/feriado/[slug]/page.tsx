import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ChevronLeft, MapPin, Gavel, AlertCircle } from 'lucide-react';
import { formatDateToSpanish } from '@/app/utils/dateUtils';
import { getHolidaysByYear, getHolidayBySlug } from '@/app/utils/dataUtils';

const VALID_YEARS = ['2024', '2025', '2026', '2027'];

export async function generateStaticParams() {
  const params = [];
  
  for (const year of VALID_YEARS) {
    const holidays = await getHolidaysByYear(year);
    for (const holiday of holidays) {
      params.push({
        year,
        slug: holiday.slug,
      });
    }
  }
  
  return params;
}

export const revalidate = 86400; // Revalidar cada 24 horas

export async function generateMetadata({ params }: { params: { year: string; slug: string } }): Promise<Metadata> {
  const holiday = await getHolidayBySlug(params.year, params.slug);
  
  if (!holiday) {
    return {};
  }

  return {
    title: `${holiday.name} ${params.year} - Feriado en Chile`,
    description: `${holiday.name} se celebra el ${formatDateToSpanish(holiday.date)}. ${holiday.isIrrenunciable ? 'Es un feriado irrenunciable.' : ''} Conoce más sobre este día festivo ${holiday.type.toLowerCase()} en Chile.`,
    keywords: `${holiday.name}, feriado ${params.year}, ${formatDateToSpanish(holiday.date)}, feriados chile, ${holiday.type.toLowerCase()}`,
    openGraph: {
      title: `${holiday.name} ${params.year}`,
      description: `Información completa sobre ${holiday.name} - ${formatDateToSpanish(holiday.date)}`,
      url: `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`,
      siteName: 'Feriados en Chile',
      locale: 'es_CL',
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title: `${holiday.name} ${params.year}`,
      description: `${formatDateToSpanish(holiday.date)} - Feriado ${holiday.type}`,
    },
    alternates: {
      canonical: `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`,
    },
  };
}

export default async function HolidayPage({ params }: { params: { year: string; slug: string } }) {
  if (!VALID_YEARS.includes(params.year)) {
    notFound();
  }

  const holiday = await getHolidayBySlug(params.year, params.slug);
  
  if (!holiday) {
    notFound();
  }

  const holidayDate = new Date(holiday.date);
  const dayOfWeek = holidayDate.toLocaleDateString('es-CL', { weekday: 'long' });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: holiday.name,
    description: `${holiday.name} - Feriado ${holiday.type} en Chile`,
    startDate: holiday.date,
    endDate: holiday.date,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Country',
      name: 'Chile',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CL'
      }
    },
    organizer: {
      '@type': 'GovernmentOrganization',
      name: 'Gobierno de Chile'
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://www.feriadosenchile.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: `Feriados ${params.year}`,
        item: `https://www.feriadosenchile.com/${params.year}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: holiday.name,
        item: `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700">
                  Inicio
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href={`/${params.year}`} className="text-gray-500 hover:text-gray-700">
                  {params.year}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 font-medium">{holiday.name}</li>
            </ol>
          </nav>

          {/* Back button */}
          <Link
            href={`/${params.year}`}
            className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver a feriados {params.year}
          </Link>

          {/* Main content */}
          <article className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{holiday.name}</h1>
              
              <div className="flex flex-wrap gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="capitalize">{dayOfWeek}, {formatDateToSpanish(holiday.date)}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Feriado {holiday.type}
                  </span>
                </div>

                {holiday.isIrrenunciable && (
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-600 font-medium">Irrenunciable</span>
                  </div>
                )}
              </div>
            </header>

            <section className="space-y-6">
              {/* Descripción */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">Acerca de este feriado</h2>
                <p className="text-gray-600 leading-relaxed">
                  {holiday.name} es un feriado {holiday.type.toLowerCase()} que se celebra en Chile 
                  el {formatDateToSpanish(holiday.date)} de {params.year}. 
                  {holiday.isIrrenunciable && ' Este es un feriado irrenunciable, lo que significa que los trabajadores del comercio deben tener descanso obligatorio y, en caso de trabajar, tienen derecho a compensación adicional.'}
                </p>
              </div>

              {/* Información regional */}
              {holiday.isRegional && holiday.region && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Feriado Regional</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        Este feriado aplica únicamente en: {holiday.region}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Marco legal */}
              {holiday.law && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Gavel className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Marco Legal</h3>
                      <p className="text-gray-600 text-sm mt-1">{holiday.law}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Información adicional */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Información importante</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      {holiday.isIrrenunciable 
                        ? 'Los trabajadores del comercio tienen derecho a descanso este día.'
                        : 'Este feriado es renunciable para trabajadores del comercio.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Las oficinas públicas y bancos permanecen cerrados.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      El transporte público puede operar con horarios especiales.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Call to action */}
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  ¿Planificando tus vacaciones?
                </h3>
                <p className="text-gray-600 mb-4">
                  Revisa todos los feriados del año y optimiza tus días libres
                </p>
                <Link
                  href={`/${params.year}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver calendario completo {params.year}
                </Link>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}