document.addEventListener('DOMContentLoaded', () => {
  addEvents();
});

function addEvents() {
  document.querySelector('input').addEventListener('click', (event) => {
    event.currentTarget.hidden = true;
  });
}
