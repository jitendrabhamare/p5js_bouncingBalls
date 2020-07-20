var col = 100;

function setup() {
  createCanvas(600, 600);
  bubble1 = new BounceBall(100, 100, 50);
  bubble2 = new BounceBall(300, 200, 50);
  bubble3 = new BounceBall(400, 50, 100);
}


function draw() {
  background(col);      
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
  bubble3.show();
  bubble3.move();
}


  