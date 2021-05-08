const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var engine, world;

var polygon;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine)
    ground = new Ground(500,390,1000,20);
    stand1 = new Ground(500,280,240,10)
    stand2 = new Ground(780,180,190,10)
    box1 = new pinkbox(710,140,50,50);
    box2 = new pinkbox(720,100,50,50);
    box3 = new pinkbox(730,100,50,50);
    box4 = new pinkbox(740,100,50,50);
    box5 = new bluebox(140,100,50,50);
    box6 = new bluebox(150,100,50,50);
    box7 = new bluebox(160,100,50,50);
    box8 = new bluebox(170,100,50,50);
    box9 = new greenbox(180,100,50,50);
    box10 = new greenbox(190,100,50,50);
    box11 = new greenbox(200,100,50,50);
    box12 = new greenbox(210,100,50,50);
    box13 = new orangebox(220,100,50,50);
    box14 = new orangebox(230,100,50,50);
    box15 = new orangebox(240,100,50,50);
    box16 = new orangebox(250,100,50,50);
    polygon = new Polygon(10,10);
   
}

function draw(){
    background("black")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    ground.display();
    stand1.display();
    stand2.display();
    polygon.display();  

}