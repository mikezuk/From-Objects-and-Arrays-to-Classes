let img;
let canvas2;

function preload() {
  img = loadImage('paris/PARIS.jpg');
  eiffel = loadImage ('paris/eiffel.jpg')
  louvre = loadImage ('paris/louvre.jpg')
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  image(img, 0, 0);
  imageMode(CENTER)

  image (eiffel,368,257,eiffel.width/1.5,eiffel.height/1.5)
  image (louvre, 1004,605, louvre.width/1.7, louvre.height/1.8)
  imageMode(CENTER)


}

function mousePressed(){
  console.info (mouseX, mouseY)
}
