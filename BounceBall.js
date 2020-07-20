class BounceBall {
  constructor(x,y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xspeed = random(2,7);
    this.yspeed = random(2,7);    
  }
  
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r);
  }
  
  move() {
    
    // bounce
    if (this.x < 0 || this.x > width) {
      this.xspeed = -this.xspeed;
    }    
    if (this.y < 0 || this.y > height) {
    this.yspeed = -this.yspeed;
    }
    
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  } 
  
}