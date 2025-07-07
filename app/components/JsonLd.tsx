export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Feriados en Chile",
    "description": "Calendario completo de feriados en Chile 2025. Consulta todos los días festivos, feriados irrenunciables y planifica tus vacaciones con nuestro optimizador inteligente.",
    "url": "https://www.feriadosenchile.com",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CLP"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Di Monk",
      "url": "https://dimonk.cl"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "inLanguage": "es-CL",
    "keywords": "feriados chile, calendario feriados, días festivos chile, feriados 2025, vacaciones chile",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://www.feriadosenchile.com"
      }]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}