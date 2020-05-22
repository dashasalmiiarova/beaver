mapboxgl.accessToken = 'pk.eyJ1IjoiZGFzaGFzYWxtaWlhcm92YSIsImEiOiJjazdrOXFuaTUwMnV3M3RvZG9tejVzcml3In0.vDTPEyo5-GciImjhY2Olug';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/dashasalmiiarova/cka8swbpr2slb1iphv4ogad7t',
center: [29.5418527, 52.3128262],
zoom: 6.5
});
// Гомель 
var marker = new mapboxgl.Marker()
.setLngLat([31.0131698, 52.4238936])
.addTo(map);
//Речица 
var marker = new mapboxgl.Marker()
.setLngLat([30.3860239, 52.3717518])
.addTo(map);
//Брагин 
var marker = new mapboxgl.Marker()
.setLngLat([30.2686322, 51.7820906])
.addTo(map);
//Хойники 
var marker = new mapboxgl.Marker()
.setLngLat([29.96504, 51.88808])
.addTo(map);
//Наровля 
var marker = new mapboxgl.Marker()
.setLngLat([29.5068892, 51.7976497])
.addTo(map);
//Ельск 
var marker = new mapboxgl.Marker()
.setLngLat([29.1543374, 51.8107943])
.addTo(map);
//Мозырь 
var marker = new mapboxgl.Marker()
.setLngLat([29.2667179, 52.0475464])
.addTo(map);
//Калинковичи 
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
//Житковичи
var marker = new mapboxgl.Marker()
.setLngLat([27.8571199, 52.21905])
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

//Magnific PopUp
$('.photo-grid').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
        enabled: true
    }
    // other options
});

//Scroll
(function($){
    $(window).load(function(){
        $("#navbar a").mPageScroll2id();
    });
})(jQuery);