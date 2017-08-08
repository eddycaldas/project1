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
  $(".concert-title").append(  "<p>" + event[0].name + "</p>" ) //who is performing
  $(".concert-image").append("<img src=" + event[0].images[0].url + ">") //image
  $(".group").append("<p>" + "Date: " + event[0].dates["start"].localDate + "</p>") // date
  $(".concert-content").append("<p>" + "@ " + event[0]._embedded.venues[0].name + "</p>") //location
  $(".online").append("<a href=" + event[0].url+ ">BUY Ticket</a>") //buy tickets
  
  // Test loop
  
  
  
  // end test loop
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title2").append(  "<p>" + event[1].name + "</p>" )
  $(".concert-image2").append("<img src=" + event[1].images[0].url + ">") //image
  $(".group2").append("<p>" +"Date: " + event[1].dates["start"].localDate + "</p>")
  $(".concert-content2").append("<p>" + event[1]._embedded.venues[0].name + "</p>")
  $(".online2").append("<a href=" + event[1].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title3").append(  "<p>" + event[2].name + "</p>" )
  $(".concert-image3").append("<img src=" + event[2].images[0].url + ">") //image
  $(".group3").append("<p>" +"Date: " + event[2].dates["start"].localDate + "</p>")
  $(".concert-content3").append("<p>" + event[2]._embedded.venues[0].name + "</p>")
  $(".online3").append("<a href=" + event[2].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title4").append(  "<p>" + event[3].name + "</p>" )
  $(".concert-image4").append("<img src=" + event[3].images[0].url + ">") //image
  $(".group4").append("<p>" + "Date: " +event[3].dates["start"].localDate + "</p>")
  $(".concert-content4").append("<p>" + event[3]._embedded.venues[0].name + "</p>")
  $(".online4").append("<a href=" + event[3].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title5").append(  "<p>" + event[4].name + "</p>" )
  $(".concert-image5").append("<img src=" + event[4].images[0].url + ">") //image
  $(".group5").append("<p>" + "Date: " +event[4].dates["start"].localDate + "</p>")
  $(".concert-content5").append("<p>" + event[4]._embedded.venues[0].name + "</p>")
  $(".online5").append("<a href=" + event[4].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title6").append(  "<p>" + event[5].name + "</p>" )
  $(".concert-image6").append("<img src=" + event[5].images[0].url + ">") //image
  $(".group6").append("<p>" + "Date: " +event[5].dates["start"].localDate + "</p>")
  $(".concert-content6").append("<p>" + event[5]._embedded.venues[0].name + "</p>")
  $(".online6").append("<a href=" + event[5].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title7").append(  "<p>" + event[6].name + "</p>" )
  $(".concert-image7").append("<img src=" + event[6].images[0].url + ">") //image
  $(".group7").append("<p>" + "Date: " +event[6].dates["start"].localDate + "</p>")
  $(".concert-content7").append("<p>" + event[6]._embedded.venues[0].name + "</p>")
  $(".online7").append("<a href=" + event[6].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title8").append(  "<p>" + event[7].name + "</p>" )
  $(".concert-image8").append("<img src=" + event[7].images[0].url + ">") //image
  $(".group8").append("<p>" + "Date: " +event[7].dates["start"].localDate + "</p>")
  $(".concert-content8").append("<p>" + event[7]._embedded.venues[0].name + "</p>")
  $(".online8").append("<a href=" + event[7].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title9").append(  "<p>" + event[8].name + "</p>" )
  $(".concert-image9").append("<img src=" + event[8].images[0].url + ">") //image
  $(".group9").append("<p>" + "Date: " +event[8].dates["start"].localDate + "</p>")
  $(".concert-content9").append("<p>" + event[8]._embedded.venues[0].name + "</p>")
  $(".online9").append("<a href=" + event[8].url+ ">BUY Ticket</a>") //buy tickets
})
$.get(api + city)
.then(function(data){
  var event = data._embedded.events
  $(".concert-title10").append(  "<p>" + event[9].name + "</p>" )
  $(".concert-image10").append("<img src=" + event[9].images[0].url + ">") //image
  $(".group10").append("<p>" + "Date: " +event[9].dates["start"].localDate + "</p>")
  $(".concert-content10").append("<p>" + event[9]._embedded.venues[0].name + "</p>")
  $(".online10").append("<a href=" + event[9].url+ ">BUY Ticket</a>") //buy tickets
})
  
  
  
  
  
  
  
  
})

function initMap() {
  var uluru = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

