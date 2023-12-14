let info = {};
const silverStars = document.getElementById('silver-stars');
const goldenStars = document.getElementById('golden-stars');

fetch('info.json')
  .then(response => response.json())
  .then(data => {
    info = data;
    render(data);
  })
  .catch(error => console.error('Error:', error));

const render = () => {
  goldenStars.innerHTML = info.stars.golden + '*';
  silverStars.innerHTML = info.stars.silver + '*';
}