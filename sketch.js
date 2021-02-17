
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, fish1;
var bgImg1,platform;
var penguin1, slingshot;
var b1,block1;
var startImg;
var score = 0;
var chance = 15;
var gameState = "Start";


function preload() {
    bgImg1 = loadImage("bgimage.jpg");
    bgImg2 = loadImage("bg2.jpg");
    bgImg3 = loadImage("bg3.jpg");
    startImg = loadImage("start.png");

}

function setup() {
  createCanvas(1400,665);

  engine = Engine.create();
  world = engine.world;

  penguin1 = new Penguin(120,465)
  ground = new Ground(690,650,1800,30)
 
  block1 = new Block1(650,505,220)
  block2 = new Block1(850,505,220)
  block3 = new Block1(882,505,220)
  block4 = new Block1(1082,505,220)
  block5 = new Block1(1114,505,220)
  block6 = new Block1(1314,505,220) 
 
  block9 = new Block1(850,258,220)
  block10 = new Block1(882,258,220)
  block11 = new Block1(1082,258,220)
  block12 = new Block1(1114,258,220)
 
 
 b1 = new Box (982,392,800,27)
 b2 = new Box (984,120,260,27)
 b3 = new Box (740,375,200,27)
 b4 = new Box (1240,375,200,27)
 b5 = new Box (982,110,180,25)
 b6 = new Box (982,100,80,25)

 
  fish1 = new Fish(550,560);
  fish2 = new Fish(750,560);
  fish3 = new Fish(990,560);
  fish4 = new Fish(1220,560);
  fish5 = new Fish(750,300);
  fish6 = new Fish(990,330);
  fish7 = new Fish(1220,300);

 slingshot = new SlingShot(penguin1.body,{x:120, y:465});


}

function draw() {

  Engine.update(engine);

  if(gameState==="Start"){
    background(0);
    textSize(90)
    fill("red")
    stroke("white") 
    strokeWeight(4)
    textFont("PENGUIN  AND  THE  FISH")
    text("*PENGUIN  AND  THE  FISH*",100,270)
    fill("green")
    stroke("white") 
    strokeWeight(2)
    textSize(40)
    text("Press  'ENTER'  To  READ THE INSTRUCTIONS ",320,400)
    
   if(keyDown("enter")){
    gameState = "Instructions"
   }
  }
   if(gameState==="Instructions"){
     background(255);
     fill("green")
     stroke("black") 
     strokeWeight(2)
     textSize(40)
     text("INSTRUCTIONS ",520,70)
     fill("black")
     strokeWeight(4)
     textSize(10)
     text("-------------------------------------------------------------------------------------- ",525,85)
     fill("red")
     noStroke() 
     textSize(30)
     text("*Read the Instructions given below: ",80,150)
     stroke("blue") 
        strokeWeight(3)
        fill("white");
        textSize(22)
        textFont("Drag the Penguin towards the Basket of Fish to SCORE POINTS!!")
        text("1. DRAG  THE  PENGUIN  AND  RELEASE  IT  TOWARDS  THE  BASKET  OF  FISH  *POWERFULLY*  TO  SCORE POINTS.", 120,220);

        text("2. PRESS  'SPACE  TO  GET  A  SECOND  CHANCE  TO  PLAY. ", 120,280);

        text("3. IF  YOU  SCORE  60  POINTS , YOU  WILL  WIN  THE  GAME.  ", 120,340);

        text("4. YOU  HAVE  ONLY  15  CHANCES  TO  WIN ", 120,400);
        text("5. YOU  CANNOT  DESTROY  THE  THICK  WHITE  ICE  BLOCK. ", 120,460);
        text("6. BUT  YOU  CAN  DESTROY  THE  OTHER. ", 120,520);
      noStroke()
      fill("red")
      text("(*The Instructions will not be displayed anymore) ", 320,560);

      
      fill("green")
      stroke("black") 
      strokeWeight(2)
          textSize(40)
      text("PRESS  'P'  TO  PLAY  THE  GAME ", 500,610);
      if(keyDown("P")){
        gameState = "Play"
     }
 }

  if(gameState === "Play"){
    background(bgImg1);

    stroke("white") 
    strokeWeight(4)
    fill("black");
    textSize(30)
    text("SCORE = "+ score, 50,70);
  
    fill("green");
    textSize(31)
    text("CHANCES --- "+ chance, 50,120);
  
  
    drawSprites();

    ground.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();

    block9.display();
    block10.display();
    block11.display();
    block12.display();
    
    penguin1.display();

    fish1.display();
    fish1.score();
    fish2.display();
    fish2.score();
    fish3.display();
    fish3.score();
    fish4.display();
    fish4.score();
    fish5.display();
    fish5.score();
    fish6.display();
    fish6.score();
    fish7.display();
    fish7.score();

    slingshot.display();

    if(score === 0){
      
      stroke("orange") 
      strokeWeight(3)
      fill("red");
      textSize(20)
      text(" DESTROY  OR  EAT  ONLY 6 BASKETS OF FISH!! ",100,250)
      }
      if(score === 50){
      
        stroke("orange") 
        strokeWeight(3)
        fill("red");
        textSize(25)
        text(" DESTROY  OR  EAT  ONLY 1 MORE BASKET !! ",100,250)
        }

    if(chance === 15){
      
      stroke("orange") 
      strokeWeight(3)
      fill("white");
      textSize(30)
      text("YOU HAVE 15 CHANCES !!",500,100)
      }

    
    if(chance === 10){
      
      stroke("red") 
      strokeWeight(3)
      fill("orange");
      textSize(30)
      text("10 MORE CHANCES !!",500,100)
      }

    if(chance === 5){
      
    stroke("red") 
    strokeWeight(3)
    fill("red");
    textSize(30)
    text("5 MORE CHANCES !!",500,100)
    }
    if(chance === 3){
      
      stroke("black") 
      strokeWeight(3)
      fill("red");
      textSize(30)
      text("3 MORE CHANCES !!",500,100)
      }
      if(chance === 1){
      
        stroke("black") 
        strokeWeight(3)
        fill("black");
        textSize(30)
        text("YOUR LAST CHANCE !!",500,100)
        }

    if(score === 60){
      gameState = "Win"
    }
    
    if(chance === 0){
      gameState = "Lose"
    
    }

  }
  
  if(gameState=== "Win"){
    background(bgImg2)
    
  }
  if(gameState === "Lose"){
    background(bgImg3);
    
    stroke("red") 
    strokeWeight(3)
    fill("white");
    textSize(30)
    text("YOUR CHANCES ARE OVER!!",500,100)
    text("TO RETRY PLEASE RELOAD THE PAGE",500,600)
    
  }
  
}


function mouseDragged(){
  if(gameState === "Play"){
  Matter.Body.setPosition(penguin1.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  if(gameState === "Play"){
  slingshot.fly();
  }
}

function keyPressed(){
 
 if(gameState === "Play"){
    if(keyCode === 32){
      Matter.Body.setPosition(penguin1.body, {x: 115, y:465});
      slingshot.attach(penguin1.body);
      chance = chance-1
  }
}
}
