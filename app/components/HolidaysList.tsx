import HolidayCard from './Calendar/HolidayCard';

interface Holiday {
  date: string;
  name: string;
  slug: string;
  type: "Civil" | "Religioso";
  isIrrenunciable?: boolean;
  isRegional?: boolean;
  region?: string;
  law?: string;
  isPendingConfirmation?: boolean;
}

interface HolidaysListProps {
  holidays: Holiday[];
  year: string;
}

export default function HolidaysList({ holidays, year }: HolidaysListProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {holidays.map((holiday, index) => (
        <HolidayCard 
          key={`${holiday.slug}-${index}`} 
          holiday={holiday} 
          year={year}
        />
      ))}
    </div>
  );
}