import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getHolidaysByYear } from '../utils/dataUtils';

interface Holiday {
  date: string;
  name: string;
  slug: string;
}

interface NavigationLinksProps {
  currentHoliday: Holiday;
  year: string;
}

export default async function NavigationLinks({ currentHoliday, year }: NavigationLinksProps) {
  const allHolidays = await getHolidaysByYear(year);
  const currentIndex = allHolidays.findIndex((h: Holiday) => h.slug === currentHoliday.slug);
  
  const prevHoliday = currentIndex > 0 ? allHolidays[currentIndex - 1] : null;
  const nextHoliday = currentIndex < allHolidays.length - 1 ? allHolidays[currentIndex + 1] : null;
  
  // Get 2 holidays before and after (excluding current)
  const nearbyHolidays = [
    ...allHolidays.slice(Math.max(0, currentIndex - 2), currentIndex),
    ...allHolidays.slice(currentIndex + 1, Math.min(allHolidays.length, currentIndex + 3))
  ];

  return (
    <div className="space-y-4">
      {/* Previous/Next navigation */}
      <div className="flex justify-between items-center">
        {prevHoliday ? (
          <Link
            href={`/${year}/feriado/${prevHoliday.slug}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-sm">{prevHoliday.name}</span>
          </Link>
        ) : (
          <div />
        )}
        
        {nextHoliday ? (
          <Link
            href={`/${year}/feriado/${nextHoliday.slug}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="text-sm">{nextHoliday.name}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Nearby holidays list */}
      {nearbyHolidays.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
          {nearbyHolidays.map((holiday) => (
            <Link
              key={holiday.slug}
              href={`/${year}/feriado/${holiday.slug}`}
              className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="block text-sm font-medium text-gray-800">{holiday.name}</span>
              <span className="block text-xs text-gray-500">
                {new Date(holiday.date).toLocaleDateString('es-CL', { 
                  weekday: 'short', 
                  day: 'numeric', 
                  month: 'short' 
                })}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}