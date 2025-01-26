import { useState } from 'react';

interface Law {
  id: string;
  title: string;
  year: string;
  description: string;
  details: string[];
  source: string;
}

const laws: Law[] = [
  {
    id: "ley-2977",
    title: "Ley N° 2.977",
    year: "1915",
    description: "Establecimiento de Feriados Legales",
    details: [
      "Esta es la base legal principal que organiza los feriados en Chile.",
      "Incluye los feriados más tradicionales, como Año Nuevo (1 de enero), Viernes Santo y Sábado Santo (Semana Santa), Independencia Nacional (18 de septiembre), Día de las Glorias del Ejército (19 de septiembre), y Navidad (25 de diciembre).",
      "También regula feriados móviles religiosos, como la Ascensión del Señor y Corpus Christi, aunque algunos han sido reemplazados por otros feriados (como la Virgen del Carmen)."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-19973",
    title: "Ley N° 19.973",
    year: "2004",
    description: "Feriados Obligatorios e Irrenunciables para el Comercio",
    details: [
      "Define que los días 1 de enero, 1 de mayo, 18 y 19 de septiembre, y 25 de diciembre son irrenunciables para los trabajadores del comercio.",
      "Excepciones: Clubes, restaurantes y establecimientos de entretenimiento (como cines y espectáculos).",
      "Farmacias de urgencia o turno y expendios de combustibles.",
      "Se creó para garantizar el descanso de los trabajadores en fechas clave, limitando la operación comercial."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20148",
    title: "Ley N° 20.148",
    year: "2007",
    description: "Feriado de la Virgen del Carmen",
    details: [
      "Sustituyó al feriado móvil de Corpus Christi por el feriado fijo del 16 de julio.",
      "Dedicado a la Virgen del Carmen, Patrona de Chile.",
      "Este cambio buscó reflejar la importancia cultural y religiosa de esta figura en la historia nacional.",
      "Especialmente importante en las tradiciones de fe chilena."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20215",
    title: "Ley N° 20.215",
    year: "2007",
    description: "Feriados Adicionales en Septiembre",
    details: [
      "Agrega un feriado adicional en casos específicos:",
      "Si el 18 y 19 de septiembre caen en martes y miércoles, se declara feriado el lunes 17.",
      "Si caen en miércoles y jueves, se declara feriado el viernes 20.",
      "Esto busca facilitar el descanso prolongado durante las Fiestas Patrias."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20299",
    title: "Ley N° 20.299",
    year: "2008",
    description: "Día Nacional de las Iglesias Evangélicas y Protestantes",
    details: [
      "Declara el 31 de octubre como feriado nacional.",
      "Se denomina 'Día Nacional de las Iglesias Evangélicas y Protestantes'.",
      "Si el feriado cae en martes, se traslada al viernes anterior.",
      "Si cae en miércoles, se traslada al viernes de la misma semana."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20983",
    title: "Ley N° 20.983",
    year: "2016",
    description: "Feriados Adicionales en Enero y Septiembre",
    details: [
      "Establece feriados adicionales en fechas específicas:",
      "2 de enero, cuando el 1 de enero sea domingo.",
      "17 de septiembre, cuando el 18 de septiembre sea martes.",
      "Busca promover el turismo interno y otorgar un fin de semana largo."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-21357",
    title: "Ley N° 21.357",
    year: "2021",
    description: "Día Nacional de los Pueblos Indígenas",
    details: [
      "Declara el 24 de junio como el 'Día Nacional de los Pueblos Indígenas'.",
      "Coincide con el solsticio de invierno.",
      "Día de especial relevancia para las culturas indígenas chilenas.",
      "Reconoce oficialmente las tradiciones ancestrales de los pueblos originarios en Chile."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-21482",
    title: "Ley N° 21.482",
    year: "2022",
    description: "Feriado Nacional el 16 de septiembre de 2022",
    details: [
      "Estableció un feriado extraordinario el 16 de septiembre de 2022.",
      "Creó un puente durante las Fiestas Patrias de ese año.",
      "Medida excepcional para impulsar el descanso familiar y el turismo."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-21704",
    title: "Ley N° 21.704",
    year: "2023",
    description: "Feriado Regional el 21 de septiembre de 2024",
    details: [
      "Declara feriado el 21 de septiembre de 2024 en la Región de Magallanes y de la Antártica Chilena y la Provincia de Chiloé.",
      "Conmemora el descubrimiento del Estrecho de Magallanes.",
      "Feriado de carácter regional."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-21598",
    title: "Ley N° 21.598",
    year: "2023",
    description: "Feriado Regional el 10 de agosto de 2023",
    details: [
      "Declara feriado el 10 de agosto de 2023 en la Región de Tarapacá.",
      "En honor a la celebración religiosa de San Lorenzo de Tarapacá.",
      "Destaca una festividad de gran relevancia cultural y religiosa en la región."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20663",
    title: "Ley N° 20.663",
    year: "2013",
    description: "Feriado Regional para la Región de Arica y Parinacota",
    details: [
      "Declara el 7 de junio de cada año como feriado en la Región de Arica y Parinacota.",
      "Conmemora el Asalto y Toma del Morro de Arica.",
      "Feriado de carácter regional permanente."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  },
  {
    id: "ley-20768",
    title: "Ley N° 20.768",
    year: "2014",
    description: "Feriado Regional para Chillán y Chillán Viejo",
    details: [
      "Declara el 20 de agosto de cada año como feriado para las comunas de Chillán y Chillán Viejo.",
      "Conmemora el Nacimiento del Libertador Bernardo O'Higgins.",
      "Feriado de carácter comunal permanente."
    ],
    source: "Biblioteca del Congreso Nacional de Chile"
  }
];

export default function LawsSection() {
  const [openLawId, setOpenLawId] = useState<string | null>(null);

  const toggleLaw = (lawId: string) => {
    setOpenLawId(openLawId === lawId ? null : lawId);
  };

  return (
    <section className="container mx-auto px-4 py-8 animate-fade-in animation-delay-800">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
        Leyes de Feriados
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {laws.map((law) => (
          <div
            key={law.id}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
          >
            <button
              onClick={() => toggleLaw(law.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {law.title} ({law.year})
                </h3>
                <p className="text-sm text-gray-600">{law.description}</p>
              </div>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  openLawId === law.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {openLawId === law.id && (
              <div className="px-6 pb-4 animate-fade-in">
                <div className="prose prose-sm max-w-none">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {law.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-gray-500">
                    Fuente: {law.source}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 