import type { Metadata, Viewport } from 'next';
import { Merriweather } from 'next/font/google';
import './globals.css';
import JsonLd from './components/JsonLd';

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.feriadosenchile.com'),
    title: 'Feriados en Chile 2025 - Calendario de Días Festivos',
    description: 'Calendario completo de feriados en Chile 2025. Consulta todos los días festivos, feriados irrenunciables y planifica tus vacaciones con nuestro optimizador inteligente.',
    keywords: 'feriados en chile, feriados chile 2025, calendario feriados chile, días festivos chile, feriados irrenunciables, vacaciones chile, planificador vacaciones, feriados nacionales chile',
    authors: [{ name: 'Di Monk' }],
    creator: 'Di Monk',
    publisher: 'Di Monk',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/images/logo-app.webp', sizes: '32x32', type: 'image/webp' },
            { url: '/images/logo-app.webp', sizes: '16x16', type: 'image/webp' }
        ],
        shortcut: '/images/logo-app.webp',
        apple: [
            { url: '/images/logo-app.webp', sizes: '180x180', type: 'image/webp' }
        ],
        other: [
            {
                rel: 'apple-touch-icon-precomposed',
                url: '/images/logo-app.webp',
            },
            {
                rel: 'mask-icon',
                url: '/images/logo-app.webp',
                color: '#3b82f6'
            }
        ],
    },
    manifest: '/manifest.json',
    openGraph: {
        type: 'website',
        locale: 'es_CL',
        url: 'https://www.feriadosenchile.com/',
        title: 'Feriados en Chile 2025 - Calendario de Días Festivos',
        description: 'Calendario completo de feriados en Chile 2025. Consulta todos los días festivos, feriados irrenunciables y planifica tus vacaciones con nuestro optimizador inteligente.',
        siteName: 'Feriados en Chile',
        images: [{
            url: '/images/logo-app.webp',
            width: 800,
            height: 600,
            alt: 'Feriados de Chile Logo',
        }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Feriados en Chile 2025 - Calendario de Días Festivos',
        description: 'Calendario completo de feriados en Chile 2025. Consulta todos los días festivos y planifica tus vacaciones.',
        images: ['/images/logo-app.webp'],
        creator: '@dimonk',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: 'https://www.feriadosenchile.com',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es">
            <head>
                <JsonLd />
            </head>
            <body className={merriweather.className}>{children}</body>
        </html>
    );
}
