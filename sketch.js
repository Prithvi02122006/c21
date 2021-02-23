var fr,mr,o1,o2


function setup() {
  createCanvas(800,800);
 fr=createSprite(200, 100, 50, 50);
 fr.shapeColor = "yellow";
 mr=createSprite(400, 200, 70, 30);
 mr.shapeColor = "green";
 o1=createSprite(200, 800, 50, 50);
 o1.shapeColor = "blue";
 o2=createSprite(100, 30, 50, 50);
 o2.shapeColor = "green";
 
}

function draw() {
  background("black");  
  fr.velocityY=-5;
 o1.velocityY=5;
  d=mr.x-fr.x;
 // console.log(d);     //distance
  mr.x=mouseX;
  mr.y=mouseY;
  if(isTouching(mr,o2))
  {mr.shapeColor = "red"
  o2.shapeColor = "red"
}
else
{mr.shapeColor = "green"
o2.shapeColor = "green"}

  bounceOff(fr,o1)
  drawSprites();
}
