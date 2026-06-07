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
    } finally {
        if (typeof updateNotesWarningUI === 'function') {
            updateNotesWarningUI();
        }
    }
}

function updateNotesWarningUI() {
    const warning = document.getElementById('detail-notes-warning');
    const saveBtn = document.getElementById('detail-notes-save-btn');
    if (!saveBtn) return;

    const isAuthenticated = isUserAuthenticated();
    if (isAuthenticated) {
        if (warning) warning.classList.add('hidden');
        saveBtn.className = "bg-japan-accent text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm hover:bg-red-800 transition-all transform active:scale-95 flex items-center";
        saveBtn.innerHTML = "<span>Guardar Nota en la Nube ☁️</span>";
    } else {
        if (warning) {
            warning.classList.remove('hidden');
            warning.innerHTML = `
                <p class="text-xs text-amber-800 font-semibold flex items-center">
                    <span class="mr-2 text-sm">🔒</span> Edición en caché local. Inicia sesión (botón superior 🔑) para sincronizar tus anotaciones en tiempo real.
                </p>
            `;
        }
        saveBtn.className = "bg-amber-500 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-sm hover:bg-amber-600 transition-all transform active:scale-95 flex items-center";
        saveBtn.innerHTML = "<span>Guardar en Caché Local 💾</span>";
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
    const isAuthenticated = isUserAuthenticated();

    const saveBtn = document.getElementById('detail-notes-save-btn');
    const statusSpan = document.getElementById('detail-notes-status');
    if (!saveBtn || !statusSpan) return;

    // GUARDADO EN CACHÉ LOCAL TEMPORAL SI NO ESTÁ AUTENTICADO
    if (!isAuthenticated) {
        window.tripNotes[day] = noteContent;
        setCache('trip_notes', window.tripNotes);

        statusSpan.className = 'text-xs text-amber-600 font-bold';
        statusSpan.textContent = '💾 Guardado en Caché Local';
        setTimeout(() => {
            if (statusSpan.textContent === '💾 Guardado en Caché Local') {
                statusSpan.textContent = '';
            }
        }, 4000);
        return;
    }

    const originalContent = saveBtn.innerHTML;

    saveBtn.disabled = true;
    saveBtn.innerHTML = '<span>Guardando... ☁️</span>';
    statusSpan.className = 'text-xs text-gray-500 font-semibold';
    statusSpan.textContent = 'Guardando en la nube...';

    try {
        const { error } = await supabaseClient
            .from('diario_viaje')
            .upsert({
                viaje_id: tripConfig.id,
                dia: day,
                nota: noteContent
            }, { onConflict: 'viaje_id,dia' });

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
