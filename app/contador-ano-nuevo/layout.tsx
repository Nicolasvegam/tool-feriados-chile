import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cuánto falta para Año Nuevo - Feriados en Chile',
  description: 'Descubre cuánto falta para Año Nuevo. ¡Prepárate para recibir el nuevo año con alegría!',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}