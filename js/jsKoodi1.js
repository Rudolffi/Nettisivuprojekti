'use strict';

//Kartan toiminta funktio
function initMap() {
    let partyLocation = {lat: 60.167246, lng: 24.942074};
    let churchLocation = {lat: 60.172978, lng: 24.925196};
    let centerLocation ={lat: 60.171435, lng: 24.931746 };
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: centerLocation
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

//Sään toiminta funktio
!function(d,s,id) {
    let js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)) {
        js=d.createElement(s);
        js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');


