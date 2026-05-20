// --- COLLABORATIVE BUDGET CONTROLLER ---
let budgetChartInstance = null;

async function fetchBudget() {
    const tbody = document.getElementById('budget-table-body');
    if (!tbody) return;
    tbody.innerHTML = '<tr><td colspan="5" class="py-10 text-center text-gray-400 font-bold loading-pulse">Cargando la bóveda de datos...</td></tr>';

    try {
        const { data, error } = await supabaseClient
            .from('presupuesto')
            .select('*')
            .eq('viaje_id', tripConfig.id)
            .order('created_at', { ascending: false });

        if (error) throw error;

        setCache('budget_list', data);
        updateLockUI();
        renderBudgetTable(data);
        renderBudgetChart(data);
    } catch (error) {
        console.warn('Budget database load failed. Fetching local backup...', error);
        const cached = getCache('budget_list');
        if (cached) {
            updateLockUI();
            renderBudgetTable(cached);
            renderBudgetChart(cached);

            const alertRow = document.createElement('tr');
            alertRow.innerHTML = `<td colspan="5" class="py-2.5 px-4 text-center bg-orange-50 text-orange-600 font-bold text-xs">⚠️ Sin conexión a internet. Visualizando copia local de gastos.</td>`;
            tbody.insertBefore(alertRow, tbody.firstChild);
        } else {
            tbody.innerHTML = `<tr><td colspan="5" class="py-10 px-8 text-center bg-red-50 text-red-600 rounded-b-xl"><span class="block text-3xl mb-2">⚠️</span><b>Error conectando a Supabase.</b><br><span class="text-xs text-red-500 font-medium">Carga local vacía y servidor inaccesible. Revisa tu internet o claves.</span></td></tr>`;
            renderBudgetChart([]);
        }
    }
}

// --- Helper: Balance & Debt Settlement Calculator ---
function calculateBalancesAndDebts(data) {
    const travelers = ['Sergio', 'Natalia', 'Aitor', 'Esther'];
    const paid = { 'Sergio': 0, 'Natalia': 0, 'Aitor': 0, 'Esther': 0 };
    const share = { 'Sergio': 0, 'Natalia': 0, 'Aitor': 0, 'Esther': 0 };

    let totalBudget = 0;
    if (data && data.length > 0) {
        data.forEach(item => {
            const amount = parseFloat(item.monto) || 0;
            totalBudget += amount;

            const payer = item.pagado_por || 'Sergio';
            const assumers = item.asumido_por ? item.asumido_por.split(',').map(s => s.trim()).filter(s => s) : travelers;
            const N = assumers.length || travelers.length;

            if (payer === 'Cada uno lo suyo') {
                // Each traveler paid their own part, so they contributed amount / N and consumed amount / N
                assumers.forEach(assumer => {
                    if (paid[assumer] !== undefined) {
                        paid[assumer] += amount / N;
                        share[assumer] += amount / N;
                    }
                });
            } else {
                // Specific payer
                if (paid[payer] !== undefined) {
                    paid[payer] += amount;
                } else {
                    paid['Sergio'] += amount;
                }

                // Split among the participants who assume the cost
                assumers.forEach(assumer => {
                    if (share[assumer] !== undefined) {
                        share[assumer] += amount / N;
                    }
                });
            }
        });
    }

    const balances = {};
    travelers.forEach(t => {
        balances[t] = paid[t] - share[t];
    });

    const debtors = [];
    const creditors = [];
    travelers.forEach(t => {
        const bal = balances[t];
        if (bal < -0.005) {
            debtors.push({ name: t, balance: bal });
        } else if (bal > 0.005) {
            creditors.push({ name: t, balance: bal });
        }
    });

    debtors.sort((a, b) => a.balance - b.balance);
    creditors.sort((a, b) => b.balance - a.balance);

    const transfers = [];
    let dIdx = 0;
    let cIdx = 0;

    while (dIdx < debtors.length && cIdx < creditors.length) {
        const debtor = debtors[dIdx];
        const creditor = creditors[cIdx];
        const amountToPay = Math.min(-debtor.balance, creditor.balance);

        if (amountToPay > 0.005) {
            transfers.push({
                from: debtor.name,
                to: creditor.name,
                amount: amountToPay
            });
        }

        debtor.balance += amountToPay;
        creditor.balance -= amountToPay;

        if (Math.abs(debtor.balance) < 0.005) dIdx++;
        if (Math.abs(creditor.balance) < 0.005) cIdx++;
    }

    return { paid, share, totalBudget, balances, transfers };
}

