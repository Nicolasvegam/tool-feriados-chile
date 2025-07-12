import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuánto falta para Navidad - Feriados en Chile',
  description: 'Descubre cuánto falta para Navidad. ¡Prepárate para la llegada de Santa Claus!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}