// --- REAL-TIME CURRENCY CONVERTER ---
async function fetchExchangeRate() {
    const rateText = document.getElementById('exchange-rate-text');
    if (!rateText) return;
    try {
        const res = await fetch('https://open.er-api.com/v6/latest/EUR');
        if (!res.ok) throw new Error("API Network response not OK");
        const data = await res.json();
        if (data && data.rates && data.rates.JPY) {
            window.eurToJpyRate = parseFloat(data.rates.JPY);
            const dateStr = data.time_last_update_utc ? new Date(data.time_last_update_utc).toLocaleDateString() : '';
            rateText.innerHTML = `1 EUR = ${window.eurToJpyRate.toFixed(1)} JPY <br><span class="text-[8px] opacity-75 font-semibold">Tasa en vivo (${dateStr})</span>`;
            setCache('exchange_rate', window.eurToJpyRate);
        }
    } catch (e) {
        console.warn("Currency API failed. Trying local cache...", e);
        const cached = getCache('exchange_rate');
        if (cached) {
            window.eurToJpyRate = parseFloat(cached);
        }
        rateText.innerHTML = `1 EUR = ${window.eurToJpyRate.toFixed(1)} JPY <br><span class="text-[8px] opacity-75 font-semibold">Caché sin conexión</span>`;
    }
}

function convertJPYtoEUR(jpyVal) {
    const eurInput = document.getElementById('conv-eur');
    if (!eurInput) return;
    if (!jpyVal || isNaN(jpyVal) || jpyVal <= 0) {
        eurInput.value = '';
        return;
    }
    const eur = parseFloat(jpyVal) / window.eurToJpyRate;
    eurInput.value = eur.toFixed(2);
}

function convertEURtoJPY(eurVal) {
    const jpyInput = document.getElementById('conv-jpy');
    if (!jpyInput) return;
    if (!eurVal || isNaN(eurVal) || eurVal <= 0) {
        jpyInput.value = '';
        return;
    }
    const jpy = parseFloat(eurVal) * window.eurToJpyRate;
    jpyInput.value = Math.round(jpy);
}
