const tripConfig = {
    id: 'japon_2026',
    title: 'Aventura Japonesa',
    dates: '30 Oct - 19 Nov',
    pax: '4 Adultos',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop', // Imagen de ejemplo (Tokio en otoño)
    supabaseUrl: 'https://gyjkbzosfukbiyxvfoqu.supabase.co',
    supabaseKey: 'sb_publishable_UnOPH2ngXlqvnGQtMqXlKg_d49a0iUh'
};

const itineraryData = [
    {
        "day": 0,
        "date": "31-Oct-2026",
        "title": "Llegada del Usuario",
        "icon": "✈️",
        "location": "Tokio",
        "description": "Aterrizaje a última hora de la noche en la capital e inicio del viaje logístico.",
        "route": [
            {
                "name": "Aterrizaje y Traslado Privado",
                "time": "23:55",
                "price": "Variable",
                "lat": 35.5494,
                "lng": 139.7798,
                "brief_note": "Traslado directo al hotel recomendado en transporte privado debido a la hora de llegada.",
                "detailed_info": "<p>Aterrizaje a las 23:55 en Tokio. Se realiza un traslado directo hacia el hotel para garantizar el descanso inmediato. Debido a la hora de llegada tardía, se recomienda encarecidamente la contratación previa de un <b>transporte privado</b> para evitar complicaciones logísticas con las líneas de tren nocturnas.</p>"
            }
        ],
        "celiac": "En los aeropuertos de Tokio existen tiendas de conveniencia (konbini) abiertas 24h con opciones sencillas como frutas, huevos cocidos y ensaladas, pero se aconseja precaución extrema con los snacks procesados por el gluten oculto."
    },
    {
        "day": 1,
        "date": "01-Nov-2026",
        "title": "Día Espejo - Solo Usuario: El Tokio Tradicional",
        "icon": "⛩️",
        "location": "Tokio",
        "description": "Ruta independiente y relajada de bajo esfuerzo físico diseñada para aclimatar el cuerpo al huso horario de forma cultural.",
        "route": [
            {
                "name": "Estanque Shinobazu en el Parque Ueno",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.7141,
                "lng": 139.7741,
                "brief_note": "Paseo tranquilo y sin prisas por los entornos naturales de Ueno.",
                "detailed_info": "<p>Comienzo del día con un paseo sin prisas por el idílico estanque Shinobazu, ubicado en el emblemático <b>Parque Ueno</b>, permitiendo un primer contacto pausado con el entorno japonés.</p>"
            },
            {
                "name": "Mercado de Ameyoko",
                "time": "Mediodía",
                "price": "Gratis",
                "lat": 35.7113,
                "lng": 139.7747,
                "brief_note": "Exploración de un ruidoso mercado bajo las vías colmado de puestos tradicionales.",
                "detailed_info": "<p>Incursión en el mercado de <b>Ameyoko</b>, una curiosidad urbana ruidosa situada directamente bajo las vías del tren, repleta de puestos de comida callejera y comercio local dinámico.</p>"
            },
            {
                "name": "Barrio Histórico de Yanaka Ginza",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.7275,
                "lng": 139.7671,
                "brief_note": "Caminata residencial por un reducto que conserva la atmósfera retro de posguerra.",
                "detailed_info": "<p>Paseo por <b>Yanaka Ginza</b>, un pintoresco barrio residencial de casas bajas que sobrevivió milagrosamente a los bombardeos de la Segunda Guerra Mundial. Conserva intacta la atmósfera retro tradicional conocida como 'shitamachi' del Tokio de posguerra. Su ritmo pausado lo hace idóneo para cerrar un día de bajo esfuerzo físico. Tu hermana vuela hoy y este mismo plan lo realizará ella sola el día 19.</p>"
            }
        ],
        "celiac": "En el mercado de Ameyoko, los puestos de fruta fresca ensartada en brochetas son una opción segura y libre de contaminación cruzada."
    },
    {
        "day": 2,
        "date": "02-Nov-2026",
        "title": "El Pulso de Shibuya y Harajuku",
        "icon": "🌆",
        "location": "Tokio",
        "description": "Primer día completo en grupo recorriendo majestuosos bosques sagrados, arquitectura de autor de vanguardia y miradores de altura al atardecer.",
        "route": [
            {
                "name": "Santuario Meiji Jingu y Parque Yoyogi",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.6764,
                "lng": 139.6993,
                "brief_note": "Visita solemne al santuario sintoísta cruzando su frondoso bosque sagrado.",
                "detailed_info": "<p>Visita al solemne <b>Santuario Meiji Jingu</b> cruzando a pie su espectacular y frondoso bosque sagrado, seguido de un reconfortante paseo por el contiguo <b>Parque Yoyogi</b>.</p>"
            },
            {
                "name": "Takeshita Dori y Avenida Omotesando",
                "time": "Mediodía",
                "price": "Gratis",
                "lat": 35.6716,
                "lng": 139.7032,
                "brief_note": "Contraste de la cultura juvenil urbana con arquitectura contemporánea de boutiques de autor.",
                "detailed_info": "<p>Exploración del marcado contraste urbano en la colorida calle peatonal <b>Takeshita Dori</b> de Harajuku, confluyendo en un paseo arquitectónico por la elegante avenida de <b>Omotesando</b>, célebre por albergar diseños contemporáneos espectaculares en sus boutiques exclusivas.</p>"
            },
            {
                "name": "Mirador Shibuya Sky y Shibuya Scramble",
                "time": "16:00",
                "price": "Aprox. 2.200 JPY",
                "lat": 35.6585,
                "lng": 139.7023,
                "brief_note": "Subida obligatoria a las 16:00 para la transición lumínica y vistas del icónico cruce.",
                "detailed_info": "<p>Desplazamiento a Shibuya para cruzar el masivo Shibuya Scramble y fotografiar la estatua de Hachiko. Posteriormente, se realiza la subida al mirador de altura <b>Shibuya Sky</b>. Es mandatorio asegurar la reserva digital exacta para las 16:00 en la web oficial (se agota con semanas de antelación) para capturar la mágica transición solar antes del anochecer completo de las 16:45.</p>"
            },
            {
                "name": "Callejones de Nonbei Yokocho",
                "time": "Noche",
                "price": "Variable",
                "lat": 35.6596,
                "lng": 139.7016,
                "brief_note": "Cena tradicional en callejones históricos de tabernas locales.",
                "detailed_info": "<p>Cierre de la velada cenando en los callejones tradicionales e históricos de <b>Nonbei Yokocho</b>, impregnados de ambiente clásico y tabernas locales de espacio reducido.</p>"
            }
        ],
        "celiac": "En Harajuku y Shibuya existen algunas cafeterías modernas concienciadas con opciones Gluten-Free y cartas de alérgenos en inglés. Evita las salsas oscuras e industriales en las tabernas Yokocho."
    },
    {
        "day": 3,
        "date": "03-Nov-2026",
        "title": "Excursión a Fujiyoshida (Vistas del Fuji)",
        "icon": "🗻",
        "location": "Fujiyoshida",
        "description": "Excursión madrugadora de montaña orientada a capturar las mejores condiciones climáticas y lumínicas frente al Monte Fuji.",
        "route": [
            {
                "name": "Pagoda Chureito y Parque Arakurayama Sengen",
                "time": "07:30 - 12:00",
                "price": "Gratis",
                "lat": 35.5012,
                "lng": 138.8014,
                "brief_note": "Ascenso de 400 peldaños flanqueados por faroles tradicionales con encuadre icónico.",
                "detailed_info": "<p>Salida temprana indispensable antes de las 7:30 AM saliendo desde la terminal de Shinjuku en Tokio. El hito fundamental es alcanzar la cumbre de la <b>Pagoda Chureito</b> dentro del recinto natural del Parque Arakurayama Sengen. Resulta imprescindible coronar la estructura antes de las 8:30 AM para asegurar condiciones de luz óptimas sobre la silueta del Monte Fuji antes de la formación natural de nubes convectivas. Requiere superar el reto físico de ascender sus 400 peldaños flanqueados por hermosos faroles sintoístas.</p>"
            }
        ],
        "celiac": "Al ser una excursión fuera de la metrópolis, se aconseja adquirir provisiones y snacks certificados en los supermercados de Shinjuku antes de partir hacia los Alpes rurales."
    },
    {
        "day": 4,
        "date": "04-Nov-2026",
        "title": "Asakusa, Curiosidad Urbana y teamLab",
        "icon": "🎨",
        "location": "Tokio",
        "description": "Contraste de templos milenarios con proyecciones digitales tridimensionales de vanguardia y envío estratégico de maletas pesadas.",
        "route": [
            {
                "name": "Distrito Histórico de Asakusa y Templo Senso-ji",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.7148,
                "lng": 139.7967,
                "brief_note": "Entrada por la puerta Kaminarimon hacia el templo budista más longevo de la urbe.",
                "detailed_info": "<p>Paseo matinal por el barrio clásico de <b>Asakusa</b>, ingresando por la emblemática e imponente puerta Kaminarimon para visitar las estancias místicas del templo milenario <b>Senso-ji</b>, degustando en los alrededores el dulce tradicional local melonpan.</p>"
            },
            {
                "name": "Río Sumida y Arquitectura Vertical de Akihabara",
                "time": "Mediodía",
                "price": "Gratis",
                "lat": 35.6997,
                "lng": 139.7715,
                "brief_note": "Observación exterior del paisaje urbano de rascacielos cubiertos de neón.",
                "detailed_info": "<p>Paseo panorámico junto a las riberas del río Sumida seguido de una caminata de observación urbana por las avenidas de <b>Akihabara</b>. El objetivo no es comercial, sino contemplar la ruidosa e impresionante arquitectura de rascacielos forrados con pantallas verticales y neón de gran potencia visual. Se añade una nota aclaratoria para el grupo: la famosa Torre de Cápsulas Nakagin (icono metabolista) fue demolida en 2022, por lo que se descarta cualquier desvío para verla.</p>"
            },
            {
                "name": "teamLab Borderless en Azabudai Hills",
                "time": "Tarde",
                "price": "Variable",
                "lat": 35.6664,
                "lng": 139.7441,
                "brief_note": "Inmersión ininterrumpida de 3 horas en proyecciones de arte digital inmersivo.",
                "detailed_info": "<p>Disfrute de una inmersión sensorial de 3 horas de duración dentro de las vanguardistas proyecciones digitales tridimensionales de <b>teamLab Borderless</b> en el complejo de Azabudai Hills. <b>Logística crítica de equipaje:</b> Al finalizar la tarde es obligatorio realizar el envío de las maletas pesadas directamente hacia vuestro hotel en Osaka mediante el servicio de mensajería Yamato Transport (Takkyubin). De esta manera, se viajará hacia la cordillera alpina los próximos días portando únicamente una ligera mochila de mano para 2 noches.</p>"
            }
        ],
        "celiac": "El postre tradicional melonpan contiene harina de trigo. En Azabudai Hills hay restaurantes internacionales de alta cocina que cuentan con personal capacitado en alérgenos específicos."
    },
    {
        "day": 5,
        "date": "05-Nov-2026",
        "title": "Kanazawa, Elegancia de Madera y Cristal",
        "icon": "⚱️",
        "location": "Kanazawa",
        "description": "Entrada a la Ruta Alpina maximizando las horas diurnas en exteriores rurales de paisajismo clásico y museos interactivos.",
        "route": [
            {
                "name": "Jardín Kenrokuen y Castillo de Kanazawa",
                "time": "Mañana",
                "price": "Aprox. 320 JPY",
                "lat": 36.5621,
                "lng": 136.6627,
                "brief_note": "Exploración de uno de los tres jardines paisajísticos históricos más bellos de la nación.",
                "detailed_info": "<p><b>Logística Crítica:</b> Salida en el Shinkansen Kagayaki a primera hora de la mañana directo desde Tokio (2.5 horas de trayecto) portando solo mochila de mano. Debido a que en noviembre el sol cae de forma completa a las 16:30, es perentorio exprimir la mañana al aire libre para que la luz cunda. Recorrido pausado por el perfecto diseño de paisaje del célebre <b>Jardín Kenrokuen</b> y los baluartes históricos del Castillo de Kanazawa.</p>"
            },
            {
                "name": "Templo Ninja (Myoryuji)",
                "time": "14:00",
                "price": "1.200 JPY",
                "lat": 36.5549,
                "lng": 136.6502,
                "brief_note": "Recorrido por un laberinto encubierto militar de defensa feudal.",
                "detailed_info": "<p>Visita guiada al interior del sorprendente <b>Templo Ninja (Myoryuji)</b>, un complejo laberinto encubierto militar repleto de trampas ocultas y pasadizos secretos diseñado por los artesanos feudales de los Maeda. Exige una reserva telefónica previa de carácter obligatorio. Último acceso permitido a las 16:00.</p>"
            },
            {
                "name": "Museo del Siglo XXI: The Swimming Pool",
                "time": "15:30",
                "price": "Variable",
                "lat": 36.5609,
                "lng": 136.6582,
                "brief_note": "Instalación arquitectónica interactiva icónica de Leandro Erlich.",
                "detailed_info": "<p>Visita al edificio circular contemporáneo del Museo del Siglo XXI para experimentar la famosa e icónica instalación interactiva <i>The Swimming Pool</i> de Leandro Erlich. Requiere gestionar de forma digital la reserva de turno a las 9:00 AM en punto de este mismo día para asegurar plaza de acceso.</p>"
            },
            {
                "name": "Barrio de Geishas de Higashi Chaya",
                "time": "Noche",
                "price": "Gratis",
                "lat": 36.5724,
                "lng": 136.6665,
                "brief_note": "Caminata evocadora bajo las celosías de madera del distrito tradicional.",
                "detailed_info": "<p>Cierre del día con un paseo nocturno sumamente fotogénico bajo las ancestrales celosías de madera del perfectamente conservado y elegante distrito tradicional de geishas de <b>Higashi Chaya</b>.</p>"
            }
        ],
        "celiac": "Kanazawa destaca por su excelente sushi y marisco en el mercado de Omicho. El sashimi fresco servido sobre arroz (Kaisen-don) prescindiendo de salsas de soja industriales es ideal para celíacos."
    },
    {
        "day": 6,
        "date": "06-Nov-2026",
        "title": "Shirakawa-go y el Legado Samurái en Takayama",
        "icon": "🏡",
        "location": "Takayama",
        "description": "Trayecto en autobús de montaña cruzando valles agrícolas históricos y centros administrativos samuráis de madera pulida.",
        "route": [
            {
                "name": "Aldea Histórica de Shirakawa-go",
                "time": "Mañana",
                "price": "Entrada Wada-ke variable",
                "lat": 36.2736,
                "lng": 136.9064,
                "brief_note": "Visita a las viviendas con empinados tejados de paja gassho-zukuri.",
                "detailed_info": "<p>Abordaje temprano del autobús de línea de montaña (Nohi Bus) rumbo a la célebre aldea declarada patrimonio de la humanidad, <b>Shirakawa-go</b>. Inspección de la emblemática e histórica residencia familiar Wada-ke, caracterizada por sus gigantescos y empinados tejados de paja estructurales bajo el estilo <i>gassho-zukuri</i>. Subida al mirador elevado de Shiroyama para obtener vistas panorámicas del valle completo.</p>"
            },
            {
                "name": "Palacio de Gobierno Takayama Jinya",
                "time": "Tarde",
                "price": "440 JPY",
                "lat": 36.1396,
                "lng": 137.2576,
                "brief_note": "Visita obligada al único complejo gubernamental samurái remanente en la nación.",
                "detailed_info": "<p>Enlace en autobús regular de montaña hacia la hermosa Takayama. Al llegar, se realiza la visita obligada al complejo histórico del <b>Takayama Jinya</b>, erigiéndose con orgullo como el único edificio administrativo y gubernamental de la gloriosa época samurái que queda en pie en Japón. Su espectacular arquitectura interior estructurada en madera limpia, sus gigantescas estancias revestidas de tatami y los inmensos almacenes históricos de arroz son un absoluto imprescindible para amantes del diseño y la carpintería tradicional de madera pulida. El último pase de taquilla se realiza a las 16:30.</p>"
            },
            {
                "name": "Puente Rojo de Nakabashi",
                "time": "Atardecer",
                "price": "Gratis",
                "lat": 36.1408,
                "lng": 137.2584,
                "brief_note": "Fotografía estética del puente icónico de la ciudad al caer el sol.",
                "detailed_info": "<p>Cierre de la jornada capturando una icónica fotografía del fotogénico puente rojo tradicional <b>Nakabashi</b> justo a las luces del atardecer de montaña.</p>"
            }
        ],
        "celiac": "En Takayama la especialidad local es la ternera de Hida de alta calidad. Solicita en los restaurantes locales cocinar la carne estilo 'Shio-yaki' (a la parrilla sazonada puramente con sal marina), eludiendo las salsas basadas en miso o soja con trigo."
    },
    {
        "day": 7,
        "date": "07-Nov-2026",
        "title": "Mansiones de Madera, Catas de Sake y Tren Panorámico",
        "icon": "🍶",
        "location": "Osaka",
        "description": "Contemplación de obras maestras arquitectónicas residenciales de los artesanos feudales de Hida y traslado escénico a Kansai.",
        "route": [
            {
                "name": "Mercado Matutino de Miyagawa y Mansiones Residenciales",
                "time": "Mañana",
                "price": "Kusakabe: 1.000 JPY | Yoshijima: 500 JPY",
                "lat": 36.1450,
                "lng": 137.2600,
                "brief_note": "Cumbre del diseño estructural en madera de los carpinteros feudales de Hida.",
                "detailed_info": "<p>Agradable paseo matinal recorriendo los puestos locales del mercado ambulante de Miyagawa a la orilla del cauce del río. Posteriormente, inspección de las espectaculares e históricas mansiones residenciales tradicionales de <b>Kusakabe</b> y <b>Yoshijima</b>, cuyos colosales interiores de vigas vistas y pilares pulidos representan la cumbre del diseño en madera de los artesanos históricos de la región.</p>"
            },
            {
                "name": "Destilerías Históricas de Sanmachi Suji",
                "time": "Mediodía",
                "price": "Consumo variable",
                "lat": 36.1400,
                "lng": 137.2600,
                "brief_note": "Ruta de catas de sake tradicional identificables por las bolas de cedro sugitama.",
                "detailed_info": "<p>Paseo por las calles de arquitectura preservada de Sanmachi Suji para realizar una ruta de catas de sake tradicional japonés en bodegas centenarias, fácilmente identificables por las esferas ceremoniales de ramas de cedro secas (<i>sugitama</i>) colgadas sobre sus portales de acceso.</p>"
            },
            {
                "name": "Tren Escénico Limited Express Hida",
                "time": "Tarde",
                "price": "Variable",
                "lat": 35.1709,
                "lng": 136.8815,
                "brief_note": "Asientos en el flanco derecho para admirar cañones fluviales en tránsito a Osaka.",
                "detailed_info": "<p>Abordaje en el tren panorámico con inmensos ventanales <b>Limited Express Hida</b> con destino final a Osaka (se recomienda reservar asientos en el lado derecho del tren para gozar de las mejores vistas escénicas sobre los cañones fluviales de Gifu). Nota del experto: la gran mayoría de estas unidades panorámicas exigen realizar un transbordo rápido y sumamente ágil en la estación de Nagoya para conectar directamente con la veloz línea de Shinkansen que ingresa a Osaka, completando un cómodo tiempo de unas 3 horas de trayecto en total. Llegada al hotel de Osaka y reencuentro con vuestro equipaje pesado enviado previamente.</p>"
            }
        ],
        "celiac": "El sake de arroz puro (etiquetado como Junmai) está libre de trigo de forma natural. Para las cenas en Osaka y Kioto, se recomienda exprimir la comodidad de los Apart-hoteles de habitaciones amplias (como la cadena Mimaru) dotados con cocina y lavadora propia."
    },
    {
        "day": 8,
        "date": "08-Nov-2026",
        "title": "Osaka, Arquitectura Flotante e Historia",
        "icon": "🏯",
        "location": "Osaka",
        "description": "Dualidad urbana entre la reconstrucción del palacio imperial milenario y miradores de vanguardia suspendidos sobre el neón masivo.",
        "route": [
            {
                "name": "Castillo de Osaka y Museo de Historia de Osaka",
                "time": "Mañana",
                "price": "600 JPY (Museo)",
                "lat": 34.6828,
                "lng": 135.5208,
                "brief_note": "Subida a la planta 10 para contemplar la fiel reconstrucción del antiguo Palacio Naniwa.",
                "detailed_info": "<p>Recorrido por los inmensos fosos fortificados y parque del Castillo de Osaka, continuando con la entrada al colindante <b>Museo de Historia de Osaka</b>. Se realiza la subida directa en ascensor a su piso 10 para observar la minuciosa e imponente reconstrucción arqueológica a escala real del milenario Palacio Imperial Naniwa.</p>"
            },
            {
                "name": "Mirador Umeda Sky Building",
                "time": "Tarde",
                "price": "Aprox. 1.500 JPY",
                "lat": 34.7053,
                "lng": 135.4904,
                "brief_note": "Aclamado prodigio arquitectónico contemporáneo con observatorio exterior en suspensión.",
                "detailed_info": "<p>Visita al emblemático mirador del rascacielos <b>Umeda Sky Building</b>, considerado a nivel internacional como un auténtico prodigio de la arquitectura moderna mundial gracias a su atrevido observatorio circular al aire libre en suspensión uniendo las cimas de sus dos torres gemelas.</p>"
            },
            {
                "name": "Canales de Dotonbori y Distrito de Namba",
                "time": "Noche",
                "price": "Gratis",
                "lat": 34.6687,
                "lng": 135.5013,
                "brief_note": "Festival visual de luces de neón masivas a pie de canal y cena local.",
                "detailed_info": "<p>Paseo nocturno inmersivo para contemplar el festival visual de colosales paneles de neón publicitarios reflejados sobre las aguas de los canales de <b>Dotonbori</b> y Namba, degustando los famosos buñuelos takoyaki típicos de la región.</p>"
            }
        ],
        "celiac": "Los takoyakis habituales contienen harina de trigo en su masa. Se aconseja buscar locales alternativos especializados que ofrezcan variantes certificadas elaboradas puramente con harina de arroz."
    },
    {
        "day": 9,
        "date": "09-Nov-2026",
        "title": "Nara, Templos Sagrados y Jardines de Musgo",
        "icon": "🦌",
        "location": "Osaka",
        "description": "Excursión histórica a la milenaria capital sintoísta entre budas gigantes de bronce y jardines botánicos de alfombra esmeralda.",
        "route": [
            {
                "name": "Templo Todai-ji y Santuario Kasuga-Taisha",
                "time": "Mañana",
                "price": "Todai-ji aprox. 600 JPY",
                "lat": 34.6901,
                "lng": 135.8398,
                "brief_note": "Ingreso al mayor edificio de madera del planeta que custodia el Gran Buda de bronce.",
                "detailed_info": "<p>Excursión de un día con destino a <b>Nara</b>. Admisión al imponente recinto del templo budista <b>Templo Todai-ji</b>, considerado la estructura de madera más grande del mundo, cuyo sanctum alberga el Gran Buda de bronce sagrado. Posteriormente, paseo místico rodeados por miles de linternas votivas de piedra en Kasuga-Taisha, flanqueados en todo momento por los dóciles y silvestres ciervos sika locales.</p>"
            },
            {
                "name": "Jardines Tradicionales Yoshikien",
                "time": "Tarde",
                "price": "Gratis para extranjeros",
                "lat": 34.6865,
                "lng": 135.8361,
                "brief_note": "Tres tipologías de paisajismo clásico destacando su impresionante jardín de musgo.",
                "detailed_info": "<p>Paseo por los impecables y bellos <b>Jardines Yoshikien</b>, divididos magistralmente en tres estilos de paisajismo clásico oriental (estanque, flores y un impresionante jardín de musgo tupido que emula visualmente una perfecta alfombra esmeralda de gran valor botánico). El acceso es de carácter gratuito para turistas extranjeros presentando en taquilla el pasaporte físico original. Retorno a Osaka para pernoctar.</p>"
            }
        ],
        "celiac": "En Nara se comercializa el 'Kaki no Ha Sushi' (piezas de sushi envueltas en hojas de caqui), que por su técnica tradicional artesanal suele ser muy natural; comprueba siempre los alérgenos del vinagre de arroz empleado."
    },
    {
        "day": 10,
        "date": "10-Nov-2026",
        "title": "Resiliencia, Senderismo en Monte Misen y Noche de Ryokan",
        "icon": "⛩️",
        "location": "Miyajima",
        "description": "Jornada premium combinando memoria histórica suntuosa, senderismo místico de montaña y pernoctación de gran lujo tradicional.",
        "route": [
            {
                "name": "Parque Conmemorativo de la Paz de Hiroshima",
                "time": "Mañana",
                "price": "Museo bajo costo",
                "lat": 34.3927,
                "lng": 132.4523,
                "brief_note": "Recorrido de alto respeto por la Cúpula Genbaku y memoriales de la paz.",
                "detailed_info": "<p>Traslado temprano en línea directa de Shinkansen hacia Hiroshima. Respetuoso e indispensable recorrido histórico por los terrenos del <b>Parque de la Paz</b> y la silueta de la icónica Cúpula Genbaku. Resulta obligatorio gestionar con antelación la reserva digital formal de vuestras entradas para el acceso al Museo Conmemorativo.</p>"
            },
            {
                "name": "Senderismo Sagrado en el Monte Misen",
                "time": "Tarde",
                "price": "Ferry 100 JPY impuesto + Teleférico variable",
                "lat": 34.2794,
                "lng": 132.3197,
                "brief_note": "Sustitución del acuario comercial por la ascensión escénica al punto más alto de la isla.",
                "detailed_info": "<p>Abordaje del ferry de cruce hacia la isla sagrada de <b>Miyajima</b> abonando la tasa gubernamental de acceso local. En clara sustitución del acuario comercial, se emprende la ascensión al sagrado <b>Monte Misen</b>, la cumbre más alta de la isla. Subida en el teleférico escénico (Ropeway) gozando de panorámicas soberbias del Mar Interior de Seto, seguido de un senderismo natural de descenso entre espectaculares bosques primigenios. En la ruta a pie se cruza el templo de la cima Reikado, que custodia con celo la mística Llama Eterna que lleva 1200 años ininterrumpidos encendida y que sirvió formalmente para encender la Llama de la Paz de Hiroshima.</p>"
            },
            {
                "name": "Estancia de Lujo Tradicional en Ryokan",
                "time": "Noche",
                "price": "Elevado (Incluido en estancia)",
                "lat": 34.2970,
                "lng": 132.3178,
                "brief_note": "Cena multi-plato Kaiseki y paseo nocturno en yukata frente al Torii flotante iluminado.",
                "detailed_info": "<p>Cierre de una jornada inolvidable experimentando la cumbre de la hospitalidad tradicional durmiendo en un auténtico y lujoso <b>Ryokan</b> tradicional. Incluye el disfrute de una suntuosa cena gourmet Kaiseki estructurada en múltiples platos de alta cocina local. Al caer la noche, paseo luciendo las vestimentas tradicionales yukata a las orillas del majestuoso <b>Torii flotante iluminado</b> sobre el mar, disfrutando de la paz absoluta del enclave una vez la isla se vacía por completo de turistas diurnos.</p>"
            }
        ],
        "celiac": "Es mandatorio avisar al Ryokan con varias semanas de antelación sobre la celiaquía estricta de los integrantes; la alta cocina tradicional Kaiseki utiliza de base salsas con gluten que requieren sustitución minuciosa por tamari puro."
    },
    {
        "day": 11,
        "date": "11-Nov-2026",
        "title": "El Gran Castillo de Himeji y entrada a Kioto",
        "icon": "🦅",
        "location": "Kioto",
        "description": "Parada técnica para explorar la mayor joya arquitectónica militar feudal intacta e ingreso en los bosques de Kioto.",
        "route": [
            {
                "name": "Castillo de la Garza Blanca de Himeji",
                "time": "Mañana",
                "price": "2.500 JPY para adultos extranjeros",
                "lat": 34.8394,
                "lng": 134.6939,
                "brief_note": "La fortificación defensiva de madera original mejor preservada de la nación.",
                "detailed_info": "<p>Trayecto matutino de regreso a bordo del Shinkansen con parada técnica planificada en Himeji. Exploración exhaustiva del majestuoso e imponente <b>Castillo de Himeji</b>, apodado de la Garza Blanca por sus impecables enlucidos, considerado de forma unánime como la fortaleza feudal militar de madera mejor conservada de Japón. Tarifa oficial 2026 estipulada en 2.500 JPY para adultos extranjeros.</p>"
            },
            {
                "name": "Palacio Imperial de Kioto y Santuario Shimogamo",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.0392,
                "lng": 135.7731,
                "brief_note": "Caminata por el místico e impoluto bosque sagrado secular de Tadasu no Mori.",
                "detailed_info": "<p>Llegada en tren de alta velocidad a la inmensidad histórica de <b>Kioto</b>. Paseo inicial por los elegantes jardines perimetrales del Palacio Imperial de la ciudad (Kyoto Gosho), enlazando con la visita al ancestral sintoísta <b>Santuario Shimogamo</b>, enclavado de forma mística en el corazón de su bosque sagrado milenario Tadasu no Mori, considerado espiritualmente como una tierra sagrada libre de impurezas.</p>"
            },
            {
                "name": "Cena Tradicional en el Callejón de Pontocho",
                "time": "Noche",
                "price": "Variable",
                "lat": 35.0049,
                "lng": 135.7712,
                "brief_note": "Cena pintoresca en los pasajes de madera construidos a las orillas del río.",
                "detailed_info": "<p>Finalización de la jornada cenando en los restaurantes tradicionales de madera dispuestos a lo largo de las orillas del cauce fluvial en el bellísimo y estrecho callejón peatonal de <b>Pontocho</b>.</p>"
            }
        ],
        "celiac": "En el callejón de Pontocho, existen tabernas especializadas en carnes selectas a la parrilla de carbón (Yakiniku); solicita planchas limpias y condimentos basados únicamente en sal gruesa."
    },
    {
        "day": 12,
        "date": "12-Nov-2026",
        "title": "El Kioto Histórico de Madera y Piedra",
        "icon": "🏮",
        "location": "Kioto",
        "description": "Itinerario de máximo madrugón diseñado para contemplar las obras maestras estructurales de madera en quietud mística.",
        "route": [
            {
                "name": "Templo Kiyomizu-dera y Cuestas Medievales",
                "time": "06:00 AM",
                "price": "Aprox. 400 JPY",
                "lat": 34.9949,
                "lng": 135.7850,
                "brief_note": "Visita obligada al emblemático balcón de madera original en total quietud mística.",
                "detailed_info": "<p><b>Alerta crítica de despertador (5:15 AM):</b> Es absolutamente obligatorio personarse a las 6:00 AM en punto en el monumental templo de montaña <b>Kiyomizu-dera</b>, logrando disfrutar de su icónico balcón de madera flotante en total quietud espiritual antes del desembarco masivo de las hordas de autobuses turísticos. Posterior descenso a pie por las hermosas e históricas cuestas empedradas medievales de <b>Sannenzaka y Ninenzaka</b>.</p>"
            },
            {
                "name": "Templo Kodai-ji y Callejón Escondido de Ishibei-koji",
                "time": "Tarde",
                "price": "Aprox. 600 JPY",
                "lat": 35.0003,
                "lng": 135.7811,
                "brief_note": "Meditación ante jardines zen de arena rastrillada y pasajes medievales de piedra.",
                "detailed_info": "<p>Visita a las estancias solemnes del Templo <b>Kodai-ji</b> para contemplar el diseño de su pacífico jardín de arena blanca zen, prosiguiendo con una caminata evocadora por el recóndito, bellísimo y oculto callejón de piedra tradicional de <b>Ishibei-koji</b>.</p>"
            },
            {
                "name": "Distrito de Gion y Santuario Yasaka",
                "time": "Atardecer",
                "price": "Gratis",
                "lat": 35.0037,
                "lng": 135.7782,
                "brief_note": "Recorrido bajo las hileras de farolillos iluminados del legendario barrio de geishas.",
                "detailed_info": "<p>Paseo al caer la tarde bajo el encanto tradicional de las calles del distrito de preservación histórica de <b>Gion</b>, culminando frente a las infinitas hileras de farolillos de papel iluminados del Santuario Yasaka.</p>"
            }
        ],
        "celiac": "En los alrededores de Gion existen salones tradicionales especializados en menús basados en tofu (Yudofu) cocinado únicamente en ollas de agua con alga kombu natural, una alternativa segura libre de salsas de soja comerciales."
    },
    {
        "day": 13,
        "date": "13-Nov-2026",
        "title": "El Momiji Rojo de Tofuku-ji y Senderismo por el Monte Kurama",
        "icon": "🍁",
        "location": "Kioto",
        "description": "La combinación otoñal más espectacular uniendo túneles infinitos de toriis, mares de arces escarlata encendidos y senderismo alpino de cedros.",
        "route": [
            {
                "name": "Fushimi Inari-Taisha al Amanecer",
                "time": "06:30 AM",
                "price": "Gratis",
                "lat": 34.9671,
                "lng": 135.7727,
                "brief_note": "Paseo temprano en total soledad por el místico túnel de miles de toriis rojos.",
                "detailed_info": "<p><b>Alerta de despertador (5:15 AM):</b> Llegada rigurosa a las 6:30 AM para ascender por el místico e infinito túnel conformado por miles de toriis de madera roja de <b>Fushimi Inari</b> hasta coronar el mirador panorámico de Yotsutsuji sin aglomeraciones.</p>"
            },
            {
                "name": "Templo Tofuku-ji (El Must Absoluto de Otoño)",
                "time": "08:30 AM",
                "price": "Aprox. 1.000 JPY",
                "lat": 34.9767,
                "lng": 135.7736,
                "brief_note": "Cruce del puente de madera Tsutenkyo ante un valle masivo teñido de arces escarlata.",
                "detailed_info": "<p>Justo al terminar Fushimi Inari (sobre las 8:30 AM), abordaje veloz del tren local para avanzar una sola parada directa hacia el monumental <b>Templo Tofuku-ji</b>. Se cruza el célebre puente de madera tradicional Tsutenkyo para admirar en su máximo apogeo el impresionante valle inundado de miles de arces escarlata encendidos por el fenómeno del <b>Momiji</b> otoñal, constituyendo la estampa de noviembre por excelencia de todo Kioto.</p>"
            },
            {
                "name": "Ruta de Senderismo Principal de Kurama a Kibune",
                "time": "11:30 - 15:30",
                "price": "Tren Eizan variable",
                "lat": 35.1182,
                "lng": 135.7717,
                "brief_note": "Hermosa caminata de montaña de 4,2 km entre cedros milenarios y altares.",
                "detailed_info": "<p>Logística en la pintoresca línea de tren Eizan Railway hasta el recóndito pueblo de montaña de Kurama. Se arranca una bellísima caminata de montaña de <b>dificultad moderada-baja</b> (aprox. 4,2 km, de 1.5 a 2 horas de duración) que asciende a través de un denso e imponente bosque de cedros milenarios de la montaña sagrada. Cruza los santuarios de madera del templo de montaña <b>Kurama-dera</b>, supera la mística y legendaria área natural de las 'Raíces de Arena' y desciende de forma suave hasta el precioso pueblo ribereño de Kibune.</p>"
            },
            {
                "name": "Almuerzo Tradicional en Plataformas Flotantes Kawadoko",
                "time": "14:00",
                "price": "Variable-Alto",
                "lat": 35.1167,
                "lng": 136.7634,
                "brief_note": "Experiencia culinaria montada sobre plataformas elevadas de madera directamente sobre el río.",
                "detailed_info": "<p>Disfrute de la inigualable experiencia culinaria de almorzar sobre las espectaculares plataformas flotantes elevadas de madera de estilo <b>kawadoko</b>, cenando directamente suspendidos sobre las corrientes de agua cristalina del río en Kibune.</p>"
            }
        ],
        "celiac": "Los menús Kawadoko estacionales suelen incluir fideos de trigo fritos o caldos con base de soja común. Se aconseja solicitar de forma estricta alternativas basadas puramente en arroz o sal, o portar snacks de respaldo comprados previamente."
    },
    {
        "day": 14,
        "date": "14-Nov-2026",
        "title": "El Esplendor del Oro y el Bosque de Sagano",
        "icon": "⚱️",
        "location": "Kioto",
        "description": "Recorrido integral uniendo el reflejo áureo imperial con los gigantescos e icónicos tallos de bambú del oeste de la ciudad.",
        "route": [
            {
                "name": "Pabellón Dorado Kinkaku-ji",
                "time": "Mañana",
                "price": "Aprox. 500 JPY",
                "lat": 35.0394,
                "lng": 135.7292,
                "brief_note": "Contemplación del majestuoso templo revestido de oro puro reflejado en el agua.",
                "detailed_info": "<p>Visita al deslumbrante e imponente complejo del <b>Kinkaku-ji</b> (Pabellón Dorado) para capturar la mítica e internacional estampa de su estructura revestida en pan de oro reflejada fielmente sobre las aguas del estanque zen perimetral.</p>"
            },
            {
                "name": "Arashiyama y Bosque de Bambú de Sagano",
                "time": "Mediodía",
                "price": "Gratis",
                "lat": 35.0158,
                "lng": 135.6777,
                "brief_note": "Cruce del puente Togetsukyo, jardines zen e inmensos senderos de bambú.",
                "detailed_info": "<p>Desplazamiento hacia el flanco oeste con rumbo a <b>Arashiyama</b>. Paseo cruzando el histórico puente Togetsukyo, visita a los jardines zen contemplativos del Templo Tenryu-ji y recorrido bajo la majestuosa bóveda verde natural del icónico <b>Bosque de Bambú de Sagano</b>.</p>"
            },
            {
                "name": "Paseo del Filósofo y Pabellón de Plata Ginkaku-ji",
                "time": "Tarde",
                "price": "Aprox. 500 JPY",
                "lat": 35.0270,
                "lng": 135.7956,
                "brief_note": "Caminata lírica siguiendo el canal de agua hacia el elegante templo de madera sobria.",
                "detailed_info": "<p>Regreso al este de la ciudad para recorrer a pie el místico y lírico <b>Paseo del Filósofo</b> junto al canal de agua tranquilo, finalizando el circuito en el refinado e histórico templo de madera sobria <b>Ginkaku-ji</b> (Pabellón de Plata).</p>"
            }
        ],
        "celiac": "En las inmediaciones del Bosque de Bambú se pueden adquirir dulces tradicionales de arroz ('Mochi') artesanales elaborados exclusivamente con ingredientes naturales libres de harinas de trigo."
    },
    {
        "day": 15,
        "date": "15-Nov-2026",
        "title": "Retorno y la Vanguardia de Ginza",
        "icon": "💎",
        "location": "Tokio",
        "description": "Viaje de regreso en Shinkansen a la capital para admirar obras cumbre de la ingeniería en cristal y alta gastronomía subterránea.",
        "route": [
            {
                "name": "Paseo por el Distrito de Ginza y Avenida Chuo-dori",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.6716,
                "lng": 139.7650,
                "brief_note": "Aprovechamiento de la peatonalización de la gran arteria comercial.",
                "detailed_info": "<p>Abordaje del Shinkansen de regreso rápido hacia Tokio e instalación en vuestro hotel base. Disfrute de un paseo vespertino por el lujoso distrito de <b>Ginza</b>, aprovechando la peatonalización dominical de su célebre avenida principal Chuo-dori.</p>"
            },
            {
                "name": "Tokyo International Forum y Depachikas de Mitsukoshi",
                "time": "16:30",
                "price": "Gratis",
                "lat": 35.6766,
                "lng": 139.7641,
                "brief_note": "Vestíbulo de cristal monumental que asemeja el esqueleto de una colosal ballena.",
                "detailed_info": "<p>Visita indispensable al espectacular vestíbulo de cristal transparente del <b>Tokyo International Forum</b>, considerada una obra cumbre referencial de la arquitectura moderna que asemeja de forma majestuosa el esqueleto de una inmensa ballena de cristal. Posteriormente, exploración detallada de los sótanos gastronómicos premium (<i>Depachikas</i>) de Mitsukoshi para degustar alta cocina local.</p>"
            }
        ],
        "celiac": "Las grandes Depachikas de Ginza son excelentes para celíacos debido a sus mostradores de fruta de gran lujo cortada al momento y dulces tradicionales de arroz dulce catalogados rigurosamente."
    },
    {
        "day": 16,
        "date": "16-Nov-2026",
        "title": "Kamakura y la Ruta de Senderismo de Daibutsu",
        "icon": "🌳",
        "location": "Kamakura",
        "description": "Excursión costera entrelazando templos esculpidos en colinas, cuevas místicas, budas gigantes de bronce y senderos de tierra boscosos.",
        "route": [
            {
                "name": "Templo Hase-dera y Gran Buda de Kotoku-in",
                "time": "Mañana",
                "price": "Hase-dera: 400 JPY | Kotoku-in: 300 JPY",
                "lat": 35.3125,
                "lng": 139.5331,
                "brief_note": "Cuevas dedicadas a deidades sintoístas y la imponente estatua monumental al aire libre.",
                "detailed_info": "<p>Excursión de un día con rumbo al histórico enclave costero de <b>Kamakura</b>. Visita matinal al hermoso templo de colina <b>Hase-dera</b>, construido de forma escalonada con cuevas sintoístas ocultas excavadas en la roca viva y vistas espectaculares sobre la bahía marina. A continuación, traslado para admirar el monumental e icónico <b>Gran Buda de bronce de Kotoku-in</b>.</p>"
            },
            {
                "name": "Ruta Natural de Senderismo Daibutsu Hiking Trail",
                "time": "13:30 - 15:00",
                "price": "Gratis",
                "lat": 35.3210,
                "lng": 139.5310,
                "brief_note": "Hermoso sendero boscoso de tierra jalonado de pequeños altares sintoístas ocultos.",
                "detailed_info": "<p>Se arranca la marcha por la hermosa ruta natural del <b>Daibutsu Hiking Trail</b>, un sendero boscoso de tierra de dificultad fácil-moderada (aprox. 3 km de distancia, 1 hora y cuarto de duración). Esta senda conecta de forma natural el área norte de los templos zen (cerca de Jochoji) con el propio recinto del Gran Buda, permitiendo caminar rodeados de frondosa vegetación y pequeños altares tradicionales de piedra ocultos entre las raíces en lugar de emplear calles pavimentadas ordinarias.</p>"
            }
        ],
        "celiac": "En Kamakura, los tradicionales puestos de galletas de arroz ('Senbei') tostadas al momento sobre parrillas de carbón son una alternativa segura si solicitas expresamente la versión sazonada solo con sal, evitando la pintura de salsa de soja común."
    },
    {
        "day": 17,
        "date": "17-Nov-2026",
        "title": "El Tokio del Futuro y Diseño de Autor",
        "icon": "🗼",
        "location": "Tokio",
        "description": "Jornada que contrapone la monumentalidad futurista costera de la bahía con hitos mundiales de la arquitectura contemporánea de cristal y madera.",
        "route": [
            {
                "name": "Bahía Artificial de Odaiba y Rainbow Bridge",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.6284,
                "lng": 139.7732,
                "brief_note": "Observación de megaestructuras futuristas y paseos junto al mar.",
                "detailed_info": "<p>Desplazamiento matutino hacia la bahía artificial de <b>Odaiba</b> para contemplar el paisaje marítimo y sus singulares e impactantes edificios de corte futurista (destacando la impresionante sede de Fuji TV, diseñada de forma vanguardista por el arquitecto Kenzo Tange), paseando junto a los miradores del Rainbow Bridge.</p>"
            },
            {
                "name": "Circuito de Arquitectura Contemporánea en Aoyama y Omotesando",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.6622,
                "lng": 139.7153,
                "brief_note": "Hitos mundiales de autor de los estudios de Herzog & de Meuron y Kengo Kuma.",
                "detailed_info": "<p>Recorrido a pie por el distinguido distrito del diseño de <b>Aoyama y Omotesando</b>. Constituye una visita obligada la contemplación directa de hitos arquitectónicos de renombre mundial, como la espectacular e imponente estructura geométrica de rombos de cristal de <b>Prada Aoyama</b> (diseñada por Herzog & de Meuron) y la soberbia fachada orgánica de listones de madera entrelazada de <b>SunnyHills</b>, una aclamada obra maestra del maestro Kengo Kuma.</p>"
            }
        ],
        "celiac": "El distrito internacional de Aoyama cuenta con pastelerías especializadas de repostería francesa que elaboran macarons e itinerarios con harinas de almendra certificadas Gluten-Free de forma rigurosa."
    },
    {
        "day": 18,
        "date": "18-Nov-2026",
        "title": "Último Día Juntos: Tsukiji y Despedida del Usuario",
        "icon": "🍤",
        "location": "Tokio",
        "description": "Cierre grupal enfocado en alta cocina marina callejera y miradores institucionales de gran envergadura visual.",
        "route": [
            {
                "name": "Mercado Exterior de Tsukiji",
                "time": "Mañana",
                "price": "Consumo variable",
                "lat": 35.6654,
                "lng": 139.7697,
                "brief_note": "Desayuno gourmet de marisco fresco pasado por las brasas y tortillas dulces tamagoyaki.",
                "detailed_info": "<p>Exquisito desayuno gourmet recorriendo los históricos y bulliciosos puestos callejeros del <b>Mercado Exterior de Tsukiji</b>, disfrutando de la degustación de tortillas dulces japonesas tamagoyaki hechas al momento y piezas selectas de marisco fresco pasadas directamente por las brasas de carbón.</p>"
            },
            {
                "name": "Mirador del Ayuntamiento de Tokio",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.6895,
                "lng": 139.6917,
                "brief_note": "Grandes panorámicas metropolitanas finales desde las torres del Gobierno Metropolitano.",
                "detailed_info": "<p>Visita a las torres gemelas del imponente mirador del <b>Ayuntamiento de Tokio</b> (Gobierno Metropolitano) en Shinjuku, capturando las memorables e inmensas vistas panorámicas de despedida de la capital japonesa.</p>"
            },
            {
                "name": "Traslado Nocturno al Aeropuerto (Usuario)",
                "time": "Noche",
                "price": "Variable",
                "lat": 35.5494,
                "lng": 139.7798,
                "brief_note": "Recogida de maletas del hotel, cena final de despedida y salida del usuario a las 01:25 AM.",
                "detailed_info": "<p><b>Logística de Salida del Usuario:</b> Recogida final de maletas del establecimiento hotelero, celebración de una cena de despedida en grupo y traslado nocturno al aeropuerto para tomar vuestro vuelo programado a las 01:25 AM de la madrugada del 19 de noviembre. Tu hermana regresa de forma segura al hotel para descansar.</p>"
            }
        ],
        "celiac": "En Tsukiji, las brochetas de pescado fresco y vieiras cocinadas al momento a la brasa son seguras si pides de forma estricta que no utilicen salsas ('Tare'), empleando únicamente sal natural en la cocción."
    },
    {
        "day": 19,
        "date": "19-Nov-2026",
        "title": "Día Espejo - Solo Hermana: Despedida Relajada de la Capital",
        "icon": "👜",
        "location": "Tokio",
        "description": "Réplica exacta e individual del itinerario del Día 1. Un trazado pausado y seguro ideal para recorrer de forma autónoma antes de su vuelo nocturno.",
        "route": [
            {
                "name": "Itinerario Cultural de Ueno, Ameyoko y Yanaka Ginza",
                "time": "Todo el día",
                "price": "Gratis",
                "lat": 35.7141,
                "lng": 139.7741,
                "brief_note": "Caminata histórica sin prisas replicando minuciosamente el Día 1.",
                "detailed_info": "<p><b>Nota:</b> El usuario ya ha volado de madrugada. Tu hermana dispone del día libre completo antes de abordar su vuelo nocturno fijado a las 23:30. Realiza de forma autónoma y exacta el plan pausado del <b>Día 1: Ueno, el mercado bajo las vías de Ameyoko y las casas bajas tradicionales de Yanaka</b>. Al ostentar un fuerte componente cultural y un ritmo pausado de bajo esfuerzo físico, resulta una ruta sumamente segura y fácil de ejecutar en solitario sin ningún tipo de presiones horarias. Traslado nocturno final hacia el aeropuerto para su vuelo de las 23:30.</p>"
            }
        ],
        "celiac": "En la estación de Ueno existen grandes almacenes alimentarios con etiquetado claro e internacional de alérgenos, facilitando la compra segura de comida para el trayecto de vuelo de vuelta."
    }
]