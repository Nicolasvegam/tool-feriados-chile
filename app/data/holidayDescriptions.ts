export interface HolidayDescription {
  slug: string;
  history: string;
  significance: string;
  traditions?: string;
  celebrations?: string;
  facts?: string[];
}

export const holidayDescriptions: Record<string, HolidayDescription> = {
  'ano-nuevo': {
    slug: 'ano-nuevo',
    history: 'El Año Nuevo marca el inicio del calendario gregoriano, adoptado en Chile durante la época colonial española. Esta celebración tiene sus raíces en las antiguas festividades romanas dedicadas a Jano, el dios de los comienzos.',
    significance: 'Representa un momento de renovación y nuevos comienzos para los chilenos. Es un día de reflexión sobre el año pasado y de establecimiento de metas y propósitos para el año que comienza.',
    traditions: 'Las familias chilenas se reúnen para cenar en Nochevieja, seguido de fuegos artificiales a medianoche. Es tradicional comer 12 uvas al ritmo de las campanadas, usar ropa interior amarilla para la buena suerte, y realizar diversos rituales como dar la vuelta a la manzana con maletas para viajar durante el año.',
    celebrations: 'Las principales ciudades de Chile organizan espectáculos de fuegos artificiales, siendo el de Valparaíso uno de los más famosos de Sudamérica, atrayendo a más de un millón de espectadores cada año.',
    facts: [
      'El show de fuegos artificiales de Valparaíso dura aproximadamente 25 minutos',
      'Más de 2 millones de personas celebran en las calles de Santiago',
      'Es el segundo feriado más importante del año después de Navidad'
    ]
  },
  'viernes-santo': {
    slug: 'viernes-santo',
    history: 'El Viernes Santo conmemora la crucifixión y muerte de Jesucristo en el Calvario. En Chile, esta fecha ha sido observada desde la llegada de los conquistadores españoles en el siglo XVI.',
    significance: 'Para la comunidad católica chilena, que representa aproximadamente el 60% de la población, es uno de los días más solemnes del calendario litúrgico. Marca el sacrificio supremo de Cristo por la humanidad.',
    traditions: 'Se realizan procesiones del Vía Crucis en muchas ciudades, especialmente en localidades con fuerte tradición religiosa como La Tirana y Andacollo. Es día de ayuno y abstinencia de carne para los católicos practicantes.',
    celebrations: 'Las iglesias realizan la liturgia de la Pasión del Señor a las 15:00 horas, hora tradicional de la muerte de Cristo. Muchas comunidades organizan representaciones teatrales de la Pasión.',
    facts: [
      'Es el único día del año en que no se celebra misa en la Iglesia Católica',
      'Tradicionalmente se consume pescado y mariscos en lugar de carnes rojas',
      'Muchos comercios cierran o reducen su horario por respeto a la solemnidad del día'
    ]
  },
  'sabado-santo': {
    slug: 'sabado-santo',
    history: 'El Sábado Santo, también conocido como Sábado de Gloria, conmemora el día que Jesucristo permaneció en el sepulcro. Es un día de espera y reflexión antes de la celebración de la Resurrección.',
    significance: 'Representa un momento de transición entre el dolor de la crucifixión y la alegría de la resurrección. Para los cristianos, es un día de esperanza y preparación espiritual.',
    traditions: 'Por la noche se celebra la Vigilia Pascual, considerada la celebración más importante del año litúrgico. Se enciende el Cirio Pascual y se bendicen las aguas bautismales.',
    celebrations: 'La Vigilia Pascual incluye la bendición del fuego nuevo, el pregón pascual, lecturas bíblicas, y frecuentemente bautismos de adultos. Las campanas, que han permanecido en silencio desde el Jueves Santo, vuelven a sonar.',
    facts: [
      'Es el día de mayor cantidad de bautismos de adultos en el año',
      'La Vigilia Pascual es la celebración litúrgica más larga del año',
      'Marca el fin del Triduo Pascual, los tres días más santos del cristianismo'
    ]
  },
  'dia-nacional-del-trabajo': {
    slug: 'dia-nacional-del-trabajo',
    history: 'El Día del Trabajo tiene su origen en las luchas obreras del siglo XIX, particularmente en los eventos del 1 de mayo de 1886 en Chicago, Estados Unidos. En Chile se celebra oficialmente desde 1931.',
    significance: 'Conmemora las conquistas laborales y los derechos de los trabajadores chilenos. Es un día de reconocimiento a la dignidad del trabajo y la importancia de los trabajadores en el desarrollo del país.',
    traditions: 'La Central Unitaria de Trabajadores (CUT) organiza marchas y concentraciones en las principales ciudades. Los sindicatos realizan actividades conmemorativas y presentan sus demandas laborales.',
    celebrations: 'Se realizan actos culturales, discursos de líderes sindicales y autoridades. Muchas empresas organizan celebraciones para sus trabajadores con asados y actividades recreativas.',
    facts: [
      'Chile fue uno de los primeros países latinoamericanos en establecer la jornada laboral de 8 horas',
      'La marcha principal en Santiago convoca a más de 100.000 personas',
      'Es feriado irrenunciable desde el año 2007'
    ]
  },
  'dia-de-las-glorias-navales': {
    slug: 'dia-de-las-glorias-navales',
    history: 'Conmemora el Combate Naval de Iquique del 21 de mayo de 1879, donde el capitán Arturo Prat Chacón y su tripulación murieron heroicamente en la corbeta Esmeralda durante la Guerra del Pacífico.',
    significance: 'Es una fecha fundamental para la identidad naval y patriótica de Chile. Representa los valores de honor, sacrificio y deber que caracterizan a las Fuerzas Armadas chilenas.',
    traditions: 'Se realiza la ceremonia de izamiento del pabellón patrio en todas las reparticiones públicas. Los estudiantes participan en actos cívicos y se realizan ofrendas florales en monumentos a los héroes navales.',
    celebrations: 'El Presidente de la República presenta la Cuenta Pública ante el Congreso Nacional en Valparaíso. La Armada realiza desfiles navales en los principales puertos del país.',
    facts: [
      'Las últimas palabras de Arturo Prat fueron "¡Al abordaje, muchachos!"',
      'La Esmeralda se hundió después de ser embestida tres veces por el monitor Huáscar',
      'El uniforme de gala de la Armada de Chile es negro en señal de luto por este combate'
    ]
  },
  'asalto-y-toma-del-morro-de-arica': {
    slug: 'asalto-y-toma-del-morro-de-arica',
    history: 'El 7 de junio de 1880, las tropas chilenas tomaron el Morro de Arica en solo 55 minutos durante la Guerra del Pacífico, en una de las batallas más decisivas del conflicto.',
    significance: 'Simboliza el valor y la eficacia del Ejército de Chile. La victoria consolidó el dominio chileno en el norte y fue determinante para el desenlace de la Guerra del Pacífico.',
    traditions: 'En Arica se realizan ceremonias militares especiales y se rinde homenaje a los caídos en el Morro. Las unidades militares de la zona norte participan en desfiles conmemorativos.',
    celebrations: 'Se realizan recreaciones históricas de la batalla, ceremonias en el Museo Histórico y de Armas del Morro de Arica, y actividades culturales que destacan la historia regional.',
    facts: [
      'La batalla duró solo 55 minutos',
      'El Morro de Arica tiene 139 metros de altura',
      'Participaron cerca de 4.000 soldados chilenos contra 1.600 defensores'
    ]
  },
  'dia-nacional-de-los-pueblos-indigenas': {
    slug: 'dia-nacional-de-los-pueblos-indigenas',
    history: 'Establecido en 2021 para reconocer y valorar la diversidad cultural de los pueblos originarios de Chile. Reemplazó al antiguo "Día de la Raza" como parte de un proceso de reconocimiento histórico.',
    significance: 'Reconoce la contribución fundamental de los pueblos indígenas a la identidad nacional chilena. Promueve el respeto por la diversidad cultural y los derechos de los pueblos originarios.',
    traditions: 'Se realizan ceremonias tradicionales como el We Tripantu (año nuevo mapuche), rogativas, y muestras de artesanía y gastronomía indígena en todo el país.',
    celebrations: 'Festivales culturales con música, danza y comida tradicional de los diferentes pueblos originarios. Charlas educativas sobre historia y cultura indígena en escuelas y universidades.',
    facts: [
      'Chile reconoce 10 pueblos indígenas oficialmente',
      'El pueblo Mapuche representa cerca del 80% de la población indígena del país',
      'Aproximadamente el 12% de la población chilena pertenece a algún pueblo originario'
    ]
  },
  'san-pedro-y-san-pablo': {
    slug: 'san-pedro-y-san-pablo',
    history: 'Celebra a los apóstoles Pedro y Pablo, considerados pilares de la Iglesia Católica. Pedro fue el primer Papa y Pablo el gran evangelizador de los gentiles.',
    significance: 'Es especialmente importante para las comunidades pesqueras de Chile, ya que San Pedro es el patrono de los pescadores. Marca también el inicio del invierno en el hemisferio sur.',
    traditions: 'En las caletas de pescadores se realizan procesiones marítimas con la imagen de San Pedro. Los botes y lanchas son decorados y bendecidos para asegurar buena pesca durante el año.',
    celebrations: 'Las principales celebraciones ocurren en puertos como Valparaíso, San Antonio, y Coquimbo. Se realizan misas especiales, bailes religiosos y festividades que mezclan lo sagrado con lo profano.',
    facts: [
      'Es el santo patrono de más de 100 caletas pesqueras en Chile',
      'Las celebraciones en algunas caletas duran hasta tres días',
      'Se bendicen las redes y embarcaciones para la temporada de pesca'
    ]
  },
  'virgen-del-carmen': {
    slug: 'virgen-del-carmen',
    history: 'La Virgen del Carmen es la Patrona de Chile desde 1817, cuando Bernardo O\'Higgins la proclamó como tal antes de la Batalla de Chacabuco. Es también patrona de las Fuerzas Armadas.',
    significance: 'Representa la protección divina sobre la nación chilena. Su devoción está profundamente arraigada en la identidad religiosa y patriótica del país.',
    traditions: 'Se realizan procesiones multitudinarias, especialmente en el Santuario de La Tirana en el norte de Chile, donde se congregan más de 250.000 peregrinos cada año.',
    celebrations: 'Las Fuerzas Armadas realizan ceremonias especiales. En La Tirana se presentan bailes religiosos con más de 200 cofradías danzantes. Las iglesias carmelitas organizan novenas y misas solemnes.',
    facts: [
      'La Fiesta de La Tirana es la celebración mariana más grande de Chile',
      'El Templo Votivo de Maipú fue construido en honor a la promesa de O\'Higgins',
      'Más de 200 bailes religiosos participan en La Tirana'
    ]
  },
  'asuncion-de-la-virgen': {
    slug: 'asuncion-de-la-virgen',
    history: 'Celebra el dogma católico de la Asunción de María al cielo en cuerpo y alma. Este dogma fue proclamado oficialmente por el Papa Pío XII en 1950, aunque la tradición es mucho más antigua.',
    significance: 'Es una de las principales festividades marianas del calendario católico. Para los creyentes, representa la promesa de la resurrección y la vida eterna.',
    traditions: 'Se realizan procesiones con imágenes de la Virgen María en advocaciones locales. Muchas familias visitan santuarios marianos y participan en misas especiales.',
    celebrations: 'Los principales santuarios marianos del país organizan peregrinaciones y celebraciones especiales. Se realizan vigilias de oración y cantos marianos tradicionales.',
    facts: [
      'Chile tiene más de 70 santuarios marianos reconocidos',
      'Es feriado religioso en la mayoría de los países católicos',
      'Marca tradicionalmente el fin del invierno en el calendario popular chileno'
    ]
  },
  'independencia-nacional': {
    slug: 'independencia-nacional',
    history: 'El 18 de septiembre de 1810 se realizó la Primera Junta Nacional de Gobierno, marcando el inicio del proceso de independencia de Chile del Imperio Español.',
    significance: 'Es la fiesta patria más importante de Chile, celebrando el nacimiento de la república y la identidad nacional. Representa la libertad y soberanía del pueblo chileno.',
    traditions: 'Se realizan fondas y ramadas con comida típica, bailes tradicionales como la cueca, y juegos populares. Es tradicional empinar volantines (cometas) y realizar asados familiares.',
    celebrations: 'La Parada Militar en el Parque O\'Higgins de Santiago es el evento central. Las celebraciones duran varios días e incluyen festividades en todo el país con actividades culturales y deportivas.',
    facts: [
      'Las celebraciones pueden extenderse por una semana completa',
      'Se consumen más de 10 millones de empanadas durante las fiestas',
      'La Parada Militar congrega a más de 10.000 efectivos de las Fuerzas Armadas'
    ]
  },
  'dia-de-las-glorias-del-ejercito': {
    slug: 'dia-de-las-glorias-del-ejercito',
    history: 'Conmemora la Batalla de Rancagua del 1 y 2 de octubre de 1814, donde las fuerzas patriotas resistieron heroicamente antes de la Reconquista Española.',
    significance: 'Honra al Ejército de Chile y su rol en la independencia nacional. La batalla, aunque fue una derrota táctica, demostró el espíritu de sacrificio de los patriotas.',
    traditions: 'Se realizan ceremonias militares en el Memorial de Rancagua. Las unidades del Ejército participan en desfiles y se rinden honores a los caídos.',
    celebrations: 'La Parada Militar del 19 de septiembre es la principal celebración, formando parte de las Fiestas Patrias. Se realizan demostraciones de destreza militar y exhibiciones ecuestres.',
    facts: [
      'Bernardo O\'Higgins lideró la defensa de Rancagua',
      'La batalla duró 33 horas continuas',
      'Los patriotas resistieron con 1.800 hombres contra 5.000 realistas'
    ]
  },
  'encuentro-de-dos-mundos': {
    slug: 'encuentro-de-dos-mundos',
    history: 'Conmemora la llegada de Cristóbal Colón a América el 12 de octubre de 1492. Anteriormente conocido como "Día de la Raza", fue rebautizado para promover una visión más inclusiva.',
    significance: 'Marca el inicio del encuentro entre las culturas europea y americana. Es una fecha de reflexión sobre el mestizaje y la diversidad cultural de América Latina.',
    traditions: 'Se realizan actividades educativas sobre la historia de América y el proceso de mestizaje. Algunas comunidades indígenas realizan ceremonias de resistencia cultural.',
    celebrations: 'Universidades y centros culturales organizan seminarios y exposiciones sobre la historia americana. Se realizan muestras de arte y cultura que celebran la diversidad.',
    facts: [
      'Colón llegó a la isla Guanahani en las Bahamas',
      'El viaje de Colón duró 70 días desde España',
      'Se celebra como fiesta nacional en la mayoría de países hispanohablantes'
    ]
  },
  'dia-de-las-iglesias-evangelicas-y-protestantes': {
    slug: 'dia-de-las-iglesias-evangelicas-y-protestantes',
    history: 'Establecido en 2008 para reconocer la contribución de las iglesias evangélicas y protestantes a la sociedad chilena. Conmemora la Reforma Protestante iniciada por Martín Lutero en 1517.',
    significance: 'Reconoce la diversidad religiosa de Chile y el aporte de las iglesias protestantes al desarrollo social, educativo y cultural del país.',
    traditions: 'Las iglesias evangélicas realizan cultos especiales de acción de gracias, actividades evangelísticas y obras sociales en sus comunidades.',
    celebrations: 'Se organizan encuentros ecuménicos, conciertos de música cristiana, y actividades solidarias. El Te Deum Evangélico es uno de los eventos principales.',
    facts: [
      'Aproximadamente el 16% de los chilenos son evangélicos',
      'Chile tiene más de 3.000 templos evangélicos',
      'La Catedral Evangélica de Santiago es monumento nacional'
    ]
  },
  'dia-de-todos-los-santos': {
    slug: 'dia-de-todos-los-santos',
    history: 'Celebración cristiana que honra a todos los santos, conocidos y desconocidos. La tradición se remonta al siglo IV y fue oficializada por el Papa Gregorio IV en el siglo IX.',
    significance: 'Es un día de recuerdo y oración por los difuntos. En Chile, marca el inicio de las visitas masivas a los cementerios para honrar a los seres queridos fallecidos.',
    traditions: 'Las familias visitan las tumbas de sus difuntos, llevan flores (especialmente crisantemos), y realizan oraciones. Se limpian y decoran las sepulturas.',
    celebrations: 'Los cementerios extienden sus horarios y organizan misas especiales. Se realizan conciertos de música sacra y actividades culturales relacionadas con la memoria.',
    facts: [
      'Más de 2 millones de personas visitan los cementerios este día',
      'El Cementerio General de Santiago recibe más de 500.000 visitantes',
      'Se venden más de 5 millones de flores en todo el país'
    ]
  },
  'inmaculada-concepcion': {
    slug: 'inmaculada-concepcion',
    history: 'Celebra el dogma católico de que María fue concebida sin pecado original. El dogma fue proclamado por el Papa Pío IX en 1854.',
    significance: 'Es una de las principales festividades marianas y marca el inicio tradicional de la temporada navideña en Chile. Tiene especial importancia en la religiosidad popular.',
    traditions: 'Se realizan procesiones con imágenes de la Inmaculada Concepción. Muchas familias comienzan a armar el árbol de Navidad y el pesebre este día.',
    celebrations: 'Las parroquias organizan novenas y misas solemnes. En muchos lugares se realizan ferias navideñas y se encienden las primeras luces de Navidad.',
    facts: [
      'Es patrona de numerosas instituciones educativas católicas',
      'Marca el inicio oficial de la temporada navideña comercial',
      'La imagen de la Inmaculada es una de las más veneradas en Chile'
    ]
  },
  'navidad': {
    slug: 'navidad',
    history: 'Celebra el nacimiento de Jesucristo. Aunque la fecha exacta del nacimiento es desconocida, el 25 de diciembre se estableció en el siglo IV para cristianizar las festividades paganas del solsticio.',
    significance: 'Es la celebración familiar más importante del año en Chile. Representa valores de unión familiar, generosidad y esperanza. Trasciende lo religioso para convertirse en una festividad cultural.',
    traditions: 'Cena familiar en Nochebuena a medianoche, intercambio de regalos, el "Viejito Pascuero" (Santa Claus) para los niños. Se preparan platos especiales como pan de Pascua y cola de mono.',
    celebrations: 'Misa de Gallo a medianoche, villancicos, pesebres vivientes. Las ciudades se decoran con luces y árboles de Navidad. Los fuegos artificiales marcan la medianoche del 24.',
    facts: [
      'El 80% de las ventas anuales del comercio ocurren en diciembre',
      'Se consumen más de 3 millones de pan de Pascua',
      'Es el feriado con mayor reunión familiar del año'
    ]
  }
};

export function getHolidayDescription(slug: string): HolidayDescription | null {
  return holidayDescriptions[slug] || null;
}