// --- DYNAMIC PERSISTENT CHECKLIST ---
const DEFAULT_CHECKLIST = {
    'DOCUMENTOS': [
        'Pasaporte', 'Visado', 'Seguro de viaje', 'Permiso de conducir internacional',
        'Vacunas', 'Visit Japan Web', 'JR Pass / Tickets', 'Reservas Críticas (Klook)'
    ],
    'ROPA': [
        'Ropa interior', 'Pantalones', 'Camisetas', 'Sudadera', 'Chanclas',
        'Zapatillas/Botas', 'Bañadores', 'Gorra', 'Chubasquero', 'Antifaz'
    ],
    'NECESER': [
        'Cepillo y pasta de dientes', 'Desodorante', 'Champú y Gel', 'Toalla',
        'Antimosquitos', 'Crema solar'
    ],
    'TECNOLOGÍA': [
        'Cámara de fotos', 'Tarjeta Sim / eSIM Local', 'Batería portátil (PowerBank)',
        'Cargadores y Adaptadores', 'Frontal'
    ],
    'OTROS': [
        'Gafas de sol', 'Tarjetas Revolut / N26'
    ]
};

async function fetchChecklist() {
    const grid = document.getElementById('checklist-grid');
    if (!grid) return;
    grid.innerHTML = '<div class="col-span-full py-16 text-center text-gray-400 font-bold loading-pulse">Descargando tareas colaborativas de Supabase...</div>';

    try {
        const { data, error } = await supabaseClient
            .from('checklist')
            .select('*')
            .eq('viaje_id', tripConfig.id);

        if (error) throw error;

        window.checkedItems = {};
        if (data) {
            data.forEach(item => {
                window.checkedItems[item.item] = item.completado;
            });
        }
        setCache('checklist_checked', window.checkedItems);
    } catch (e) {
        console.warn("Checklist sync failed. Loading from cache...", e);
        window.checkedItems = getCache('checklist_checked') || {};
    } finally {
        renderChecklistGrid();
    }
}

function renderChecklistGrid() {
    const grid = document.getElementById('checklist-grid');
    if (!grid) return;
    grid.innerHTML = '';

    let totalItemsCount = 0;
    let completedItemsCount = 0;

    const categoryStyles = {
        'DOCUMENTOS': { bg: 'from-red-50 to-red-100/30', border: 'border-red-100', text: 'text-red-800', emoji: '📁' },
        'ROPA': { bg: 'from-blue-50 to-blue-100/30', border: 'border-blue-100', text: 'text-blue-800', emoji: '👕' },
        'NECESER': { bg: 'from-teal-50 to-teal-100/30', border: 'border-teal-100', text: 'text-teal-800', emoji: '🧴' },
        'TECNOLOGÍA': { bg: 'from-purple-50 to-purple-100/30', border: 'border-purple-100', text: 'text-purple-800', emoji: '🔋' },
        'OTROS': { bg: 'from-amber-50 to-amber-100/30', border: 'border-amber-100', text: 'text-amber-800', emoji: '🕶️' }
    };

    Object.entries(DEFAULT_CHECKLIST).forEach(([category, items]) => {
        const style = categoryStyles[category] || { bg: 'from-gray-50 to-gray-100/30', border: 'border-gray-100', text: 'text-gray-800', emoji: '📦' };

        const card = document.createElement('div');
        card.className = `bg-white border rounded-2xl shadow-premium overflow-hidden transition-all duration-200 hover:shadow-floating`;

        let itemsHtml = '';
        items.forEach(item => {
            totalItemsCount++;
            const isChecked = !!window.checkedItems[item];
            if (isChecked) completedItemsCount++;

            const checkedClass = isChecked ? 'line-through text-gray-400 font-normal bg-gray-50/50' : 'text-gray-700 font-medium';
            const checkedState = isChecked ? 'checked' : '';

            itemsHtml += `
                <label class="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-gray-50 transition-all cursor-pointer ${isChecked ? 'bg-gray-50/20' : ''}">
                    <input type="checkbox" ${checkedState} 
                        onclick="handleChecklistToggle('${category}', '${item}', this)" 
                        class="w-4.5 h-4.5 rounded text-japan-accent focus:ring-japan-accent border-gray-300 transition-all">
                    <span class="text-sm transition-all duration-200 ${checkedClass}">${item}</span>
                </label>
            `;
        });

        card.innerHTML = `
            <div class="bg-gradient-to-r ${style.bg} px-5 py-4 border-b ${style.border} flex justify-between items-center">
                <h3 class="font-serif font-bold ${style.text} flex items-center text-base">
                    <span class="mr-2 text-lg">${style.emoji}</span> ${category}
                </h3>
                <span class="text-xs bg-white/80 px-2 py-0.5 rounded-full border border-gray-100 font-bold text-gray-500 shadow-sm">
                    ${items.filter(it => !!window.checkedItems[it]).length}/${items.length}
                </span>
            </div>
            <div class="p-4 space-y-1.5 bg-white">
                ${itemsHtml}
            </div>
        `;
        grid.appendChild(card);
    });

    // Compute progress percentages
    const percentage = totalItemsCount > 0 ? Math.round((completedItemsCount / totalItemsCount) * 100) : 0;
    const progressText = document.getElementById('checklist-progress-pct');
    const progressBar = document.getElementById('checklist-progress-bar');

    if (progressText) progressText.textContent = `${percentage}% (${completedItemsCount}/${totalItemsCount})`;
    if (progressBar) progressBar.style.width = `${percentage}%`;
}

async function handleChecklistToggle(category, item, checkboxElement) {
    const isChecked = checkboxElement.checked;

    // Visual Snappiness: Update immediately locally
    window.checkedItems[item] = isChecked;
    setCache('checklist_checked', window.checkedItems);
    renderChecklistGrid();

    const pin = obtenerPin();
    if (!pin) {
        alert("🔐 Caja fuerte bloqueada. El cambio se ha guardado temporalmente en tu caché local, pero necesitas desbloquear la bóveda (introduciendo el PIN a través del candado de arriba a la derecha) para sincronizarlo con el resto de la tripulación en tiempo real.");
        return;
    }

    try {
        const { error } = await supabaseClient.rpc('gestionar_checklist', {
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            p_categoria: category,
            p_item: item,
            p_completado: isChecked
        });
        if (error) throw error;
    } catch (e) {
        console.error("Cloud syncing checklist item failed:", e);
        // Keep local status but alert
        alert("Aviso de sincronización en la nube: " + e.message);
    }
}
