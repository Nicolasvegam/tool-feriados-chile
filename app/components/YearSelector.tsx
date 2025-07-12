'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface YearSelectorProps {
  currentYear: string;
  validYears: string[];
}

export default function YearSelector({ currentYear, validYears }: YearSelectorProps) {
  const currentIndex = validYears.indexOf(currentYear);
  const prevYear = currentIndex > 0 ? validYears[currentIndex - 1] : null;
  const nextYear = currentIndex < validYears.length - 1 ? validYears[currentIndex + 1] : null;

  return (
    <div className="flex justify-center items-center gap-4 sm:gap-8 my-8">
      {prevYear ? (
        <Link
          href={`/${prevYear}`}
          className="group relative p-3 text-blue-600 bg-white border-2 border-blue-200 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label={`Ir al año ${prevYear}`}
        >
          <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {prevYear}
          </span>
        </Link>
      ) : (
        <div className="w-11" />
      )}

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-bold">
          {currentYear}
        </h2>
      </div>

      {nextYear ? (
        <Link
          href={`/${nextYear}`}
          className="group relative p-3 text-blue-600 bg-white border-2 border-blue-200 rounded-full hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 shadow-sm hover:shadow-md"
          aria-label={`Ir al año ${nextYear}`}
        >
          <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {nextYear}
          </span>
        </Link>
      ) : (
        <div className="w-11" />
      )}
    </div>
  );
} 