 var map;

 function initialize(location) {
     var mapOptions = {
       styles: [{
             "elementType": "labels",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "administrative.land_parcel",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "administrative.neighborhood",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "poi",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "poi.business",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "poi.business",
             "elementType": "geometry",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "road",
             "elementType": "labels.icon",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "road.arterial",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "road.highway",
             "elementType": "labels",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "road.local",
             "stylers": [{
                 "visibility": "off"
             }]
         }, {
             "featureType": "transit",
             "stylers": [{
                 "visibility": "off"
             }]
         }]
     }

     map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     var flooded = new google.maps.KmlLayer({
         url: 'https://raw.githubusercontent.com/davjr96/SYS2001-Map/master/bridges.kml',
         map: map
     });
 }


 google.maps.event.addDomListener(window, 'load', initialize);
