let pixelIndex = 0;

const rainbowCanvas = document.createElement('canvas');
rainbowCanvas.width = 50000;
const ctx = rainbowCanvas.getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, rainbowCanvas.width, 0);
gradient.addColorStop(0, '#b827fc');
gradient.addColorStop(0.25, '#2c90fc');
gradient.addColorStop(0.5, '#b8fd33');
gradient.addColorStop(0.75, '#fec837');
gradient.addColorStop(1, '#fd1892');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, rainbowCanvas.width, rainbowCanvas.height);
function getPixelColor(x, y) {
    const imageData = ctx.getImageData(x, y, 1, 1);
    const data = imageData.data;
    const color = `rgb(${data[0]}, ${data[1]}, ${data[2]})`;
    return color;
}