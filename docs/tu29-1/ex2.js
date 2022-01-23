const outputElement = document.createElement('span');
outputElement.textContent = 'Loading';
document.body.append(outputElement);

delay(2000)
  .then((data) => {
    outputElement.textContent = data;
  })
  .catch((error) => {
    outputElement.textContent = error;
  });
