const outputElement = document.createElement('span');
outputElement.textContent = 0;
document.body.append(outputElement);

async function counter(times, ms) {
  for (let i = 1; i <= times; i++) {
    await delay(ms);
    outputElement.textContent = i;
  }
}

counter(10, 1000);

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unexpected Error');
});
