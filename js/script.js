
document.addEventListener('DOMContentLoaded', function () {
    setupQuestionButton();
    setupYearinFooter();
});

function setupQuestionButton() {
    const questionButton = document.getElementById('questionButton');
    if (!questionButton) return;
    
    questionButton.addEventListener("click", function () {
        alert(
            "For questions, please email us at:\n"
            "Mfedechko@hawk.illinoistech.edu"
        );
    });
}

function setupYearinFooter() {
    const yearSpan = document.getElementById("year");
    if (!yearSpan) return;

    const now = new Date();
    yearSpan.textContent = now.getFullYear();
}

function initMap() {
    const mapElement = document.getElementById("map");
    if (!mapElement || !window.google || !google.maps) {
        return:
    }

    const iitChicago = { lat: 41.834873, lng: -87.627005 };

    const map = new google.maps.Map(mapElement, {
        center: iitChicago,
        zoom: 14,
        mapTypeId: 'roadmap',
        streetViewControl: true,
        zoomControl: true,
    });

    const campusMarker = new google.maps.Marker({
        position: iitChicago,
        map: map,
        title: "Illinois Institute of Technology - Chicago Campus",
        animation: google.maps.Animation.DROP
    });

    const campusInfo = new google.maps.InfoWindow({
        content: '
        <div style="font-family: Poppins, Arial, sans-serif;">
            <h2 style="margin:0 0 0.25rem 0; font-sizew:1rem;">Illinois Institute of Technology</h2>
            <p style="margin:0; font-size:0.875rem;">
                This is my campus! Illinois Tech, a piece of my soul will forever be connected to this place.
            </p>
        </div>
        '
    });

campusMarker.addListener("click", function () {
    campusInfo.open({
        anchor: campusMarker,
        map,
        shouldFocus: false,
    });
});

const downtownChicago = { lat: 41.8781, lng: -87.6298 };

new google.maps.Marker({
    position: downtownChicago,
    map: map,
    title: "Downtown Chicago",
    icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillColor: "#00aaff",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 2,
    }
});
}

window.initMap = initMap;