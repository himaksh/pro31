function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}
var Height;
var particales = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

for(var k = 0;k<=innerWidth; k = k+80){
  divisions.push(new divisions(k,Height-divisionHeight/2,10,divisionHeight))
}

for (var j = 0; j< particales.length; j++) {
  particles[j].display();
}
for (var k = 0; k <divisions.length; K++){
  divisions[k].display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}