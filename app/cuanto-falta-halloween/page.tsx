import { Metadata } from 'next';
import HalloweenCountdown from './HalloweenCountdown';

export const metadata: Metadata = {
  title: '¿Cuánto Falta para Halloween? - Contador de Días | Feriados Chile',
  description: 'Descubre cuántos días faltan para Halloween. Contador en tiempo real para la noche más terrorífica del año.',
  keywords: 'halloween chile, cuanto falta halloween, contador halloween, noche de brujas, 31 octubre',
  openGraph: {
    title: '¿Cuánto Falta para Halloween?',
    description: 'Cuenta regresiva para Halloween - La noche más terrorífica del año',
    url: 'https://www.feriadosenchile.com/cuanto-falta-halloween',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/cuanto-falta-halloween',
  },
};

export default function ContadorHalloweenPage() {
  return <HalloweenCountdown />;
}