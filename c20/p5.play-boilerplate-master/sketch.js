var movingrect
var fixedrect
var jerry

function setup() {
  createCanvas(800,400);
  movingrect=createSprite(200, 200, 50, 50);
  fixedrect=createSprite(200,200,50,50);
  movingrect.shapeColor="red" ;
  fixedrect.shapeColor="red" ;
}

function draw() {
  background(255,255,255);
  movingrect.x = mouseX
  movingrect.y = mouseY

var result = isTouching(fixedrect,movingrect);
if (result==true) {
  movingrect.shapeColor="blue"
  fixedrect.shapeColor="blue"
}
else   {
  movingrect.shapeColor="red"
  fixedrect.shapeColor="red"
}

drawSprites();
}


function isTouching (sprite2,sprite1){
  if (sprite2.isTouching(fixedrect)) {
return true
  }
    else{
return false
    }
}
















































































