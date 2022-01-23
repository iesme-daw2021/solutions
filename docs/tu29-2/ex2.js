let counter = 0;
const outputElement = document.createElement('span');
outputElement.textContent = counter;
document.body.append(outputElement);

delay(1000)
  .then(() => {
    counter++;
    outputElement.textContent = counter;
    return delay(1000);
  })
  .then(() => {
    counter++;
    outputElement.textContent = counter;
    return delay(1000);
  })
  .then(() => {
    counter++;
    outputElement.textContent = counter;
    return delay(1000);
  })
  .then(() => {
    counter++;
    outputElement.textContent = counter;
    return delay(1000);
  })
  .then(() => {
    counter++;
    outputElement.textContent = counter;
  });

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unexpected Error');
});
