'use client';

import dynamic from 'next/dynamic';

const Calendar = dynamic(() => import('./Calendar/Calendar'), {
  loading: () => (
    <div className="bg-white rounded-lg shadow-lg p-8 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/3 mx-auto mb-6"></div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: 35 }).map((_, i) => (
          <div key={i} className="h-12 bg-gray-100 rounded"></div>
        ))}
      </div>
    </div>
  ),
  ssr: true
});

export default Calendar;