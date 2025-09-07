interface JsonLdProps {
  type: 'WebSite' | 'FAQPage' | 'BreadcrumbList' | 'Event' | 'WebApplication';
  data: any;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebSiteJsonLd({ url }: { url: string }) {
  return (
    <JsonLd
      type="WebSite"
      data={{
        name: 'Feriados en Chile',
        description: 'Calendario oficial de feriados en Chile. Consulta días festivos, feriados irrenunciables y planifica tus vacaciones.',
        url: url,
        inLanguage: 'es-CL',
        publisher: {
          '@type': 'Organization',
          name: 'Feriados en Chile',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.feriadosenchile.com/images/logo-feriados.webp'
          }
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.feriadosenchile.com/buscar?q={search_term_string}'
          },
          'query-input': 'required name=search_term_string'
        },
        mainEntity: {
          '@type': 'WebApplication',
          name: 'Calculadora de Feriados Chile',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'CLP'
          }
        }
      }}
    />
  );
}

export function FAQJsonLd({ faqs, url }: { faqs?: Array<{ question: string; answer: string }>; url: string }) {
  const defaultFaqs = [
    {
      question: '¿Cuántos feriados irrenunciables hay en Chile?',
      answer: 'En Chile hay 8 feriados irrenunciables al año: Año Nuevo, Viernes Santo, Sábado Santo, 1 de Mayo, 21 de Mayo, 18 de Septiembre, 19 de Septiembre, y Navidad.'
    },
    {
      question: '¿Qué significa que un feriado sea irrenunciable?',
      answer: 'Un feriado irrenunciable significa que los trabajadores del comercio tienen derecho a descanso obligatorio. Si trabajan, deben recibir compensación adicional según la ley.'
    },
    {
      question: '¿Los feriados religiosos son obligatorios?',
      answer: 'No todos los feriados religiosos son obligatorios. Solo Viernes Santo, Sábado Santo y Navidad son irrenunciables. Otros como Asunción de la Virgen o Inmaculada Concepción son renunciables.'
    },
    {
      question: '¿Qué pasa si un feriado cae fin de semana?',
      answer: 'Cuando un feriado cae en fin de semana, generalmente no se traslada a otro día, excepto en casos específicos establecidos por ley.'
    },
    {
      question: '¿Cómo se calculan las vacaciones en Chile?',
      answer: 'Los trabajadores con un año de servicio tienen derecho a 15 días hábiles de vacaciones. Estos días no incluyen sábados, domingos ni feriados.'
    }
  ];

  const faqData = faqs || defaultFaqs;

  return (
    <JsonLd
      type="FAQPage"
      data={{
        url: url,
        mainEntity: faqData.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: Array<{ name: string; url: string }> }) {
  return (
    <JsonLd
      type="BreadcrumbList"
      data={{
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      }}
    />
  );
}

export function OrganizationJsonLd({ url }: { url: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Feriados en Chile',
          url: url,
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.feriadosenchile.com/images/logo-feriados.webp',
            width: 800,
            height: 600
          },
          description: 'Calendario oficial de feriados en Chile. Consulta días festivos, feriados irrenunciables y planifica tus vacaciones.',
          sameAs: [
            'https://twitter.com/dimonk',
            'https://www.dimonk.com'
          ],
          founder: {
            '@type': 'Person',
            name: 'Di Monk',
            url: 'https://www.dimonk.com'
          }
        })
      }}
    />
  );
}