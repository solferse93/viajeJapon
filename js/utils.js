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

// --- 3. SUPABASE AUTH CONTROLLER ---
let currentSession = null;
let authMode = 'login'; // 'login' or 'register'

function isUserAuthenticated() {
    return !!currentSession;
}

function openAuthModal() {
    if (isUserAuthenticated()) {
        if (confirm("¿Deseas cerrar sesión?")) {
            handleLogout();
        }
        return;
    }
    
    const modal = document.getElementById('auth-modal');
    const content = document.getElementById('auth-modal-content');
    if (modal && content) {
        modal.classList.remove('hidden');
        // Simple entry animation
        setTimeout(() => {
            modal.classList.add('opacity-100');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
        }, 10);
    }
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    const content = document.getElementById('auth-modal-content');
    if (modal && content) {
        modal.classList.remove('opacity-100');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            // Clear message and inputs
            const msgDiv = document.getElementById('auth-message');
            if (msgDiv) msgDiv.className = 'hidden';
            const authForm = document.getElementById('auth-form');
            if (authForm) authForm.reset();
        }, 300);
    }
}

function toggleAuthMode(event) {
    if (event) event.preventDefault();
    const title = document.getElementById('auth-modal-title');
    const submitBtn = document.getElementById('auth-submit-btn');
    const toggleDesc = document.getElementById('auth-toggle-desc');
    const toggleBtn = document.getElementById('auth-toggle-btn');
    
    if (authMode === 'login') {
        authMode = 'register';
        if (title) title.textContent = 'Registrarse';
        if (submitBtn) submitBtn.textContent = 'Crear Cuenta';
        if (toggleDesc) toggleDesc.textContent = '¿Ya tienes una cuenta?';
        if (toggleBtn) toggleBtn.textContent = 'Inicia Sesión';
    } else {
        authMode = 'login';
        if (title) title.textContent = 'Iniciar Sesión';
        if (submitBtn) submitBtn.textContent = 'Iniciar Sesión';
        if (toggleDesc) toggleDesc.textContent = '¿No tienes una cuenta aún?';
        if (toggleBtn) toggleBtn.textContent = 'Regístrate';
    }
}

async function handleAuthSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('auth-email').value;
    const password = document.getElementById('auth-password').value;
    const msgDiv = document.getElementById('auth-message');
    const submitBtn = document.getElementById('auth-submit-btn');
    
    if (!supabaseClient) {
        alert("El cliente de Supabase no está configurado.");
        return;
    }
    
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = authMode === 'login' ? 'Accediendo...' : 'Registrando...';
    }
    
    try {
        let error = null;
        if (authMode === 'login') {
            const { error: err } = await supabaseClient.auth.signInWithPassword({ email, password });
            error = err;
        } else {
            const { error: err } = await supabaseClient.auth.signUp({ email, password });
            error = err;
            if (!error) {
                if (msgDiv) {
                    msgDiv.className = "block text-xs font-bold p-3.5 rounded-xl mb-4 bg-green-50 border-green-200 text-green-700";
                    msgDiv.textContent = "¡Registro completado! Ya puedes iniciar sesión.";
                }
                authMode = 'login';
                toggleAuthMode();
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Iniciar Sesión';
                }
                return;
            }
        }
        
        if (error) throw error;
        
        // Success
        closeAuthModal();
    } catch (e) {
        console.error("Auth error:", e);
        if (msgDiv) {
            msgDiv.className = "block text-xs font-bold p-3.5 rounded-xl mb-4 bg-red-50 border-red-200 text-red-700";
            msgDiv.textContent = e.message || "Error al autenticar. Por favor verifica tus datos.";
        }
    } finally {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = authMode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta';
        }
    }
}

async function handleLogout() {
    if (!supabaseClient) return;
    try {
        const { error } = await supabaseClient.auth.signOut();
        if (error) throw error;
    } catch (e) {
        console.error("Logout error:", e);
    }
}

