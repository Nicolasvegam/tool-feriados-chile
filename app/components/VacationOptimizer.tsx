import VacationDeals from './VacationDeals/VacationDeals';

interface VacationDeal {
  period: string;
  days_to_request: string[];
  total_days_off: string[];
  efficiency: number;
}

interface VacationOptimizerProps {
  vacationDeals: VacationDeal[];
  year: string;
}

export default function VacationOptimizer({ vacationDeals, year }: VacationOptimizerProps) {
  return <VacationDeals deals={vacationDeals} />;
}