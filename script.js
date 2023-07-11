let anos90;
// let Logo90;
let mouseIsDown = false;
const imageWidth = 150;
let paintbrush;

const handleMouseDown = () => {
  mouseIsDown = true;
  paintbrush = anos90;
  // let randomNumber = Math.random();
  // if (randomNumber < 0.5) {
  //   paintbrush = Logo90;
  // } else {
  //   paintbrush = anos90;
  // }
}

const handleMouseUp = () => {
  mouseIsDown = false;
}

const handleMouseMove = (event) => {
  if (mouseIsDown) {
    const scrollAmount = document.scrollingElement.scrollTop;
    const paintbrushHeight = paintbrush.naturalHeight;
    const paintLimit = window.innerHeight - paintbrushHeight;
    const left = event.clientX;
    const top = Math.min(paintLimit, event.clientY + scrollAmount);
    context.drawImage(paintbrush, left, top);
  }
}

const handleTouchMove = (event) => {
  const scrollAmount = document.scrollingElement.scrollTop;
  const paintbrushHeight = paintbrush.naturalHeight;
  const paintLimit = window.innerHeight - paintbrushHeight;
  const left = event.touches[0].clientX;
  const top = Math.min(paintLimit, event.touches[0].clientY + scrollAmount);
  context.drawImage(paintbrush, left, top);
}


const canvas = document.querySelector('#drawingCanvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var url = window.location.href;
var imageToDraw = url.includes("index") ? "anos90.png" :
url.includes("peliculas") ? "01_P.png" : 
url.includes("tvShows") ? "03_TV.png" :
url.includes("culturaPop") ? "02_CP.png" :
"00_M.png";

anos90 = document.createElement('img');
anos90.src = `ph/Images/${imageToDraw}`;
// Logo90 = document.createElement('img');
// Logo90.src = 'ph/Images/Logo90.png';

canvas.addEventListener('mousemove', handleMouseMove);
canvas.addEventListener('mousedown', handleMouseDown);
window.addEventListener('mouseup', handleMouseUp);

// canvas.addEventListener('touchmove', handleTouchMove);
// window.addEventListener('touchstart', handleMouseDown);
window.addEventListener('touchend', handleMouseUp);