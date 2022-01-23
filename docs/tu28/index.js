// write your code here
window.addEventListener('DOMContentLoaded', (event) => {
  const area = document.querySelector('textarea');

  document.querySelector('button').addEventListener('click', (event) => {
    localStorage.removeItem('area');
    area.value = '';
  });

  area.value = localStorage.getItem('area');
  area.addEventListener('input', () => {
    localStorage.setItem('area', area.value);
  });
});
