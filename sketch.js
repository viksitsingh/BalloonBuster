var g1,b1,p1,r1
var g2,b2,p2,r2
var bg,bg1,bow,bow1
var arow,arow1
var gg,bg2,pg,rg,ag
var score=0

function preload(){
 //load your images here 
 g2=loadImage("green_balloon0.png")
  b2=loadImage("blue_balloon0.png")
  p2=loadImage("pink_balloon0.png")
  r2=loadImage("red_balloon0.png")
  bg1=loadImage("background0.png")
  bow1=loadImage("bow0.png")
  arow1=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(0,0,600,600)
  bg.addImage(bg1)
  bg.velocityX=-3
  bg.scale=3
  
  bow=createSprite(450,300,20,60)
  bow.addImage(bow1)
  
  gg=new Group()
  bg2=new Group()
  rg=new Group()
  pg=new Group()
  ag=new Group()


}

function draw() {

 if(bg.x<0){
   
   bg.x=bg.width/2
 }
  bow.y=mouseY
  
  if(keyDown("space")){
    createArrow()
  }
   var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }

if(ag.isTouching(rg)){
  ag.destroyEach()
  rg.destroyEach()
  score=score+5
}
  if(ag.isTouching(gg)){
  ag.destroyEach()
  gg.destroyEach()
  score=score+5
}
  if(ag.isTouching(pg)){
  ag.destroyEach()
  pg.destroyEach()
  score=score+5
}
  if(ag.isTouching(bg2)){
  ag.destroyEach()
  bg2.destroyEach()
  score=score+5
}
  
  drawSprites()
  text("score:"+score,270,30)
}
function createArrow(){
  arow=createSprite(450,350,60,20)
  arow.addImage(arow1)
  arow.y=bow.y
  arow.velocityX=-3
  arow.scale=0.3
  ag.add(arow)
}
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(r2);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  rg.add(red)
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(b2);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  bg2.add(blue)
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(g2);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  gg.add(green)
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(p2);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pg.add(pink)
  return pink;
}