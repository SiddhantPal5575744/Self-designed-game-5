const Engine = Matter.Engine;
const World= Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

 

var input,button;

var Input,volcanoImg,titleImg,title
var gamestate="login";
var robot, robotImg,labImg,lab;
var mineImg,mine,teleportImg,teleport,insideMineImg,insideMine;
var teleportsound;
var g1,g2,b1,b2
var gImg1,gImg2,bImg1,bImg2;
var skyImg,sky;
var g1s,g2s,b1s,b2s;
var player;
var particles1=[]
var rockImg,lives=3,rockgroup,gameoverImg,gameover;
var mine,mineImg,hole,invisibleboundary,ground,ground2,call;
var groundImg,lol,center,centerImg,alien,alien2,alienImg;
var fighterImg,kickImg,king,kingImg,ring,ringImg;
var kingLives=100,ringGround;




 








function preload(){
volcanoImg=loadImage("Volcano.png");
titleImg=loadImage("Title.png");
robotImg=loadImage("Robot.png");
labImg=loadImage("lab.png");
mineImg=loadImage("MineEntrance.png");
teleportImg=loadImage("teleport2.png")
teleportsound=loadSound("teleport.mp3")

gImg1=loadImage("Girl1.png");
gImg2=loadImage("Girl2.png");
bImg1=loadImage("Boy1.png");
bImg2=loadImage("Boy2.png");

skyImg=loadImage("sky.png");
insideMineImg=loadImage("insideMine.png");

rockImg=loadImage("stone.png");
gameoverImg=loadImage("gameover.png");
caveImg=loadImage("cave.png");
groundImg=loadImage("ground.png");
centerImg=loadImage("center.png");
alienImg=loadImage("alien.png");
fighterImg=loadImage("fighter.png");
kickImg=loadImage("kick.png");
kingImg=loadImage("king.png");
ringImg=loadImage("ring.png");


 }

 function setup(){
   textFont("cellestar");
  //  edges=createSprite();
   


     createCanvas(displayWidth,displayHeight);
     engine = Engine.create();
    world = engine.world;
    Input=new Form()

    call=displayWidth+displayWidth/2-800;
  

   //making backgrounds
 teleport=createSprite(displayWidth/2, displayHeight/2,displayWidth.displayHeight);
teleport.addImage(teleportImg);
teleport.visible=false;
teleport.scale=1.5;

lab=createSprite(displayWidth/2,displayHeight/2);
lab.addImage(labImg);
lab.scale=2.4;




sky=createSprite(displayWidth/2,displayHeight/2-150);
sky.addImage(skyImg);
sky.visible=false;
sky.scale=4;

mine=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
mine.addImage(mineImg);
mine.scale=1.72;
mine.visible=false;

insideMine=createSprite(displayWidth/2,displayHeight/2);
insideMine.addImage(insideMineImg);
insideMine.visible=false;
insideMine.scale=2.5;



   //creating buttons for selecting character
   g1s=createButton('select');
   g1s.position(displayWidth/2-230,displayHeight/2+290);
   g1s.mousePressed(characterg1);
   g1s.hide();
  
   g2s=createButton('select');
   g2s.position(displayWidth/2-130,displayHeight/2+290);
   g2s.mousePressed(characterg2);
   g2s.hide();
  
   b1s=createButton('select');
   b1s.position(displayWidth/2+170,displayHeight/2+290);
   b1s.mousePressed(characterb1);
   b1s.hide();
   
   b2s=createButton('select');
   b2s.position(displayWidth/2+270,displayHeight/2+290);
   b2s.mousePressed(characterb2);
   b2s.hide();
 


   //journey title
title=createSprite(displayWidth/2+50, 100);
title.addImage(titleImg);

//character choosing sprites
g1=createSprite(displayWidth/2-200,displayHeight/2+230);
g1.addImage(gImg1);
g1.visible=false;
g1.scale=0.3;

g2=createSprite(displayWidth/2-100,displayHeight/2+230);
g2.addImage(gImg2);
g2.visible=false;
g2.scale=0.3;

b1=createSprite(displayWidth/2+200,displayHeight/2+230);
b1.addImage(bImg1);
b1.visible=false;
b1.scale=0.3;


b2=createSprite(displayWidth/2+300,displayHeight/2+230);
b2.addImage(bImg2);
b2.visible=false;
b2.scale=0.3;


//min players
robot=createSprite(displayWidth/2-300, 550);
robot.addImage(robotImg);
robot.scale=2.2;

player=createSprite(displayWidth/2-100, 550);
 player.visible=false;
 player.scale=0.4

  rockgroup=createGroup();

  gameover=createSprite(displayWidth/2-200,displayHeight/2,10,10);
  gameover.addImage(gameoverImg);
  gameover.visible=false;

cave=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
// cave.addImage(caveImg);
cave.shapeColor="black";
cave.visible=false;
// cave.scale=3;

hole=createSprite(displayWidth/2-80,displayHeight-50,250,150);
hole.visible=false;
hole.shapeColor="red";
hole.dubug=true;

invisibleboundary=createSprite(0,displayHeight/2+300,5,displayHeight);
invisibleboundary.visible=true;
invisibleboundary.shapeColor="red";

jumper=createSprite(displayWidth,displayHeight/2+300,5,displayHeight);
jumper.visible=true;
jumper.shapeColor="red";

ground=createSprite(displayWidth/2-450,680,displayWidth,8);
ground.visible=false;
ground.addImage(groundImg);
ground.shapeColor="red";
 
ground2=createSprite(displayWidth/2+300,670,displayWidth,8);
ground2.visible=false;
ground2.addImage(groundImg);
ground2.shapeColor="red";

center=createSprite(displayWidth/2,displayHeight/2,displayWidth,8);
center.visible=false;
center.addImage(centerImg);

alien=createSprite(displayWidth/2+300,player.y,displayWidth,8);
alien.visible=false;
alien.addImage(alienImg);
alien.shapeColor="red";
alien.scale=0.5;


alien2=createSprite(displayWidth/2-300,player.y+10,displayWidth,8);
alien2.visible=false;
alien2.addImage(alienImg);
alien2.shapeColor="red";
alien2.scale=-0.5;

ring=createSprite(displayWidth/2,displayHeight/2);
ring.addImage(ringImg);
ring.scale=2.4;
ring.visible=false;


king=createSprite(300,player.y+10,displayWidth,8);
king.visible=false;
king.addImage(kingImg);
king.shapeColor="red";
king.scale=1;

ringGround=createSprite(displayWidth/2,displayHeight/2+300,displayWidth,10);
 ring.shapeColor="red";
ringGround.visible=false;



 
}

 function draw(){
   background(volcanoImg);
  Engine.update(engine);
   console.log(gamestate);
    
    
    
  
  
   
  



  if(gamestate==="login"){
    robot.visible=false;
    lab.visible=false;
    title.visible=true;
     
   

  }
 

if(gamestate==="lobby"){
   lab.visible=true;
   volcanoImg.visible=false;
 
    title.visible=false;
   robot.visible=true;
   
   


   if(keyDown('space')){
     gamestate="character pick";
   }
}

if(gamestate==="character pick"){
  sky.visible=true;
  g1.visible=true;
  g2.visible=true;
  b1.visible=true;
  b2.visible=true;
  lab.visible=false;
  robot.visible=false;
  g1s.show();
  g2s.show();
  b1s.show();
  b2s.show();
}
if(gamestate==="teleport"){
  teleport.visible=true;
  lab.visible=false;
  robot.visible=false;
   setTimeout(mineEntrance,1000);
   
  teleportsound.play();
  

}

if(gamestate==='mineEntrance'){
  player.rotationSpeed=0;
  gameover.visible=false;
 mine.visible=true;
 insideMine.visible=false;
  teleportsound.stop();
  teleport.visible=false;
  

  robot.visible=true;
  player.visible=true;

  robot.depth=mine.depth+1;
  player.depth=mine.depth+1;

setTimeout(minechanger,2000)
   
  
}

if(gamestate==="insidemine"){
  insideMine.visible=true;
  mine.visible=false;
  setTimeout(landslidechanger,2000)

  }

  if(gamestate==="landslide"){
    player.bounce(invisibleboundary);
    
    
    effectlandslide();
    if(keyDown("RIGHT_ARROW")){
      player.x=player.x+4;
    }
    if(keyDown("LEFT_ARROW")){
      player.x=player.x-4;
    }

    if(player.isTouching(rockgroup)){
      lives=lives-1;

    }

    if(lives<=0){
      console.log("dead");
      gamestate='buried in landslide';
    }
     
       setTimeout(intoTheHole,5000);
    
   
  }

  if(gamestate==="buried in landslide"){
   player.rotationSpeed=10;
   gameover.visible=true;
 setTimeout(mineEntrance,4000);
  
}

if(gamestate==="inHole"){
  // player.bounce(invisibleboundary);
  // console.log(player.x);
  insideMine.visible=true;
  if(keyDown("RIGHT_ARROW")&&player.x<=1550){
     
    player.x=player.x+10;
    robot.x=robot.x+10;
    
   }
    if(player.isTouching(jumper)&&gamestate==="inHole"){
      player.x=30;
      robot.x=10;
     gamestate="jump";
     
   }
}

if(gamestate==="jump"){
  
  player.collide(ground);
  player.collide(ground2);
   
  cave.visible=true;
  ground.visible=true;
  ground2.visible=true;
  //  player.depth=cave.depth+1;
  // robot.depth=cave.depth+1;
player.depth=hole.depth+1;
robot.depth=hole.depth+1;
   hole.visible=true;
 
   if(keyDown('UP_ARROW')){
    player.velocityY=-8;
    
    }
    player.velocityY=player.velocityY+0.3;
    
  if(keyDown("RIGHT_ARROW")){
    robot.x=robot.x+10;
    player.x=player.x+10;
     
   }

   if(isTouching(player,hole)&&gamestate==="jump"){
     gamestate="falling";
      
     console.log("lol");
     }

     }

     if(gamestate==="falling"){
       console.log("minecraft")
       player.velocityY=0;
      ground.rotation=90;
      ground.x=0;
      ground.y=displayHeight/2;
      ground.scale=2;
      ground2.rotation=270;
      ground2.x=displayWidth;
      ground2.y=displayHeight/2;
      ground2.scale=2;
      hole.visible=false;

      player.x=displayWidth/2-200;
      robot.x=displayWidth/2+200;

      ground.velocityX=-10;
      ground2.velocityX=-10;

      // if(ground.y<0){
      //   ground.y=displayWidth/2;
      // }

      
      // if(ground2.y<0){
      //   ground2.y=displayWidth/2;
      // }
      setTimeout(centerchanger,3000);
      }

      if(gamestate==="center"){
ground.visible=false;
ground2.visible=false;
center.visible=true;
player.depth=center.depth+1;
robot.depth=center.depth+1;
ground.depth=center.depth+1;

alien.visible=true;
alien2.visible=true;
alien.depth=player.depth+1;
alien.depth=robot.depth+1;

alien2.depth=player.depth+1;
alien2.depth=robot.depth+1;

 
  alien.velocityX=-5;
  alien2.velocityX=-5;


 

setTimeout(kingchanger,3000);


  }

  if(gamestate==="fight"){
    player.addImage(fighterImg);
    player.scale=2;
    ground.depth=ring.depth+1;
    
    player.x=displayWidth/2;
    player.y=displayHeight/2+200;
    setTimeout(ringchanger,3000);




    
  }

  if(gamestate==="ring"){
    console.log(kingLives);
    ringGround.debug=true;



player.collide(ringGround);
    ring.visible=true;
    ringGround.visible=true;
    robot.visible=false;
 player.depth=ring.depth+1;
robot.depth=ring.depth+1;
king.depth=ring.depth+1;

king.debug=true;

if(keyDown("k")){
  player.addImage(kickImg);
}else{
  player.addImage(fighterImg);
}

if(keyDown("k")&&isTouching(player,king)){
  player.addImage(kickImg);
  kingLives=kingLives-1;
} 

if(keyDown("RIGHT_ARROW")){
  player.x=player.x+4;
}
if(keyDown("LEFT_ARROW")){
  player.x=player.x-4;
}

if(keyDown("UP_ARROW")){
  player.velocityY=10;
}
player.velocityY=player.velocityY+0.3;

if(kingLives<=0){
  king.visibe=false;
}



  }

  


 



Input.display();
title.display();
drawSprites();
 }

 

