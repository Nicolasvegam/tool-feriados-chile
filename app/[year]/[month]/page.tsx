import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, Calendar } from 'lucide-react';
import { getHolidaysByMonth, getAllMonths, getMonthName } from '@/app/utils/dataUtils';
import HolidaysList from '@/app/components/HolidaysList';
import { BreadcrumbJsonLd } from '@/app/components/JsonLd';

const VALID_YEARS = ['2024', '2025', '2026', '2027'];

export async function generateStaticParams() {
  const params = [];
  const months = getAllMonths();
  
  for (const year of VALID_YEARS) {
    for (const month of months) {
      params.push({ year, month });
    }
  }
  
  return params;
}

export const revalidate = 86400; // Revalidar cada 24 horas

export async function generateMetadata({ params }: { params: { year: string; month: string } }): Promise<Metadata> {
  const { year, month } = params;
  
  if (!VALID_YEARS.includes(year) || !getAllMonths().includes(month)) {
    return {};
  }

  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);

  return {
    title: `Feriados ${monthCapitalized} ${year} - Calendario Chile`,
    description: `Todos los feriados de ${month} ${year} en Chile. Consulta días festivos y feriados irrenunciables del mes.`,
    keywords: `feriados ${month} ${year}, calendario ${month} chile, dias festivos ${month}, feriados chile ${month}`,
    openGraph: {
      title: `Feriados ${monthCapitalized} ${year} - Chile`,
      description: `Calendario de feriados de ${month} ${year} en Chile`,
      url: `https://www.feriadosenchile.com/${year}/${month}`,
      siteName: 'Feriados en Chile',
      locale: 'es_CL',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.feriadosenchile.com/${year}/${month}`,
    },
  };
}

export default async function MonthPage({ params }: { params: { year: string; month: string } }) {
  const { year, month } = params;
  
  if (!VALID_YEARS.includes(year) || !getAllMonths().includes(month)) {
    notFound();
  }

  const holidays = await getHolidaysByMonth(year, month);
  const monthCapitalized = month.charAt(0).toUpperCase() + month.slice(1);
  const monthNumber = getAllMonths().indexOf(month);

  const breadcrumbItems = [
    { name: 'Inicio', url: 'https://www.feriadosenchile.com' },
    { name: `Feriados ${year}`, url: `https://www.feriadosenchile.com/${year}` },
    { name: monthCapitalized, url: `https://www.feriadosenchile.com/${year}/${month}` }
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Feriados ${monthCapitalized} ${year}`,
    description: `Listado de feriados en ${month} ${year} en Chile`,
    url: `https://www.feriadosenchile.com/${year}/${month}`,
    isPartOf: {
      '@type': 'WebSite',
      name: 'Feriados en Chile',
      url: 'https://www.feriadosenchile.com'
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }
  };

  // Navegación entre meses
  const prevMonth = monthNumber > 0 ? getAllMonths()[monthNumber - 1] : null;
  const nextMonth = monthNumber < 11 ? getAllMonths()[monthNumber + 1] : null;
  const prevYear = !prevMonth && parseInt(year) > 2024 ? (parseInt(year) - 1).toString() : year;
  const nextYear = !nextMonth && parseInt(year) < 2027 ? (parseInt(year) + 1).toString() : year;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumbItems} />
      
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
                <Link href={`/${year}`} className="text-gray-500 hover:text-gray-700">
                  {year}
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 font-medium">{monthCapitalized}</li>
            </ol>
          </nav>

          {/* Back button */}
          <Link
            href={`/${year}`}
            className="inline-flex items-center gap-2 mb-6 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver al calendario {year}
          </Link>

          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Feriados {monthCapitalized} {year}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {holidays.length > 0 
                ? `${holidays.length} ${holidays.length === 1 ? 'feriado' : 'feriados'} en ${month} de ${year}`
                : `No hay feriados en ${month} de ${year}`
              }
            </p>
          </header>

          {/* Navegación entre meses */}
          <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
            {prevMonth || parseInt(year) > 2024 ? (
              <Link
                href={`/${prevYear}/${prevMonth || 'diciembre'}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <ChevronLeft className="w-4 h-4" />
                {prevMonth ? prevMonth.charAt(0).toUpperCase() + prevMonth.slice(1) : `Diciembre ${prevYear}`}
              </Link>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">{monthCapitalized} {year}</span>
            </div>

            {nextMonth || parseInt(year) < 2027 ? (
              <Link
                href={`/${nextYear}/${nextMonth || 'enero'}`}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                {nextMonth ? nextMonth.charAt(0).toUpperCase() + nextMonth.slice(1) : `Enero ${nextYear}`}
                <ChevronLeft className="w-4 h-4 rotate-180" />
              </Link>
            ) : (
              <div />
            )}
          </div>

          {/* Lista de feriados */}
          {holidays.length > 0 ? (
            <section className="max-w-4xl mx-auto">
              <HolidaysList holidays={holidays} year={year} />
            </section>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  Sin feriados este mes
                </h2>
                <p className="text-gray-500 mb-6">
                  No hay feriados programados para {month} de {year}.
                </p>
                <Link
                  href={`/${year}`}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Ver calendario completo
                </Link>
              </div>
            </div>
          )}

          {/* Información adicional */}
          <section className="mt-12 max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                ¿Sabías qué?
              </h2>
              <p className="text-gray-600">
                Puedes optimizar tus vacaciones solicitando días estratégicamente alrededor de los feriados. 
                Usa nuestra <Link href="/calculadora-vacaciones" className="text-blue-600 hover:underline">calculadora de vacaciones</Link> para 
                encontrar las mejores fechas y maximizar tu tiempo libre.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}