// Setup auth listener
function setupAuthListener() {
    if (!supabaseClient) return;
    
    supabaseClient.auth.onAuthStateChange((event, session) => {
        currentSession = session;
        console.info(`Auth State Changed: ${event}`, session?.user?.email);
        
        // Update header auth button
        const authBtnText = document.getElementById('auth-btn-text');
        const authBtn = document.getElementById('auth-btn');
        if (authBtnText && authBtn) {
            if (session) {
                authBtnText.textContent = session.user.email.split('@')[0]; // Show email prefix
                authBtn.classList.remove('text-gray-600', 'bg-white', 'border-gray-200');
                authBtn.classList.add('text-red-600', 'bg-red-50', 'border-red-100');
                authBtn.title = "Cerrar sesión";
            } else {
                authBtnText.textContent = "Acceder";
                authBtn.classList.remove('text-red-600', 'bg-red-50', 'border-red-100');
                authBtn.classList.add('text-gray-600', 'bg-white', 'border-gray-200');
                authBtn.title = "Iniciar sesión";
            }
        }
        
        // Update UI controls across all tabs
        updateUIBasedOnAuth();
    });
}

// Global UI state updater
function updateUIBasedOnAuth() {
    const isAuthenticated = isUserAuthenticated();
    
    // 1. Update Lock Icon in budget tab
    const lockIcon = document.getElementById('lock-icon');
    if (lockIcon) {
        lockIcon.innerText = isAuthenticated ? '🔓' : '🔒';
    }
    
    // 2. Hide/show budget add form
    const budgetForm = document.getElementById('budget-form');
    if (budgetForm) {
        const parentCard = budgetForm.parentElement;
        if (parentCard) {
            if (isAuthenticated) {
                parentCard.classList.remove('hidden');
            } else {
                parentCard.classList.add('hidden');
            }
        }
    }
    
    // 3. Hide/show hotel add form
    const hotelForm = document.getElementById('hotel-form');
    if (hotelForm) {
        const parentCard = hotelForm.parentElement;
        if (parentCard) {
            if (isAuthenticated) {
                parentCard.classList.remove('hidden');
            } else {
                parentCard.classList.add('hidden');
            }
        }
    }
    
    // 4. Update Checklist disable state
    const checklistGrid = document.getElementById('checklist-grid');
    if (checklistGrid) {
        const checkboxes = checklistGrid.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => {
            cb.disabled = !isAuthenticated;
            // Add visual cue
            const label = cb.parentElement;
            if (label) {
                if (isAuthenticated) {
                    label.classList.remove('opacity-70', 'cursor-not-allowed');
                } else {
                    label.classList.add('opacity-70', 'cursor-not-allowed');
                    label.title = "Inicia sesión para marcar tareas";
                }
            }
        });
    }
    
    // 5. Update Notes Warning and Save button
    if (typeof updateNotesWarningUI === 'function') {
        updateNotesWarningUI();
    }
    
    // 6. Refresh budget table and hotels cards to hide delete buttons
    if (window.budgetChartRendered && typeof fetchBudget === 'function') {
        const cachedBudget = getCache('budget_list');
        if (cachedBudget) renderBudgetTable(cachedBudget);
    }
    if (window.hotelsRendered && typeof fetchHotels === 'function') {
        const cachedHotels = getCache('hotels_list');
        if (cachedHotels) renderHotelCards(cachedHotels);
    }
    
    // 7. Update Day detail editor button (Modo Editor Directo)
    updateDirectEditorUI();
}

function updateDirectEditorUI() {
    const detailContent = document.getElementById('detail-content');
    if (!detailContent) return;
    
    let editBtn = document.getElementById('direct-edit-toggle-btn');
    const isAuthenticated = isUserAuthenticated();
    
    if (!isAuthenticated) {
        if (editBtn) editBtn.remove();
        if (window.isEditingDay) {
            toggleDirectEditMode(false);
        }
    } else {
        if (!editBtn) {
            editBtn = document.createElement('button');
            editBtn.id = 'direct-edit-toggle-btn';
            editBtn.className = 'mt-3 mb-6 bg-japan-matcha text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm hover:bg-green-700 transition-all transform active:scale-95 flex items-center gap-1.5 w-max';
            editBtn.innerHTML = '<span>✏️</span> <span id="direct-edit-text">Editar Detalles del Día</span>';
            editBtn.onclick = () => handleDirectEditToggle();
            
            const desc = document.getElementById('detail-description');
            if (desc && desc.parentNode) {
                desc.parentNode.insertBefore(editBtn, desc.nextSibling);
            } else {
                detailContent.appendChild(editBtn);
            }
        }
    }
}
