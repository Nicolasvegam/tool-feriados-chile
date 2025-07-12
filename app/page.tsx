import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirigir automáticamente al año actual
  const currentYear = new Date().getFullYear().toString();
  redirect(`/${currentYear}`);
}