const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var engine, world;
var monkey1, walkingimg, dancingimg, bgimg;
var ground, platform, ground1;
var animal1, animal2, animal3;
var sling;
var divisions = []
var divisionHeight = 300;
var gameState = 1;
var banana, banana1;
var score = 0;

function preload(){

  dancingimg = loadImage("sprites/dancingmonkey.png")
  bgimg = loadImage("sprites/bg.png")

}

function setup(){
  engine = Engine.create();
    world = engine.world;
  createCanvas(displayWidth-10, displayHeight-140)
 
monkey1 = new monkey(250, 250, 120)
ground = new Ground(displayWidth/2, (displayHeight/2)+300, displayWidth, 10);
animal1 = new animal(910, 670, 120, 1)
platform = new Ground(150, 600, 500, 320)
sling = new SlingShot (monkey1.body, {x: 250, y: 250})
animal2 = new animal(490, 670, 120, 2)
animal3 = new animal(1300, 670, 120, 3)
ground1 = new Ground(1440, height/2, 20, height)
banana = new fruit(700, 700, 100)
banana1 = new fruit(1120, 700, 100)




for (var i = 410; i<=width; i = i+210)
{
  divisions.push(new division(i, height-divisionHeight/2, 10, divisionHeight))
}

}
function draw(){
  Engine.update(engine);
  background("white");

  if (gameState==3){

    fill ("black")
  textSize(20)
    text("You Lose!", width/2, height/2)

    monkey1.body.speed=0
  }

  text ("Score: "+score, 1275, 50)


  text (mouseX+","+mouseY, mouseX, mouseY)



  for (var i = 0; i<divisions.length; i+=1){
    divisions[i].display();

  }


console.log(gameState)





  
    ground.display();
    monkey1.display();
   animal1.display();
   platform.display();
  sling.display();
  animal2.display();
  animal3.display();
  ground1.display();
  banana.display();
  banana1.display();
  banana.score();
  banana1.score();

  if (monkey1.body.position.y>500){
    
    if (monkey1.body.position.x<615){
 
      gameState=3;
    }
  
    
    else if(monkey1.body.position.x<1030&&monkey1.body.position.y>500){
  


      gameState=3}
    
    else if(monkey1.body.position.x<1420&&monkey1.body.position.y>500){
      gameState=3
  }
  else if (monkey1.body.position.y>500&&monkey1.body.position.x>630){
    gameState=2

  }

  else if (monkey1.body.position.y>500&&monkey1.body.position.x>1050){
    gameState=2

  }

  }

}







function mouseDragged(){
  if (gameState==1){
      Matter.Body.setPosition(monkey1.body, {x: mouseX , y: mouseY});
  }

}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if (gameState==1){
  if(keyCode === 32){
      monkey1.trajectory=[]
      Matter.Body.setPosition(monkey1.body, {x:250, y:250})
     sling.attach(monkey1.body);
  }
}
}


