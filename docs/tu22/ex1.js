document.addEventListener('DOMContentLoaded', () => {
  clear(document.querySelector('ol')); // clears the list
});

function clear(elem) {
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

function clearV2(elem) {
  elem.innerHTML = '';
}
