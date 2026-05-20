// --- LOGIC: Hotels Manager ---
async function fetchHotels() {
    const container = document.getElementById('hotels-container');
    if (!container) return;
    try {
        const { data, error } = await supabaseClient
            .from('hoteles')
            .select('*')
            .eq('viaje_id', tripConfig.id)
            .order('check_in', { ascending: true });

        if (error) throw error;

        setCache('hotels_list', data);
        renderHotelCards(data);
    } catch (error) {
        console.warn('Hotels cloud fetch failed. Reading local cache backup...', error);
        const cached = getCache('hotels_list');
        if (cached) {
            renderHotelCards(cached);

            const offlineWarning = document.createElement('div');
            offlineWarning.className = 'bg-orange-50 text-orange-700 p-4 rounded-xl text-center text-xs font-bold col-span-full border border-orange-100 mb-2';
            offlineWarning.innerHTML = `⚠️ Mostrando alojamientos locales (Modo sin conexión)`;
            container.insertBefore(offlineWarning, container.firstChild);
        } else {
            container.innerHTML = '<p class="text-center text-red-400 font-bold py-12 col-span-full">Error al cargar alojamientos y caché vacía.</p>';
        }
    }
}

function renderHotelCards(list) {
    const container = document.getElementById('hotels-container');
    if (!container) return;
    if (!list || list.length === 0) {
        container.innerHTML = '<p class="text-center text-gray-400 py-12 col-span-full">No hay hoteles registrados aún.</p>';
        return;
    }

    container.innerHTML = list.map(h => {
        const isPaid = h.estado_pago === 'Pagado';
        const statusClass = isPaid ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700';
        const mapsBtn = h.enlace ? `<a href="${h.enlace}" target="_blank" class="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg font-bold text-[10px] uppercase hover:bg-blue-100 transition-colors">📍 Ver Mapa/Booking</a>` : '';

        return `
            <div class="bg-white rounded-2xl p-5 shadow-premium border-t-4 ${isPaid ? 'border-green-400' : 'border-orange-400'} flex flex-col justify-between hover:shadow-floating transition-shadow duration-200">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${statusClass}">${h.estado_pago}</span>
                        <button onclick="deleteHotel('${h.id}')" class="text-gray-300 hover:text-red-500 transition-colors">🗑️</button>
                    </div>
                    <h4 class="font-bold text-gray-900 leading-tight">${h.nombre}</h4>
                    <p class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-2">${h.ciudad}</p>
                    <div class="flex items-center text-xs text-gray-500 space-x-2 mb-3">
                        <span>📅 ${new Date(h.check_in).toLocaleDateString()} - ${new Date(h.check_out).toLocaleDateString()}</span>
                    </div>
                    ${h.notas ? `<p class="text-xs text-gray-600 bg-gray-50 p-2 rounded-lg italic mb-3">"${h.notas}"</p>` : ''}
                </div>
                <div class="flex justify-between items-center mt-2 pt-3 border-t border-gray-50">
                    <span class="font-bold text-gray-800">${h.precio} €</span>
                    ${mapsBtn}
                </div>
            </div>
        `;
    }).join('');
}

async function addHotel() {
    const pin = obtenerPin();
    if (!pin) { alert("🔐 Caja fuerte bloqueada. Necesitas el PIN para guardar datos."); return; }

    let city = document.getElementById('h-city').value;
    if (city === 'Otra') {
        const manualCity = document.getElementById('h-city-manual').value.trim();
        if (!manualCity) {
            alert("Por favor, introduce el nombre de la ciudad manualmente.");
            return;
        }
        city = manualCity;
    }

    const data = {
        p_viaje_id: tripConfig.id,
        ciudad_in: city,
        nombre_in: document.getElementById('h-name').value,
        enlace_in: document.getElementById('h-link').value,
        check_in_in: document.getElementById('h-checkin').value,
        check_out_in: document.getElementById('h-checkout').value,
        precio_in: parseFloat(document.getElementById('h-price').value || 0),
        estado_pago_in: document.getElementById('h-status').value,
        notas_in: document.getElementById('h-notes').value
    };

    try {
        const { error } = await supabaseClient.rpc('gestionar_hotel', {
            operacion: 'INSERT',
            pin_input: pin,
            ...data
        });
        if (error) throw error;

        document.getElementById('hotel-form').reset();
        const manualContainer = document.getElementById('h-city-manual-container');
        if (manualContainer) manualContainer.classList.add('hidden');

        fetchHotels();
    } catch (e) { alert('Error: ' + e.message); }
}

async function deleteHotel(id) {
    if (!confirm("¿Deseas purgar permanentemente este registro de alojamiento?")) return;
    const pin = obtenerPin();
    if (!pin) { alert("🔐 Necesitas el PIN para purgar datos."); return; }

    try {
        const { error } = await supabaseClient.rpc('gestionar_hotel', {
            operacion: 'DELETE',
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            hotel_id: id
        });
        if (error) throw error;
        fetchHotels();
    } catch (e) { alert('Error: ' + e.message); }
}
