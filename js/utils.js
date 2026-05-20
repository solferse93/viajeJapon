// --- 1. CONFIG & GLOBALS ---
let supabaseClient = null;
window.eurToJpyRate = 167.0; // Realistic JPY/EUR exchange rate fallback
window.tripNotes = {}; // Cache for day hot notes
window.checkedItems = {}; // Cache for checklist items
window.currentSelectedDayIndex = null;

// --- 2. OFFLINE CACHE UTILITIES ---
function getCache(key) {
    try {
        const data = localStorage.getItem(`${tripConfig.id}_${key}`);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error("Local storage read error:", e);
        return null;
    }
}

function setCache(key, data) {
    try {
        localStorage.setItem(`${tripConfig.id}_${key}`, JSON.stringify(data));
    } catch (e) {
        console.error("Local storage write error:", e);
    }
}

// Dynamically show floating badge when offline
function updateOnlineStatus() {
    let badge = document.getElementById('offline-badge');
    if (!navigator.onLine) {
        if (!badge) {
            badge = document.createElement('div');
            badge.id = 'offline-badge';
            badge.className = 'fixed bottom-4 left-4 bg-amber-600 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-lg z-[9999] flex items-center animate-pulse border border-amber-500';
            badge.innerHTML = `<span class="mr-2">📶</span> Datos locales (Modo sin conexión)`;
            document.body.appendChild(badge);
        }
    } else {
        if (badge) {
            badge.remove();
        }
    }
}
window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// --- 3. SECURITY & PIN CONTROLLER ---
function obtenerPin() {
    return sessionStorage.getItem('trip_pin');
}

function updateLockUI() {
    const icon = document.getElementById('lock-icon');
    if (!icon) return;
    const savedPin = sessionStorage.getItem('trip_pin');
    icon.innerText = savedPin ? '🔓' : '🔒';
}

function promptPin() {
    const currentPin = sessionStorage.getItem('trip_pin');
    if (currentPin) {
        if (confirm("¿Deseas cerrar la caja fuerte (borrar PIN de sesión)?")) {
            sessionStorage.removeItem('trip_pin');
            updateLockUI();
            alert("Caja fuerte cerrada. Tu navegador ya no enviará el PIN.");
            // Re-fetch checklist and notes to update lock messages
            if (window.checklistRendered) fetchChecklist();
        }
        return;
    }

    const code = prompt("Introduce el PIN secreto pactado por la tripulación:");
    if (code) {
        sessionStorage.setItem('trip_pin', code);
        updateLockUI();
        alert("PIN guardado temporalmente en este navegador. Ya puedes realizar transferencias y anotaciones.");
        // Re-fetch checklist and notes to update lock messages
        if (window.checklistRendered) fetchChecklist();
    }
}
