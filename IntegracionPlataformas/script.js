  
function iniciarMap(){
    var coord = {lat:-33.5740112 ,lng: -70.826801};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}