let map;

function init_map() {
  let mapoptions = {
    center: new google.maps.LatLng(30, 20),
    zoom: 3,
    mapTypeId: "satellite",
    fullscreenControl:false,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT
    }
  };

  map = new google.maps.Map(document.getElementById("map-container"),
      mapoptions);

  // Create the DIV to hold the control and call the PanelControl()
  // constructor passing in this DIV.
  var panelControlDiv = document.createElement('div');
  var panelControl = new PanelControl(panelControlDiv, map);
  panelControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(panelControlDiv);
}

// Initialize map.
google.maps.event.addDomListener(window, "load", init_map);

function PanelControl(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.margin = '12px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to show the side panel';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '12px';
  controlText.style.lineHeight = '25px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML = 'Show panel';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    openNav();
  });
}
