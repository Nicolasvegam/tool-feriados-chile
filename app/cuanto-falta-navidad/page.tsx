import { Metadata } from 'next';
import NavidadClient from './NavidadClient';

export const metadata: Metadata = {
  title: 'Cuánto Falta para Navidad - Contador en Tiempo Real | Feriados Chile',
  description: 'Descubre cuánto falta para Navidad con nuestro contador en tiempo real. Celebra la Navidad con tradiciones chilenas, villancicos y la magia navideña. ¡Ho ho ho!',
  keywords: 'navidad, cuanto falta navidad, contador navidad, navidad chile, tradiciones navideñas, villancicos, papa noel, santa claus',
  openGraph: {
    title: 'Cuánto Falta para Navidad - Contador en Tiempo Real',
    description: 'Cuenta regresiva para la Navidad con tradiciones chilenas y la magia navideña.',
    url: 'https://www.feriadosenchile.com/cuanto-falta-navidad',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.feriadosenchile.com/cuanto-falta-navidad',
  },
};

export default function ContadorNavidad() {
  return <NavidadClient />;
}