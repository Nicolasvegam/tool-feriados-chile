'use client';

import './styles/animations.css';
import { getHolidaysByYear } from './data/holidays';
import { useState } from 'react';
import { getVacationOptimizationByYear } from './data/vacation_optimization';
import Navbar from './components/Navbar';
import HolidayCard from './components/Calendar/HolidayCard';
import VacationDeals from './components/VacationDeals/VacationDeals';
import YearSelector from './components/YearSelector';
import Calendar from './components/Calendar/Calendar';
import Footer from './components/Footer';
import LawsSection from './components/LawsSection/LawsSection';

export default function Page() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const holidays = getHolidaysByYear(currentYear);
  const vacationDeals = getVacationOptimizationByYear(currentYear);

  return (
    <div id="top" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-200" />

      {/* Decorative elements */}
      <div
        className="absolute top-20 left-20 w-72 h-72 mix-blend-multiply filter blur-2xl opacity-25 animate-blob"
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',
        }}
      />
      <div
        className="absolute top-20 right-20 w-72 h-72 mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000"
        style={{
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #818CF8 0%, #C084FC 100%)',
        }}
      />
      <div
        className="absolute bottom-20 left-1/2 w-72 h-72 mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-4000"
        style={{
          transform: 'rotate(45deg) translateX(-50%)',
          background: 'linear-gradient(135deg, #F472B6 0%, #9333EA 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Header */}
        <header className="py-8 animate-fade-in">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Feriados de Chile
            </h1>
            
            <YearSelector
              currentYear={currentYear}
              holidaysCount={holidays.length}
              onYearChange={setCurrentYear}
            />
          </div>
        </header>

        {/* Holidays List */}
        <section id="holidays" className="container mx-auto px-4 mb-12 animate-fade-in animation-delay-200">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {holidays.map(holiday => (
              <HolidayCard key={holiday.date} holiday={holiday} />
            ))}
          </div>
        </section>

        {/* Vacation Deals Section */}
        <section id="vacation-deals" className="animate-fade-in animation-delay-400">
          <VacationDeals deals={vacationDeals} />
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="container mx-auto px-4 py-8 animate-fade-in animation-delay-600">
          <Calendar currentYear={currentYear} holidays={holidays} />
        </section>

        {/* Laws Section */}
        <section id="laws">
          <LawsSection />
        </section>

        <Footer />
      </div>
    </div>
  );
}
