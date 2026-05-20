// --- CONFIG & APP INIT ---
function initAppConfig() {
    if (!tripConfig) return;

    // DOM Injection
    document.title = tripConfig.title + " - Guía de Viaje";
    document.getElementById('dom-title').textContent = tripConfig.title + " - Guía de Viaje";
    document.getElementById('app-header-title').textContent = tripConfig.title;
    document.getElementById('app-header-subtitle').textContent = `${tripConfig.dates} | ${tripConfig.pax}`;
    document.getElementById('app-footer').textContent = `Guía para ${tripConfig.title} · ${tripConfig.dates}`;

    // Dashboard dynamic injection
    document.getElementById('welcome-title').textContent = `¡Hola! Bienvenido a ${tripConfig.title}`;
    document.getElementById('welcome-subtitle').textContent = `Tu centro de mando para el viaje del ${tripConfig.dates}.`;
    document.getElementById('dash-dates').textContent = tripConfig.dates;
    document.getElementById('dash-pax').textContent = tripConfig.pax;

    // Icon Logic (Japan prefix or default)
    const iconSpan = document.getElementById('app-icon');
    if (tripConfig.id.toLowerCase().includes('japon')) {
        iconSpan.textContent = '🇯🇵';
    } else if (tripConfig.id.toLowerCase().includes('italia')) {
        iconSpan.textContent = '🇮🇹';
    } else {
        iconSpan.textContent = '✈️';
    }

    // Dynamic Cities for Hotel Form
    const citySelect = document.getElementById('h-city');
    if (citySelect && itineraryData) {
        const uniqueCities = [...new Set(itineraryData.map(d => d.location))].sort();
        citySelect.innerHTML = uniqueCities.map(c => `<option value="${c}">${c}</option>`).join('') + '<option value="Otra">Otra (Manual)</option>';
    }

    // Bind Hotel Form manual city input toggle
    const manualContainer = document.getElementById('h-city-manual-container');
    if (citySelect && manualContainer) {
        citySelect.addEventListener('change', function () {
            if (this.value === 'Otra') {
                manualContainer.classList.remove('hidden');
            } else {
                manualContainer.classList.add('hidden');
            }
        });
    }

    // Supabase Init
    supabaseClient = supabase.createClient(tripConfig.supabaseUrl, tripConfig.supabaseKey);

    // Fetch Currency rates
    fetchExchangeRate();

    // Update online status badge
    updateOnlineStatus();
}

