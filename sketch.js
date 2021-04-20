
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer =  new hammer(700,100,20,20)
stone  = new stone (400,90,15,15)
rubber = new stone (350,100,10,10)
sand1 = new sand (50,50,5,5)
sand2 = new sand (50,50,5,5)
sand3 = new sand (50,50,5,5)
sand4 = new sand (50,50,5,5)
sand5 = new sand (50,50,5,5)
sand6 = new sand (50,50,5,5)
sand7 = new sand (50,50,5,5)
sand8 = new sand (50,50,5,5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
hammeer.display()
stone.display()
rubber.display()
sand1.display()
sand2.display()
sand3.display()
sand4.display()
sand5.display()
sand6.display()
sand7.display()
sand8.display()
}



