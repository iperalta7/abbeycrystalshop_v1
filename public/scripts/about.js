let map;

//callbacvk function to genereate the map with features in spceficied div
function initMap() {
	const myLatLng = { lat: 41.48684361907387, lng: -71.53052859630657 };
  const map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 15,
  });
  
  //add a marker accordign the the location and map
   new google.maps.Marker({
    position: myLatLng,
    map,
    title: "URI",
  });
}
