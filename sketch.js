var fixRect, movingRect
var o1,o2,o3

function setup() {
  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(200,200,50,50);
  fixRect.shapeColor = "red";
  movingRect.shapeColor = "red"; 
  fixRect.debug = true;
  movingRect.debug = true;
  o1 = createSprite(10,10,10,10);
  o1.shapeColor = "blue";
  o2 = createSprite(20,20,20,20);
  o2.shapeColor = "blue";
  o3 = createSprite(30,30,30,30);
  o3.shapeColor = "blue";
}

function draw() {
  background(0);  
  o1.x = World.mouseX
  o1.y = World.mouseY
  if (isTouching(o2,o1)){
    o1.shapeColor = "green";
    o2.shapeColor = "green";
  }
  else {
    o1.shapeColor = "blue";
    o2.shapeColor = "blue";
  }
  drawSprites();
}