//chosen character functions 
 function characterg1(){
   g1.visible=false;
   g2.visible=false;
   b1.visible=false;
   b2.visible=false;
   sky.visible=false;
   g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
   gamestate="teleport";
   player.addImage(gImg1);

   }

   function characterg2(){
    g1.visible=false;
    g2.visible=false;
    b1.visible=false;
    b2.visible=false;
    sky.visible=false;
    g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
    gamestate="teleport";
    player.addImage(gImg2);
 
    }

    function characterb1(){
      g1.visible=false;
      g2.visible=false;
      b1.visible=false;
      b2.visible=false;
      sky.visible=false;
      g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
      gamestate="teleport";
      player.addImage(bImg1);
   
      }

      function characterb2(){
        g1.visible=false;
        g2.visible=false;
        b1.visible=false;
        b2.visible=false;
        sky.visible=false;
        g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
        gamestate="teleport";
        player.addImage(bImg2);
     
        }


  //switching gamestate functions
   function mineEntrance(){
    
      gamestate=  'mineEntrance';
      player.rotationSpeed=0;
      gameover.visible=false;
      insideMine.visible=false;
     }

   function minechanger(){
     gamestate="insidemine";
   }

   function landslidechanger(){
     gamestate="landslide";
 
   }

   // landslide effect
   function effectlandslide(){
     if(frameCount%10===0){
       var rocks=createSprite(random(0,displayWidth),0,10,10);
       rocks.addImage(rockImg);
       rocks.scale=0.1;
       rocks.velocityY=8;
       rocks.lifetime=displayWidth/8+30;
       rockgroup.add(rocks);

     }

     }

     function intoTheHole(){
       gamestate="inHole";
       insideMine.visible=false;
       rockgroup.visible=false;
    }

    function centerchanger(){
      gamestate="center";
    }

    function isTouching(object1,object2){
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2
        && object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object2.y < object2.height/2 + object1.height/2) {
        
        return true;
      }
      else {
        return false;
      } 
    }

    function kingchanger(){
      king.visible=true;
      gamestate="fight";
    }

    function ringchanger(){
      gamestate="ring";
    }

    

  

 

 