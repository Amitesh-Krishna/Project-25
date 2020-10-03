
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var binPartL,binPartR,binPartB;
var binImg;
var hasJumped = false;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(70,625,17);
	binPartL = new DustbinPart(500,600,20,100);
	binPartR = new DustbinPart(600,600,20,100);
	binPartB = new DustbinPart(550,650,100,20);
	ground = new Ground(width/2,height-20,width,30);
	binImg = new DustbinImage(550,610,100,110);
	
	Engine.run(engine);
  
}


function draw() {

  background("red");
  
  paper.display();
  binPartB.display();
  binPartL.display();
  binPartR.display();
  binImg.display();
  
  Jump();
  ground.display();
}

function Jump(){
	if(keyDown("up")&&!hasJumped){
		Body.applyForce(paper.body,paper.body.position,{x:50,y:-38});
		hasJumped = true;
	}
}

