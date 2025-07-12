import { holidays } from '../data/holidays';
import { vacation_optimization } from '../data/vacation_optimization';

const holidaysData: any = holidays;
const vacationData: any = vacation_optimization;

export async function getHolidaysByYear(year: string) {
  return holidaysData[year] || [];
}

export async function getVacationOptimizationByYear(year: string) {
  return vacationData[year] || [];
}

export async function getHolidayBySlug(year: string, slug: string) {
  const holidays = await getHolidaysByYear(year);
  return holidays.find((h: any) => h.slug === slug);
}

export async function getHolidaysByMonth(year: string, month: string) {
  const holidays = await getHolidaysByYear(year);
  const monthNumber = getMonthNumber(month);
  
  return holidays.filter((holiday: any) => {
    const holidayDate = new Date(holiday.date);
    return holidayDate.getMonth() === monthNumber;
  });
}

function getMonthNumber(monthName: string): number {
  const months: Record<string, number> = {
    'enero': 0,
    'febrero': 1,
    'marzo': 2,
    'abril': 3,
    'mayo': 4,
    'junio': 5,
    'julio': 6,
    'agosto': 7,
    'septiembre': 8,
    'octubre': 9,
    'noviembre': 10,
    'diciembre': 11,
  };
  
  return months[monthName.toLowerCase()] || 0;
}

export function getMonthName(monthNumber: number): string {
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  return months[monthNumber] || '';
}

export function getAllMonths(): string[] {
  return [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
}