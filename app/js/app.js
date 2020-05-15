// mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJja2E4bDl2YTgwZTF1MndxdzNxbmQxNWU2In0.VyQ1C0N6emWvZZi2t-vneg'; // replace this with your access token
// var map = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/dashasalmiiarova/ck7k9ds330l7j1ipggfhg7pob',
// center: [-73.964794, 40.775203], // starting position [lng, lat]
// zoom: 15
//  // starting zoom
// });
// // Map PopUp
// map.on('click', function(e) {
//   var features = map.queryRenderedFeatures(e.point, {
//     layers: ['map-nyc-new'] // replace this with the name of the layer
//   });

//   if (!features.length) {
//     return;
//   }

//   var feature = features[0];

//   var popup = new mapboxgl.Popup({ offset: [0, -15] })
//     .setLngLat(feature.geometry.coordinates)
//     .setHTML('<h3>' + feature.properties.title + '</h3><p>' + feature.properties.description + '</p>')
//     .addTo(map);
// });
// var mapboxgl = require('../../node_modules/mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/cka8swbpr2slb1iphv4ogad7t'
});

var marker = new mapboxgl.Marker()
.setLngLat([12.550343, 55.665957])
.addTo(map);
