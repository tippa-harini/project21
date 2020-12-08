var speed,weight,thickness;

var bullet,wall;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,50);
  bullet.shapeColor=("white")
  bullet.velocityX=speed;

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80);
  
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){

      wall.shapeColor=color(255,0,0);

    }

    if(damage<10){

      wall.shapeColor=color(0,255,0)

    }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){

  bulletRightEdge=bullet.x+bullet.width;

  wallleftedge=wall.x;

  if(bulletRightEdge>=wallleftedge){

    return true;

  }

  return false;

}