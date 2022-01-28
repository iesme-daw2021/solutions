window.addEventListener('DOMContentLoaded', (event) => {
  requestNotificationPermission();

  if (navigator.geolocation) {
    const watchId = geolocate();
    sendNotification(watchId);
  }
});

function requestNotificationPermission() {
  document.querySelector('button').addEventListener('click', (event) => {
    if (window.Notification) {
      Notification.requestPermission().then((result) => true);
    }
  });
}

function geolocate() {
  let map;
  let marker;
  let firstTime = true;

  const watchId = navigator.geolocation.watchPosition(
    (position) => {
      if (firstTime) {
        map = initMap(position.coords.latitude, position.coords.longitude);
        firstTime = false;
      }
      marker = changePosition(
        map,
        position.coords.latitude,
        position.coords.longitude,
        marker
      );
    },
    () => {
      console.error('position not available');
    },
    { enableHighAccuracy: true }
  );

  return watchId;
}

function sendNotification(watchId) {
  document.addEventListener('visibilitychange', (event) => {
    if (document.visibilityState !== 'visible') {
      const notification = new Notification('geolocation', {
        body: 'Click to stop the geolocation',
      });
      notification.addEventListener('click', (event) => {
        navigator.geolocation.clearWatch(watchId);
        document.querySelector('.message').textContent =
          'Active geolocation stopped';
      });
    }
  });
}

/**
 * Creates the map
 * @param {*} latitude
 * @param {*} longitude
 * @returns returns the map
 */
function initMap(latitude, longitude) {
  const map = L.map('map').setView([latitude, longitude], 13);
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 12,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        'pk.eyJ1IjoieGF2aTEycC1wcm9mZSIsImEiOiJja3kxbnhrZjAwZDdkMnhybTVheWpzOXVrIn0.6tgSdQGqA4w9VQ0kY4xrlA',
    }
  ).addTo(map);

  return map;
}

/**
 * Position the coords in the map with a marker
 * @param {*} map
 * @param {*} latitude
 * @param {*} longitude
 * @param {*} marker
 * @returns
 */
function changePosition(map, latitude, longitude, marker) {
  map.setView([latitude, longitude], 13);
  if (marker) {
    marker.removeFrom(map);
  }
  const newMarker = L.marker([latitude, longitude]).addTo(map);
  return newMarker;
}
