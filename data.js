// JSON Data para la Guía de Japón (21 Días)
const itineraryData = [
    {
        day: 1, date: "30 Oct", title: "Llegada a Tokio", icon: "🛬", location: "Tokio",
        lat: 35.6580, lng: 139.7016, // Shibuya
        description: "Inmersión progresiva en la capital. Traslado desde el aeropuerto y toma de contacto en el distrito oeste.",
        route: [
            { name: "Llegada e Inmigración", time: "Mañana", price: "Gratis", note: "Recoger Pocket Wifi y activar Suica/Pasmo." },
            { name: "Check-in Hotel", time: "15:00", price: "-", note: "Recomendado zona Shinjuku o Shibuya." },
            { name: "Shibuya Crossing", time: "Tarde", price: "Gratis", note: "El cruce más famoso del mundo. Estatua Hachiko." },
            { name: "Cena en Shinjuku", time: "Noche", price: "Variable", note: "Paseo por Omoide Yokocho para ver neones." }
        ],
        celiac: "En el aeropuerto puedes comprar Onigiri de sal (Shio Musubi) en cualquier 7-Eleven. Es vuestro salvavidas seguro.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Gluten Free T's Kitchen", desc: "Cocina japonesa 100% sin gluten en Roppongi." },
            { name: "KURA Sushi Shibuya", desc: "Cadena de sushi giratorio. Lleva tu propia salsa de soja Tamari." }
        ]
    },
    {
        day: 2, date: "31 Oct", title: "Espiritualidad y Vistas", icon: "🗼", location: "Tokio",
        lat: 35.6764, lng: 139.6993, // Yoyogi
        description: "Contraste entre el bosque sagrado de Meiji y la modernidad de Roppongi.",
        route: [
            { name: "Santuario Meiji Jingu", time: "8:00", price: "Gratis", note: "Bosque de 100.000 árboles donados por ciudadanos.", extended_info: "<p>Consagrado en 1920 y dedicado a los espíritus del Emperador Meiji. El santuario está flanqueado por más de 100.000 árboles donados que crean una barrera acústica natural.</p><p>Abre al amanecer y cierra al atardecer (aprox. <b>18:30</b> en verano).</p>" },
            { name: "Yoyogi Park", time: "9:30", price: "Gratis", note: "Ideal para ver músicos y vida urbana dominguera." },
            { name: "Harajuku (Takeshita St)", time: "11:00", price: "Gratis", note: "Epicentro de la cultura juvenil nipona." },
            { name: "Mori Tower (Roppongi)", time: "18:00", price: "2000-2200¥", note: "Mirador Sky Deck (aire libre) requiere pago extra.", extended_info: "<p>Situado a <b>250 metros</b> sobre el nivel del mar con vistas ininterrumpidas (incluso del Fuji en días despejados).</p><p>Ahorro al comprar <b>online de forma anticipada</b> (1.800 JPY). El acceso a la azotea al aire libre (Sky Deck) exige un pago suplementario in situ.</p>" }
        ],
        celiac: "En Shibuya hay muchos locales de sushi. Usa tu propio bote de salsa Tamari (sin gluten) para el sashimi.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Riz Labo Kitchen", desc: "Tortitas (pancakes) sin gluten espectaculares en Omotesando." }
        ]
    },
    {
        day: 3, date: "1 Nov", title: "El Fuji: Pagoda Chureito", icon: "🗻", location: "Fujiyoshida",
        lat: 35.5011, lng: 138.8016, // Chureito
        description: "Peregrinación fotográfica a la imagen más icónica: la pagoda roja frente al volcán.",
        route: [
            { name: "Tren a Fujiyoshida", time: "6:00", price: "JR Pass", note: "Madrugar es MANDATORIO para evitar nubes en el Fuji." },
            { name: "Pagoda Chureito", time: "8:30", price: "Gratis", note: "Subida de 400 escalones. Llegar antes de las 9:00 AM.", extended_info: "<p>Torre erigida en 1963 como tributo a los caídos. Hay que ascender una escalinata flanqueada de casi <b>400 peldaños</b>.</p><p>Es mandatorio llegar <b>antes de las 8:30 a.m.</b> para tener buena luz (más tarde hay contraluz goteando hacia el sur) y evitar las densas nubes que suelen cubrir al Fuji a partir de las 11:00 am.</p>" },
            { name: "Lago Kawaguchiko", time: "Tarde", price: "Gratis", note: "Paseo por la orilla con vistas al monte sagrado." }
        ],
        celiac: "Si vais a comer por la zona, pedid 'Houtou' (fideos locales) con extrema precaución o buscad carne a la plancha sin salsas.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Sanrokuen", desc: "Barbacoa tradicional Irori (brochetas a la brasa, pedir opciones sin marinar)." }
        ]
    },
    {
        day: 4, date: "2 Nov", title: "Gatos, Mercado y Gundam", icon: "🐱", location: "Tokio",
        lat: 35.6249, lng: 139.7754, // Odaiba
        description: "Día de contrastes periféricos: del templo de los gatos al robot gigante de Odaiba.",
        route: [
            { name: "Templo Gotokuji", time: "9:00", price: "Gratis", note: "Lugar de nacimiento del Maneki-neko. Oficina abre 8:00-15:00.", extended_info: "<p>El recinto de parque, árboles y miles de figuras del Maneki-neko permite visitas de 6:00 a 17:00 horas. Sin embargo, <b>la oficina donde comercializan</b> las estatuillas y amuletos opera estrictamente entre las <b>8:00 y las 15:00</b>.</p>" },
            { name: "Mercado Toyosu", time: "Madrugada", price: "Gratis", note: "Subasta atún a las 5:00. Mirador bajo requiere lotería previa.", extended_info: "<p>Sustituto de Tsukiji. La febril subasta de atún rojo comienza a las 5:00 a.m. Las galerías superiores acristaladas no exigen aviso previo, pero para descender a la verdadera <b>Plataforma de Observación inferior</b> se requiere <b>ganar una lotería oficial online</b> el mes anterior a la visita.</p>" },
            { name: "Odaiba (Gundam)", time: "Tarde", price: "Gratis", note: "Arquitectura futurista y estatua a escala real." },
            { name: "Shin-Okubo", time: "Noche", price: "Variable", note: "Barrio coreano efervescente para cenar." }
        ],
        celiac: "En Toyosu, el sashimi fresquísimo es vuestro aliado. Evitad el jengibre encurtido si no estáis seguros.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Puestos Mercado Toyosu", desc: "Pescado crudo natural, pedir sin salsas y evitar el corte de cuchillos de otras preparaciones." }
        ]
    },
    {
        day: 5, date: "3 Nov", title: "Kanazawa: Ciudad Samurái", icon: "🚅", location: "Kanazawa",
        lat: 36.5613, lng: 136.6562, // Kanazawa kenrokuen
        description: "Viaje al oeste. Ciudad que sobrevivió a la guerra conservando su patrimonio feudal.",
        route: [
            { name: "Shinkansen a Kanazawa", time: "Mañana", price: "JR Pass", note: "Trayecto de 2.5h aproximadamente." },
            { name: "Jardín Kenrokuen", time: "Tarde", price: "320¥", note: "Uno de los 3 jardines paisajísticos más perfectos del país." },
            { name: "Barrio Samurái Nomura", time: "16:00", price: "550¥", note: "Residencia original con jardín interior exquisito." }
        ],
        celiac: "Kanazawa es la ciudad del pan de oro. Verás helados dorados; el helado suele ser seguro, pero evita la galleta.",
        hotel: {
            name: "Onyado Nono Kanazawa",
            address: "1-1 Shimotsutsumicho, Kanazawa, Ishikawa",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Curry Shop Champion", desc: "Opciones de arroz solo, precaución severa con los rebozados (katsu)." }
        ]
    },
    {
        day: 6, date: "4 Nov", title: "El Templo Ninja", icon: "🍵", location: "Kanazawa",
        lat: 36.5684, lng: 136.6669, // Higashi Chaya
        description: "Incursión en la arquitectura defensiva del clan Maeda y distritos de Geishas.",
        route: [
            { name: "Templo Ninja Myoryuji", time: "Mañana", price: "1200¥", note: "Reserva telefónica MANDATORIA (8:00-16:00).", extended_info: "<p>Puesto de vigilancia militar del siglo XVII disfrazado de modesto templo de 2 plantas. Oculta internamente <b>4 pisos, 23 habitaciones secretas, pozos trampa</b>.</p><p>Las visitas son exclusivamente guiadas en japonés a las que te prestan carpeta multilingüe. <b>Obligatorio reserva telefónica</b> anticipada.</p>" },
            { name: "Museo del Siglo XXI", time: "11:00", price: "Varies", note: "Piscina de Leandro Erlich: reservar turno digital a las 9:00 AM.", extended_info: "<p>Conocido por su arquitectura y su atracción <i>The Swimming Pool</i> de Leandro Erlich. Descender a la cámara estanca submarina exige anotarse a las <b>09:00 a.m. del mismo día en la lista de espera digital</b> en su web o in situ.</p>" },
            { name: "Higashi Chaya", time: "Tarde", price: "Gratis", note: "Distrito de casas de té. Shimasu (12,000¥ actuaciones geisha)." }
        ],
        celiac: "El mercado Omicho tiene marisco fresco a raudales. Pescado a la brasa con sal (shioyaki) es siempre un sí.",
        hotel: {
            name: "Onyado Nono Kanazawa",
            address: "1-1 Shimotsutsumicho, Kanazawa, Ishikawa",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Mercado Omicho (Puestos)", desc: "Ostras vivas, erizo de mar y brochetas de gamba a la parrilla con sal (shio)." }
        ]
    },
    {
        day: 7, date: "5 Nov", title: "Shirakawa-go y Takayama", icon: "🛖", location: "Gifu",
        lat: 36.2558, lng: 136.9064, // Shirakawago
        description: "Viaje en el tiempo a través de los Alpes Japoneses y sus aldeas de paja.",
        route: [
            { name: "Bus a Shirakawa-go", time: "Mañana", price: "4000¥/id", note: "Reserva en 'Japan Bus Online' con antelación.", extended_info: "<p>Se emplean los buses Nohi Bus o Hokutetsu. Las rutas interurbanas están frecuentemente limitadas en temporada alta, <b>exigen reserva de asiento previa e ineludible</b> usando el portal online.</p>" },
            { name: "Casas Gassho-zukuri", time: "Mediodía", price: "Gratis", note: "Aldea Patrimonio de la Humanidad rodeada de montañas." },
            { name: "Llegada a Takayama", time: "Tarde", price: "-", note: "Paseo por el casco antiguo de la era Edo." }
        ],
        celiac: "Ternera de Hida: Probad brochetas en la calle, pero pedid 'SHIO' (sal), NUNCA 'TARE' (salsa soja).",
        hotel: {
            name: "Takayama Ouan",
            address: "4 Chome-313 Hanasatomachi, Takayama, Gifu",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Puestos Callejeros Takayama", desc: "Brochetas de Wagyu con sal (shio). Evita salsas (tare)." }
        ]
    },
    {
        day: 8, date: "6 Nov", title: "Takayama Secreta", icon: "🏯", location: "Takayama",
        lat: 36.1423, lng: 137.2582, // Takayama Old Town
        description: "Exploración de las mansiones de comerciantes y el ambiente feudal de Takayama.",
        route: [
            { name: "Mercado Matutino", time: "8:00", price: "Gratis", note: "Productos locales y artesanía a orillas del río." },
            { name: "Casa Kusakabe", time: "10:00", price: "1000¥", note: "Cerrado los martes en invierno. Arquitectura colosal de madera.", extended_info: "<p>Mansión de un próspero comerciante de la era Edo, sostenida por colosales vigas y pilares de madera pulida que revelan la maestría de los carpinteros de Hida.</p><p>Cierra sus puertas los <b>martes durante el invierno</b> y su horario finaliza entre las 16:00 y las 17:00 horas dependiendo de la estación.</p>" },
            { name: "Casa Yoshijima", time: "11:30", price: "500¥", note: "Vecina de la Kusakabe, ideal para amantes de la fotografía.", extended_info: "<p>Arquitectura elegante con entrada de luz natural impresionante que baña la estructura de madera cálida.</p><p>Coste de admisión más barato (500 JPY) pero operando bajo las mismas restricciones de invierno que su vecina.</p>" }
        ],
        celiac: "Evitad el Miso de Takayama (Hoba Miso) si no confirman que no lleva cebada. El sake local suele ser seguro.",
        hotel: {
            name: "Takayama Ouan",
            address: "4 Chome-313 Hanasatomachi, Takayama, Gifu",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Matsuri Sushi", desc: "Sashimi excelente. Llevar propia salsa Tamari." }
        ]
    },
    {
        day: 9, date: "7 Nov", title: "Nara: Ciervos y Budas", icon: "🦌", location: "Nara",
        lat: 34.6853, lng: 135.8327, // Nara Park
        description: "La primera capital permanente. Ciervos mensajeros y templos monumentales.",
        route: [
            { name: "Todai-ji (Gran Buda)", time: "Mañana", price: "600¥", note: "La estructura de madera más grande del mundo." },
            { name: "Parque de Nara", time: "Todo el día", price: "Gratis", note: "1.200 ciervos sika sueltos. ¡Cuidado con la comida!" },
            { name: "Jardines Yoshikien", time: "Tarde", price: "Gratis", note: "GRATIS PARA EXTRANJEROS enseñando el pasaporte.", extended_info: "<p>Comprende tres elaborados jardines: de estanque, de musgo (parece una alfombra esmeralda) y de flores para ceremonia de té.</p><p>La entrada general es de 300 JPY pero <b>se exime completamente para turistas extranjeros</b> que presenten su pasaporte.</p>" }
        ],
        celiac: "Las galletas de los ciervos llevan trigo. ¡No las comáis y lavad las manos tras tocarlas!",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Nara Yakiniku locales", desc: "Carnes sin marinar a la brasa. Insistir en alergia alergia." }
        ]
    },
    {
        day: 10, date: "8 Nov", title: "Paz en Hiroshima", icon: "🕊️", location: "Hiroshima",
        lat: 34.3941, lng: 132.4533, // Peace park
        description: "Homenaje a la resiliencia humana y visita a la isla sagrada de Miyajima.",
        route: [
            { name: "Memorial de la Paz", time: "Mañana", price: "200¥", note: "Cúpula Gembaku y museo sobrecogedor." },
            { name: "Ferry a Miyajima", time: "Tarde", price: "JR Pass", note: "Impuesto insular obligatorio de 100¥ por persona." },
            { name: "Acuario de Miyajima", time: "16:00", price: "1420¥", note: "Arquitectura tradicional integrada en el paisaje sagrado.", extended_info: "<p>Diseñado para integrarse en la arquitectura tradicional de la isla (tejados de tejas). Tiene más de 13.000 especímenes centrándose en la biodiversidad del Mar Interior de Seto.</p><p>El precio es de 1.420 JPY pero considera que desde 2023 se cobra un <b>impuesto municipal obligatorio de 100 JPY</b> extra para entrar a la isla.</p>" }
        ],
        celiac: "Probad las ostras asadas en Miyajima. Pedidlas 'Plain' o con limón. Nada de salsas oscuras.",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Otras Asadas Miyajima", desc: "Limón y sal." }
        ]
    },
    {
        day: 11, date: "9 Nov", title: "Himeji: La Garza Blanca", icon: "🏰", location: "Himeji",
        lat: 34.8394, lng: 134.6939, // Himeji Castle
        description: "El castillo más espectacular de Japón, intacto desde hace siglos.",
        route: [
            { name: "Castillo de Himeji", time: "Mañana", price: "2500¥", note: "Nuevo sistema de 'doble precio' para extranjeros desde 2026.", extended_info: "<p>Apodado la 'Garza Blanca', es el castillo feudal mejor conservado del país.</p><p>Desde la primavera de 2026 se implementó un sistema de doble tarifa: la entrada general para <b>turistas internacionales ascendió a 2.500 JPY</b>, mientras que los japoneses locales mantienen su pase subsidiado de 1.000 JPY. Menores de 18 años entran gratis.</p>" },
            { name: "Koko-en (Jardín)", time: "Mediodía", price: "300¥", note: "Nueve jardines amurallados junto al castillo." },
            { name: "Viaje a Kioto", time: "Tarde", price: "JR Pass", note: "Llegada a la capital cultural para instalarnos." }
        ],
        celiac: "En la zona hay muchos locales de pescado. Sashimi de calidad en los restaurantes cerca de la estación.",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Sushi train locales", desc: "Solo sashimi crudo. Cuidado con el tamagoyaki (huevo) que puede llevar soja." }
        ]
    },
    {
        day: 12, date: "10 Nov", title: "Kioto: Brillo Imperial", icon: "🏯", location: "Kioto",
        lat: 35.0393, lng: 135.7292, // Kinkakuji
        description: "Los grandes iconos del norte y oeste: oro, rocas y bambú.",
        route: [
            { name: "Kinkaku-ji (Oro)", time: "9:00", price: "500¥", note: "Llegar a la apertura para evitar cruceristas." },
            { name: "Ryoan-ji (Zen)", time: "10:30", price: "500¥", note: "El jardín de rocas más famoso del budismo zen." },
            { name: "Arashiyama (Bambú)", time: "Tarde", price: "Gratis", note: "Bosque de bambú y puente Togetsukyo." }
        ],
        celiac: "Batatas asadas (Yaki-imo) en los puestos de Arashiyama. Saludables, calientes y sin gluten.",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Gluten Free Cafe & Restaurant Choice", desc: "Opciones 100% GF veganas en Kioto central." },
            { name: "Teppanyaki Manryu", desc: "Avisando con antelación, hacen carne sin gluten." }
        ]
    },
    {
        day: 13, date: "11 Nov", title: "Kioto: Bosque Sagrado", icon: "🦊", location: "Kioto",
        lat: 35.0390, lng: 135.7725, // Shimogamo
        description: "Inmersión en la historia arcana del Santuario Shimogamo y el bosque primigenio.",
        route: [
            { name: "Shimogamo Jinja", time: "9:00", price: "Gratis", note: "Uno de los santuarios más antiguos (UNESCO). Interior Oidono 500¥.", extended_info: "<p>Patrimonio de la Humanidad previo a la propia fundación de Kioto en el siglo VIII.</p><p>La entrada a los recintos base del bosque y patio exterior es gratuita. Únicamente se pide un ticket de 500 JPY si quieres entrar a sus cámaras de visión especial interiores (<i>Oidono</i>).</p>" },
            { name: "Tadasu no Mori", time: "10:30", price: "Gratis", note: "El 'Bosque donde se revelan las mentiras'. Flora del siglo VIII.", extended_info: "<p>Bosque primigenio de 12.4 hectáreas que rodea a Shimogamo. Sus árboles sagrados de hoja ancha superan los seis siglos de antigüedad.</p><p>La creencia sintoísta dicta que en este bosque <b>las falsedades son purgadas</b>.</p>" },
            { name: "Gion (Barrio Geishas)", time: "Noche", price: "Gratis", note: "Paseo por Pontocho para buscar cenas con encanto." }
        ],
        celiac: "Buscad restaurantes de Yakiniku (BBQ japonesa) y pedid carne sin marinar (Shiodare o solo sal).",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Engine Ramen", desc: "Ramen GF. Confirmar horarios, muy concurrido." }
        ]
    },
    {
        day: 14, date: "12 Nov", title: "Puertas Naranjas", icon: "🦊", location: "Kioto",
        lat: 34.9671, lng: 135.7726, // Fushimi Inari
        description: "Día de ascenso por los miles de Toriis y el templo de la terraza.",
        route: [
            { name: "Fushimi Inari", time: "7:00", price: "Gratis", note: "MADRUGÓN CRUCIAL. Cuanto más subas, menos gente habrá." },
            { name: "Kiyomizu-dera", time: "Atardecer", price: "400¥", note: "Vistas panorámicas de todo Kioto desde su gran terraza." }
        ],
        celiac: "Cuidado con las galletas de arroz (Senbei) en las tiendas de calle. Llevan soja pintada con trigo.",
        hotel: {
            name: "Cross Hotel Kyoto",
            address: "71-1 Daikokucho, Kawaramachi-dori, Nakagyo-ku, Kyoto",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Towzen", desc: "Famoso por su ramen vegano que suele ser seguro para GF (confirmar en local)." }
        ]
    },
    {
        day: 15, date: "13 Nov", title: "Relax Termal en Hakone", icon: "♨️", location: "Hakone",
        lat: 35.2323, lng: 139.1069, // Hakone
        description: "Día para soltar tensiones en el entorno volcánico de Hakone.",
        route: [
            { name: "Hakone Loop", time: "Todo el día", price: "Pass", note: "Ferry pirata, teleférico y huevos negros en Owakudani." },
            { name: "Onsen Tenzan", time: "17:00", price: "1300¥", note: "TATTOO FRIENDLY. Exigen silencio absoluto (11:00-20:00).", extended_info: "<p>Un refugio termal espectacular en el valle que, a diferencia del 95% de los onsen de Japón, es <b>totalmente amigable con los tatuajes</b> (no requiere taparlos).</p><p>Eso sí, imponen reglas de decoro rigurosas: prohíben totalmente los grupos grandes de personas tatuadas, pidiendo entrar en pares o individual, y siempre en riguroso silencio.</p>" }
        ],
        celiac: "Los huevos negros de Hakone son 100% seguros. El azufre solo tiñe la cáscara.",
        hotel: {
            name: "Hakone Kowakien Ten-yu",
            address: "1297 Ninotaira, Hakone, Ashigarashimo District",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Desayuno en Ryokan (Ryokan)", desc: "Avisad al hotel el día antes, adaptan los desayunos (gohan, shio-yake)." }
        ]
    },
    {
        day: 16, date: "14 Nov", title: "Kamakura: Buda al Mar", icon: "🧘", location: "Kamakura",
        lat: 35.3167, lng: 139.5361, // Kamakura Daibutsu
        description: "La metrópolis feudal de la costa. Grandes estatuas y templos de flores.",
        route: [
            { name: "Hase-dera", time: "9:00", price: "400¥", note: "Diosa Kannon de 11 caras. Excelentes vistas al mar.", extended_info: "<p>Esculpido en la ladera de una colina que ofrece panorámicas de la bahía de Sagami. Además alberga unas cuevas subterráneas lúgubres dedicadas a la diosa Benzaiten.</p><p>Horario extendido en primavera por el famoso florecimiento aglomerado de <b>hortensias azules</b> en junio.</p>" },
            { name: "Daibutsu (Gran Buda)", time: "11:00", price: "300¥", note: "13 metros de bronce. Entrar al interior cuesta +50¥.", extended_info: "<p>Colosal estatua de bronce de Amitabha de la era feudal (siglo XIII) que está al aire libre desde que un tsunami arrasó su edificio en 1498.</p><p>Por una ridícula y casi simbólica tarifa <b>adicional de 50 JPY</b>, puedes meterte físicamente <b>dentro del cuerpo hueco del Buda</b>.</p>" }
        ],
        celiac: "Pescado fresco del Pacífico. Buscad Shio-yaki (pescado a la sal) en los locales costeros.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Locales Marisco Enoshima", desc: "Asegurarse de asado a la parrilla." }
        ]
    },
    {
        day: 17, date: "15 Nov", title: "Lujo Shogun: Nikko", icon: "🌲", location: "Nikko",
        lat: 36.7580, lng: 139.5985, // Toshogu
        description: "El mausoleo más opulento de Japón, rodeado de bosques de cedros centenarios.",
        route: [
            { name: "Santuario Toshogu", time: "10:00", price: "1600¥", note: "Lugar de descanso final del Shogun Tokugawa Ieyasu.", extended_info: "<p>Patrimonio de la Humanidad. Es el complejo más profuso y barroco del país, en total contraposición al estilo purista zen. Está desbordado en <b>pan de oro</b> y maderas finamente talladas (como los monos de 'no ver, no oír, no hablar').</p>" },
            { name: "Cataratas Kegon", time: "15:00", price: "600¥", note: "Ascensor perforado en la roca para ver el salto de 97m.", extended_info: "<p>Tras cruzar la carretera serpenteante Irohazaka llegas al increíble lago Chuzenji y esta caída atronadora.</p><p>La experiencia definitiva requiere comprar el ticket de 600 JPY para bajar por <b>un ascensor excavado y perforado 100 metros hacia el interior de la roca volcánica</b>, alcanzando la plataforma inferior de observación cubierta en niebla.</p>" }
        ],
        celiac: "Nikko es famoso por el Yuba (piel de tofu). Es seguro, pero preguntad siempre por el caldo (soya).",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Gyushin Nikko", desc: "Carne a la brasa." }
        ]
    },
    {
        day: 18, date: "16 Nov", title: "Osaka: Neones y Comida", icon: "🐙", location: "Osaka",
        lat: 34.6687, lng: 135.5013, // Dotonbori
        description: "Día de contrastes: del museo de historia a la locura de Dotonbori.",
        route: [
            { name: "Museo de Historia", time: "10:00", price: "600¥", note: "Cerrado los martes. Cimiento antiguo del palacio Naniwa.", extended_info: "<p>Inaugurado en 2001 sobre ruinas reales del era antigua. Elevas a la décima planta en ascensor e inicias un prolongado <b>descenso cronológico a pie</b> que llega a deslumbrar por us decorados reales de los <i>felices años 20</i> de la era Showa.</p>" },
            { name: "Dotonbori", time: "Noche", price: "Gratis", note: "Cena entre neones. El corazón gastronómico de Japón." }
        ],
        celiac: "Día difícil (Takoyaki no). Buscad cadenas de Ramen que tengan opción GF o Stick con carne a la parrilla.",
        hotel: {
            name: "Cross Hotel Osaka",
            address: "2 Chome-5-15 Shinsaibashisuji, Chuo Ward",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Chibo Okonomiyaki", desc: "No sirven GF, pero en la zona hay steak houses como Matsusakagyu Yakiniku M con cortes exquisitos de Wagyu directo a la parrilla de tu mesa." }
        ]
    },
    {
        day: 19, date: "17 Nov", title: "Tokio Final: Arte", icon: "🛍️", location: "Tokio",
        lat: 35.6601, lng: 139.7303, // Roppongi / Azabudai
        description: "Días de margen para compras en Akihabara o experiencias sensoriales.",
        route: [
            { name: "Akihabara", time: "Mañana", price: "Gratis", note: "Cultura anime y electrónica retro." },
            { name: "teamLab Borderless", time: "15:00", price: "Variable", note: "Arte inmersivo en Azabudai Hills (Reserva obligatoria).", extended_info: "<p>Recinto que rechaza la linealidad; debes perderte en el laberinto descubriendo pasillos ocultos o mirando esculturas de luces volumétricas interactivas. Se necesitan <b>3 o 4 horas</b>.</p><p>Atención física: no lleva agua como <i>Planets</i>, pero todo son <b>suelos de espejo puro</b> por lo que las mujeres en falda deberían planificarlo y llevar leggins.</p>" }
        ],
        celiac: "Aprovechad para comprar snacks GF certificados en supermercados grandes para el vuelo de vuelta.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Akiyama Yakiniku", desc: "Yakiniku de primera calidad en Tokyo." }
        ]
    },
    {
        day: 20, date: "18 Nov", title: "Últimas Compras", icon: "🧸", location: "Tokio",
        lat: 35.7118, lng: 139.7967, // Asakusa
        description: "Cierre del viaje. Repetir vuestro rincón favorito o maletas extra.",
        route: [
            { name: "Nakano Broadway", time: "Todo el día", price: "Gratis", note: "Paraíso de coleccionistas y figuras vintage." },
            { name: "Asakusa Nakamise", time: "Tarde", price: "Gratis", note: "Souvenirs finales bajo el templo Senso-ji." }
        ],
        celiac: "En Asakusa hay algunos puestos de mochi naturales (arroz) que suelen ser seguros. Confirmad relleno.",
        hotel: {
            name: "Shibuya Stream Excel Hotel Tokyu",
            address: "3-chōme-21-3 Shibuya, Shibuya City, Tokyo",
            mapLink: "https://maps.app.goo.gl/xxx"
        },
        restaurantesSeguros: [
            { name: "Halal Sakura", desc: "Local halal que entiende muy bien qué significa no servir gluten." }
        ]
    },
    {
        day: 21, date: "19-21 Nov", title: "Sayonara!", icon: "✈️", location: "Narita/Haneda",
        lat: 35.7645, lng: 140.3860, // Narita Airport
        description: "Fin de la aventura. Traslado al aeropuerto según horario de vuelo.",
        route: [
            { name: "Traslado Aeropuerto", time: "Varies", price: "Pass/Cash", note: "Reservar asiento en Narita Express con tiempo." }
        ],
        celiac: "Comida de aeropuerto: Buscad opciones occidentales seguras si no encontráis nada japonés local.",
        hotel: {
            name: "-",
            address: "Regreso a casa",
            mapLink: "#"
        },
        restaurantesSeguros: [
            { name: "Starbucks (Aeropuerto)", desc: "Café seguro y bebidas embotelladas." }
        ]
    }
];
