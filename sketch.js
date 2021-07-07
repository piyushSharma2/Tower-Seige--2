const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

//Objects
var base;
var block1,block2,block3,block4;
var block5,block6,block7,block8;
var block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20;
var block21,block22,block23,block24;
var block25,polygon,slingshot;

function preload(){

 bgImg=loadImage("bg.jpg")

}

function setup(){
createCanvas(1400,800)
engine = Engine.create();
  world = engine.world;

  polygon=new Polygon(130,300)
  slingshot = new SlingShot(polygon.body,{x:280, y:200});



base=new Base(550,600,500,20)
base2=new Base(1130,520,400,20)
base3=new Base(700,790,1500,20)

block1=new Block(370,550,80,80)
block2=new Block(460,550,80,80)
block3=new Block(550,550,80,80)
block4=new Block(640,550,80,80)
block5=new Block(730,550,80,80)
block6=new Block(410,467,80,80)
block7=new Block(500,467,80,80)
block8=new Block(590,467,80,80)
block9=new Block(680,467,80,80)
block10=new Block(450,384,80,80)
block11=new Block(540,384,80,80)
block12=new Block(630,384,80,80)
block13=new Block(490,301,80,80)
block14=new Block(580,301,80,80)
block15=new Block(530,217,80,80)
block16=new Block(1000,470,80,80)
block17=new Block(1090,470,80,80)
block18=new Block(1180,470,80,80)
block19=new Block(1270,470,80,80)
block20=new Block(1040,390,80,80)
block21=new Block(1130,390,80,80)
block22=new Block(1220,390,80,80)
block23=new Block(1085,280,80,80)
block24=new Block(1175,280,80,80)
block25=new Block(1120,220,80,80)




Engine.run(engine);


}

function draw(){
background(bgImg)

push()
stroke("black")
fill("black")
text(mouseX+','+mouseY,900,400)
pop()

push()
fill("brown")
base.display();
base2.display();
base3.display();
pop()

push()
fill("purple")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
pop()

push()
fill("green")
block6.display();
block7.display();
block8.display();
block9.display();
block25.display();
pop()

push()
fill("blue")
block10.display();
block11.display();
block12.display();
block23.display();
block24.display();
pop()

push()
fill("orange")
block13.display();
block14.display();
block20.display();  
block21.display();
block22.display();
pop()

push()
fill("red")
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
pop()

polygon.display();
slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
    slingshot.attach(polygon.body)
  }
}
