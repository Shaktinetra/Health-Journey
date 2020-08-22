var healthy, temptation, player, playerHouse, tempatationHouse, healthyHouse, healthyImg, tempataionImg, player1Img, player2Img, temptCD, healthCD, playerRightCD, playerLeftCD, accomplished, click, doorbell;
var gameState = "play";


function preload() {
  healthyImg = loadImage("healthy.png");
  temptationImg = loadImage("temptation.jpg");
  player1Img = loadImage("player_avatar_1.jpg");
  player2Img = loadImage("player_avatar_2.jpg");

  doorbell = loadSound("doorbell.mp3");
  accomplished = loadSound("accomplished.mp3");
  click = loadSound("click.mp3");
}

function setup() {
  createCanvas(1200, 400);

  player = createSprite(600, 225, 50, 50);
  player.addImage("avatar1", player1Img);
  player.addImage("avatar2", player2Img);
  player.scale = 0.3;

  temptation = createSprite(1100, 225, 50, 50);
  temptation.addImage("tempt", temptationImg);
  temptation.scale = 0.12;
  
  healthy = createSprite(100, 225, 50, 50);
  healthy.addImage("healthy", healthyImg);
  healthy.scale = 0.14;
  
  temptCD = 125;
  healthCD = 125;
  playerRightCD = 125;
  playerLeftCD = 125;
}

function draw() {
  background(255, 255, 255);  
 // text("Sounds from zapsplat.com")

 tempt();

 fill(0);
 line(500, 125, 700, 125);
 line(500, 125, 500, 325);
 line(700, 125, 700, 325);
 line(500, 325, 700, 325);

 line(0, 125, 200, 125);
 line(0, 125, 0, 325);
 line(200, healthCD, 200, 325);
 line(0, 325, 200, 325);

 line(1000, 125, 1200, 125);
 line(1000, temptCD, 1000, 325);
 line(1200, 125, 1200, 325);
 line(1000, 325, 1200, 325);

 health();

 drawSprites();
}

 function tempt() {
  if (temptCD < 325) {
    temptCD = temptCD + 5;
  }

  if (temptCD === 325 && gameState === "play") {
    temptation.velocityX = -2;
  }

  if (temptation.x < 725 && gameState === "play") {
    temptation.velocityX = 0;
        
    console.log('executed');
    doorbell.play();
    gameState = "wait";

  }
}

function health() {
  if (healthCD < 325) {
    healthCD = healthCD + 5;
  }

  if (healthCD === 325) {
    healthy.velocityX = 2;
  }

  if (healthy.x > 470) {
    healthy.velocityX = 0;
  }
}

function closeDoor() {

}