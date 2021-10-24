// wall and rock


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Body = Matter.Body;

var engine;
var world;
var ball, ground;

function setup(){
  createCanvas(400,400);

  // creating physics engine
  engine = Engine.create();
  // add world to physics engine
  world = engine.world;

  // assigning physics properties to the ball
  var balloptions = {
    restitution : 1.0,
    //frictionAir : 0.1
  }

  // creating ball
  ball = Bodies.circle(200, 10, 40, balloptions);
  // add body(ball) to the world
  World.add(world, ball);

  
  var groundoptions = {
    isStatic: true
  }

  ground =  Bodies.rectangle(100, 390, 400, 30, groundoptions);
  World.add(world, ground);


}

function draw() {
  background(51);
 
  Engine.update(engine);

  ellipse(ball.position.x, ball.position.y, 40, 40);

  rectMode(CENTER)
  rect(ground.position.x, ground.position.y, 400, 20);
  
}

