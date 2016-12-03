 var map;

 function initialize(location) {
     var mapOptions = {}

     map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
     var flooded = new google.maps.KmlLayer({
         url: 'https://raw.githubusercontent.com/Danny-hydro/Danny-hydro/master/bridges.kml',
         map: map
     });
 }


 google.maps.event.addDomListener(window, 'load', initialize);
