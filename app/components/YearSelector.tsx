interface YearSelectorProps {
  currentYear: number;
  holidaysCount: number;
  onYearChange: (year: number) => void;
}

export default function YearSelector({
  currentYear,
  holidaysCount,
  onYearChange,
}: YearSelectorProps) {
  return (
    <div className="flex flex-col items-center gap-2 mt-6">
      <div className="flex items-center gap-4">
        <button
          onClick={() => onYearChange(currentYear - 1)}
          className="px-4 py-2 rounded-lg bg-white/80 hover:bg-white transition-colors shadow-sm"
        >
          ← {currentYear - 1}
        </button>
        <h2 className="text-3xl font-bold text-gray-900">{currentYear}</h2>
        <button
          onClick={() => onYearChange(currentYear + 1)}
          className="px-4 py-2 rounded-lg bg-white/80 hover:bg-white transition-colors shadow-sm"
        >
          {currentYear + 1} →
        </button>
      </div>
      <p className="text-sm text-gray-600">
        Este año hay {holidaysCount} días feriados
      </p>
    </div>
  );
} 