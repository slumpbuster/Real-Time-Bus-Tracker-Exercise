//declare variables
let vehicles = [];
let markers = [];

// TODO: add your own access token
mapboxgl.accessToken = 'YOUR TOKEN HERE';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-71.054081, 42.369554],
  zoom: 10.5,
});

// clear markers and popups
function clearVehicleMarkers() {
  // clear the markers
  markers.forEach((marker) => {
    marker.remove();    
  })
  markers = [];
}

//Updates 
function updateVehicleMarkers() {
  // clear info
  clearVehicleMarkers();

  // build popups, markers, and add to map
  vehicles.forEach((vehicle, counter) => {
    // only create markers for vehicles in transit
    if (vehicle.attributes.current_status === "IN_TRANSIT_TO") {
      // build hover info
      let hover = `<div class='vehicle-info'>
        <div><strong>Vehicle:</strong> <span id='label'>${vehicle.attributes.label}</span></div>`
      if (vehicle.attributes.current_status != null)
        hover += `<div><strong>Status:</strong> <span id='current_status'>${vehicle.attributes.current_status.replaceAll('_TO', '').replaceAll('_', ' ')}</span></div>`
      hover += `<div><strong>Current Stop:</strong> <span id='current_stop_sequence'>${vehicle.attributes.current_stop_sequence}</span></div>`
      if (vehicle.attributes.occupancy_status != null)
        hover += `<div><strong>Occupancy:</strong> <span id='occupancy_status'>${vehicle.attributes.occupancy_status.replaceAll('_', ' ')}</span></div>`
      hover += `<div><strong>Updated:</strong> <span id='updated_at'>${vehicle.attributes.updated_at.replaceAll('T', ' ')}</span></div>
        </div>`

      // find occupancy to set color
      let markerColor = 'red';
      switch(vehicle.attributes.occupancy_status) {
        case 'EMPTY', 'MANY_SEATS_AVAILABLE':
          markerColor = 'green'
          break;
        case 'FEW_SEATS_AVAILABLE':
          markerColor = 'yellow'
          break;
        case 'STANDING_ROOM_ONLY', 'CRUSHED_STANDING_ROOM_ONLY', 'FULL':
          markerColor = 'orange'
          break;
      }
      
      // add marker to the map at the vehicleStops
      markers[counter] = new mapboxgl.Marker({ color: markerColor })
        .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
        .setPopup(
          new mapboxgl.Popup({
            anchor: "top",
            closeOnClick: true,
          })
          .setHTML(hover)
        )
        .addTo(map);
      counter++;
    }
  })
}

// get mbta vehicles info and populate on the map
async function loadVehicleInfo() {
  await getVehicles();
  await updateVehicleMarkers();
}

async function getVehicles() {
  // get vehicle data    
  vehicles = await getVehicleLocations();

  // timer to refresh vehicle location array, does not refresh map - button does
  setTimeout(getVehicles, 15000);
}

async function getVehicleLocations() {
	const url = 'https://api-v3.mbta.com/vehicles?filter[route_type]=3&include=trip';
	const response = await fetch(url);
	const json = await response.json();
	return json.data;
}
