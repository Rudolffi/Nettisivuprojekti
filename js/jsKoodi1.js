'use strict';

// Funktio, joka ajetaan, kun paikkatiedot on haettu
function success(pos) {
    const crd = pos.coords;

    // Käytetään leaflet.js -kirjastoa näyttämään sijainti kartalla (https://leafletjs.com/)
    const map = L.map('map').setView([60.177679, 24.908826], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Markkeri karttaan (Kirkko)
    L.marker([60.172951, 24.925228]).addTo(map)
        .bindPopup('Kirkko <br><br> Lutherinkatu 3, <br> 00100 Helsinki')
        .openPopup();

    // Markkeri karttaan (Juhlapaikka)
    L.marker([60.181082, 24.883377]).addTo(map)
        .bindPopup('Juhlapaikka <br><br> Seurasaari, <br> 00250 Helsinki')
        .openPopup();

    // Koordinaatisto Kirkolta parkkipaikalle
    // Karttaan piirretään merkkiviivaa reitistä
    let myLinesCar = [{
        "type": "LineString",
        "coordinates": [[24.925670,60.172551], [24.925257,60.172423], [24.923524,60.172318], [24.922525,60.173831], [24.922095,60.175320],
                        [24.922988,60.179106], [24.916559,60.185179], [24.910934,60.184937], [24.907501,60.185286], [24.904865,60.187297],
                        [24.903127,60.187815], [24.900269,60.186092], [24.899792,60.186097], [24.899287,60.186321], [24.897867,60.187174],
                        [24.896460,60.187399], [24.894023,60.187292], [24.890136,60.188319], [24.886482,60.188567], [24.885469,60.188559]]}];

    // Koordinaatisto parkkipaikalta juhlapaikalle
    // Karttaan piirretään merkkiviivaa reitistä
    let myLinesWalk = [{
        "type": "LineString",
        "coordinates": [[24.885469,60.188559], [24.884803,60.188399], [24.884653,60.188116], [24.884600,60.185809], [24.883182,60.180954]]}];

    // Kirkolta parkkipaikalle merkkiviivan tyylittely
    let myStyleCar = {
        "color": "#fb3640",
        "weight": 5,
        "opacity": 0.65
    };

    // Parkkipaikalta juhlapaikalle merkkiviikan tyylittely
    let myStyleWalk = {
        "color": "#3edbf0",
        "weight": 5
    };

    //Lisätään molemmat koordinaatistot (merkkiviivat) kartalle
    L.geoJSON(myLinesCar, {
        style: myStyleCar
    }).addTo(map);

    L.geoJSON(myLinesWalk, {
        style: myStyleWalk
    }).addTo(map);
}

// Funktio, joka ajetaan, jos paikkatietojen hakemisessa tapahtuu virhe
function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Käynnistetään paikkatietojen haku
navigator.geolocation.getCurrentPosition(success, error, options);

//Sää elementin toiminta funktio
!function(d,s,id) {
    let js,fjs=d.getElementsByTagName(s)[0];
    if(!d.getElementById(id)) {
        js=d.createElement(s);
        js.id=id;
        js.src='https://weatherwidget.io/js/widget.min.js';
        fjs.parentNode.insertBefore(js,fjs);
    }
}
(document,'script','weatherwidget-io-js');


