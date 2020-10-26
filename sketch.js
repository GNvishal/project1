const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20);

    

    
    log3 = new Log(760,120,150,PI/7);
    log4 = new Log(870,120,150,-PI/7);

    bird = new Bird(100,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
  
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}