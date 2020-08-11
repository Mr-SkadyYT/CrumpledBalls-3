var helicopterSprite, packageSprite;
var dustbin;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//function preload() 
//ballimg = loadImage("paper.png");
//dustbinimg = loadImage("dustbingreen.png");

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,200,30);
	dustbin1 = new DustBin(490,580,15,100);
	dustbin2 = new DustBin(568,630,170,15);
	dustbin3 = new DustBin(655,583,15,110);
	
//Create a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);

Matter.Bodies.circle(100,350,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:109,y:-135});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-105,y:95});
	}
	
}



