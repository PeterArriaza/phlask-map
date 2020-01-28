// Taylor's old geocode function for search bar

function goToLocation() {
  let latLon = document.getElementById("latlon-input").value;
  console.log(latLon);
  let lat = "";
  let lng = "";
  try {
    lat = latLon.split(",")[0].trim();
    lng = latLon.split(",")[1].trim();
  } catch (err) {
    alert("Invalid address");
  }
  if (!isNaN(lat) && !isNaN(lng)) {
    lat = parseFloat(lat);
    lng = parseFloat(lng);
    var position = { lat: lat, lng: lng };
    // const myLocation = new google.maps.Marker({
    //     map: map,
    //     position: position,
    //     icon: userLocation
    //    })
    locationMarker.setPosition(position);
    locationMarker.setMap(map);
    map.setZoom(18);
    map.panTo(position);
    console.log("Made it here");
  } else {
    alert("Invalid address.");
  }
}
document.getElementById("latlon-button").addEventListener("click", function() {
  zoomToArea();
});
const zoomAutocomplete = new google.maps.places.Autocomplete(
  document.getElementById("latlon-input")
);
// This function takes the input value in the find nearby area text input locates it, and then zooms into that area. This is so that the user can show all, listings, then decide to focus on one area of the map.
function zoomToArea() {
  // initialize geocoder, new geocode instance
  const geocoder = new google.maps.Geocoder();
  // get address or place that the user entered
  const address = document.getElementById("latlon-input").value;
  // make sre the address isnt blank
  if (address == "") {
    window.alert("You must enter an area, or address.");
  } else {
    // Geocode the address/area entered to get the center. Then, center the map on it and zoom in
    geocoder.geocode(
      {
        address: address,
        // keep it with in the city
        componentRestrictions: { locality: "Philadelphia" }
      },
      function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          // use resulting lat long to recenter the map
          map.setCenter(results[0].geometry.location);
          map.setZoom(20);
          addressMarkers.forEach(element => {
            element.setMap(null);
          });
          const marker = new google.maps.Marker({
            position: results[0].geometry.location,
            animation: google.maps.Animation.DROP,
            map: map
          });
          addressMarkers.push(marker);
        } else {
          window.alert(
            "We could not find that location - try entering a more" +
              " specific place."
          );
        }
      }
    );
  }
}
