import { Metadata } from 'next';
import CalendarLazy from '../components/CalendarLazy';
import YearSelector from '../components/YearSelector';
import { getHolidaysByYear } from '../utils/dataUtils';

const VALID_YEARS = ['2024', '2025', '2026', '2027'];

export async function generateMetadata(): Promise<Metadata> {
  const currentYear = new Date().getFullYear().toString();
  
  return {
    title: `Calendario de Feriados en Chile ${currentYear} - Vista Completa`,
    description: `Calendario visual completo de todos los feriados en Chile ${currentYear}. Visualiza de manera fácil y rápida todos los días festivos del año.`,
    keywords: `calendario feriados chile ${currentYear}, calendario dias festivos ${currentYear}, vista calendario feriados, calendario visual chile`,
    openGraph: {
      title: `Calendario de Feriados Chile ${currentYear}`,
      description: `Vista completa del calendario de feriados en Chile para ${currentYear}`,
      url: `https://www.feriadosenchile.com/calendario`,
      siteName: 'Feriados en Chile',
      locale: 'es_CL',
      type: 'website',
    },
    alternates: {
      canonical: `https://www.feriadosenchile.com/calendario`,
    },
  };
}

export default async function CalendarioPage({ 
  searchParams 
}: { 
  searchParams: { year?: string } 
}) {
  const currentYear = new Date().getFullYear().toString();
  const selectedYear = searchParams.year && VALID_YEARS.includes(searchParams.year) 
    ? searchParams.year 
    : currentYear;
  
  const holidays = await getHolidaysByYear(selectedYear);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Calendario de Feriados en Chile ${selectedYear}`,
    description: `Calendario visual completo de feriados en Chile para el año ${selectedYear}`,
    url: 'https://www.feriadosenchile.com/calendario',
    inLanguage: 'es-CL',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Feriados en Chile',
      url: 'https://www.feriadosenchile.com'
    },
    breadcrumb: {
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
          name: 'Calendario',
          item: 'https://www.feriadosenchile.com/calendario'
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Calendario de Feriados {selectedYear}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visualiza todos los feriados de Chile en un calendario interactivo. 
              Selecciona el año para ver los días festivos correspondientes.
            </p>
          </header>

          <div className="mb-8">
            <YearSelector 
              currentYear={selectedYear} 
              validYears={VALID_YEARS} 
              basePath="/calendario"
            />
          </div>

          <section className="mb-12">
            <CalendarLazy holidays={holidays} currentYear={parseInt(selectedYear)} />
          </section>

          <div className="text-center">
            <a 
              href={`/${selectedYear}`}
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Ver listado completo de feriados {selectedYear}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}