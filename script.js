/* global mapboxgl*/

let places = [
    {
        "name":"Singapore Bird Park",
        "position":[103.7064, 1.3187]
    },
    {
        "name":"Singapore Zoo",
        "position":[103.7930, 1.4043]
    },
    {
        "name":"Changi Airport",
        "position":[103.9915, 1.3644]
    }
];

mapboxgl.accessToken = 'pk.eyJ1IjoibXVoZGFyaWZyYXdpIiwiYSI6ImNrMHl3dDNycTBpdDkzaHJ4cHJtdnU0YXoifQ.8ceqA9s8SqMSbVa1rsZgvg';

var map = new mapboxgl.Map({
    container: 'map', //don't need to include # to target the ID for this case. 
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[103.8198, 1.3521], //starting position as [lng, lat]
    zoom: 10.5
});

//We're keeping these marker just in case.
// var marker = new mapboxgl.Marker()
//     .setLngLat([103.8198, 1.3521])
//     .setPopup(new mapboxgl.Popup({offset:25})//creates popup. Do note that it shows itself when you click on the marker.
//     .setHTML("<h3>Singapore</h3><p>Half Summer, Half Monsoon.</p>"))//inserts HTML directly from script.js
//     .addTo(map);

let markers = [];

for (let p of places){
    let m = new mapboxgl.Marker()
    .setLngLat(p.position)
    .setPopup(new mapboxgl.Popup({offset:25})
    .setHTML("<p>${p.name}</p>"))
    .addTo(map);
    
    markers.push(m);
};


    
