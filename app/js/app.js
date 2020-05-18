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
 
// $(document).ready(function() {
// 	//E-mail Ajax Send
// 	$("slogan-form").submit(function() { //Change
// 		var th = $(this);
// 		$.ajax({
// 			type: "POST",
// 			url: "mail.php", //Change
// 			data: th.serialize()
// 		}).done(function() {
// 			var feedbackWindow = document.getElementById('feedback');
// 			feedbackWindow.classList = 'feedback animated fadeInDown';
// 			setTimeout(function() {
// 				// Done Functions
// 				th.trigger("reset");
// 			}, 1000);
// 		});
// 		return false;
// 	});
// });

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/cka8swbpr2slb1iphv4ogad7t',
center: [29.5418527, 52.3128262],
zoom: 6.5
});

// map.setLayoutProperty('country-label', 'text-field', ['get','name_ru']);
// map.setLayoutProperty('state-label', 'text-field', ['get','name_ru']);
// map.setLayoutProperty('settlement-label', 'text-field', ['get','name_ru']);
// map.setLayoutProperty('settlement-subdivision-label', 'text-field', ['get','name_ru']);
// map.setLayoutProperty('settlement-major-label', 'text-field', ['get','name_ru']);
// map.setLayoutProperty('settlement-minor-label', 'text-field', ['get','name_ru']);

// Гомель -d
var marker = new mapboxgl.Marker()
.setLngLat([31.0131698, 52.4238936])
.addTo(map);
//Речица -d
var marker = new mapboxgl.Marker()
.setLngLat([30.3860239, 52.3717518])
.addTo(map);
//Брагин -d
var marker = new mapboxgl.Marker()
.setLngLat([30.2686322, 51.7820906])
.addTo(map);
//Хойники -d
var marker = new mapboxgl.Marker()
.setLngLat([29.96504, 51.88808])
.addTo(map);
//Наровля -d
var marker = new mapboxgl.Marker()
.setLngLat([29.5068892, 51.7976497])
.addTo(map);
//Ельск -d
var marker = new mapboxgl.Marker()
.setLngLat([29.1543374, 51.8107943])
.addTo(map);
//Мозырь -d
var marker = new mapboxgl.Marker()
.setLngLat([29.2667179, 52.0475464])
.addTo(map);
//Калинковичи -d
var marker = new mapboxgl.Marker()
.setLngLat([29.3314442, 52.1286204])
.addTo(map);
//Петриков
var marker = new mapboxgl.Marker()
.setLngLat([28.4956961, 52.1259041])
.addTo(map);
//Лельчицы
var marker = new mapboxgl.Marker()
.setLngLat([28.3289657, 51.7861783])
.addTo(map);



var burgerButton = document.getElementsByClassName("toggle-button");
    var p;
    for(p = 0; p < burgerButton.length; p++){
        burgerButton[p].onclick = function(){
                var menuha = document.getElementById('nav-menu');
                if(menuha.style.maxHeight){
                    menuha.style.maxHeight = null;
                }
                else{
                    menuha.style.maxHeight = menuha.scrollHeight + "px";
                }
                if(menuha.style.marginTop){
                    menuha.style.marginTop = null;
                }
                else{
                    menuha.style.marginTop = 30 + "px";
                }
        }
    }

var link = document.getElementsByClassName("menu-item-link");
var p;
for(p = 0; p < link.length; p++){
    link[p].onclick = function(){
        var menuha = document.getElementById('nav-menu');
        if(menuha.style.maxHeight){
            menuha.style.maxHeight = null;
        }
        else{
            menuha.style.maxHeight = menuha.scrollHeight + "px";
        }
        if(menuha.style.marginTop){
            menuha.style.marginTop = null;
        }
        else{
            menuha.style.marginTop = 30 + "px";
        }
    }
}
