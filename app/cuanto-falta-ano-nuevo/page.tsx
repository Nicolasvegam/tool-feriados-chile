import { Metadata } from 'next';
import AnoNuevoClient from './AnoNuevoClient';

export const metadata: Metadata = {
  title: 'Cuánto Falta para Año Nuevo - Contador en Tiempo Real | Feriados Chile',
  description: 'Descubre cuánto falta para Año Nuevo con nuestro contador en tiempo real. Celebra con rituales chilenos, propósitos y la magia del nuevo año. ¡Feliz Año Nuevo!',
  keywords: 'año nuevo, cuanto falta año nuevo, contador año nuevo, rituales año nuevo, propósitos año nuevo, celebración chile, fuegos artificiales',
  openGraph: {
    title: 'Cuánto Falta para Año Nuevo - Contador en Tiempo Real',
    description: 'Cuenta regresiva para el Año Nuevo con rituales y celebraciones chilenas.',
    url: 'https://www.feriadosenchile.com/cuanto-falta-ano-nuevo',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/cuanto-falta-ano-nuevo',
  },
};

export default function ContadorAnoNuevo() {
  return <AnoNuevoClient />;
}