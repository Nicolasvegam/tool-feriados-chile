import { Holiday } from '@/app/data/holidays';
import { formatDateToSpanish } from '@/app/utils/dateUtils';
import Link from 'next/link';

interface HolidayCardProps {
  holiday: Holiday;
  year?: string;
}

export default function HolidayCard({ holiday, year }: HolidayCardProps) {
  const holidayYear = year || new Date(holiday.date).getFullYear().toString();
  return (
    <Link 
      href={`/${holidayYear}/feriado/${holiday.slug}`}
      className="group block p-4 border-2 border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-blue-300 transition-all duration-200 hover:-translate-y-0.5"
    >
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1 text-gray-800 group-hover:text-blue-600 transition-colors">
            {holiday.name}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-blue-600 font-semibold">
              {formatDateToSpanish(holiday.date)}
            </span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-600">{holiday.type}</span>
          </div>
        </div>
        <div className="flex flex-row sm:flex-col gap-2 items-start">
          {holiday.isIrrenunciable && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 border border-red-200">
              🔒 Irrenunciable
            </span>
          )}
          {holiday.isPendingConfirmation && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700 border border-amber-200">
              ⏳ Por confirmar
            </span>
          )}
        </div>
      </div>
      {holiday.isRegional && (
        <div className="flex items-center gap-1 mt-3 text-sm text-gray-600">
          <span>📍</span>
          <span>{holiday.region}</span>
        </div>
      )}
      {holiday.law && (
        <div className="text-xs text-gray-400 mt-2 italic">
          {holiday.law}
        </div>
      )}
    </Link>
  );
} 