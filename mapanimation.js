//declare variables
let vehicles = [];
let markers = [];
let vehicleInfo = [];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoiZGpzZWxsZXJzIiwiYSI6ImNreXlmZjFvbTBxMnoycHRidWxoc28xeWMifQ.7AgPjB0-Oi6kQ5M92q6LXA';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
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

  // clear the popups
  vehicleInfo.forEach((info) => {
    info.remove();    
  })
  vehicleInfo = [];
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

      // create popup to be added to the marker
      vehicleInfo[counter] = new mapboxgl.Popup({
        anchor: "top",
        closeOnClick: true,
      })
      .setHTML(hover)

      // add marker to the map at the vehicleStops
      markers[counter] = new mapboxgl.Marker()
        .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
        .setPopup(vehicleInfo[counter])
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
