
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roofObject;
var World 

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roofObject = new roof (width/2,height/4,width/7,20);
    bobDiameter = 40

	startBobPositionX = width/2;
	startBobPositionY = height/4+500
	bobObject1 = new bob (startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2 = new bob (startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3 = new bob (startBobPositionX,startBobPositionY,bobDiameter);
    bobObject4 = new bob (startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5 = new bob (startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter)
     //create a ground

    
	rope1 = new rope(bobObject1,roofObject.body,-bobDiameter*2,0);
    rope2 = new rope(bobObject1,roofObject.body,-bobDiameter*1,0);
	rope3 = new rope(bobObject1,roofObject.body,0,0);
	rope4 = new rope(bobObject1,roofObject.body,+bobDiameter*1,0);
	rope5 = new rope(bobObject1,roofObject.body,+bobDiameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roofObject.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bobObject1.diplay();
  bobObject2.diplay();
  bobObject3.diplay();
  bobObject4.diplay();
  bobObject5.diplay();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.aplyForce (bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
 }

}

function drawLine (constraint) {
bobBodyPosition = constraint.bodyA.position;
roofBodyPosition = constraint.bodyB.position;
roofBodyOffset = constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x;
roofBodyY=roofBodyPosition.y+roofBodyOffset.y;

line (bobBodyPosition.x,bobBodyPosition.y,roofBodyX,roofBodyY);
}

