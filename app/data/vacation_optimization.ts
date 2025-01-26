export type VacationPeriod = {
  period: string;
  days_to_request: string[];
  total_days_off: string[];
  efficiency: number; // días libres / días pedidos
};

export const vacation_optimization: Record<string, VacationPeriod[]> = {
  "2025": [
    {
      period: "Semana del 18 de septiembre",
      days_to_request: ["2025-09-15", "2025-09-16", "2025-09-17"],
      total_days_off: ["2025-09-15", "2025-09-16", "2025-09-17", "2025-09-18", "2025-09-19", "2025-09-20", "2025-09-21"],
      efficiency: 7/3 // 7 días libres / 3 días pedidos
    },
    {
      period: "Día del Trabajo",
      days_to_request: ["2025-05-02"],
      total_days_off: ["2025-05-01", "2025-05-02", "2025-05-03", "2025-05-04"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    },
    {
      period: "Fin de Año",
      days_to_request: ["2025-12-26"],
      total_days_off: ["2025-12-25", "2025-12-26", "2025-12-27", "2025-12-28"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    }
  ],
  "2026": [
    {
      period: "Semana del 18 de septiembre",
      days_to_request: ["2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17"],
      total_days_off: [
        "2026-09-14", "2026-09-15", "2026-09-16", "2026-09-17",
        "2026-09-18", "2026-09-19", "2026-09-20"
      ],
      efficiency: 7/4 // 7 días libres / 4 días pedidos
    },
    {
      period: "Inmaculada Concepción",
      days_to_request: ["2026-12-07"],
      total_days_off: ["2026-12-05", "2026-12-06", "2026-12-07", "2026-12-08"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    }
  ]
};

export const getVacationOptimizationByYear = (year: number): VacationPeriod[] => {
  const yearKey = year.toString();
  return (vacation_optimization[yearKey] || []).sort((a, b) => b.efficiency - a.efficiency);
}; 