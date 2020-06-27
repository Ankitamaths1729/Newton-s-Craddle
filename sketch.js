var helicopterIMG, helicopterSprite, packageSprite;
var packageBody,ground,bob3,bob2,bob1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(200,50);
	bob3 = new Bob(200,100);
    bob2 = new Bob(180,100);
    bob1 = new Bob(150,300);


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	rope1 = new Rope(bob1.body,ground.body,0,0);

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob3.display();
  bob2.display();
  bob1.display();
  ground.display();
  rope1.display();
  drawSprites();
 
}



