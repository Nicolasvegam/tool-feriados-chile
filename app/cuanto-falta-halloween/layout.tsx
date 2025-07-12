import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuánto falta para Halloween - Feriados en Chile',
  description: 'Descubre cuánto falta para Halloween. ¡Prepárate para la noche más terrorífica del año!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}