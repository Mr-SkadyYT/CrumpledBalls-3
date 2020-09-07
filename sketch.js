var helicopterSprite, packageSprite;
var dustbin, dustbinImg;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
dustbinImg = loadImage("dustbingreen.png");
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,200,30);
	dustbin1 = new DustBin(490,580,15,100);
	dustbin2 = new DustBin(568,630,170,15);
	dustbin3 = new DustBin(655,583,15,110);
	ground7 = new Ground(0,641);

Matter.Bodies.circle(100,350,30);
dustbin = createSprite(578,530);
dustbin.addImage(dustbinImg);
dustbin.scale = 0.6899;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(175,155,125);

  drawSprites();
paper1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 ground7.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:27,y:-36});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-15,y:15});
	}
	
}