function updateCrewAccounts(data) {
    const accounts = calculateBalancesAndDebts(data);

    const cuotaText = document.getElementById('cuota-individual-text');
    if (cuotaText) {
        cuotaText.innerHTML = `<span class="text-japan-accent">${accounts.totalBudget.toFixed(2)} €</span>`;
    }

    const crewContainer = document.getElementById('crew-balances-container');
    if (crewContainer) {
        crewContainer.innerHTML = '';
        const travelers = ['Sergio', 'Natalia', 'Aitor', 'Esther'];
        const avatars = { 'Sergio': '🥷', 'Natalia': '🥋', 'Aitor': '🍣', 'Esther': '🌸' };

        travelers.forEach(t => {
            const paidAmt = accounts.paid[t];
            const balance = accounts.balances[t];
            const individualShare = accounts.share[t];

            let balanceHtml = '';
            let barColor = '';
            let pct = 0;
            if (individualShare > 0) {
                pct = Math.min(100, Math.round((paidAmt / individualShare) * 100));
            }

            if (balance > 0.005) {
                balanceHtml = `<span class="text-[10px] uppercase tracking-wider bg-green-50 text-green-700 font-bold px-2.5 py-1 rounded-lg border border-green-200/50 flex items-center w-max">🟢 A favor: +${balance.toFixed(2)} €</span>`;
                barColor = 'bg-green-500';
            } else if (balance < -0.005) {
                balanceHtml = `<span class="text-[10px] uppercase tracking-wider bg-red-50 text-red-700 font-bold px-2.5 py-1 rounded-lg border border-red-200/50 flex items-center w-max">🔴 Debe: ${Math.abs(balance).toFixed(2)} €</span>`;
                barColor = 'bg-red-400';
            } else {
                balanceHtml = `<span class="text-[10px] uppercase tracking-wider bg-gray-50 text-gray-500 font-bold px-2.5 py-1 rounded-lg border border-gray-200/50 flex items-center w-max">⚪ Saldado: 0.00 €</span>`;
                barColor = 'bg-gray-300';
            }

            crewContainer.innerHTML += `
                <div class="bg-gray-50/40 border border-gray-200/60 rounded-xl p-3 flex flex-col justify-between hover:scale-[1.01] hover:shadow-sm transition-all duration-200">
                    <div class="flex justify-between items-start mb-2">
                        <div class="flex items-center">
                            <span class="text-2xl mr-2 filter drop-shadow-sm">${avatars[t]}</span>
                            <div>
                                <p class="font-bold text-gray-900 text-xs">${t}</p>
                                <p class="text-[10px] text-gray-500 font-semibold">Pagado: ${paidAmt.toFixed(2)} € <span class="text-gray-300 mx-1">|</span> Su Parte: ${individualShare.toFixed(2)} €</p>
                            </div>
                        </div>
                        ${balanceHtml}
                    </div>
                    <div class="w-full bg-gray-200/60 h-1.5 rounded-full overflow-hidden mt-1">
                        <div class="${barColor} h-full transition-all duration-500" style="width: ${pct}%"></div>
                    </div>
                </div>
            `;
        });
    }

    const debtsContainer = document.getElementById('debts-list-container');
    if (debtsContainer) {
        debtsContainer.innerHTML = '';

        if (accounts.transfers.length === 0) {
            debtsContainer.innerHTML = `
                <div class="flex flex-col items-center justify-center py-4 text-center">
                    <span class="text-2xl mb-1.5 filter drop-shadow-sm">🎌</span>
                    <p class="text-xs font-bold text-gray-800">¡Balanza perfectamente equilibrada!</p>
                    <p class="text-[10px] text-gray-400 font-semibold mt-0.5">Nadie debe nada a nadie en este momento.</p>
                </div>
            `;
        } else {
            accounts.transfers.forEach(transfer => {
                debtsContainer.innerHTML += `
                    <div class="bg-white rounded-xl p-3 border border-red-100/50 flex flex-col sm:flex-row justify-between items-center gap-3 shadow-sm hover:border-japan-accent/20 transition-all">
                        <div class="flex items-center text-xs font-bold text-gray-700 flex-wrap justify-center sm:justify-start">
                            <span class="text-gray-900 font-extrabold mr-1 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 shadow-inner">👤 ${transfer.from}</span> 
                            <span class="text-gray-400 text-[10px] uppercase font-bold tracking-wider mx-1">debe pagar</span> 
                            <span class="text-japan-accent font-black text-sm mx-1">${transfer.amount.toFixed(2)} €</span> 
                            <span class="text-gray-400 text-[10px] uppercase font-bold tracking-wider mx-1">a</span> 
                            <span class="text-gray-900 font-extrabold ml-1 bg-gray-50 px-2 py-0.5 rounded border border-gray-100 shadow-inner">👤 ${transfer.to}</span>
                        </div>
                        <button onclick="copyTransferText('${transfer.from}', '${transfer.to}', ${transfer.amount.toFixed(2)})" 
                                class="text-[9px] uppercase tracking-wider font-extrabold bg-gray-50 hover:bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg border border-gray-200 transition-colors flex items-center shadow-sm whitespace-nowrap"
                                title="Copiar concepto para transferencia">
                            📋 Copiar Concepto
                        </button>
                    </div>
                `;
            });
        }
    }
}

