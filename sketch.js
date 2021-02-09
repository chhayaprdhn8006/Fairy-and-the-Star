var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 

	fairy = createSprite(130, 520,10,10);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30,10,10);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed();

  if(fairy.x > 520){
	 fairy.velocityX = 0; 
	 star.velocityY = 3;
	 }

  if(star.y > 500){
	star.velocityY = 0;
	fairyVoice.stop();
  }	
 
  drawSprites();

}

function keyPressed() {
	//write code here
 if(keyCode === LEFT_ARROW){
	fairy.velocityX = -2;
	fairyVoice.play();
	}
	
 if(keyCode === RIGHT_ARROW){
	fairy.velocityX = 2;
	fairyVoice.play();
	}

}
