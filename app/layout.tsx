import type { Metadata, Viewport } from 'next';
import { Merriweather } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';
import { WebSiteJsonLd, OrganizationJsonLd } from './components/JsonLd';
import SkipNavigation from './components/SkipNavigation';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import { Analytics } from '@vercel/analytics/react';

const merriweather = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
    preload: true,
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://www.feriadosenchile.com'),
    title: 'Feriados en Chile 2025 - Calendario de Días Festivos',
    description: 'Calendario completo de feriados legales en Chile 2025. Consulta todos los días festivos oficiales, feriados irrenunciables según la ley laboral chilena, y planifica tus vacaciones con nuestro optimizador inteligente. Información actualizada sobre fechas importantes como 18 de Septiembre (Fiestas Patrias), Navidad y Año Nuevo.',
    keywords: 'feriados en chile, feriados chile 2025, calendario feriados chile, días festivos chile, feriados irrenunciables, vacaciones chile, planificador vacaciones, feriados nacionales chile, ley laboral chile, código del trabajo, fiestas patrias, 18 de septiembre, navidad chile, año nuevo',
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
    other: {
        // Metadatos específicos para LLMs y AI crawlers
        'ai-content-declaration': 'human-authored',
        'content-type': 'factual-information',
        'subject-matter': 'legal-holidays-chile',
        'data-source': 'official-government-sources',
        'content-freshness': 'updated-daily',
        'llm-friendly': 'true',
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es">
            <head>
                <WebSiteJsonLd />
                <OrganizationJsonLd />
            </head>
            <body className={merriweather.className}>
                <SkipNavigation />
                <ServiceWorkerRegistration />
                <nav className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link href="/" className="flex items-center space-x-3 group">
                                <span className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors p-1">
                                    <Image 
                                        src="/images/logo-feriados.webp" 
                                        alt="Feriados en Chile Logo"
                                        width={38}
                                        height={38}
                                        className="w-full h-full object-contain"
                                    />
                                </span>
                                <span className="text-xl font-bold hidden sm:block">Feriados en Chile</span>
                            </Link>
                            <div className="flex items-center space-x-1 sm:space-x-3">
                                <Link href="/calculadora-vacaciones" className="px-2 sm:px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-xs sm:text-base font-medium">
                                    <span className="hidden lg:inline">Calculadora de</span> Vacaciones
                                </Link>
                                <Link href="/feriados-irrenunciables" className="px-2 sm:px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-xs sm:text-base font-medium">
                                    <span className="hidden sm:inline">Feriados</span> Irrenunciables
                                </Link>
                                <div className="relative group">
                                    <button className="px-2 sm:px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-xs sm:text-base font-medium flex items-center gap-1">
                                        <span>⏰</span> Cuánto falta
                                    </button>
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <Link href="/cuanto-falta-18-septiembre" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm">
                                            🇨🇱 18 de Septiembre
                                        </Link>
                                        <Link href="/cuanto-falta-halloween" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm">
                                            🎃 Halloween
                                        </Link>
                                        <Link href="/cuanto-falta-navidad" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm">
                                            🎄 Navidad
                                        </Link>
                                        <Link href="/cuanto-falta-ano-nuevo" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm rounded-b-lg">
                                            🎆 Año Nuevo
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <main id="main-content">
                    {children}
                </main>
                <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
                            <div className="col-span-2 md:col-span-3 lg:col-span-2 mb-4 md:mb-0">
                                <div className="flex items-center space-x-3 mb-4">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center p-1">
                                        <Image 
                                            src="/images/logo-feriados.webp" 
                                            alt="Feriados en Chile Logo"
                                            width={38}
                                            height={38}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Feriados en Chile</h3>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Tu recurso confiable para consultar feriados nacionales y planificar tus vacaciones de manera inteligente.
                                </p>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Calendario de Feriados
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/calculadora-vacaciones" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Calculadora de Vacaciones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/feriados-irrenunciables" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Feriados Irrenunciables
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Cuánto falta</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/cuanto-falta-18-septiembre" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                            <span>🇨🇱</span> 18 de Septiembre
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cuanto-falta-halloween" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                            <span>🎃</span> Halloween
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cuanto-falta-navidad" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                            <span>🎄</span> Navidad
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/cuanto-falta-ano-nuevo" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-2">
                                            <span>🎆</span> Año Nuevo
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Años Disponibles</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/2024" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Feriados 2024
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/2025" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Feriados 2025
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/2026" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Feriados 2026
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Información</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/quienes-somos" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Quiénes Somos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/metodologia" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Metodología
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Contacto
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-lg font-semibold mb-4">Legal</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="/terminos-y-condiciones" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Términos y Condiciones
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/politicas-de-privacidad" className="text-gray-300 hover:text-white transition-colors text-sm">
                                            Políticas de Privacidad
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                            <p className="text-sm text-gray-400">
                                © 2024 Feriados en Chile - Todos los derechos reservados
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                                Creado con ❤️ por <a href="https://www.dimonk.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">Di Monk</a>
                            </p>
                        </div>
                    </div>
                </footer>
                <Analytics />
            </body>
        </html>
    );
}
