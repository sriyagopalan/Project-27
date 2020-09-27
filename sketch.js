var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,150,600,50);
	World.add(world,roof);
	
	bob1=new Bob(150,500,80);
	World.add(world,bob1);
	bob2=new Bob(300,500,80);
	World.add(world,bob2);
	bob3=new Bob(400,500,80);
	World.add(world,bob3);
	bob4=new Bob(500,500,80);
	World.add(world,bob4);
/*
	rope1 = new Rope(roof.body,bob1.body,-200,100);
    rope2 = new Rope(roof.body,bob2.body,-100,100);
    rope3 = new Rope(roof.body,bob3.body,100,100);
    rope4 = new Rope(roof.body,bob4.body,200,100);
*/	
	
    rope1 = new Rope(bob1.body,roof.body,-240,20);
    rope2 = new Rope(bob2.body,roof.body,-90,20);
    rope3 = new Rope(bob3.body,roof.body,90,20);
	rope4 = new Rope(bob4.body,roof.body,240,20);
	
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  drawSprites();
 
  keyPressed();
}

function keyPressed(){
	if(keyCode==UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-5});
	}
	if(keyCode==DOWN_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:60,y:5});
		}
}


