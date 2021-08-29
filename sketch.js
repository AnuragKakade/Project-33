function preload(){
  snow = loadImage("snow3.jpg")
}
function setup() {
  createCanvas(1200,700);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(snow);  
  drawSprites();
}