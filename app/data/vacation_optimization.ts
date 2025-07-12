export type VacationPeriod = {
  period: string;
  days_to_request: string[];
  total_days_off: string[];
  efficiency: number; // días libres / días pedidos
};

export const vacation_optimization: Record<string, VacationPeriod[]> = {
  "2024": [
    {
      period: "Navidad y Año Nuevo",
      days_to_request: ["2024-12-26", "2024-12-27", "2024-12-30", "2024-12-31"],
      total_days_off: [
        "2024-12-25", "2024-12-26", "2024-12-27", "2024-12-28", 
        "2024-12-29", "2024-12-30", "2024-12-31", "2025-01-01"
      ],
      efficiency: 8/4 // 8 días libres / 4 días pedidos
    }
  ],
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
    },
    {
      period: "Día del Trabajo",
      days_to_request: ["2026-04-30"],
      total_days_off: ["2026-04-30", "2026-05-01", "2026-05-02", "2026-05-03"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    }
  ],
  "2027": [
    {
      period: "Año Nuevo",
      days_to_request: ["2027-01-04"],
      total_days_off: ["2027-01-01", "2027-01-02", "2027-01-03", "2027-01-04"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    },
    {
      period: "Semana Santa",
      days_to_request: ["2027-04-01"],
      total_days_off: ["2027-04-01", "2027-04-02", "2027-04-03", "2027-04-04"],
      efficiency: 4/1 // 4 días libres / 1 día pedido
    },
    {
      period: "Semana del 18 de septiembre",
      days_to_request: ["2027-09-20"],
      total_days_off: ["2027-09-18", "2027-09-19", "2027-09-20"],
      efficiency: 3/1 // 3 días libres / 1 día pedido
    }
  ]
};

export const getVacationOptimizationByYear = (year: number): VacationPeriod[] => {
  const yearKey = year.toString();
  return (vacation_optimization[yearKey] || []).sort((a, b) => b.efficiency - a.efficiency);
}; 