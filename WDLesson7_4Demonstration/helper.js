// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// showMap() displays the map for a location [lat, lon] in the right panel
function showMap(lat, lon){
  //alert(location);
  let location = [lat, lon];
  //Line below needed to create the map object once.
  if(!mapObj){
      mapObj = mapObj.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = mapObj.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);// places marker on map
}

// card() accepts JSON of one complaint and returns a card for the complaint
function card( dataset ){ 

  let location = [dataset.latitude, dataset.longitude];
  console.log(location);
  let build = `<div class="card fitted">
              <h3>Crash date : ${dataset.crash_date}</h3>
              <h5>Crash time : ${dataset.crash_time}</h5>
              <p>ID : ${dataset.collision_id}</p>
              <p>Reason : ${dataset.contributing_factor_vehicle_1}</p><hr>
              <p>Amount injured : ${dataset.number_of_persons_injured}<br>Vehicle : ${dataset.vehicle_type_code1}</p>
              <input type="button" onclick="showMap( ${location} )" value="Map">

        </div>`;
  return build;
} 