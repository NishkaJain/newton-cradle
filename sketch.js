
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log;
var ball1,ball2,ball3,ball4,ball5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	log = new Log(200,200,100,30);
	ball1 = new Circle(100,100);
	ball2 = new Circle(100,100);
	ball3 = new Circle(100,100);
	ball4 = new Circle(100,100);
	ball5 = new Circle(100,100);
	chain1 = new Chain(ball1.body,log.body);
	chain2= new Chain(ball2.body,log.body);
	chain3= new Chain(ball3.body,log.body);
	chain4 = new Chain(ball4.body,log.body);
	chain5 = new Chain(ball5.body,log.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  log.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}



