const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var bg;
var rope1;
var fruit;
var fruit_Img;
var fruit_con;
var btn,btn2;//botao
var button2;
var blink,eat,sad,coelho;
var corda;

function preload(){
  bg = loadImage("assets/background.png");
  fruit_Img = loadImage("assets/melon.png");
  blink = loadAnimation("assets/blink_1.png","assets/blink_2.png","assets/blink_3.png");

}

function setup() 
{
  createCanvas(400,400);
  frameRate(80);

 

  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(200,690,600,20);
  rope1 = new Rope(4, {x:250,y:30});


  fruit = Bodies.circle(250, 100, 20);
  World.add(world,fruit);

fruit_con = new Link(rope1,fruit);


btn = createImg("assets/cut_btn.png");
btn.position(230, 30);
btn.size(50, 50);
btn.mouseClicked(cut);

 button2 = createImg("assets/cut_btn.png");
  button2.position(30,40);
  button2.size(50,50);
button2.mouseClicked(cut);


blink.frameDelay = 30;
coelho = createSprite(250,300);
coelho.addAnimation("blink",blink);
coelho.scale = 0.2;

  imageMode(CENTER)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)


  
}

function draw() 
{
  background(51);
  image(bg, width/2 , height/2)
  ground.show();
  rope1.show();

  image(fruit_Img,fruit.position.x,fruit.position.y, 40,40)
  Engine.update(engine);
  
  drawSprites();
   
}

function cut (){

  fruit_con.soltar();
}
