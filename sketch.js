let bouncingBalls = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  for (i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(50);
    let dy = 0;
    let dx = (1, -1, random(-20, 20), random(-1, 1), random(-20, 20));
    let c = color(random (i,250), random (i,250), random (i,250));
    bouncingBalls[i] = new Ball(x, y, dy, dx, c);
  }
}

function draw() {
  background(random (i,250), random (i,250), random (i,250));
  for (let ball of bouncingBalls) {
    ball.update();
    ball.display();
  }
}

class Ball {
  constructor(x, y, dy, dx, c) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.dx = dx;
    this.color = c;
  }
  update() {
    this.y += this.dy;
    this.dy += 0.25;
    this.x += this.dx;
    if (this.y >= height && this.dy > 0) {
      this.dy = -0.95 * this.dy;
    }
    if (this.x >= width || this.x <= 0) {
      this.dx = -1 * this.dx;
    }

  }
  display() {
    fill(this.color);
    circle(this.x, this.y, 50);
    
  }
}
