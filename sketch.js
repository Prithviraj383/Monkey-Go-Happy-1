var score=0;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(600,400);
  
  monkey=createSprite(50,310,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=.15;
  
  ground=createSprite(300,365,1000,20);
  ground.velocityX=-4;
  
  bananaGroup=createGroup();
  stoneGroup=createGroup();
}


function draw() {

console.log(frameCount);
  
score=Math.round(frameCount);
  
textSize(15);  
fill("blue");
  
if(keyDown("space")&&monkey.y>150){
  monkey.velocityY=-8;
}  
if(bananaGroup.isTouching(monkey)){
  bananaGroup.destroyEach();
}
  
monkey.velocityY=monkey.velocityY+.4;  
monkey.collide(ground);  
ground.x=ground.width/2;
  
background("green");
Bannanna();  
Obstacle();  
drawSprites();  
  
text("SURVIVAL TIME:"+score,430,50); 
}

function Bannanna(){
  if(frameCount%60===0){
    banana=createSprite(450,200,20,20);
    banana.addImage(bananaImage);
    banana.scale=.1;
    banana.velocityX=-4;
    banana.lifetime=150;
    banana.y=Math.round(random(120,200)); 
    bananaGroup.add(banana);
}
  } 

function Obstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(400,330,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=.15;
    obstacle.lifetime=100;
    stoneGroup.add(obstacle);
  }
}






