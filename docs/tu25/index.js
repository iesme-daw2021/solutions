// Main HTML elements
const container = document.getElementById('prompt-form-container');
const form = document.getElementById('prompt-form');

/**
 * Show a half-transparent DIV to "shadow" the page
 * (the form is not inside, but near it, because it shouldn't be half-transparent)
 */
function showCover() {
  let coverDiv = document.createElement('div');
  coverDiv.id = 'cover-div';

  // make the page unscrollable while the modal form is open
  document.body.style.overflowY = 'hidden';

  document.body.append(coverDiv);
  container.style.display = 'block';
  form.elements.text.focus();
}

/**
 * Hide the modal form
 */
function hideCover() {
  document.getElementById('cover-div').remove();
  document.body.style.overflowY = '';
}

/**
 * function requested by the exercise
 * @param {*} text
 * @param {*} callback
 */
function showPrompt(text, callback) {
  showCover();
  document.getElementById('prompt-message').innerHTML = text;
  form.text.value = '';

  function complete(value) {
    hideCover();
    container.style.display = 'none';
    callback(value);
  }

  form.onsubmit = (e) => {
    let value = form.text.value;
    complete(value);
    e.preventDefault();
  };

  form.cancel.onclick = () => complete(null);

  document.onkeydown = (e) => {
    if (e.key == 'Escape') {
      complete(null);
    }
  };
}

document.getElementById('show-button').addEventListener('click', () => {
  showPrompt('Enter something<br>...smart :)', (value) => {
    alert('You entered: ' + value);
  });
});
