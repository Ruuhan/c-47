var bg
var player
var coins 
var bgimg
var barrier
var playerimg
var coinsimg
var barrierimg
var invisibileground
var score =0
var coinsgroup
var barriergroup


function preload(){
  bgimg=loadImage("IMAGES/BACKGROUND IMAGE 1123.PNG")
  playerimg=loadAnimation("IMAGES/running-man.png","IMAGES/running-stick-figure.png","IMAGES/run.png")
  coinsimg=loadAnimation("IMAGES/irish.png","IMAGES/coin.png")
  barrierimg=loadImage('IMAGES/barrier.png')
}

function setup(){
  createCanvas(displayWidth,displayHeight-100)
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.velocityX=-15
  bg.addImage(bgimg)
  bg.scale=2.8
  player=createSprite(100,displayHeight-200,40,80)
  player.addAnimation("running",playerimg)
  player.scale=0.35
  invisibileground=createSprite(displayWidth/2,displayHeight-120,displayWidth,10)
  invisibileground.visible=false
  coinsgroup=new Group()
  barriergroup= new Group()
  
  
}


function draw(){
  if(bg.x<0){
    bg.x=displayWidth/2
  }
  createcoins()
  createbarrier()
  drawSprites()
if(keyDown("space")&&player.collide(invisibileground)){
  player.velocityY=-15

}
for(var idk=0;idk<coinsgroup.length;idk++){
  if(player.isTouching(coinsgroup.get(idk))&&coinsgroup.get(idk)!=undefined){
    score=score+1
    coinsgroup.get(idk).destroy()
  }
}

textSize(30)
fill("black")
 text("Score: "+score,displayWidth-300,150) 

player.velocityY=player.velocityY+0.5
player.collide(invisibileground)
}
function createcoins(){
  if(frameCount%80===0) {
    coins=createSprite(displayWidth,displayHeight-400)
  coins.addAnimation("coins",coinsimg)
  coins.scale=0.15
  coins.velocityX=-12
  coins.lifetime=displayWidth/12
  coinsgroup.add(coins)
  }
  

}
function createbarrier(){
  if(frameCount%100===0){
    barrier=createSprite(displayWidth,displayHeight-200)
    barrier.addImage(barrierimg)
barrier.scale=0.2
barrier.velocityX=-6
barrier.lifetime=displayWidth/6
barriergroup.add(barrier)
  }
}