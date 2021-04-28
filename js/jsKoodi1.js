'use strict';

function initMap() {
    let partyLocation = {lat: 60.167246, lng: 24.942074};
    let churchLocation = {lat: 60.172978, lng: 24.925196};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: partyLocation
    });
    let partyMarker = new google.maps.Marker({
        position: partyLocation,
        map: map
    });
    let churchMarker = new google.maps.Marker({
        position: churchLocation,
        map: map
    });
}


