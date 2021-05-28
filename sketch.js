var object2, object1,rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
  fixed = createSprite(600, 400, 50, 80);
  fixed.shapeColor = "green";
  fixed.debug = true;
  moving = createSprite(400,200,80,30);
  moving.shapeColor = "green";
  moving.debug = true;

  rect1 = createSprite(300, 400, 50, 80);
  rect2 = createSprite(500, 400, 50, 80);
  rect3 = createSprite(700, 400, 50, 80);
  rect4 = createSprite(400, 400, 50, 80);
}

function draw() {
  background(0,0,0);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;

  if(Touch(moving,rect2)){
    moving.shapeColor = "red";
    rect2.shapeColor = "red";
  } else {
    moving.shapeColor = "green";
    rect2.shapeColor = "blue";
  }

 
  drawSprites();
}

function Touch(object1,object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
}
else {
  return false;
}

}