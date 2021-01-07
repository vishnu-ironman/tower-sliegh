const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var ground,music;
var  base,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var polygon,polygonimg;
var shot

function preload(){
 ground = loadImage("background.jpg");
 music = loadSound("disco.mp3");
 polygonimg = loadImage("polygon.png")
}

function setup() {
    createCanvas(1400,500);
    engine = Engine.create();
    world = engine.world;
   
music.loop();

    base = new Ground(650,350,250,20);
    base2 = new Ground(1100,250,250,20);
  
    box1 = new greenBox(1170,220,40,40);
    box2 = new greenBox(1140,220,40,40);
    box3 = new greenBox(1110,220,40,40);
    box4 = new greenBox(1000,220,40,40);
    box4 = new greenBox(1020,220,40,40);
    box5 = new greenBox(1040,220,40,40);

    box6 = new blueBox(1140,210,40,40)
    box7 = new blueBox(1110,210,40,40)
    box8 = new blueBox(1050,210,40,40)

    box9 = new orangeBox(1110,200,40,40);
    
    polygon = Bodies.circle(180,200,70);
    World.add(world,polygon);

  shot = new SlingShot(this.polygon,{x:180,y:200});

    Engine.run(engine);  

}

function draw() {
    background(ground);



    imageMode(CENTER);
    image(polygonimg,polygon.position.x,polygon.position.y,70,70)

  base.display();
  base2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display()
   box7.display()
   box8.display();
   box9.display();
   shot.display();
}

function mouseDragged (){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    shot.fly();
}