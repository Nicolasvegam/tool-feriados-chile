import { Holiday } from '../data/holidays';

function formatDateToICS(date: string): string {
  const d = new Date(date + 'T00:00:00');
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function escapeICSText(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
}

export function generateICSFile(holidays: Holiday[], year: string): string {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Feriados en Chile//Calendar//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:Feriados Chile ${year}`,
    'X-WR-TIMEZONE:America/Santiago',
    'X-WR-CALDESC:Calendario oficial de feriados en Chile',
  ];

  holidays.forEach((holiday) => {
    const startDate = formatDateToICS(holiday.date);
    const endDate = new Date(holiday.date + 'T00:00:00');
    endDate.setDate(endDate.getDate() + 1);
    const endDateStr = formatDateToICS(endDate.toISOString().split('T')[0]);
    
    const description = `Feriado ${holiday.type}${holiday.isIrrenunciable ? ' - Irrenunciable' : ''}${holiday.isRegional ? ` - Regional (${holiday.region})` : ''}`;
    
    lines.push(
      'BEGIN:VEVENT',
      `UID:${holiday.date}-${holiday.slug}@feriadosenchile.com`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;VALUE=DATE:${startDate}`,
      `DTEND;VALUE=DATE:${endDateStr}`,
      `SUMMARY:${escapeICSText(holiday.name)}`,
      `DESCRIPTION:${escapeICSText(description)}`,
      'STATUS:CONFIRMED',
      'TRANSP:TRANSPARENT',
      'END:VEVENT'
    );
  });

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

export function downloadICSFile(holidays: Holiday[], year: string): void {
  const icsContent = generateICSFile(holidays, year);
  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `feriados-chile-${year}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function generateGoogleCalendarUrl(holidays: Holiday[], year: string): string {
  const baseUrl = 'https://calendar.google.com/calendar/r';
  const params = new URLSearchParams();
  
  // Google Calendar doesn't support batch adding, so we'll create a calendar subscription URL
  // For now, we'll return the base calendar URL and users can import the ICS file
  return baseUrl;
}