import { formatDateToSpanish } from '@/app/utils/dateUtils';

interface VacationDeal {
  period: string;
  efficiency: number;
  days_to_request: string[];
  total_days_off: string[];
}

interface VacationDealsProps {
  deals: VacationDeal[];
}

export default function VacationDeals({ deals }: VacationDealsProps) {
  if (deals.length === 0) return null;

  return (
    <section className="container mx-auto px-4 mb-16">
      <div className="relative bg-gradient-to-b from-white to-blue-50/50 backdrop-blur-sm rounded-xl shadow-sm pt-10 pb-8 px-8">
        {/* Hot Deals Badge */}
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10 w-full max-w-[280px] text-center">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md whitespace-nowrap">
            🔥 OPTIMIZA TUS VACACIONES 🔥
          </span>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-900">
            Mejores fechas para tomar vacaciones
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Maximiza tus días libres solicitando vacaciones en estas fechas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={deal.period}
              className="relative p-5 border border-blue-100 rounded-lg bg-white hover:shadow-md transition-all group"
            >
              {/* Efficiency Badge */}
              <div className="absolute -top-3 -right-3 w-14 h-14 rotate-12 bg-gradient-to-br from-red-500 to-pink-500 text-white flex flex-col items-center justify-center rounded-lg font-bold text-xs shadow-md group-hover:scale-110 transition-transform">
                <span>{deal.efficiency.toFixed(1)}x</span>
                <span className="text-[10px] opacity-75">eficiencia</span>
              </div>

              <h3 className="font-bold text-base text-gray-900 mb-4 pr-10">
                {deal.period}
              </h3>

              <div className="space-y-4">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 bg-blue-50/50 rounded-lg p-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {deal.days_to_request.length}
                    </div>
                    <div className="text-xs text-gray-600">días a pedir</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {deal.total_days_off.length}
                    </div>
                    <div className="text-xs text-gray-600">días libres</div>
                  </div>
                </div>

                {/* Days to Request */}
                <div>
                  <span className="text-xs font-medium text-gray-500 block mb-2">
                    Solicita estos días:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {deal.days_to_request.map(date => (
                      <span
                        key={date}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-blue-50 text-blue-700 text-xs font-medium hover:bg-blue-100 transition-colors"
                      >
                        {formatDateToSpanish(date).split(' del ')[0]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* All Days Off */}
                <div>
                  <span className="text-xs font-medium text-gray-500 block mb-2">
                    Días libres totales:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {deal.total_days_off.map(date => (
                      <span
                        key={date}
                        className="inline-flex items-center px-2 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium hover:bg-green-100 transition-colors"
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
      </div>
    </section>
  );
} 