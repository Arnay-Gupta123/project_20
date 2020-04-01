//Variables for values of red,green and blue
var r;
var g;
var b;

function setup(){
  //Create the canvas
  createCanvas(1200,400);
}


function draw(){


  //Calculation of the values of red,green and blue
  r = mouseX;
  g = mouseY;
  b = (r + g)/(r*g);
 
  //Colouring the background accordingly
  background(r/0.4,g/0.4,b/0.4);

  //Setting the fill colour for the ellipse - White
  fill(255);

  //Creating the ellipse with the positions of the mouse
  ellipse(mouseX,mouseY,20,20);
}