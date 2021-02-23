function isTouching(mr,fr){
    if(mr.x-fr.x < fr.width/2 + mr.width/2 && fr.x-mr.x < fr.width/2 + mr.width/2 && mr.y-fr.y < fr.height/2 + mr.height/2 && fr.y-mr.y < fr.height/2 + mr.height/2)
      return true;
    else 
      return false;
  }
  function bounceOff(object1,object2){ 
      if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2) 
      { object1.velocityX = object1.velocityX * (-1);
         object2.velocityX = object2.velocityX * (-1); }
       if (object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object2.y < object2.height/2 + object1.height/2)
        { object1.velocityY = object1.velocityY * (-1); object2.velocityY = object2.velocityY * (-1);
         } }