/*
https://p5play.org/
https://piqnt.com/planck.js/
*/

let ball, ball2, rad;
let floor, floor2, floor3, floor4;
var width, height, deltaH;
var ang1, ang2;

function setup() {
  width = windowWidth; height = windowHeight;
  createCanvas(width, height);
  world.gravity.y = 10;
  ang1 = 10;
  ang2 = 30;
  rad = 30;
  deltaH = 0.4*height

  
  //set slope
  floor = new Sprite();
  floor.collider = 'static';   //floor.collider = 'none';
  floor.w = 0.3*width;
  floor.h = 10;
  floor.rotation = ang1;
  floor.x = 0.25*width;
  floor.y = 0.2*height;
  
  floor2 = new Sprite();
  floor2.collider = 'static';
  floor2.w = 0.4*width;
  floor2.h = 10;
  floor2.rotation = ang2;
  floor2.x = floor.x + 0.5*floor.w*cos(floor.rotation) + 0.5*floor2.w*cos(floor2.rotation);
  floor2.y = floor.y + 0.5*floor.w*sin(floor.rotation) + 0.5*floor2.w*sin(floor2.rotation);  
    
  //set slope 2
  floor3 = new Sprite();
  floor3.collider = 'static';   //floor.collider = 'none';
  floor3.w = floor.w;
  floor3.h = floor.h;
  floor3.rotation = ang2;
  floor3.x = floor.x;
  floor3.y = floor.y + deltaH;
  
  floor4 = new Sprite();
  floor4.collider = 'static';
  floor4.w = floor2.w;
  floor4.h = floor2.h;
  floor4.rotation = ang1;  
  floor4.x = floor3.x + 0.5*floor3.w*cos(floor3.rotation) + 0.5*floor4.w*cos(floor4.rotation);
  floor4.y = floor3.y + 0.5*floor3.w*sin(floor3.rotation) + 0.5*floor4.w*sin(floor4.rotation); 
  
  
  //set ball
  ball = new Sprite();
  ball.diameter = rad;
  ball.x = floor.x - 0.4*floor.w*cos(floor.rotation);
  ball.y = floor.y - 0.5*floor.w*sin(floor.rotation); 
  ball.bounciness = 0.5;
  
  //set ball2
  ball2 = new Sprite();
  ball2.diameter = ball.diameter;
  ball2.x = floor3.x - 0.4*floor3.w*cos(floor3.rotation);
  ball2.y = floor3.y - 0.5*floor3.w*sin(floor3.rotation);  
  ball2.bounciness = ball.bounciness;
  
  /*
  // line and ball
  new Sprite(250, 100, [300, 10, 200, 20], 'static');
  new Sprite(random(100), 0, 20); // ball
  */
  
}

function draw() {
  if (mouse.held()) {
	ball.move(mouse.x, mouse.y, 8);
  }
  
  clear();
}