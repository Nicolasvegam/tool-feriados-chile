import { MetadataRoute } from 'next';
import { getHolidaysByYear, getAllMonths } from './utils/dataUtils';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.feriadosenchile.com';
  const years = ['2024', '2025', '2026', '2027'];
  const months = getAllMonths();
  
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/calculadora-vacaciones`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/calendario`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/feriados-irrenunciables`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cuanto-falta-18-septiembre`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cuanto-falta-halloween`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cuanto-falta-navidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cuanto-falta-ano-nuevo`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/quienes-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/metodologia`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/politicas-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  for (const year of years) {
    sitemapEntries.push({
      url: `${baseUrl}/${year}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });

    // Agregar páginas por mes
    for (const month of months) {
      sitemapEntries.push({
        url: `${baseUrl}/${year}/${month}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }

    const holidays = await getHolidaysByYear(year);
    for (const holiday of holidays) {
      sitemapEntries.push({
        url: `${baseUrl}/${year}/feriado/${holiday.slug}`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.6,
      });
    }
  }

  // Agregar páginas de blog (cuando se implementen)
  const blogPosts = [
    'guia-completa-feriados-chile',
    'como-optimizar-vacaciones',
    'feriados-irrenunciables-derechos',
    'historia-feriados-chile',
  ];

  for (const post of blogPosts) {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${post}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    });
  }

  return sitemapEntries;
}