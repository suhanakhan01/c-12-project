var runner, path;
var leftboundary,rightboundary;
var pathImage,runnerImage
var edges;
function preload(){
 pathImage=loadImage("path.png");
 runnerImage=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.velocityY=4
  path.scale=1.2

  runner=createSprite(200,380)
  runner.addAnimation("running",runnerImage)
  runner.scale=0.05

  leftboundary=createSprite(0,200,100,500);
  rightboundary=createSprite(400,200,100,700)

 leftboundary.visible=true
 rightboundary.visible=true

 edges=createEdgeSprites()
}

function draw() {
  background(0);
if(path.y > 400){
 path.y=height/2 ;
}
runner.x=World.mouseX
leftboundary.collide(runner)
rightboundary.collide(runner)
runner.collide(edges)[3]

 drawSprites() 
}
