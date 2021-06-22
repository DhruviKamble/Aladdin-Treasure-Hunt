var backdrop, backdrop_2, form, system, code, security;
var score=0;

function preload() {
  backdrop = loadImage("aladdin_cave.jpg");
  backdrop_2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(backdrop);
  clues();
  security.display();

  fill(255);
  textSize(30);
  text("Score: "+score, 850, 50);

  if(score === 3){
    clear();
    background(backdrop_2);
    fill("white");
    textSize(40);
    text("🔓 TREASURE UNLOCKED 🔓", 210, 460);
  } 
  
  
  

  drawSprites()
}