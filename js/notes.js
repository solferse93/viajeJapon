// --- ITINERARY DAY HOT NOTES (DIARIO DE VIAJE) ---
async function fetchAllNotes() {
    try {
        const { data, error } = await supabaseClient
            .from('diario_viaje')
            .select('*')
            .eq('viaje_id', tripConfig.id);

        if (error) throw error;

        window.tripNotes = {};
        if (data) {
            data.forEach(note => {
                window.tripNotes[note.dia] = note.nota;
            });
        }
        setCache('trip_notes', window.tripNotes);
    } catch (e) {
        console.warn("Hot notes cloud download failed. Using local cache:", e);
        window.tripNotes = getCache('trip_notes') || {};
    }
}

async function saveCurrentDayNote() {
    const index = window.currentSelectedDayIndex;
    if (index === null || index === undefined) {
        alert("Selecciona un día en la lista antes de guardar.");
        return;
    }

    const dayObj = itineraryData[index];
    const day = dayObj.day;
    const noteContent = document.getElementById('detail-notes-text').value;
    const pin = obtenerPin();

    if (!pin) {
        alert("🔐 Caja fuerte bloqueada. Introduce el PIN de la tripulación (haciendo clic en el candado arriba a la derecha) para guardar en caliente.");
        return;
    }

    const saveBtn = document.getElementById('detail-notes-save-btn');
    const statusSpan = document.getElementById('detail-notes-status');
    if (!saveBtn || !statusSpan) return;
    const originalContent = saveBtn.innerHTML;

    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span>Guardando... ☁️</span>';
    statusSpan.className = 'text-xs text-gray-500 font-semibold';
    statusSpan.textContent = 'Guardando en la nube...';

    try {
        const { error } = await supabaseClient.rpc('guardar_nota', {
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            p_dia: day,
            p_nota: noteContent
        });

        if (error) throw error;

        // Update cached notes
        window.tripNotes[day] = noteContent;
        setCache('trip_notes', window.tripNotes);

        statusSpan.className = 'text-xs text-green-600 font-bold';
        statusSpan.textContent = '✅ Sincronizado';
        setTimeout(() => {
            if (statusSpan.textContent === '✅ Sincronizado') {
                statusSpan.textContent = '';
            }
        }, 3000);
    } catch (e) {
        console.error("Cloud note save failed:", e);
        statusSpan.className = 'text-xs text-red-500 font-bold';
        statusSpan.textContent = '❌ Error de guardado';
        alert("No se pudo guardar la anotación en caliente: " + e.message);
    } finally {
        saveBtn.disabled = false;
        saveBtn.innerHTML = originalContent;
    }
}
