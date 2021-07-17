var gunImg;
var enemy,enemyImg;
var player,playerImg;
var background,backgroundImg;
var ground, invisibleGround, groundImage;
var gunGroup,enemyGroup;

function preload(){
	gunImg = loadImage("M1887.png");
	enemyImg = loadImage("enemy.png");
	playerImg = loadAnimation("a.png","b.png","c.png");
	backgroundImg = loadImage("peakBackground.jpg");
	groundImage = loadImage("ground2.png");
}

function setup(){
	createCanvas(windowWidth,windowHeight);
	background=createSprite(750,150,2000,600);
	background.scale=2;
	background.addImage(backgroundImg);
	background.velocityX = -6;
	background.x = background.width/2;

	player=createSprite(250,350,50,100);
	player.scale=1.5;
	player.addAnimation("img",playerImg);

    enemy=createSprite(850,380,75,75);
	enemy.scale=0.5;
	enemy.addImage(enemyImg);

		

	ground = createSprite(200,455,2000,20);
	ground.addImage("ground",groundImage);
	ground.x = ground.width /2;
	ground.velocityX = -6;

	invisibleGround = createSprite(200,465,400,10);
  invisibleGround.visible = false;

  gunGroup = new Group();
  enemyGroup = new Group();
  


	
	
	
	
	
}

function draw(){
	if (background.x < 0){
		background.x = background.width/2;
	  }

	  if (ground.x < 0){
		ground.x = ground.width/2;
	  }

	  player.collide(invisibleGround);

	  enemy.collide(invisibleGround);

	  spawnGuns();



	drawSprites()
}

function spawnGuns() {
	//write code here to spawn the clouds
	if (frameCount % 160 === 0) {

	var	gun=createSprite(1200,300,200,200);
	gun.scale=0.5;
	gun.addImage(gunImg);

	
	 gun.y = Math.round(random(200,250));
	  gun.velocityX = -3;
	  
	   //assign lifetime to the variable
	  gun.lifetime = 400;
	  
	  //adjust the depth
	 gun.depth = player.depth;
	  player.depth = player.depth + 1;
	  
     gunGroup.add(gun);
	}
	
  }