'use client';

import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  eventName: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer({ targetDate, eventName }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setHasPassed(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setHasPassed(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (hasPassed) {
    return (
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-black mb-4 animate-pulse">¡{eventName} ya pasó!</h2>
        <p className="text-xl sm:text-2xl">Nos vemos el próximo año 🎉</p>
      </div>
    );
  }

  const totalSeconds = timeLeft.days * 86400 + timeLeft.hours * 3600 + timeLeft.minutes * 60 + timeLeft.seconds;
  const isVeryClose = totalSeconds < 86400; // Menos de 1 día
  const isClose = totalSeconds < 604800; // Menos de 1 semana

  return (
    <div className="text-center relative">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        ¡Cuánto falta para {eventName}!
      </h2>
      
      {isVeryClose && (
        <div className="absolute -top-4 right-0 animate-bounce">
          <span className="text-4xl">🎉</span>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto mb-8">
        <div className={`relative group transform hover:scale-110 transition-all duration-300 ${isVeryClose ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-purple-200">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {timeLeft.days}
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-700 mt-2 uppercase tracking-wider">
              {timeLeft.days === 1 ? 'Día' : 'Días'}
            </div>
          </div>
        </div>
        
        <div className="relative group transform hover:scale-110 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-blue-200">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-700 mt-2 uppercase tracking-wider">
              {timeLeft.hours === 1 ? 'Hora' : 'Horas'}
            </div>
          </div>
        </div>
        
        <div className="relative group transform hover:scale-110 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-green-200">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-700 mt-2 uppercase tracking-wider">
              {timeLeft.minutes === 1 ? 'Minuto' : 'Minutos'}
            </div>
          </div>
        </div>
        
        <div className={`relative group transform hover:scale-110 transition-all duration-300 ${isClose ? 'animate-pulse' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-red-200">
            <div className="text-5xl sm:text-6xl md:text-7xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-sm sm:text-base font-bold text-gray-700 mt-2 uppercase tracking-wider">
              {timeLeft.seconds === 1 ? 'Segundo' : 'Segundos'}
            </div>
          </div>
        </div>
      </div>
      
      {isVeryClose && (
        <div className="mt-6 text-2xl sm:text-3xl font-bold text-red-600 animate-bounce">
          ¡Ya casi es hora! 🎊
        </div>
      )}
      
      {isClose && !isVeryClose && (
        <div className="mt-6 text-xl sm:text-2xl font-bold text-orange-600">
          ¡Se acerca el gran día! ⏰
        </div>
      )}
    </div>
  );
}