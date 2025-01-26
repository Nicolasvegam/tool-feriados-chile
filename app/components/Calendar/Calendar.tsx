import { Holiday } from '@/app/data/holidays';
import { generateMonthDays } from '@/app/utils/dateUtils';
import { Switch } from '@headlessui/react';
import { useState } from 'react';

interface CalendarProps {
  currentYear: number;
  holidays: Holiday[];
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Calendar({ currentYear, holidays }: CalendarProps) {
  const [workingDays, setWorkingDays] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
  });

  const daysOfWeek = [
    { key: 'monday', label: 'Lunes' },
    { key: 'tuesday', label: 'Martes' },
    { key: 'wednesday', label: 'Miércoles' },
    { key: 'thursday', label: 'Jueves' },
    { key: 'friday', label: 'Viernes' },
    { key: 'saturday', label: 'Sábado' },
    { key: 'sunday', label: 'Domingo' },
  ] as const;

  const isWorkingDay = (date: string) => {
    const localDate = new Date(date + 'T00:00:00-04:00');
    const dayNumber = localDate.getDay();
    
    const dayMap = {
      0: 'sunday',
      1: 'monday',
      2: 'tuesday',
      3: 'wednesday',
      4: 'thursday',
      5: 'friday',
      6: 'saturday'
    } as const;
    
    const dayKey = dayMap[dayNumber as keyof typeof dayMap];
    return dayKey ? !workingDays[dayKey] : false;
  };

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ].map((name, index) => ({
    name,
    days: generateMonthDays(currentYear, index, holidays)
  }));

  return (
    <section className="bg-white/80 backdrop-blur-sm rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Calendario {currentYear}</h2>
      
      {/* Working Days Controls */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">¿Trabajas estos días?</h3>
        <div className="max-w-3xl mx-auto">
          {/* Desktop: One row, Mobile: Two rows */}
          <div className="grid grid-cols-4 md:grid-cols-7 gap-4 auto-rows-min">
            {daysOfWeek.map(({ key, label }) => (
              <div key={key} className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-gray-700">
                  {label}
                </span>
                <Switch
                  checked={workingDays[key]}
                  onChange={(checked) => 
                    setWorkingDays(prev => ({ ...prev, [key]: checked }))
                  }
                  className={`${
                    workingDays[key] ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none`}
                >
                  <span
                    className={`${
                      workingDays[key] ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
              </div>
            ))}
          </div>
        </div>

        {/* Color Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-100 border border-blue-200"></div>
            <span className="text-gray-600">Día no laboral</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-100 border border-green-200"></div>
            <span className="text-gray-600">Feriado</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-600"></div>
            <span className="text-gray-600">Hoy</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-white border border-gray-200"></div>
            <span className="text-gray-600">Día laboral</span>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {months.map((month) => (
          <div key={month.name} className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{month.name}</h3>
            <div className="grid grid-cols-7 text-xs text-gray-500 mb-2">
              <div>L</div>
              <div>M</div>
              <div>M</div>
              <div>J</div>
              <div>V</div>
              <div>S</div>
              <div>D</div>
            </div>
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg">
              {month.days.map((day) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth ? 'bg-white/90' : 'bg-gray-50/90 text-gray-400',
                    'p-2 hover:bg-white transition-colors relative group',
                    day.holiday && 'bg-green-50/90',
                    isWorkingDay(day.date) && day.isCurrentMonth && 'bg-blue-50/90'
                  )}
                  title={day.holiday?.name || (isWorkingDay(day.date) ? 'Día no laboral' : '')}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      'flex items-center justify-center rounded-full w-7 h-7',
                      day.isToday && 'bg-blue-600 text-white',
                      day.holiday && !day.isToday && 'bg-green-100 text-green-700 font-semibold',
                      isWorkingDay(day.date) && !day.holiday && day.isCurrentMonth && 'bg-blue-100 text-blue-700'
                    )}
                  >
                    {day.date?.split('-').pop()?.replace(/^0/, '')}
                  </time>
                  {/* Tooltip */}
                  {(day.holiday || (isWorkingDay(day.date) && day.isCurrentMonth)) && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                      {day.holiday ? day.holiday.name : 'Día no laboral'}
                    </div>
                  )}
                  {/* Indicator */}
                  {(day.holiday || (isWorkingDay(day.date) && day.isCurrentMonth)) && (
                    <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                      day.holiday ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                  )}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 