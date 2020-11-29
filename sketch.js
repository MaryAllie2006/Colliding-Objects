
var a,b;

function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  b=createSprite(200, 300, 20, 20);
  b.shapeColor="yellow";
  a.shapeColor="red";

}

function draw() {
  background(255,255,255);  
  b.x=mouseX;
  b.y=mouseY;
  console.log(b.y-a.y);
  if(b.x-a.x<a.width/2+b.width/2 && a.x-b.x<a.width/2+b.width/2 && a.y-b.y<a.height/2+b.height/2 && b.y-a.y<a.height/2+b.height/2 ){
    b.shapeColor="lightBlue";
    a.shapeColor="lightBlue";
  }
  else{
    b.shapeColor="yellow";
    a.shapeColor="red";
  }

  drawSprites();
}