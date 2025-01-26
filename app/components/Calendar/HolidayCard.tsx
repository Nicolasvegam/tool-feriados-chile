import { Holiday } from '@/app/data/holidays';
import { formatDateToSpanish } from '@/app/utils/dateUtils';

interface HolidayCardProps {
  holiday: Holiday;
}

export default function HolidayCard({ holiday }: HolidayCardProps) {
  return (
    <div className="p-3 border rounded-lg bg-white/80 backdrop-blur-sm shadow hover:shadow-md transition-all hover:bg-white">
      <div className="flex items-start justify-between gap-2">
        <div className="font-semibold text-base mb-1">{holiday.name}</div>
        <div className="flex flex-col gap-1">
          {holiday.isIrrenunciable && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
              Irrenunciable
            </span>
          )}
          {holiday.isPendingConfirmation && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
              Por confirmar
            </span>
          )}
        </div>
      </div>
      <div className="text-sm font-medium text-blue-600">
        {formatDateToSpanish(holiday.date)}
      </div>
      <div className="text-xs text-gray-500">{holiday.type}</div>
      {holiday.isRegional && (
        <div className="text-xs text-gray-500 mt-1">
          {holiday.region}
        </div>
      )}
      {holiday.law && (
        <div className="text-xs text-gray-400 mt-1">
          {holiday.law}
        </div>
      )}
    </div>
  );
} 