// --- LOGIC: Tab Switching ---
function switchTab(tabId) {
    // Update buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-white', 'shadow', 'text-japan-accent');
        btn.classList.add('text-gray-600', 'hover:text-japan-text');
    });
    const activeBtn = document.getElementById(`btn-${tabId}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-gray-600', 'hover:text-japan-text');
        activeBtn.classList.add('bg-white', 'shadow', 'text-japan-accent');
    }

    // Hide all tabs (remove active class — CSS handles display:none)
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Show target tab: add class in next animation frame so CSS transition fires correctly
    const targetContent = document.getElementById(tabId);
    if (targetContent) {
        // rAF double-pump: first frame lets CSS set display:none on others, second fires the transition
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                targetContent.classList.add('active');
            });
        });
    }

    // If switching to resume, render map and dashboard data
    if (tabId === 'resumen' && !window.dashboardRendered) {
        renderDashboard();
        setTimeout(renderSummaryMap, 150);
        window.dashboardRendered = true;
    }

    // If switching to hotels, fetch initial data
    if (tabId === 'hoteles' && !window.hotelsRendered) {
        fetchHotels();
        window.hotelsRendered = true;
    }

    // If switching to budget, fetch data and chart
    if (tabId === 'presupuesto' && !window.budgetChartRendered) {
        fetchBudget();
        window.budgetChartRendered = true;
    }

    // If switching to preparativos, render initial checklist
    if (tabId === 'preparativos' && !window.checklistRendered) {
        fetchChecklist();
        window.checklistRendered = true;
    }

    // If switching to itinerary and a marker is set, fix map size issues
    if (tabId === 'itinerario' && window.map) {
        setTimeout(() => window.map.invalidateSize(), 150);
    }
}

// --- LOGIC: Render Itinerary List ---
function renderItineraryList() {
    const container = document.getElementById('day-list-container');
    if (!container) return;
    container.innerHTML = ''; // Clear

    const calendarStrip = document.getElementById('calendar-strip');
    if (calendarStrip) calendarStrip.innerHTML = '';

    let currentLocation = '';

    itineraryData.forEach((data, index) => {
        const dateText = `${data.day} Nov`;

        if (calendarStrip) {
            const pill = document.createElement('button');
            pill.className = 'flex-shrink-0 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-bold text-gray-500 hover:text-japan-accent hover:border-japan-accent hover:bg-red-50 transition-all shadow-sm focus:outline-none';
            pill.innerText = dateText;
            pill.onclick = () => {
                const targetId = 'day-card-' + index;
                const targetCard = document.getElementById(targetId);
                if (targetCard) {
                    selectDay(index, targetCard);
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            };
            calendarStrip.appendChild(pill);
        }

        if (data.location !== currentLocation) {
            currentLocation = data.location;
            const divider = document.createElement('div');
            divider.className = 'bg-gray-100/90 text-gray-800 font-bold px-4 py-2.5 rounded-xl mt-6 mb-2 text-sm uppercase tracking-wider flex items-center shadow-sm border border-gray-200';
            divider.innerHTML = `<span class="mr-2 text-lg">📍</span> ${currentLocation}`;
            container.appendChild(divider);
        }

        const card = document.createElement('div');
        card.id = 'day-card-' + index;
        card.className = 'day-card p-4 border-b lg:border border-gray-100 cursor-pointer lg:hover:bg-gray-50 flex items-center bg-white lg:rounded-xl mb-0 lg:mb-3 shadow-sm lg:shadow-none transition-all';
        card.onclick = () => selectDay(index, card);

        card.innerHTML = `
        <div class="text-3xl md:text-4xl mr-4 filter drop-shadow-sm flex-shrink-0">${data.icon}</div>
        <div class="flex-grow">
            <div class="flex justify-between items-start">
                <p class="text-[10px] md:text-xs font-bold text-japan-accent uppercase tracking-wider bg-red-50 px-2 py-0.5 rounded-full inline-block">Día ${data.day} • ${dateText}</p>
                <span class="text-gray-300 lg:hidden text-sm">➔</span>
            </div>
            <h4 class="font-bold text-gray-900 mt-1 md:text-lg leading-tight line-clamp-1">${data.title}</h4>
            <p class="text-xs text-gray-500 flex items-center mt-1.5 font-medium"><span class="unicode-icon text-[10px] mr-1 text-japan-text opacity-70">📍</span>${data.location}</p>
        </div>
    `;
        container.appendChild(card);
    });
}

// --- LOGIC: Select Day and Show Details ---
function selectDay(index, cardElement) {
    // Highlight selected card
    document.querySelectorAll('.day-card').forEach(c => c.classList.remove('selected'));
    cardElement.classList.add('selected');

    // Hide empty state, show content
    const emptyState = document.getElementById('empty-state');
    if (emptyState) emptyState.classList.add('hidden');
    const contentDiv = document.getElementById('detail-content');
    if (contentDiv) contentDiv.classList.remove('hidden');

    const data = itineraryData[index];
    window.currentSelectedDayIndex = index;

    // Set up hot notes content
    const noteText = window.tripNotes[data.day] || '';
    const notesTextarea = document.getElementById('detail-notes-text');
    if (notesTextarea) notesTextarea.value = noteText;
    const notesStatus = document.getElementById('detail-notes-status');
    if (notesStatus) notesStatus.textContent = '';

    // === Setup Leaflet Map ===
    const points = [];
    if (data.route && Array.isArray(data.route)) {
        data.route.forEach((step, stepIndex) => {
            if (step.lat && typeof step.lat === 'number' && step.lng && typeof step.lng === 'number') {
                points.push([step.lat, step.lng, `${stepIndex + 1}. ${step.name}`]);
            }
        });
    }

    if (window.dayMarkers && globalLeafletMap) {
        window.dayMarkers.forEach(m => globalLeafletMap.removeLayer(m));
    }
    window.dayMarkers = [];

    const mapContainer = document.getElementById('map-container');
    if (points.length > 0) {
        if (typeof L === 'undefined') {
            console.warn("Leaflet map library not loaded. Skipping daily map rendering.");
            if (mapContainer) {
                mapContainer.style.display = 'block';
                mapContainer.innerHTML = `
                    <div class="flex flex-col items-center justify-center h-full bg-gray-50 rounded-xl border border-dashed border-gray-200 p-4 text-center">
                        <span class="text-2xl mb-2">🗺️</span>
                        <p class="text-xs font-bold text-gray-500">Cartografía no disponible sin conexión</p>
                        <p class="text-[10px] text-gray-400 font-semibold mt-1">Se requiere conexión a internet para descargar el mapa interactivo por primera vez.</p>
                    </div>
                `;
            }
        } else {
            if (mapContainer) mapContainer.style.display = 'block';

            if (!globalLeafletMap) {
                globalLeafletMap = L.map('map-container').setView([points[0][0], points[0][1]], 13);
                L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                    attribution: '&copy; OpenStreetMap',
                    maxZoom: 19
                }).addTo(globalLeafletMap);
                window.map = globalLeafletMap;
            }

            const bounds = L.latLngBounds();
            points.forEach(pt => {
                const marker = L.marker([pt[0], pt[1]]).bindPopup(`<b>${pt[2]}</b>`).addTo(globalLeafletMap);
                window.dayMarkers.push(marker);
                bounds.extend([pt[0], pt[1]]);
            });

            if (points.length > 1) {
                globalLeafletMap.fitBounds(bounds, { padding: [30, 30] });
            } else {
                globalLeafletMap.setView([points[0][0], points[0][1]], 14);
            }
            setTimeout(() => globalLeafletMap.invalidateSize(), 50);
        }
    } else {
        if (mapContainer) mapContainer.style.display = 'none';
    }

    // Populate data
    document.getElementById('detail-date').textContent = `Día ${data.day} - ${data.day} Nov (${data.location})`;
    document.getElementById('detail-title').textContent = data.title;
    document.getElementById('detail-icon').textContent = data.icon;
    document.getElementById('detail-description').textContent = data.description;

    // Populate Route Timeline
    const routeContainer = document.getElementById('detail-route');
    if (routeContainer) {
        routeContainer.innerHTML = '';
        data.route.forEach((step, i) => {
            const li = document.createElement('li');
            li.className = "relative pl-10 pb-6 last:pb-0";

            // Accordion interactivo
            const hasDetailed = !!step.detailed_info;
            const cursorClass = hasDetailed ? "cursor-pointer" : "";
            const arrowIcon = hasDetailed ? `<div class="expand-icon transition-transform duration-300 text-gray-400 text-sm ml-2">▼</div>` : "";
            const detailedHtml = hasDetailed ? `<div class="detailed-info hidden overflow-hidden transition-all duration-300 mt-4 pt-4 border-t border-gray-100 text-sm text-gray-700 leading-relaxed space-y-2 opacity-0">${step.detailed_info}</div>` : "";
            const onClickAttr = hasDetailed ? `onclick="toggleAccordion(this)"` : "";

            li.innerHTML = `
            <span class="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-japan-accent ring-4 ring-white shadow-sm z-10 text-[10px] text-white font-bold">${i + 1}</span>
            <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-japan-accent/20 transition-all ${cursorClass}" ${onClickAttr}>
                <div class="flex justify-between items-start mb-2">
                    <p class="text-gray-900 font-bold text-lg leading-tight flex items-center">${step.name} ${arrowIcon}</p>
                    <span class="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md ml-2 flex-shrink-0">${step.time || ''}</span>
                </div>
                <div class="flex flex-wrap gap-3 mt-2">
                    <span class="text-xs text-japan-matcha font-bold flex items-center"><span class="mr-1">💴</span> ${step.price || 'Gratis'}</span>
                    <p class="text-sm text-gray-600 leading-relaxed w-full sm:w-auto"><span class="text-gray-400 mr-1">📝</span> ${step.brief_note || ''}</p>
                </div>
                ${detailedHtml}
            </div>
        `;
            routeContainer.appendChild(li);
        });
    }

    // Populate Celiac Info
    document.getElementById('detail-celiac-text').innerHTML = data.celiac;

    // Populate Hotel Card
    const hotelContainer = document.getElementById('detail-hotel-container');
    if (hotelContainer) {
        if (data.hotel && data.hotel.name !== "-") {
            hotelContainer.innerHTML = `
                <div class="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 shadow-sm flex items-center hover:bg-blue-50 transition-colors cursor-pointer group" onclick="window.open('${data.hotel.mapLink}', '_blank')">
                    <div class="p-3 bg-white rounded-xl shadow-sm self-start">
                        <span class="text-2xl drop-shadow-sm block">🏨</span>
                    </div>
                    <div class="ml-4 flex-grow">
                        <p class="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-1">Tu Alojamiento Diurno</p>
                        <h4 class="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">${data.hotel.name}</h4>
                        <p class="text-xs text-gray-500 mt-1">${data.hotel.address}</p>
                    </div>
                    <div class="text-blue-300 group-hover:text-blue-500 transition-colors ml-2 flex-shrink-0">
                        ↗
                    </div>
                </div>
            `;
        } else {
            hotelContainer.innerHTML = '';
        }
    }

    // Populate Restaurants Card
    const restsContainer = document.getElementById('detail-restaurants-container');
    if (restsContainer) {
        if (data.restaurantesSeguros && data.restaurantesSeguros.length > 0) {
            let restaurantsHtml = data.restaurantesSeguros.map(r => `
                <div class="bg-white rounded-xl p-4 shadow-[0_2px_8px_rgb(0,0,0,0.04)] mb-3 last:mb-0 border border-gray-100 border-l-4 border-l-green-400">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">${r.name}</h5>
                    <p class="text-xs text-gray-500">${r.desc}</p>
                </div>
            `).join('');

            restsContainer.innerHTML = `
                <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div class="flex items-center mb-4">
                        <span class="text-2xl mr-3">🍽️</span>
                        <h4 class="font-bold font-serif text-lg">Opciones Seguras Cercanas</h4>
                    </div>
                    ${restaurantsHtml}
                </div>
            `;
        } else {
            restsContainer.innerHTML = '';
        }
    }

    // Handle Mobile Device Logic
    if (window.innerWidth < 1024) {
        document.getElementById('day-detail-container').classList.add('open');
        document.getElementById('day-detail-container').scrollTop = 0;
        if (globalLeafletMap) setTimeout(() => globalLeafletMap.invalidateSize(), 300);
    }
}

// Close mobile detail modal overlay
function closeMobileDetail() {
    const detailContainer = document.getElementById('day-detail-container');
    if (detailContainer) detailContainer.classList.remove('open');
}

// Toggle accordion elements
function toggleAccordion(element) {
    const infoDiv = element.querySelector('.detailed-info');
    const icon = element.querySelector('.expand-icon');
    if (!infoDiv) return;

    if (infoDiv.classList.contains('hidden')) {
        infoDiv.classList.remove('hidden');
        setTimeout(() => infoDiv.classList.remove('opacity-0'), 10);
        if (icon) icon.classList.add('rotate-180');
    } else {
        infoDiv.classList.add('opacity-0');
        if (icon) icon.classList.remove('rotate-180');
        setTimeout(() => infoDiv.classList.add('hidden'), 300);
    }
}

// --- LOGIC: Render Dashboard Data ---
function renderDashboard() {
    const dynamicCount = {};
    itineraryData.slice(0, 20).forEach(day => {
        let key = day.location;
        if (key === 'Fujiyoshida' || key === 'Kamakura' || key === 'Nikko') key = 'Tokio';
        if (key === 'Nara' || key === 'Himeji' || key === 'Hiroshima') key = 'Kioto';
        if (key === 'Gifu') key = 'Takayama';
        if (dynamicCount[key]) dynamicCount[key]++;
        else dynamicCount[key] = 1;
    });

    const container = document.getElementById('nights-distribution');
    if (!container) return;
    container.innerHTML = '';
    Object.entries(dynamicCount).forEach(([city, nights]) => {
        container.innerHTML += `
            <div class="bg-gray-50 border border-gray-100 rounded-xl p-3 flex flex-col justify-center items-center shadow-sm hover:scale-[1.02] transition-transform duration-200">
                <span class="text-2xl font-bold text-gray-800">${nights}</span>
                <span class="text-[10px] uppercase font-bold text-gray-500 tracking-wider">${city}</span>
            </div>
        `;
    });
}

function renderSummaryMap() {
    if (summaryMap) return;

    const loader = document.getElementById('map-loader');
    const mapDiv = document.getElementById('summary-map');
    if (!mapDiv) return;

    if (typeof L === 'undefined') {
        console.warn("Leaflet map library not loaded. Skipping summary map rendering.");
        if (loader) {
            loader.className = "absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gray-50 text-gray-400 font-bold";
            loader.innerHTML = `
                <span class="text-2xl mb-1">🗺️</span>
                <span class="text-xs">Mapa nacional no disponible offline</span>
                <span class="text-[9px] font-semibold text-gray-400/80 mt-0.5">Se requiere conexión para descargar la cartografía por primera vez.</span>
            `;
            loader.style.display = 'flex';
        }
        return;
    }

    if (loader) loader.style.display = 'none';

    summaryMap = L.map('summary-map', { zoomControl: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(summaryMap);

    const cities = [
        { name: "Tokio", lat: 35.6762, lng: 139.6503 },
        { name: "Kioto", lat: 35.0116, lng: 135.7681 },
        { name: "Osaka", lat: 34.6937, lng: 135.5023 },
        { name: "Kanazawa", lat: 36.5613, lng: 136.6562 },
        { name: "Takayama", lat: 36.1461, lng: 137.2523 }
    ];

    const markers = cities.map(c => {
        const marker = L.marker([c.lat, c.lng]).addTo(summaryMap);
        marker.bindPopup(`<b>${c.name}</b>`);
        return marker;
    });

    const group = new L.featureGroup(markers);
    summaryMap.fitBounds(group.getBounds(), { padding: [30, 30] });
}

// --- SMART ITINERARY DATE COMPANION ---
function addSmartDaySelectionButton() {
    const today = new Date();
    const month = today.getMonth(); // 0-indexed: Oct is 9, Nov is 10
    const date = today.getDate();

    let targetIndex = -1;

    // Active Dates for Itinerary: 30 Oct - 21 Nov 2026.
    if (month === 9 && date === 30) {
        targetIndex = itineraryData.findIndex(d => Number(d.day) === 30);
    } else if (month === 10 && date >= 1 && date <= 21) {
        targetIndex = itineraryData.findIndex(d => Number(d.day) === date);
    }

    if (targetIndex !== -1) {
        let btn = document.getElementById('floating-today-btn');
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'floating-today-btn';
            btn.className = 'fixed bottom-24 right-4 bg-japan-accent text-white font-bold text-xs md:text-sm px-4 py-3.5 rounded-full shadow-floating z-[999] hover:bg-red-800 transition-all flex items-center space-x-2 animate-bounce hover:scale-105 active:scale-95 duration-200';
            btn.innerHTML = `<span>📅</span> <span>Ir al Día de Hoy</span>`;
            btn.onclick = () => {
                const targetCard = document.getElementById('day-card-' + targetIndex);
                if (targetCard) {
                    selectDay(targetIndex, targetCard);
                    targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            };
            document.body.appendChild(btn);
        }
    }
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    initAppConfig();

    renderItineraryList();

    // Activate default tab (resumen) programmatically — this triggers renderDashboard + renderSummaryMap
    switchTab('resumen');

    // Auto-select first day in itinerary list
    const firstCard = document.querySelector('.day-card');
    if (firstCard) selectDay(0, firstCard);

    // Add floating smart trip day helper button
    addSmartDaySelectionButton();

    // Preload Itinerary Hot Notes and Checklist status from Supabase
    fetchAllNotes();
});

