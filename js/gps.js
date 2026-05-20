// --- GPS LOCATE SYSTEMS & GLOBAL MAP VARIABLES ---
let globalLeafletMap = null;
let currentMapMarker = null;
let summaryMap = null;

function setupMapGps(mapInstance) {
    if (!mapInstance) return;
    if (mapInstance._gpsSetUp) return;
    mapInstance._gpsSetUp = true;

    let gpsMarker = null;
    let gpsAccuracyCircle = null;

    mapInstance.on('locationfound', function (e) {
        if (gpsMarker) mapInstance.removeLayer(gpsMarker);
        if (gpsAccuracyCircle) mapInstance.removeLayer(gpsAccuracyCircle);

        gpsAccuracyCircle = L.circle(e.latlng, e.accuracy, {
            color: '#3B82F6',
            fillColor: '#3B82F6',
            fillOpacity: 0.15,
            weight: 1
        }).addTo(mapInstance);

        gpsMarker = L.circleMarker(e.latlng, {
            radius: 8,
            fillColor: '#3B82F6',
            color: '#FFFFFF',
            weight: 2.5,
            opacity: 1,
            fillOpacity: 0.95
        }).addTo(mapInstance).bindPopup(`<b>¡Estás aquí!</b><br><span class="text-xs text-gray-500">Precisión: ±${Math.round(e.accuracy)} metros</span>`);

        mapInstance.setView(e.latlng, 16);
    });

    mapInstance.on('locationerror', function (err) {
        console.error("Leaflet GPS tracking failed:", err);
        alert("No se pudo obtener tu geolocalización. Asegúrate de habilitar los permisos de GPS en tu navegador/dispositivo móvil: " + err.message);
    });
}

function locateOnSummaryMap(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (!summaryMap) {
        alert("El mapa nacional no está listo aún.");
        return;
    }
    setupMapGps(summaryMap);
    summaryMap.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
}

function locateOnDayMap(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (!globalLeafletMap) {
        alert("El mapa de ruta del día no está activo.");
        return;
    }
    setupMapGps(globalLeafletMap);
    globalLeafletMap.locate({ setView: true, maxZoom: 16, enableHighAccuracy: true });
}
