window.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('keyup', function (event) {
    if (event.altKey && event.key == 'F12') {
      const layer = document.getElementById('imagen');
      layer.style.backgroundImage = "url('https://source.unsplash.com/random')";
    }
  });
});
