console.log("JS connected");

// $("button").ready(function(){
$("#submit").click(function(event) {
  event.preventDefault() 
  // $("button").empty();
    var city = $("#city").val();


  
  //Weather API Function
  var api = "http://api.openweathermap.org/data/2.5/weather?q="
  //var city = $("#submit").val();
  var format = "&units=imperial"
  var key = "&APPID=25b486c97325bf6814cc4456fabac99e"

  $.get(api + city + format + key)
  .then(function(data){
    var daily = data.main
    $(".local").empty()
    $(".local").append("<p>" + "Local Weather: " + city + "</p>")
    $(".local").append("<p>" + "Temperature: " + daily["temp"] + " F" + "</p>")
    $(".local").append("<p>" + "Max Temp: " + daily["temp_max"] + " F" + "</p>")
    $(".local").append("<p>" + "Min Temp: " + daily["temp_min"] + " F" + "</p>")
    $(".local").append("<p>" + "Humidity: " + daily["humidity"] + " %" + "</p>")
    $(".local").append("<p>" + "Pressure: " + daily["pressure"] + " inHg" + "</p>")
  })
  
  
// ticketmaster
var api = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=1UqQf495bLb7x3cVHjZgBJVLiB6jr7z9&city="

$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title").empty()
  $(".concert-image").empty()
  $(".group").empty()
  $(".concert-content").empty()
  $(".online").empty()
  $(".concert-image").append(  "<p>" + event[0].name + "</p>" ) //who is performing
  $(".concert-image").append("<img src=" + event[0].images[0].url + ">") //image
  $(".group").append("<p>" + "Date: " + event[0].dates["start"].localDate + "</p>") // date
  $(".concert-content").append("<p>" + "@ " + event[0]._embedded.venues[0].name + "</p>") //location
  $(".concert-content").append("<a href=" + event[0].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title2").empty()
  $(".concert-image2").empty()
  $(".group2").empty()
  $(".concert-content2").empty()
  $(".online2").empty()
  $(".concert-image2").append(  "<p>" + event[1].name + "</p>" )
  $(".concert-image2").append("<img src=" + event[1].images[0].url + ">") //image
  $(".group2").append("<p>" +"Date: " + event[1].dates["start"].localDate + "</p>")
  $(".concert-content2").append("<p>" + event[1]._embedded.venues[0].name + "</p>")
  $(".concert-content2").append("<a href=" + event[1].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title3").empty()
  $(".concert-image3").empty()
  $(".group3").empty()
  $(".concert-content3").empty()
  $(".online3").empty()
  $(".concert-image3").append(  "<p>" + event[2].name + "</p>" )
  $(".concert-image3").append("<img src=" + event[2].images[0].url + ">") //image
  $(".group3").append("<p>" +"Date: " + event[2].dates["start"].localDate + "</p>")
  $(".concert-content3").append("<p>" + event[2]._embedded.venues[0].name + "</p>")
  $(".concert-content3").append("<a href=" + event[2].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title4").empty()
  $(".concert-image4").empty()
  $(".group4").empty()
  $(".concert-content4").empty()
  $(".online4").empty()
  $(".concert-image4").append(  "<p>" + event[3].name + "</p>" )
  $(".concert-image4").append("<img src=" + event[3].images[0].url + ">") //image
  $(".group4").append("<p>" + "Date: " +event[3].dates["start"].localDate + "</p>")
  $(".concert-content4").append("<p>" + event[3]._embedded.venues[0].name + "</p>")
  $(".concert-content4").append("<a href=" + event[3].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title5").empty()
  $(".concert-image5").empty()
  $(".group5").empty()
  $(".concert-content5").empty()
  $(".online5").empty()
  $(".concert-image5").append(  "<p>" + event[4].name + "</p>" )
  $(".concert-image5").append("<img src=" + event[4].images[0].url + ">") //image
  $(".group5").append("<p>" + "Date: " +event[4].dates["start"].localDate + "</p>")
  $(".concert-content5").append("<p>" + event[4]._embedded.venues[0].name + "</p>")
  $(".concert-content5").append("<a href=" + event[4].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title6").empty()
  $(".concert-image6").empty()
  $(".group6").empty()
  $(".concert-content6").empty()
  $(".online6").empty()
  $(".concert-image6").append(  "<p>" + event[5].name + "</p>" )
  $(".concert-image6").append("<img src=" + event[5].images[0].url + ">") //image
  $(".group6").append("<p>" + "Date: " +event[5].dates["start"].localDate + "</p>")
  $(".concert-content6").append("<p>" + event[5]._embedded.venues[0].name + "</p>")
  $(".concert-content6").append("<a href=" + event[5].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title7").empty()
  $(".concert-image7").empty()
  $(".group7").empty()
  $(".concert-content7").empty()
  $(".online7").empty()
  $(".concert-image7").append(  "<p>" + event[6].name + "</p>" )
  $(".concert-image7").append("<img src=" + event[6].images[0].url + ">") //image
  $(".group7").append("<p>" + "Date: " +event[6].dates["start"].localDate + "</p>")
  $(".concert-content7").append("<p>" + event[6]._embedded.venues[0].name + "</p>")
  $(".concert-content7").append("<a href=" + event[6].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title8").empty()
  $(".concert-image8").empty()
  $(".group8").empty()
  $(".concert-content8").empty()
  $(".online8").empty()
  $(".concert-image8").append(  "<p>" + event[7].name + "</p>" )
  $(".concert-image8").append("<img src=" + event[7].images[0].url + ">") //image
  $(".group8").append("<p>" + "Date: " +event[7].dates["start"].localDate + "</p>")
  $(".concert-content8").append("<p>" + event[7]._embedded.venues[0].name + "</p>")
  $(".concert-content8").append("<a href=" + event[7].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title9").empty()
  $(".concert-image9").empty()
  $(".group9").empty()
  $(".concert-content9").empty()
  $(".online9").empty()
  $(".concert-image9").append(  "<p>" + event[8].name + "</p>" )
  $(".concert-image9").append("<img src=" + event[8].images[0].url + ">") //image
  $(".group9").append("<p>" + "Date: " +event[8].dates["start"].localDate + "</p>")
  $(".concert-content9").append("<p>" + event[8]._embedded.venues[0].name + "</p>")
  $(".concert-content9").append("<a href=" + event[8].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title10").empty()
  $(".concert-image10").empty()
  $(".group10").empty()
  $(".concert-content10").empty()
  $(".online10").empty()
  $(".concert-image10").append(  "<p>" + event[9].name + "</p>" )
  $(".concert-image10").append("<img src=" + event[9].images[0].url + ">") //image
  $(".group10").append("<p>" + "Date: " +event[9].dates["start"].localDate + "</p>")
  $(".concert-content10").append("<p>" + event[9]._embedded.venues[0].name + "</p>")
  $(".concert-content10").append("<a href=" + event[9].url+ ">BUY Ticket</a>") //buy tickets
})
})



var mapOptions = {
    center: new google.maps.LatLng(37.7831,-122.4039),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(document.getElementById('map'), mapOptions);
var acOptions = {
  types: ['establishment']
};
var autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'),acOptions);
autocomplete.bindTo('bounds',map);
var infoWindow = new google.maps.InfoWindow();
var marker = new google.maps.Marker({
  map: map
});

google.maps.event.addListener(autocomplete, 'place_changed', function() {
  infoWindow.close();
  var place = autocomplete.getPlace();
  if (place.geometry.viewport) {
    map.fitBounds(place.geometry.viewport);
  } else {
    map.setCenter(place.geometry.location);
    map.setZoom(8);
  }
  marker.setPosition(place.geometry.location);
  infoWindow.setContent('<div><strong>' + place.name + '</strong><br>');
  infoWindow.open(map, marker);
  google.maps.event.addListener(marker,'click',function(e){

    infoWindow.open(map, marker);

  });
});
// function initMap() {
//   var uluru = {lat: -25.363, lng: 131.044};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 4,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

