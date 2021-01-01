var bullet,wall;
var thickness,speed,weight;
function setup() {
  createCanvas(1600,400);
 speed=random(223,321);
 thickness=random(22,83);
 weight=random(30,52);
 bullet=createSprite(50,200,10,20);
 wall=createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80)
bullet.velocityX=speed;
 }

function draw() {
  background(255,255,255);  
 
  if(bullet.isTouching(wall)){
  bullet.shapeColor="pink";
}
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
    
    if(damage>10 ){
    wall.shapeColor=color(255,0,0);
     }
       if(damage<10){
      wall.shapeColor=color(0,255,0);
 }
 
  }
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false;
  }
  drawSprites();
}