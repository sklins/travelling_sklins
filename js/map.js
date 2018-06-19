let map;

function init_map() {
  let mapoptions = {
    center: new google.maps.LatLng(30, 20),
    zoom: 3,
    mapTypeId: "satellite"
  };

  map = new google.maps.Map(document.getElementById("map-container"),
      mapoptions);
}

// Initialize map.
google.maps.event.addDomListener(window, "load", init_map);
