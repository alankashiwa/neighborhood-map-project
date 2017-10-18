/* Map Creation Script */

// Map Styles
var mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#523735"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
]

// Map Options : Omori
var mapOptionsOmori = {
  center: {lat: 35.587877, lng: 139.732728},
  zoom: 16,
  maxZoom: 20,
  minZoom: 14,
  styles: mapStyles,
  scrollWheel: false
}

// Map Options : Yanaka
var mapOptionsYanaka = {
  center: {lat: 35.7276552, lng: 139.7646081},
  zoom: 16,
  maxZoom: 20,
  minZoom: 14,
  styles: mapStyles,
  scrollWheel: false
}

// Set current map option
var currentMapOptions = mapOptionsOmori;

// Place Info
var places = [
  {title: 'Disco Corporation', location: {lat: 35.5868164, lng: 139.7318569}},
  {title: 'Ito Yokado Supermarket', location: {lat: 35.5868164, lng: 139.7318569}},
  {title: 'Ootoya', location: {lat: 35.587528, lng: 139.7314008}},
  {title: 'Denny\'s', location: {lat: 35.5859226, lng: 139.7301884}},
  {title: 'Omori Belport', location: {lat: 35.5879549, lng: 139.7309301}},
  {title: 'Isuzu Hospital', location: {lat: 35.5892769, lng: 139.7320033}},
  {title: 'Kisoji', location: {lat: 35.5877367, lng: 139.732823}},
  {title: 'On-Yasai', location: {lat: 35.5890096, lng: 139.7291102}},
  {title: 'Hokkaidou', location: {lat: 35.5876408, lng: 139.7276946}},
  {title: 'Tully\'s', location: {lat: 35.5876408, lng: 139.7276946}},
  {title: 'Ueshima Coffee', location: {lat: 35.5876408, lng: 139.7252711}},
  {title: 'Doutor Coffee Shop', location: {lat: 35.5872371, lng: 139.7270717}},
]

// Marker Array
var map;
var markers = [];

// Initiate the map
var initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), currentMapOptions);
  for (var i = 0; i < places.length; i++) {
    var position = places[i].location;
    var title = places[i].title;
    var marker = new google.maps.Marker({
      position: position,
      title: title,
      map: map,
      animation: google.maps.Animation.DROP,
      id: i
    });
    markers.push(marker);
  }
}
