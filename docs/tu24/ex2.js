window.addEventListener('DOMContentLoaded', () => {
  const layer1 = document.getElementById('layer1');
  const layer2 = document.getElementById('layer2');
  layer1.addEventListener('drag', (event) => {
    layer1.style.opacity = 0.5;
  });
  layer1.addEventListener('dragend', (event) => {
    layer1.style.opacity = 1;
    layer1.style.backgroundColor = 'transparent';
  });
  layer2.addEventListener('dragenter', (event) => {
    layer2.style.backgroundColor = 'red';
  });
  layer2.addEventListener('dragleave', (event) => {
    layer2.style.backgroundColor = 'transparent';
  });
  layer2.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  layer2.addEventListener('drop', (event) => {
    document.body.removeChild(layer1);
    layer2.textContent = 'You have achieved it!';
    layer2.style.backgroundColor = 'yellow';
  });
});
