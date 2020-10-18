
var eng,wr,ground



function setup() {
	createCanvas(800, 600);


	eng = Matter.Engine.create();
	console.log(eng);
    wr = eng.World

	//Create the Bodies Here.
	ground = Matter.Bodies.rectangle(400,590,800,20);
	Matter.World.add(wr,ground);

	console.log(ground);
  
}


function draw() {
  background(0);
  Matter.Engine.update(eng);
  fill("brown");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
  }



