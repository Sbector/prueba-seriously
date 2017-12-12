var capture;

function setup() {
  createCanvas(640, 480);
  
  capture = createCapture(VIDEO,640,480);
}
function draw() {
  image(capture, 0, 0, 640, 480);
  // filter(INVERT); // ;-)
}
