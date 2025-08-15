import { Metadata } from 'next';
import HolidaysList from './components/HolidaysList';
import VacationOptimizer from './components/VacationOptimizer';
import YearSelector from './components/YearSelector';
import LawsSection from './components/LawsSection/LawsSection';
import CalendarExport from './components/CalendarExport';
import { getHolidaysByYear, getVacationOptimizationByYear } from './utils/dataUtils';

export const metadata: Metadata = {
  title: 'Feriados en Chile 2025 - Calendario de Días Festivos',
  description: 'Calendario completo de feriados en Chile 2025. Consulta todos los días festivos, feriados irrenunciables y planifica tus vacaciones con nuestro optimizador inteligente.',
  keywords: 'feriados chile 2025, dias festivos chile 2025, calendario feriados 2025, feriados irrenunciables 2025, vacaciones chile 2025, dias no laborables 2025',
  robots: 'index, follow',
  openGraph: {
    title: 'Feriados en Chile 2025 - Calendario Oficial',
    description: 'Consulta todos los feriados de Chile para el año 2025. Incluye feriados irrenunciables y herramientas de planificación.',
    url: 'https://www.feriadosenchile.com',
    siteName: 'Feriados en Chile',
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feriados Chile 2025',
    description: 'Calendario completo de feriados 2025',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com',
  },
};

export default async function HomePage() {
  const currentYear = '2025';
  const holidays = await getHolidaysByYear(currentYear);
  const vacationOptimizations = await getVacationOptimizationByYear(currentYear);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Feriados en Chile',
    description: 'Calendario oficial de feriados en Chile',
    url: 'https://www.feriadosenchile.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.feriadosenchile.com/{year}'
      },
      'query-input': 'required name=year'
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
              Feriados en Chile {currentYear}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calendario oficial de días festivos en Chile. Planifica tus vacaciones y conoce tus derechos laborales.
            </p>
          </header>

          <YearSelector currentYear={currentYear}  validYears={['2024', '2025', '2026', '2027']}/>
          
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Calendario de Feriados {currentYear}
                </h2>
                <CalendarExport holidays={holidays} year={currentYear} />
              </div>
              <HolidaysList holidays={holidays} currentYear={currentYear} />
            </div>
          </section>

          {vacationOptimizations.length > 0 && (
            <section className="mb-12">
              <VacationOptimizer optimizations={vacationOptimizations} year={currentYear} />
            </section>
          )}

          <section className="mb-12">
            <LawsSection />
          </section>

          <section className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas información de otros años?
            </h2>
            <p className="text-gray-600 mb-6">
              Consulta el calendario de feriados para cualquier año
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {['2024', '2025', '2026', '2027'].map((year) => (
                <a
                  key={year}
                  href={`/${year}`}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    year === currentYear
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-blue-600 hover:bg-blue-100'
                  }`}
                >
                  {year}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}