function copyTransferText(from, to, amount) {
    const text = `Viaje Japon: ${from} paga ${amount}€ a ${to}`;
    navigator.clipboard.writeText(text).then(() => {
        alert(`¡Concepto copiado al portapapeles! 📋\n"${text}"`);
    }).catch(err => {
        console.error("Could not copy text: ", err);
        alert(`Concepto de pago:\n${text}`);
    });
}

function renderBudgetTable(data) {
    // Update crew balances & debts list
    updateCrewAccounts(data || []);

    const tbody = document.getElementById('budget-table-body');
    const totalText = document.getElementById('b-total-text');
    if (!tbody || !totalText) return;

    if (!data || data.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="py-12 text-center text-gray-400 font-bold italic">Bóveda vacía. Registra el primer gasto.</td></tr>';
        totalText.textContent = "Total: 0.00 €";
        return;
    }

    tbody.innerHTML = '';
    let total = 0;

    data.forEach(item => {
        total += parseFloat(item.monto);

        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 transition-colors group border-b border-gray-100 last:border-0";

        const isPaid = item.pagado;
        const paidClass = isPaid ? 'bg-green-100 text-green-800 border-green-200 hover:bg-green-200' : 'bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100';
        const paidText = isPaid ? '✅ Pagado' : '⏱️ Pendiente';
        const icon = getCategoryIcon(item.categoria);

        const payerText = item.pagado_por === 'Cada uno lo suyo' ? '👥 Cada uno lo suyo' : `👤 Pagado por: <span class="text-japan-accent font-semibold ml-1">${item.pagado_por || 'Sergio'}</span>`;
        const assumers = item.asumido_por ? item.asumido_por.split(',') : ['Sergio', 'Natalia', 'Aitor', 'Esther'];
        const avatars = { 'Sergio': '🥷', 'Natalia': '🥋', 'Aitor': '🍣', 'Esther': '🌸' };
        const assumersBadges = assumers.map(name => `<span class="bg-gray-100 border border-gray-200/60 rounded px-1.5 py-0.5 text-[9px] font-bold text-gray-600 flex items-center gap-0.5">${avatars[name] || '👤'} ${name}</span>`).join('');

        tr.innerHTML = `
            <td class="px-6 py-4">
                <div class="flex flex-col">
                    <span class="font-bold text-gray-900">${item.nombre}</span>
                    <div class="flex flex-wrap items-center gap-2 mt-1.5">
                        <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center">
                            ${payerText}
                        </span>
                        <span class="text-gray-300 text-[10px]">|</span>
                        <div class="flex flex-wrap gap-1 items-center">
                            <span class="text-[10px] text-gray-400 font-bold uppercase tracking-wider mr-0.5">🎯 Para:</span>
                            ${assumersBadges}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-3 py-4 flex items-center text-gray-600 text-xs tracking-wider"><span class="mr-2 text-base filter drop-shadow-sm">${icon}</span> ${item.categoria}</td>
            <td class="px-3 py-4 text-right font-bold text-gray-900">${parseFloat(item.monto).toFixed(2)} €</td>
            <td class="px-3 py-4 text-center">
                <button onclick="togglePaid('${item.id}', ${!isPaid})" class="text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg border ${paidClass} transition-colors cursor-pointer shadow-sm">
                        ${paidText}
                </button>
            </td>
            <td class="px-3 py-4 text-center">
                <button onclick="deleteItem('${item.id}')" class="text-gray-300 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50" title="Eliminar">
                    🗑️
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });

    totalText.innerHTML = `Total Real: <span class="text-japan-accent">${total.toFixed(2)} €</span>`;
}

function getCategoryIcon(category) {
    if (category === 'Vuelos') return '✈️';
    if (category === 'Hoteles') return '🏨';
    if (category === 'Transporte') return '🚄';
    if (category === 'Comida') return '🍱';
    return '🎟️';
}

async function handleBudgetSubmit(e) {
    e.preventDefault();
    const pin = sessionStorage.getItem('trip_pin');
    if (!pin) {
        alert("🔐 Caja fuerte bloqueada. Pulsa el icono del candado arriba a la derecha e introduce el PIN antes de operar.");
        return;
    }

    const btn = document.getElementById('b-submit-btn');
    if (!btn) return;
    const originalText = btn.innerHTML;
    btn.innerHTML = 'Almacenando... ☁️';
    btn.classList.add('opacity-70');
    btn.disabled = true;

    const name = document.getElementById('b-name').value;
    const cat = document.getElementById('b-category').value;
    const amt = document.getElementById('b-amount').value;
    const paidBy = document.getElementById('b-paid-by').value;

    // Read selected participants
    const assumedCheckboxes = document.querySelectorAll('#b-assumed-by-container input[type="checkbox"]');
    const assumedByArr = [];
    assumedCheckboxes.forEach(cb => {
        if (cb.checked) {
            assumedByArr.push(cb.value);
        }
    });

    if (assumedByArr.length === 0) {
        alert("⚠️ Selecciona al menos un participante para asumir este gasto.");
        btn.innerHTML = originalText;
        btn.classList.remove('opacity-70');
        btn.disabled = false;
        return;
    }
    const assumedBy = assumedByArr.join(',');

    try {
        const { error } = await supabaseClient.rpc('save_expense', {
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            p_nombre: name,
            p_categoria: cat,
            p_monto: parseFloat(amt),
            p_pagado_por: paidBy,
            p_asumido_por: assumedBy
        });

        if (error) throw error;

        document.getElementById('budget-form').reset();
        await fetchBudget();
    } catch (error) {
        alert('Acceso denegado: ' + error.message);
    } finally {
        btn.innerHTML = originalText;
        btn.classList.remove('opacity-70');
        btn.disabled = false;
    }
}

async function togglePaid(id, newStatus) {
    const pin = sessionStorage.getItem('trip_pin');
    if (!pin) {
        alert("🔐 Caja fuerte bloqueada. Necesitas el PIN para modificar datos.");
        return;
    }

    try {
        const { error } = await supabaseClient.rpc('toggle_expense_paid', {
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            p_id: id,
            p_status: newStatus
        });

        if (error) throw error;
        fetchBudget();
    } catch (error) {
        alert('Acceso denegado: ' + error.message);
    }
}

async function deleteItem(id) {
    const pin = sessionStorage.getItem('trip_pin');
    if (!pin) {
        alert("🔐 Caja fuerte bloqueada. Necesitas el PIN para purgar datos.");
        return;
    }

    if (!confirm("¿Deseas purgar permanentemente este gasto de la base de datos central?")) return;
    try {
        const { error } = await supabaseClient.rpc('delete_expense', {
            pin_input: pin,
            p_viaje_id: tripConfig.id,
            p_id: id
        });

        if (error) throw error;
        fetchBudget();
    } catch (error) {
        alert('Acceso denegado: ' + error.message);
    }
}

function renderBudgetChart(data) {
    const canvas = document.getElementById('budgetChart');
    if (!canvas) return;

    if (typeof Chart === 'undefined') {
        console.warn("Chart.js is not loaded. Skipping chart rendering.");
        const chartWrapper = canvas.parentElement;
        if (chartWrapper) {
            chartWrapper.innerHTML = `
                <div class="flex flex-col items-center justify-center h-48 bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-4 text-center">
                    <span class="text-2xl mb-2">📊</span>
                    <p class="text-xs font-bold text-gray-500">Gráfico no disponible sin conexión</p>
                    <p class="text-[10px] text-gray-400 font-semibold mt-1">Requiere conexión a internet para descargar la librería de visualización por primera vez.</p>
                </div>
            `;
        }
        return;
    }

    const ctx = canvas.getContext('2d');

    const sums = {
        'Vuelos': 0, 'Hoteles': 0, 'Transporte': 0, 'Comida': 0, 'Extras': 0
    };

    if (data && data.length > 0) {
        data.forEach(item => {
            if (sums[item.categoria] !== undefined) {
                sums[item.categoria] += parseFloat(item.monto);
            } else {
                sums['Extras'] += parseFloat(item.monto);
            }
        });
    }

    const labels = Object.keys(sums);
    const values = Object.values(sums);

    if (budgetChartInstance) {
        budgetChartInstance.destroy();
    }

    budgetChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Costo Total Consolidado (€)',
                data: values,
                backgroundColor: [
                    '#3B82F6', // Blue 
                    '#10B981', // Green
                    '#F59E0B', // Amber
                    '#EF4444', // Red 
                    '#8B5CF6'  // Purple 
                ],
                borderWidth: 0,
                borderRadius: 6
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return ' €' + context.raw.toFixed(2);
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        font: {
                            family: "'Outfit', 'sans-serif'",
                            weight: '600'
                        }
                    }
                }
            }
        }
    });
}
