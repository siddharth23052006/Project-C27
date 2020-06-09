var bob1, bob2, bob3, bob4, bob5;
var chainBob1, chainBob2, chainBob3, chainBob4, chainBob5;
var platform;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(300,260,50);
	bob2 = new Bob(350,260,50);
	bob3 = new Bob(400,260,50);
	bob4 = new Bob(450,260,50);
	bob5 = new Bob(500,260,50);

	platform = new Platform(400,60,300,30);

	chainBob1 = new Rope(bob1.body,{x:300, y:60});
	chainBob2 = new Rope(bob2.body,{x:350, y:60});
	chainBob3 = new Rope(bob3.body,{x:400, y:60});
	chainBob4 = new Rope(bob4.body,{x:450, y:60});
	chainBob5 = new Rope(bob5.body,{x:500, y:60});

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(211);

	chainBob1.display();
	chainBob2.display();
	chainBob3.display();
	chainBob4.display();
	chainBob5.display();
	
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();

	platform.display();
	
	drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(bob5.body,bob5.body.position,{x:50, y:-50});
	}
}