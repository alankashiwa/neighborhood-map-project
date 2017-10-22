/* Map Creation Script */
'use strict';

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
  mapTypeControl: false,
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

// Restaurant Info
var restaurantsData = [
  {title: '大戸屋 Ootoya', location: {lat: 35.58734058717389, lng: 139.73241716181437}, id: '4bc5a9fd0a30d13a97415a9c'},
  {title: 'Denny\'s', location: {lat: 35.5845898189555, lng: 139.7306578419401}, id: '4b6e6153f964a520feba2ce3'},
  {title: 'しゃぶしゃぶ温野菜', location: {lat: 35.589488100314725, lng: 139.72953973982644}, id: '4b9a2766f964a520a1a135e3'},
  {title: '俺のフレンチ・イタリアン', location: {lat: 35.58653348246824, lng: 139.72759464576816}, id: '5363371f498e3a921359cde7'},
  {title: 'タパス&タパス', location: {lat: 35.588222732986345, lng: 139.72725430601648}, id: '4ca7284497c8a1cd6e2c77a5'},
  {title: 'さぼてん', location: {lat: 35.587917956758695, lng: 139.7311368983994}, id: '4d0ecfa08d9ca143785daec5'},
  {title: '天冨久', location: {lat: 35.58527345805132, lng: 139.72924694992201}, id: '4d9ef55a9bf0a35d6c67050b'},
  {title: '大森鳥久', location: {lat: 35.586687301815346, lng: 139.7280540012856}, id: '4f9cb216e4b0873b67b5effd'},
  {title: 'タニ・キッチン', location: {lat: 35.59425917028064, lng: 139.7296166399365}, id: '4c6df85c06ed6dcb50aea522'}
]


var map;
var markers = [];
// Initiate the map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), currentMapOptions);
  var viewModel = new ViewModel();
  ko.applyBindings(viewModel);
}

// Restaurant class
function Restaurant(data) {
  var self = this;

  self.title = ko.observable(data.title);
  self.location = ko.observable(data.location);
  self.foursquareId = ko.observable(data.id);

  // Create markers
  var markerColor = '80b3ff';
  var defaultMarker = new google.maps.MarkerImage(
    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
    '|40|_|%E2%80%A2',
    new google.maps.Size(21,34),
    new google.maps.Point(0,0),
    new google.maps.Point(10,34),
    new google.maps.Size(21,34)
  );
  self.marker = new google.maps.Marker({
    position: data.location,
    title: data.title,
    map: map,
    icon: defaultMarker,
    animation: google.maps.Animation.DROP,
  });

  // Get content from foursquare api
  var foursquareApi = 'https://api.foursquare.com/v2/venues/' + data.id + '?';
  var params = $.param({
    'client_id': 'FU3Y2HVXH2YJVAEVDLURJP1HBDAQQGS2VLAB0MMXYUBB35GI',
    'client_secret': 'OQCXUVQZXJUYIWO4AK25GBG5G4CAA2FDUQBV5KG14BA2RRL5',
    'v': '20171010'
  });
  var requestUrl = foursquareApi + params;
  $.ajax({
    url: requestUrl,
    dataType: 'json'
  }).done(function(jsonData){
    self.content = '<h3>' + data.title + '</h3>';
    self.content += '<img src="' + jsonData.response.venue.bestPhoto.prefix + '100x100' + jsonData.response.venue.bestPhoto.suffix +'">';
  }).fail(function(){
    self.content = '<h3>Info not found.</h3>'
  });
  // Create InfoWindow
  var infowindow = new google.maps.InfoWindow();

  // Set marker click event
  self.marker.addListener('click', function(){
    populateInfoWindow(this, infowindow, self.content);
    // Bounce animation
    self.marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){
      self.marker.setAnimation(null);
    }, 2750);
  });

  // Trigger marker click event from the list
  self.listClick = function() {
    google.maps.event.trigger(self.marker, 'click');
  }
}

// Knockout viewModel
function ViewModel() {
  var self = this;

  // Observable Array for restaurants
  self.restaurants = ko.observableArray([]);
  restaurantsData.forEach(function(restaurant){
    restaurant = new Restaurant(restaurant);
    self.restaurants.push(restaurant);
  });

  // Filter
  self.filter = ko.observable();
  self.filterRestaurants = ko.computed(function(){
    var currentFilter = self.filter();
    if(!currentFilter) {
      return self.restaurants();
    } else {
      return ko.utils.arrayFilter(self.restaurants(), function(restaurant){
        return restaurant.title().toLowerCase().indexOf(currentFilter.toLowerCase()) != -1;
      });
    }
  });
}

function populateInfoWindow(marker, infowindow, content) {
  if(infowindow.marker != marker) {
    infowindow.marker = marker;
    infowindow.setContent(content);
    infowindow.open(map, marker);
    infowindow.addListener('closeclick', function(){
      infowindow.setMarker(null);
    });
  }
}
