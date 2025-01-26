import { Holiday } from '../data/holidays';

export function formatDateToSpanish(dateStr: string) {
  const date = new Date(dateStr + 'T00:00:00-04:00'); // UTC-4 for Chile
  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];
  
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  
  return `${day} de ${month} del ${year}`;
}

export function generateMonthDays(year: number, month: number, holidays: Holiday[]) {
  const firstDay = new Date(Date.UTC(year, month, 1, -4, 0, 0));
  const lastDay = new Date(Date.UTC(year, month + 1, 0, -4, 0, 0));
  const daysInMonth = lastDay.getDate();
  
  const days = [];
  
  // Add days from previous month
  const firstDayOfWeek = firstDay.getDay();
  const prevMonthDays = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  
  for (let i = prevMonthDays; i > 0; i--) {
    const date = new Date(Date.UTC(year, month, -i + 1, -4, 0, 0));
    const dateStr = date.toISOString().split('T')[0];
    days.push({
      date: dateStr,
      isCurrentMonth: false
    });
  }
  
  // Add days from current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(Date.UTC(year, month, day, -4, 0, 0));
    const dateStr = date.toISOString().split('T')[0];
    const holiday = holidays.find(h => h.date === dateStr);
    
    days.push({
      date: dateStr,
      isCurrentMonth: true,
      isToday: dateStr === new Date().toISOString().split('T')[0],
      holiday: holiday
    });
  }
  
  // Add days from next month
  const remainingDays = 42 - days.length;
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(Date.UTC(year, month + 1, i, -4, 0, 0));
    const dateStr = date.toISOString().split('T')[0];
    days.push({
      date: dateStr,
      isCurrentMonth: false
    });
  }
  
  return days;
} 