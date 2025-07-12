'use client';

import { useState } from 'react';
import { Calendar, Calculator, Info } from 'lucide-react';
import { getHolidaysByYear, getVacationOptimizationByYear } from '../utils/dataUtils';
import { formatDateToSpanish } from '../utils/dateUtils';

interface VacationOption {
  period: string;
  daysToRequest: string[];
  totalDaysOff: string[];
  efficiency: number;
  startDate: string;
  endDate: string;
}

export default function VacationCalculator() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [availableDays, setAvailableDays] = useState(15);
  const [vacationOptions, setVacationOptions] = useState<VacationOption[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const years = ['2024', '2025', '2026', '2027'];

  const calculateVacations = async () => {
    setIsCalculating(true);
    
    try {
      // Simular cálculo
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const holidays = await getHolidaysByYear(selectedYear);
      const existingOptimizations = await getVacationOptimizationByYear(selectedYear);
      
      // Generar opciones basadas en los días disponibles
      const options: VacationOption[] = [];
      
      // Usar las optimizaciones existentes si están disponibles
      if (existingOptimizations && existingOptimizations.length > 0) {
        existingOptimizations.forEach((opt: any) => {
          if (opt.days_to_request.length <= availableDays) {
            options.push({
              period: opt.period,
              daysToRequest: opt.days_to_request,
              totalDaysOff: opt.total_days_off,
              efficiency: opt.efficiency,
              startDate: opt.total_days_off[0],
              endDate: opt.total_days_off[opt.total_days_off.length - 1]
            });
          }
        });
      }
      
      // Agregar opciones personalizadas basadas en feriados
      holidays.forEach((holiday: any, index: number) => {
        const holidayDate = new Date(holiday.date);
        const dayOfWeek = holidayDate.getDay();
        
        // Si el feriado cae lunes o viernes, sugerir extender el fin de semana
        if (dayOfWeek === 1 || dayOfWeek === 5) {
          const option = generateWeekendExtension(holiday, holidayDate, availableDays);
          if (option && option.daysToRequest.length <= availableDays) {
            options.push(option);
          }
        }
        
        // Buscar feriados cercanos para combinar
        if (index < holidays.length - 1) {
          const nextHoliday = holidays[index + 1];
          const nextDate = new Date(nextHoliday.date);
          const daysBetween = Math.floor((nextDate.getTime() - holidayDate.getTime()) / (1000 * 60 * 60 * 24));
          
          if (daysBetween > 0 && daysBetween <= 5) {
            const bridgeOption = generateBridge(holiday, nextHoliday, availableDays);
            if (bridgeOption && bridgeOption.daysToRequest.length <= availableDays) {
              options.push(bridgeOption);
            }
          }
        }
      });
      
      // Ordenar por eficiencia
      options.sort((a, b) => b.efficiency - a.efficiency);
      
      // Tomar las mejores opciones
      setVacationOptions(options.slice(0, 6));
    } catch (error) {
      console.error('Error calculating vacations:', error);
    } finally {
      setIsCalculating(false);
    }
  };

  const generateWeekendExtension = (holiday: any, holidayDate: Date, maxDays: number): VacationOption | null => {
    const dayOfWeek = holidayDate.getDay();
    const option: VacationOption = {
      period: `Fin de semana largo - ${holiday.name}`,
      daysToRequest: [],
      totalDaysOff: [],
      efficiency: 0,
      startDate: '',
      endDate: ''
    };

    if (dayOfWeek === 1) { // Lunes
      // Sugerir tomar viernes anterior
      const friday = new Date(holidayDate);
      friday.setDate(friday.getDate() - 3);
      
      option.daysToRequest = [friday.toISOString().split('T')[0]];
      option.totalDaysOff = [
        friday.toISOString().split('T')[0],
        new Date(friday.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Sábado
        new Date(friday.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Domingo
        holiday.date
      ];
    } else if (dayOfWeek === 5) { // Viernes
      // Sugerir tomar lunes siguiente
      const monday = new Date(holidayDate);
      monday.setDate(monday.getDate() + 3);
      
      option.daysToRequest = [monday.toISOString().split('T')[0]];
      option.totalDaysOff = [
        holiday.date,
        new Date(holidayDate.getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Sábado
        new Date(holidayDate.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // Domingo
        monday.toISOString().split('T')[0]
      ];
    }

    if (option.daysToRequest.length > 0) {
      option.efficiency = option.totalDaysOff.length / option.daysToRequest.length;
      option.startDate = option.totalDaysOff[0];
      option.endDate = option.totalDaysOff[option.totalDaysOff.length - 1];
      return option;
    }

    return null;
  };

  const generateBridge = (holiday1: any, holiday2: any, maxDays: number): VacationOption | null => {
    const date1 = new Date(holiday1.date);
    const date2 = new Date(holiday2.date);
    const daysBetween = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 1000 * 24)) - 1;

    if (daysBetween > maxDays) return null;

    const daysToRequest = [];
    const totalDaysOff = [holiday1.date];
    
    for (let i = 1; i <= daysBetween; i++) {
      const currentDate = new Date(date1);
      currentDate.setDate(currentDate.getDate() + i);
      const dayOfWeek = currentDate.getDay();
      
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // No es fin de semana
        daysToRequest.push(currentDate.toISOString().split('T')[0]);
      }
      totalDaysOff.push(currentDate.toISOString().split('T')[0]);
    }
    
    totalDaysOff.push(holiday2.date);

    return {
      period: `Puente ${holiday1.name} - ${holiday2.name}`,
      daysToRequest,
      totalDaysOff,
      efficiency: totalDaysOff.length / (daysToRequest.length || 1),
      startDate: holiday1.date,
      endDate: holiday2.date
    };
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-2">
              Año a planificar
            </label>
            <select
              id="year"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-2">
              Días de vacaciones disponibles
            </label>
            <input
              id="days"
              type="number"
              min="1"
              max="30"
              value={availableDays}
              onChange={(e) => setAvailableDays(parseInt(e.target.value) || 0)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <button
          onClick={calculateVacations}
          disabled={isCalculating || availableDays <= 0}
          className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <Calculator className="w-5 h-5" />
          {isCalculating ? 'Calculando...' : 'Calcular mejores opciones'}
        </button>
      </div>

      {vacationOptions.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Opciones recomendadas para tus vacaciones
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vacationOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg text-gray-800 flex-1">
                    {option.period}
                  </h3>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {option.efficiency.toFixed(1)}x
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600">
                      {formatDateToSpanish(option.startDate).split(' del ')[0]} - {formatDateToSpanish(option.endDate).split(' del ')[0]}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 bg-gray-50 rounded-lg p-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {option.daysToRequest.length}
                      </div>
                      <div className="text-xs text-gray-600">días a solicitar</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {option.totalDaysOff.length}
                      </div>
                      <div className="text-xs text-gray-600">días totales</div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-xs text-gray-500 mb-2">Días a solicitar:</p>
                    <div className="flex flex-wrap gap-1">
                      {option.daysToRequest.map((date, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium"
                        >
                          {formatDateToSpanish(date).split(' del ')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div className="text-sm text-yellow-800">
              <p className="font-semibold mb-1">Recomendación</p>
              <p>
                Estas opciones maximizan tu tiempo libre aprovechando feriados y fines de semana. 
                Recuerda coordinar con tu empleador con anticipación para asegurar la aprobación 
                de tus vacaciones.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}