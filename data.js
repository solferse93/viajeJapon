const tripConfig = {
    id: 'japon_2026',
    title: 'Aventura Japonesa',
    dates: '30 Oct - 21 Nov',
    pax: '4 Adultos',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop', // Imagen de ejemplo (Tokio en otoño)
    supabaseUrl: 'https://gyjkbzosfukbiyxvfoqu.supabase.co',
    supabaseKey: 'sb_publishable_UnOPH2ngXlqvnGQtMqXlKg_d49a0iUh'
};

const itineraryData = [
    {
        "day": 1,
        "date": "Día 1",
        "title": "El Pulso de Shibuya y la Bienvenida",
        "icon": "🚦",
        "location": "Tokio",
        "description": "Inmersión inicial en la ciudad a través del cruce más famoso del mundo y rascacielos.",
        "route": [
            {
                "name": "Shibuya Scramble, Hachiko y Shibuya Sky",
                "time": "Atardecer",
                "price": "Variable",
                "lat": 35.6595,
                "lng": 139.7001,
                "brief_note": "Cruce multitudinario, estatua icónica y vistas panorámicas.",
                "detailed_info": "<p>Cruzar el <b>Shibuya Scramble</b> (el cruce más transitado del mundo), saludar a la estatua de <b>Hachiko</b> y subir al mirador <b>Shibuya Sky</b>.</p><p><b>Tip de Japonismo:</b> Reserva el Shibuya Sky para el atardecer.</p>"
            },
            {
                "name": "Nonbei Yokocho y Shibuya Scramble Square",
                "time": "Noche",
                "price": "Variable",
                "lat": 35.6601,
                "lng": 139.7013,
                "brief_note": "Cena auténtica y exploración gastronómica.",
                "detailed_info": "<p>Explora los callejones de <b>Nonbei Yokocho</b> para una primera cena auténtica.</p><p>Visita el Shibuya Scramble Square para conocer las mejores <b>Depachikas</b> (sótanos de comida de lujo). Estos lugares son el mejor sitio para comprar regalos gastronómicos de alta calidad.</p>"
            }
        ],
        "celiac": "Revisar ingredientes en las Depachikas, prestando especial atención a salsas como la de soja. No se detalla información de alérgenos en la guía."
    },
    {
        "day": 2,
        "date": "Día 2",
        "title": "Harajuku, Yoyogi y el Poder de Shinjuku",
        "icon": "⛩️",
        "location": "Tokio",
        "description": "Contraste entre los santuarios tradicionales, las tendencias juveniles y el neón futurista.",
        "route": [
            {
                "name": "Meiji Jingu y Parque Yoyogi",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.6764,
                "lng": 139.6993,
                "brief_note": "Santuario solemne y epicentro cultural urbano.",
                "detailed_info": "<p><b>Meiji Jingu</b>, el santuario sintoísta más solemne de la ciudad. Paseo por el <b>Parque Yoyogi</b> (epicentro cultural los domingos).</p>"
            },
            {
                "name": "Takeshita Dori y Omotesando",
                "time": "Mediodía",
                "price": "Variable",
                "lat": 35.6712,
                "lng": 139.7027,
                "brief_note": "Calles de moda, dulces y sofisticación.",
                "detailed_info": "<p><b>Takeshita Dori</b> (Harajuku). Prueba los famosos crepes o el algodón de azúcar gigante. Recorre la sofisticada <b>Omotesando</b> (los 'Campos Elíseos' de Tokio).</p>"
            },
            {
                "name": "Gobierno Metropolitano y Shinjuku",
                "time": "Tarde - Noche",
                "price": "Gratis (Mirador)",
                "lat": 35.6896,
                "lng": 139.6922,
                "brief_note": "Mirador panorámico y exploración nocturna.",
                "detailed_info": "<p>Traslado a <b>Shinjuku</b>. Sube al mirador gratuito del <b>Gobierno Metropolitano</b> para una vista panorámica. Explora el contraste entre el futurismo de neón de <b>Kabukicho</b> y el ambiente retro de <b>Omoide Yokocho</b> (callejón de los recuerdos) y <b>Golden Gai</b>.</p><p>Nota: Los restaurantes populares en Shinjuku requieren reserva vía <b>TableCheck</b> con semanas de antelación.</p>"
            }
        ],
        "celiac": "Precaución con los crepes y dulces en Takeshita Dori por posible contaminación cruzada. No se detalla información específica en la guía."
    },
    {
        "day": 3,
        "date": "Día 3",
        "title": "Fujiyoshida y la Estampa del Monte Fuji",
        "icon": "🗻",
        "location": "Yamanashi (Base Tokio)",
        "description": "Excursión temprana para capturar la mejor vista icónica del Monte Fuji.",
        "route": [
            {
                "name": "Pagoda Chureito",
                "time": "Antes de las 8:30 AM",
                "price": "Variable",
                "lat": 35.5015,
                "lng": 138.8016,
                "brief_note": "Ascenso para la foto clásica del Fuji.",
                "detailed_info": "<p>Salida temprana (antes de las 7:30 AM). Imprescindible llegar a la <b>Pagoda Chureito</b> antes de las 8:30 AM para evitar nubes sobre el volcán. Ascenso de los 400 peldaños para la foto icónica.</p>"
            },
            {
                "name": "Calle Honcho (Shimoyoshida)",
                "time": "Mañana",
                "price": "Gratis",
                "lat": 35.4925,
                "lng": 138.8039,
                "brief_note": "Calle famosa por su alineación visual con el Fuji.",
                "detailed_info": "<p>Paseo por la calle Honcho de Shimoyoshida, famosa por su alineación visual perfecta con el Fuji.</p>"
            }
        ],
        "celiac": "Opciones limitadas en rutas de montaña. Se recomienda llevar snacks propios. Sin información específica en la guía."
    },
    {
        "day": 4,
        "date": "Día 4",
        "title": "Asakusa, Akihabara y el Arte del Futuro",
        "icon": "🏮",
        "location": "Tokio",
        "description": "Recorrido desde el Tokio histórico hasta el paraíso electrónico y arte inmersivo.",
        "route": [
            {
                "name": "Asakusa y Río Sumida",
                "time": "Mañana",
                "price": "Variable",
                "lat": 35.7147,
                "lng": 139.7966,
                "brief_note": "Santuarios, calles comerciales y paseos ribereños.",
                "detailed_info": "<p><b>Asakusa</b>: Atraviesa la puerta Kaminarimon y recorre la calle comercial <b>Nakamise-dori</b>. Prueba los age-manju (bollos fritos) o el melonpan. Disfruta de las vistas del río Sumida, el edificio de la cerveza Asahi y la Tokyo Skytree.</p>"
            },
            {
                "name": "Akihabara",
                "time": "Tarde",
                "price": "Variable",
                "lat": 35.6983,
                "lng": 139.7731,
                "brief_note": "Centro neurálgico de la electrónica y cultura pop.",
                "detailed_info": "<p><b>Akihabara</b> (Electric Town). Sumérgete en las tiendas de 7 plantas de electrónica y los centros de <b>Gashapons</b> (máquinas de bolas).</p>"
            },
            {
                "name": "teamLab Borderless",
                "time": "Cierre del día",
                "price": "~4.000 JPY",
                "lat": 35.6625,
                "lng": 139.7405,
                "brief_note": "Museo de arte digital inmersivo.",
                "detailed_info": "<p>Inmersión en <b>teamLab Borderless</b> (Azabudai Hills). <b>Atención logística:</b> ENVIAR MALETAS A OSAKA ESTA TARDE. Tarifa 2026: ~4.000 JPY.</p>"
            }
        ],
        "celiac": "Los age-manju y melonpan de Asakusa contienen gluten. Evitar su consumo. Sin alternativas especificadas en la guía."
    },
    {
        "day": 5,
        "date": "Día 5",
        "title": "Kanazawa",
        "icon": "🏯",
        "location": "Kanazawa",
        "description": "Exploración de la ciudad conocida por sus jardines y patrimonio Ninja.",
        "route": [
            {
                "name": "Jardín Kenrokuen y Templo Ninja",
                "time": "Todo el día",
                "price": "1.200 JPY (Templo Ninja)",
                "lat": 36.5621,
                "lng": 136.6626,
                "brief_note": "Visita a jardines clásicos, museo moderno y templo con reserva.",
                "detailed_info": "<p>Visita al Jardín Kenrokuen, <b>Templo Ninja</b> (Templo Myoryuji, requiere reserva previa, tarifa 2026: 1.200 JPY) y Museo del Siglo XXI.</p><p>Nota: Es obligatorio descalzarse en la mayoría de recintos, llevar calcetines limpios y sin agujeros.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía para Kanazawa."
    },
    {
        "day": 6,
        "date": "Día 6",
        "title": "Shirakawa-go y Takayama",
        "icon": "🏘️",
        "location": "Takayama",
        "description": "Paseo por aldeas históricas y llegada a los alpes.",
        "route": [
            {
                "name": "Aldea gassho-zukuri",
                "time": "Día",
                "price": "Variable",
                "lat": 36.2558,
                "lng": 136.9062,
                "brief_note": "Arquitectura tradicional en la aldea histórica y llegada al puente Nakabashi.",
                "detailed_info": "<p>Visita a la aldea <b>gassho-zukuri</b> en Shirakawa-go y llegada a Takayama (Puente Nakabashi).</p>"
            }
        ],
        "celiac": "Sin información específica en la guía para la región alpina."
    },
    {
        "day": 7,
        "date": "Día 7",
        "title": "Takayama y Tren Hida",
        "icon": "🚄",
        "location": "Osaka",
        "description": "Mercados matutinos y traslado panorámico hacia la región de Kansai.",
        "route": [
            {
                "name": "Mercados y Limited Express Hida",
                "time": "Mañana - Tarde",
                "price": "Variable",
                "lat": 36.1432,
                "lng": 137.2570,
                "brief_note": "Mercados de Takayama y tren panorámico.",
                "detailed_info": "<p>Recorrido por los mercados de Miyagawa, catas de sake y viaje en el tren <b>Limited Express Hida</b> (panorámico) hacia Osaka.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 8,
        "date": "Día 8",
        "title": "Osaka Histórica",
        "icon": "🐙",
        "location": "Osaka",
        "description": "Recorrido por la historia de Osaka seguido de la vibrante noche en la ciudad.",
        "route": [
            {
                "name": "Castillo de Osaka y Dotonbori",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 34.6873,
                "lng": 135.5262,
                "brief_note": "Fortaleza clásica, historia y epicentro de ocio nocturno.",
                "detailed_info": "<p>Visita al <b>Castillo de Osaka</b> y Museo de Historia. Disfruta la noche en <b>Dotonbori</b>.</p><p>Nota: En Osaka, sitúate a la derecha en las escaleras mecánicas, al revés que en Tokio.</p>"
            }
        ],
        "celiac": "Extremar cuidado con el street food en Dotonbori. Sin información específica en la guía."
    },
    {
        "day": 10,
        "date": "Día 10",
        "title": "Osaka Retro",
        "icon": "🕹️",
        "location": "Osaka",
        "description": "Exploración de los barrios con encanto antiguo y cultura otaku.",
        "route": [
            {
                "name": "Mercado Kuromon y Den Den Town",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 34.6653,
                "lng": 135.5065,
                "brief_note": "Mercado gastronómico, cultura geek y estética retro.",
                "detailed_info": "<p>Recorrido por el Mercado Kuromon, <b>Den Den Town</b> y Shinsekai (Tsutenkaku).</p>"
            }
        ],
        "celiac": "Consultar alérgenos en puestos del Mercado Kuromon. Sin información específica en la guía."
    },
    {
        "day": 11,
        "date": "Día 11",
        "title": "Hiroshima y Miyajima",
        "icon": "🕊️",
        "location": "Miyajima",
        "description": "Reflexión histórica y conexión con la naturaleza en la isla santuario.",
        "route": [
            {
                "name": "Parque de la Paz y Miyajima",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 34.3927,
                "lng": 132.4524,
                "brief_note": "Monumentos por la paz, viaje en ferry y acuario.",
                "detailed_info": "<p>Visita al Parque de la Paz en Hiroshima, travesía en ferry JR y visita al <b>Acuario de Miyajima</b>. Noche de alojamiento en Ryokan.</p>"
            }
        ],
        "celiac": "Avisar con antelación de restricciones dietéticas al Ryokan para la cena tradicional. Sin información en la guía."
    },
    {
        "day": 12,
        "date": "Día 12",
        "title": "Himeji y entrada a Kioto",
        "icon": "🏯",
        "location": "Kioto",
        "description": "El castillo más espectacular de Japón antes de adentrarse en la capital cultural.",
        "route": [
            {
                "name": "Castillo de Himeji",
                "time": "Mañana - Tarde",
                "price": "2.500 JPY",
                "lat": 34.8394,
                "lng": 134.6939,
                "brief_note": "El Castillo de la Garza Blanca y traslado a Kioto.",
                "detailed_info": "<p>Visita al <b>Castillo de la Garza Blanca</b> (Tarifa 2026: 2.500 JPY). Traslado posterior a Kioto.</p><p>Nota de movilidad: En Kioto, priorizar el metro y los trenes (JR, Keihan, Hankyu) siempre que sea posible para evitar los atascos de los autobuses.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 13,
        "date": "Día 13",
        "title": "El Kioto Imperial y el Bosque Sagrado",
        "icon": "🌲",
        "location": "Kioto",
        "description": "Ruta patrimonial por la zona centro y norte de Kioto.",
        "route": [
            {
                "name": "Kioto Imperial",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.0254,
                "lng": 135.7621,
                "brief_note": "Centro y norte patrimonial.",
                "detailed_info": "<p>Recorrido por el <b>Kioto Imperial</b> y el Bosque Sagrado, abarcando la zona Centro/Norte de la ciudad.</p><p><b>Nota de Etiqueta:</b> Llevar calzado fácil de poner y quitar debido a las visitas a templos, y calcetines limpios.</p><p><b>Tip:</b> Los restaurantes populares en Gion/Pontocho requieren reserva vía TableCheck con antelación.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 14,
        "date": "Día 14",
        "title": "Higashiyama: El Kioto de las Postales",
        "icon": "📸",
        "location": "Kioto",
        "description": "Exploración del lado más fotogénico y tradicional al este de la ciudad.",
        "route": [
            {
                "name": "Higashiyama",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.0006,
                "lng": 135.7766,
                "brief_note": "La estampa clásica de Kioto.",
                "detailed_info": "<p>Recorrido completo por la zona de <b>Higashiyama</b> (Este), representando el Kioto de las postales.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 15,
        "date": "Día 15",
        "title": "Arashiyama y el Sur",
        "icon": "🎋",
        "location": "Kioto",
        "description": "Recorrido por los paisajes naturales y santuarios del sur y oeste.",
        "route": [
            {
                "name": "Arashiyama y zona sur",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.0132,
                "lng": 135.6726,
                "brief_note": "Naturaleza, bambú y zona sur.",
                "detailed_info": "<p>Exploración de la zona de <b>Arashiyama</b> y los distritos del Oeste/Sur.</p><p><b>Opcional:</b> Kioto es la base perfecta para una escapada de medio día a Uji, la capital del Matcha.</p>"
            }
        ],
        "celiac": "Precaución con los dulces de matcha que puedan contener espesantes en Uji. Sin información en la guía."
    },
    {
        "day": 16,
        "date": "Día 16",
        "title": "El Sendero Zen y el Oro",
        "icon": "✨",
        "location": "Kioto",
        "description": "La elegancia dorada y el misticismo Zen en la zona norte y este.",
        "route": [
            {
                "name": "Ruta del Oro",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.0393,
                "lng": 135.7292,
                "brief_note": "Pabellones dorados y contemplación.",
                "detailed_info": "<p>Recorrido por el Sendero Zen y el Oro en las zonas Norte/Este de Kioto.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 17,
        "date": "Día 17",
        "title": "Kamakura",
        "icon": "🪷",
        "location": "Kamakura",
        "description": "Tierra de samuráis y grandes estatuas budistas.",
        "route": [
            {
                "name": "Hase-dera y Gran Buda",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.3167,
                "lng": 139.5361,
                "brief_note": "Templos y el inmenso Buda de bronce.",
                "detailed_info": "<p>Visita al Templo Hase-dera y al <b>Gran Buda</b> de Kotoku-in.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 18,
        "date": "Día 18",
        "title": "Hakone",
        "icon": "♨️",
        "location": "Hakone",
        "description": "Relajación termal y vistas montañosas hacia el Fuji.",
        "route": [
            {
                "name": "Onsen Tenzan y Lago Ashi",
                "time": "Todo el día",
                "price": "Variable",
                "lat": 35.2018,
                "lng": 139.0264,
                "brief_note": "Aguas termales y lago escénico.",
                "detailed_info": "<p>Relajación en el <b>Onsen Tenzan</b> y disfrute de las vistas al Fuji desde el lago Ashi.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 19,
        "date": "Día 19",
        "title": "Tsukiji, el Lujo de Ginza y Shiodome",
        "icon": "🍣",
        "location": "Tokio",
        "description": "Desde el mejor sushi fresco hasta el corazón de las compras de lujo en Ginza.",
        "route": [
            {
                "name": "Mercado de Tsukiji",
                "time": "Mañana",
                "price": "Variable",
                "lat": 35.6654,
                "lng": 139.7706,
                "brief_note": "Desayuno de pescado fresco y tortillas.",
                "detailed_info": "<p>Desayuno en el <b>Mercado Exterior de Tsukiji</b> (sushi fresco y tortillas tamagoyaki).</p>"
            },
            {
                "name": "Ginza",
                "time": "Mediodía - Tarde",
                "price": "Variable",
                "lat": 35.6712,
                "lng": 139.7665,
                "brief_note": "Alta costura, papelerías gigantes y depachikas.",
                "detailed_info": "<p><b>Ginza</b>: El barrio más elegante. Visita la papelería <b>Itoya</b> (12 plantas) y los grandes almacenes <b>Mitsukoshi</b> (imprescindible su depachika).</p><p><b>Tip:</b> Pasea por Ginza el sábado o domingo tarde cuando la calle principal se vuelve peatonal.</p>"
            }
        ],
        "celiac": "Cuidado con la salsa de soja en el sushi y en la tortilla tamagoyaki de Tsukiji. Sin información en la guía."
    },
    {
        "day": 20,
        "date": "Día 20",
        "title": "Ueno, Ameyoko y el 'Old Tokyo'",
        "icon": "🌳",
        "location": "Tokio",
        "description": "Contraste entre los paseos por el viejo Tokio, parques culturales y mercados bulliciosos.",
        "route": [
            {
                "name": "Ueno y Ameyoko",
                "time": "Mañana",
                "price": "Variable",
                "lat": 35.7140,
                "lng": 139.7741,
                "brief_note": "Naturaleza, museos y compras bajo las vías.",
                "detailed_info": "<p><b>Ueno</b>: Visita el estanque Shinobazu y, si hay interés cultural, el Museo Nacional de Tokio. <b>Ameyoko</b>: Mercado bajo las vías del tren, ideal para compras de última hora de snacks y ropa.</p>"
            },
            {
                "name": "Yanaka Ginza",
                "time": "Tarde",
                "price": "Gratis",
                "lat": 35.7275,
                "lng": 139.7667,
                "brief_note": "Paseo nostálgico por el barrio de posguerra.",
                "detailed_info": "<p>Paseo por el barrio de <b>Yanaka</b> (Yanaka Ginza), que conserva el aire del Tokio de posguerra y es conocido como el barrio de los gatos.</p>"
            }
        ],
        "celiac": "Sin información específica en la guía."
    },
    {
        "day": 21,
        "date": "Día 21",
        "title": "Últimas Compras y Despedida",
        "icon": "✈️",
        "location": "Tokio",
        "description": "Gestiones finales, souvenirs asequibles y traslado al aeropuerto.",
        "route": [
            {
                "name": "Compras Finales y Aeropuerto",
                "time": "Mañana",
                "price": "Variable",
                "lat": 35.6938,
                "lng": 139.7034,
                "brief_note": "Megatiendas de descuentos y retorno.",
                "detailed_info": "<p>Compras finales en <b>Don Quijote</b> (24h) y <b>Daiso</b> (tienda 100 yenes).</p><p><b>Tax-Free:</b> Recuerda llevar el pasaporte; las tiendas descuentan el 10% directamente si la compra supera los 5.000 JPY.</p><p>Traslado al aeropuerto.</p>"
            }
        ],
        "celiac": "Revisar cuidadosamente el etiquetado de los snacks comprados en Don Quijote o Daiso. Sin información en la guía."
    }
]