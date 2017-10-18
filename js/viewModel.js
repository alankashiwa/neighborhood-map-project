/*
var places = [
  { name: 'Taiyaki' },
  { name: 'Yakitori' },
  { name: 'Zakkaya'},
  { name: 'Neko shop'}
]
*/
var mapViewModel = function() {
  var self = this;
  self.places = ko.observableArray(places);
  self.filterSpot = function() {};
  self.selectSpot = function() {};
}

ko.applyBindings(new mapViewModel());
