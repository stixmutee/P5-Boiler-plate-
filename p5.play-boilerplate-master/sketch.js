var fixedrect, movingrect;
function setup() {
  createCanvas(1600,800);
fixedrect=createSprite(400,200,50,80);
fixedrect.shapeColor="green";
fixedrect.debug=true;
movingrect=createSprite(400, 200, 80, 30);
movingrect.shapeColor="green";
movingrect.debug=true;
}

function draw() {
  background(255,255,255);
  movingrect.y=World.mouseY;
  movingrect.x=World.mouseX;
  if (movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&movingrect.y-fixedrect.y<fixedrect.width/2+movingrect.width/2&&fixedrect.y-movingrect.y<movingrect.width/2+fixedrect.width/2) {
 fixedrect.shapeColor="red";
 movingrect.shapeColor="red";   
  } else {
  fixedrect.shapeColor="green";
  movingrect.shapeColor="green";  
  }
  
  drawSprites();
}