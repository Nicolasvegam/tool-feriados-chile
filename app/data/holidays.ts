// Función auxiliar para generar slugs
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
    .replace(/[^a-z0-9\s-]/g, "") // Eliminar caracteres especiales
    .replace(/\s+/g, "-") // Reemplazar espacios con guiones
    .trim();
};

export const holidays = {
  "2019": [
    {
      "date": "2019-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2019-04-19",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2019-04-20",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2019-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2019-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2019-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2019-06-29",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2019-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2019-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2019-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2019-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2019-10-12",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2019-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2019-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2019-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2019-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2020": [
    {
      "date": "2020-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2020-04-10",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2020-04-11",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2020-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2020-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2020-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2020-06-29",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2020-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2020-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2020-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2020-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2020-10-12",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2020-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2020-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2020-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2020-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2021": [
    {
      "date": "2021-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2021-04-02",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2021-04-03",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2021-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2021-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2021-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2021-06-28",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2021-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2021-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2021-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2021-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2021-10-11",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2021-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2021-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2021-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2021-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2022": [
    {
      "date": "2022-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2022-04-15",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2022-04-16",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2022-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2022-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2022-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2022-06-27",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2022-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2022-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2022-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2022-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2022-10-10",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2022-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2022-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2022-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2022-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2023": [
    {
      "date": "2023-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2023-04-07",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2023-04-08",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2023-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2023-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2023-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2023-06-29",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2023-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2023-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2023-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2023-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2023-10-09",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2023-10-27",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso",
      "isRegional": true
    },
    {
      "date": "2023-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2023-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2023-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2024": [
    {
      "date": "2024-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2024-03-29",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2024-03-30",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2024-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2024-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2024-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2024-06-20",
      "name": "Día Nacional de los Pueblos Indígenas",
      "slug": "dia-nacional-de-los-pueblos-indigenas",
      "type": "Civil"
    },
    {
      "date": "2024-07-01",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2024-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2024-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2024-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2024-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2024-10-14",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2024-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2024-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2024-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2024-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2025": [
    {
      "date": "2025-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 2.977, Ley 19.973"
    },
    {
      "date": "2025-04-18",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-04-19",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Código del Trabajo, Ley 19.973"
    },
    {
      "date": "2025-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2025-06-20",
      "name": "Día Nacional de los Pueblos Indígenas",
      "slug": "dia-nacional-de-los-pueblos-indigenas",
      "type": "Civil",
      "law": "Ley 21.357"
    },
    {
      "date": "2025-06-29",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso",
      "law": "Ley 2.977, Ley 18.432, Ley 19.668"
    },
    {
      "date": "2025-06-29",
      "name": "Elecciones Primarias Presidenciales y Parlamentarias",
      "slug": "elecciones-primarias-presidenciales-y-parlamentarias",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 18.700, Ley 19.973, Ley 20.640",
      "isPendingConfirmation": true
    },
    {
      "date": "2025-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso",
      "law": "Ley 20.148"
    },
    {
      "date": "2025-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 2.977, Ley 19.973"
    },
    {
      "date": "2025-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 2.977, Ley 20.629"
    },
    {
      "date": "2025-10-13",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil",
      "law": "Ley 3.810, Ley 19.668"
    },
    {
      "date": "2025-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso",
      "law": "Ley 20.299"
    },
    {
      "date": "2025-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-11-16",
      "name": "Elecciones Presidenciales y Parlamentarias",
      "slug": "elecciones-presidenciales-y-parlamentarias",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 18.700, Ley 19.973, Ley 20.515, Ley 21.073"
    },
    {
      "date": "2025-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso",
      "law": "Ley 2.977"
    },
    {
      "date": "2025-12-14",
      "name": "Elecciones Presidenciales (Segunda Vuelta)",
      "slug": "elecciones-presidenciales-segunda-vuelta",
      "type": "Civil",
      "isIrrenunciable": true,
      "law": "Ley 18.700, Ley 19.973, Ley 20.515",
      "isPendingConfirmation": true
    },
    {
      "date": "2025-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true,
      "law": "Ley 2.977, Ley 19.973"
    }
  ],
  "2026": [
    {
      "date": "2026-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2026-04-03",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2026-04-04",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2026-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2026-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2026-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2026-06-20",
      "name": "Día Nacional de los Pueblos Indígenas",
      "slug": "dia-nacional-de-los-pueblos-indigenas",
      "type": "Civil"
    },
    {
      "date": "2026-06-29",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2026-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2026-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2026-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2026-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2026-10-12",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2026-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2026-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2026-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2026-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ],
  "2027": [
    {
      "date": "2027-01-01",
      "name": "Año Nuevo",
      "slug": "ano-nuevo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2027-03-26",
      "name": "Viernes Santo",
      "slug": "viernes-santo",
      "type": "Religioso"
    },
    {
      "date": "2027-03-27",
      "name": "Sábado Santo",
      "slug": "sabado-santo",
      "type": "Religioso"
    },
    {
      "date": "2027-05-01",
      "name": "Día Nacional del Trabajo",
      "slug": "dia-nacional-del-trabajo",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2027-05-21",
      "name": "Día de las Glorias Navales",
      "slug": "dia-de-las-glorias-navales",
      "type": "Civil"
    },
    {
      "date": "2027-06-07",
      "name": "Asalto y Toma del Morro de Arica",
      "slug": "asalto-y-toma-del-morro-de-arica",
      "type": "Civil",
      "isRegional": true,
      "region": "Región de Arica y Parinacota"
    },
    {
      "date": "2027-06-20",
      "name": "Día Nacional de los Pueblos Indígenas",
      "slug": "dia-nacional-de-los-pueblos-indigenas",
      "type": "Civil"
    },
    {
      "date": "2027-06-28",
      "name": "San Pedro y San Pablo",
      "slug": "san-pedro-y-san-pablo",
      "type": "Religioso"
    },
    {
      "date": "2027-07-16",
      "name": "Virgen del Carmen",
      "slug": "virgen-del-carmen",
      "type": "Religioso"
    },
    {
      "date": "2027-08-15",
      "name": "Asunción de la Virgen",
      "slug": "asuncion-de-la-virgen",
      "type": "Religioso"
    },
    {
      "date": "2027-09-18",
      "name": "Independencia Nacional",
      "slug": "independencia-nacional",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2027-09-19",
      "name": "Día de las Glorias del Ejército",
      "slug": "dia-de-las-glorias-del-ejercito",
      "type": "Civil",
      "isIrrenunciable": true
    },
    {
      "date": "2027-10-11",
      "name": "Encuentro de Dos Mundos",
      "slug": "encuentro-de-dos-mundos",
      "type": "Civil"
    },
    {
      "date": "2027-10-31",
      "name": "Día de las Iglesias Evangélicas y Protestantes",
      "slug": "dia-de-las-iglesias-evangelicas-y-protestantes",
      "type": "Religioso"
    },
    {
      "date": "2027-11-01",
      "name": "Día de Todos los Santos",
      "slug": "dia-de-todos-los-santos",
      "type": "Religioso"
    },
    {
      "date": "2027-12-08",
      "name": "Inmaculada Concepción",
      "slug": "inmaculada-concepcion",
      "type": "Religioso"
    },
    {
      "date": "2027-12-25",
      "name": "Navidad",
      "slug": "navidad",
      "type": "Religioso",
      "isIrrenunciable": true
    }
  ]
};

export type Holiday = {
  date: string;
  name: string;
  slug: string;
  type: "Civil" | "Religioso";
  isIrrenunciable?: boolean;
  isRegional?: boolean;
  region?: string;
  law?: string;
  isPendingConfirmation?: boolean;
};

export const getHolidaysByYear = (year: number): Holiday[] => {
  const yearKey = year.toString() as keyof typeof holidays;
  return (holidays[yearKey] || []) as Holiday[];
};