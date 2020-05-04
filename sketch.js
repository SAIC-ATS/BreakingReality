let fool;
let mountains;

function preload(){
  fool = loadImage("../assets/fool.png");
  mountains = loadImage("../assets/mountains.png");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resize = true;
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
      canvas.position(0, 0);
      canvas.style('z-index', '-1');
  noCursor();
}

function draw() {
  background(255);
  image(mountains, 0, 0, width, height);
  image(fool, mouseX-10, mouseY-40, 100, 100);

}