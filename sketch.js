
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine; 
var world;
var ground1; 
var ball; 
var ground2; 
var angle = 60;

var btn;

var angle=60;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  btn = createImg('up.png');
  btn.position(350,30);
  btn.size(50,50);
  btn.mouseClicked(vForce);

  ground2 = Bodies.rectangle(100,300,100,20,ground_options);
  World.add(world,ground2);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
 
  ground1 = Bodies.rectangle(100,400,650,20,ground_options);
  World.add(world,ground1); 
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw(){
  background(51);
  Engine.update(engine);
  
  
  Matter.Body.rotate(ground2,angle)
  push();
  translate(ground2.position.x,ground2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  
  angle +=0.1;

 

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground1.position.x,ground1.position.y,650,20); 
 
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  
