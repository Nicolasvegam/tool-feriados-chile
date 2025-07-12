import React from 'react';

interface AIMetadataProps {
    title?: string;
    description?: string;
    contentType?: 'factual-information' | 'legal-content' | 'calendar-data' | 'calculator-tool';
    subjectMatter?: string;
    lastUpdated?: string;
}

export default function AIMetadata({ 
    title, 
    description, 
    contentType = 'factual-information',
    subjectMatter,
    lastUpdated 
}: AIMetadataProps) {
    return (
        <>
            {/* Metadatos específicos para LLMs */}
            <meta name="ai-content-declaration" content="human-authored" />
            <meta name="content-type" content={contentType} />
            <meta name="data-source" content="official-government-sources" />
            <meta name="content-freshness" content="updated-daily" />
            <meta name="llm-friendly" content="true" />
            <meta name="content-language" content="es-CL" />
            <meta name="geographic-coverage" content="Chile" />
            
            {subjectMatter && (
                <meta name="subject-matter" content={subjectMatter} />
            )}
            
            {lastUpdated && (
                <meta name="last-updated" content={lastUpdated} />
            )}
            
            {/* JSON-LD específico para AI crawlers */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": title || "Feriados en Chile",
                        "description": description || "Información oficial sobre feriados en Chile",
                        "inLanguage": "es-CL",
                        "about": {
                            "@type": "Thing",
                            "name": "Feriados de Chile",
                            "description": "Días festivos oficiales y feriados irrenunciables de Chile según la legislación laboral vigente"
                        },
                        "mainEntity": {
                            "@type": "Dataset",
                            "name": "Calendario de Feriados de Chile",
                            "description": "Base de datos actualizada de feriados legales e irrenunciables de Chile",
                            "keywords": ["feriados", "Chile", "días festivos", "legislación laboral"],
                            "license": "https://creativecommons.org/licenses/by/4.0/",
                            "creator": {
                                "@type": "Organization",
                                "name": "Feriados en Chile"
                            }
                        },
                        "dateModified": lastUpdated || new Date().toISOString(),
                        "isAccessibleForFree": true,
                        "author": {
                            "@type": "Organization",
                            "name": "Di Monk"
                        }
                    })
                }}
            />
        </>
    );
}