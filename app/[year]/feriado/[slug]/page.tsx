import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, ChevronLeft, MapPin, Gavel, AlertCircle, Info, Clock, Users, Star } from 'lucide-react';
import { formatDateToSpanish } from '@/app/utils/dateUtils';
import { getHolidaysByYear, getHolidayBySlug } from '@/app/utils/dataUtils';
import { parseLawReferences } from '@/app/utils/lawUtils';
import NavigationLinks from '@/app/components/NavigationLinks';
import LawReferences from '@/app/components/LawReferences';
import { getHolidayDescription } from '@/app/data/holidayDescriptions';

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
export const dynamicParams = false; // No permitir parámetros dinámicos fuera de generateStaticParams

export async function generateMetadata({ params }: { params: { year: string; slug: string } }): Promise<Metadata> {
  const holiday = await getHolidayBySlug(params.year, params.slug);
  
  if (!holiday) {
    return {
      robots: 'noindex, nofollow',
    };
  }

  const holidayDetails = getHolidayDescription(holiday.slug);
  const canonicalUrl = `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`;
  
  const description = holidayDetails 
    ? `${holiday.name} ${params.year}: ${holidayDetails.significance} Se celebra el ${formatDateToSpanish(holiday.date)}. ${holiday.isIrrenunciable ? 'Feriado irrenunciable.' : ''}`
    : `${holiday.name} se celebra el ${formatDateToSpanish(holiday.date)}. ${holiday.isIrrenunciable ? 'Es un feriado irrenunciable.' : ''} Conoce más sobre este día festivo ${holiday.type.toLowerCase()} en Chile.`;

  return {
    metadataBase: new URL('https://www.feriadosenchile.com'),
    title: `${holiday.name} ${params.year} - Historia, Tradiciones y Significado | Feriados Chile`,
    description: description.slice(0, 160),
    keywords: `${holiday.name}, feriado ${params.year}, ${formatDateToSpanish(holiday.date)}, feriados chile, ${holiday.type.toLowerCase()}, historia ${holiday.name}, tradiciones ${holiday.name}, significado ${holiday.name}`,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `${holiday.name} ${params.year}`,
      description: `Información completa sobre ${holiday.name} - ${formatDateToSpanish(holiday.date)}`,
      url: canonicalUrl,
      siteName: 'Feriados en Chile',
      locale: 'es_CL',
      type: 'article',
      images: [{
        url: '/images/logo-app.webp',
        width: 800,
        height: 600,
        alt: `${holiday.name} ${params.year}`,
      }],
    },
    twitter: {
      card: 'summary',
      title: `${holiday.name} ${params.year}`,
      description: `${formatDateToSpanish(holiday.date)} - Feriado ${holiday.type}`,
    },
    alternates: {
      canonical: canonicalUrl,
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
  const holidayDetails = getHolidayDescription(holiday.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`,
    url: `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`,
    headline: `${holiday.name} ${params.year}`,
    name: holiday.name,
    description: holidayDetails 
      ? `${holidayDetails.significance} ${holidayDetails.history}`
      : `${holiday.name} - Feriado ${holiday.type} en Chile que se celebra el ${formatDateToSpanish(holiday.date)}`,
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.feriadosenchile.com/${params.year}/feriado/${params.slug}`
    },
    author: {
      '@type': 'Organization',
      name: 'Feriados en Chile',
      url: 'https://www.feriadosenchile.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Feriados en Chile',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.feriadosenchile.com/images/logo-app.webp'
      }
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://www.feriadosenchile.com/images/logo-app.webp',
      width: 800,
      height: 600
    },
    about: {
      '@type': 'Event',
      name: holiday.name,
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
      }
    },
    keywords: `${holiday.name}, feriado ${params.year}, ${formatDateToSpanish(holiday.date)}, feriados chile, ${holiday.type.toLowerCase()}`
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
                      <p className="text-gray-600 text-sm mt-1">
                        <LawReferences laws={parseLawReferences(holiday.law)} />
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Historia detallada del feriado */}
              {holidayDetails && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">Historia y Origen</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {holidayDetails.history}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <div className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-green-600 mt-0.5" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2">Significado Cultural</h3>
                        <p className="text-gray-700 leading-relaxed">
                          {holidayDetails.significance}
                        </p>
                      </div>
                    </div>
                  </div>

                  {holidayDetails.traditions && (
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">Tradiciones y Costumbres</h3>
                          <p className="text-gray-700 leading-relaxed">
                            {holidayDetails.traditions}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {holidayDetails.celebrations && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-orange-600 mt-0.5" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800 mb-2">Celebraciones Principales</h3>
                          <p className="text-gray-700 leading-relaxed">
                            {holidayDetails.celebrations}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {holidayDetails.facts && holidayDetails.facts.length > 0 && (
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-3">Datos Curiosos</h3>
                      <ul className="space-y-2">
                        {holidayDetails.facts.map((fact, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-indigo-600 mt-1">•</span>
                            <span className="text-gray-700">{fact}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}

              {/* Información adicional */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Información Práctica</h3>
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

              {/* Navigation to other holidays */}
              <div className="border-t pt-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Otros feriados cercanos</h3>
                <NavigationLinks currentHoliday={holiday} year={params.year} />
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