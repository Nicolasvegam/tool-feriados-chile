import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HolidaysList from '../components/HolidaysList';
import VacationOptimizer from '../components/VacationOptimizer';
import YearSelector from '../components/YearSelector';
import CalendarLazy from '../components/CalendarLazy';
import LawsSection from '../components/LawsSection/LawsSection';
import { getHolidaysByYear, getVacationOptimizationByYear } from '../utils/dataUtils';

const VALID_YEARS = ['2024', '2025', '2026', '2027'];

export async function generateStaticParams() {
  return VALID_YEARS.map((year) => ({ year }));
}

export const revalidate = 86400; // Revalidar cada 24 horas

export async function generateMetadata({ params }: { params: { year: string } }): Promise<Metadata> {
  const year = params.year;
  
  if (!VALID_YEARS.includes(year)) {
    return {};
  }

  return {
    title: `Feriados en Chile ${year} - Calendario de Días Festivos`,
    description: `Calendario completo de feriados en Chile ${year}. Consulta todos los días festivos, feriados irrenunciables y planifica tus vacaciones con nuestro optimizador inteligente.`,
    keywords: `feriados chile ${year}, dias festivos chile ${year}, calendario feriados ${year}, feriados irrenunciables ${year}, vacaciones chile ${year}, dias no laborables ${year}`,
    openGraph: {
      title: `Feriados en Chile ${year} - Calendario Oficial`,
      description: `Consulta todos los feriados de Chile para el año ${year}. Incluye feriados irrenunciables y herramientas de planificación.`,
      url: `https://www.feriadosenchile.com/${year}`,
      siteName: 'Feriados en Chile',
      locale: 'es_CL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Feriados Chile ${year}`,
      description: `Calendario completo de feriados ${year}`,
    },
    alternates: {
      canonical: `https://www.feriadosenchile.com/${year}`,
    },
  };
}

export default async function YearPage({ params }: { params: { year: string } }) {
  const year = params.year;
  
  if (!VALID_YEARS.includes(year)) {
    notFound();
  }

  const holidays = await getHolidaysByYear(year);
  const vacationOptimization = await getVacationOptimizationByYear(year);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Feriados en Chile ${year}`,
    description: `Calendario completo de feriados en Chile para el año ${year}`,
    url: `https://www.feriadosenchile.com/${year}`,
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
          name: `Feriados ${year}`,
          item: `https://www.feriadosenchile.com/${year}`
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
              Feriados en Chile {year}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calendario completo de días festivos en Chile para el año {year}. 
              Planifica tus vacaciones y conoce los feriados irrenunciables.
            </p>
          </header>

          <YearSelector currentYear={year} validYears={VALID_YEARS} />

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Todos los Feriados de {year}
            </h2>
            <HolidaysList holidays={holidays} year={year} />
          </section>

          {vacationOptimization && vacationOptimization.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Optimiza tus Vacaciones {year}
              </h2>
              <VacationOptimizer vacationDeals={vacationOptimization} year={year} />
            </section>
          )}

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Calendario Visual {year}
            </h2>
            <CalendarLazy holidays={holidays} currentYear={parseInt(year)} />
          </section>

          <LawsSection />
        </div>
      </div>
    </>
  );
}