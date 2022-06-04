var score = 0, bg, health = 200
var player, playerImg
var bullet1, bullet2, bulletGrp
var enemyShip_1, enemyShip_1_Img, group1
var enemyShip_2, enemyShip_2_Img, group2
var enemyShip_3, enemyShip_3_Img, group3
var enemyShip_4, enemyShip_4_Img, group4
var enemyShip_5, enemyShip_5_Img, group5
var boundary
var metoroid, metoroidImg, metoroid_2, metoroid_2Img, metoroidGrp1, metoroidGrp2, meteroid1HP = 3, meteroid2HP = 3
var boom, boomImg
var stop = false
var gameState = 0
var start, startImg
var restart, restartImg
var hp_powerup1, hp_powerup2, hp_powerupImg, hp_powerups

function preload(){
 playerImg = loadImage("assets/Spaceship.gif")
 enemyShip_1_Img = loadImage("assets/AlienShip_1.png")
 enemyShip_2_Img = loadImage("assets/AlienShip_2.png")
 enemyShip_3_Img = loadImage("assets/AlienShip_3.png")
 enemyShip_4_Img = loadImage("assets/AlienShip_4.png")
 enemyShip_5_Img = loadImage("assets/AlienShip_5.png")
 metoroidImg = loadImage("assets/meteroid.png")
 metoroid_2Img = loadImage("assets/meteroid_2.png")
 boomImg = loadImage("assets/boom.png")
 bg = loadImage("assets/space.jpg")
 startImg = loadImage("assets/start.png")
 restartImg = loadImage("assets/restart.png")
 hp_powerupImg = loadImage("assets/hp_powerup.png")
}

function setup() {
  canvas = createCanvas(500, 400);


  player = createSprite(250,360,20,20)
  player.addImage(playerImg)
  player.scale = 0.2
  player.setCollider("rectangle", 0, 0, 300, 300)
  player.visible = false

  enemyShip_1 = createSprite(100,100,20,20)
  enemyShip_1.addImage(enemyShip_1_Img)
  enemyShip_1.scale = 0.2
  enemyShip_1.destroy();
  group1 = new Group()

  enemyShip_2 = createSprite(100,100,20,20)
  enemyShip_2.addImage(enemyShip_2_Img)
  enemyShip_2.scale = 0.2
  enemyShip_2.destroy();
  group2 = new Group()

  enemyShip_3 = createSprite(100,100,20,20)
  enemyShip_3.addImage(enemyShip_3_Img)
  enemyShip_3.scale = 0.2
  enemyShip_3.destroy();
  group3 = new Group()

  enemyShip_4 = createSprite(100,100,20,20)
  enemyShip_4.addImage(enemyShip_4_Img)
  enemyShip_4.scale = 0.2
  enemyShip_4.destroy();
  group4 = new Group()

  enemyShip_5 = createSprite(100,100,20,20)
  enemyShip_5.addImage(enemyShip_5_Img)
  enemyShip_5.scale = 0.2
  enemyShip_5.destroy();
  group5 = new Group()

  bullet1 = createSprite(20,20,20,20)
  bullet1.destroy();
  bullet2 = createSprite(20,20,20,20)
  bullet2.destroy()
  bulletGrp = new Group()

  boundary = createSprite(250,410,500,10)

  metoroidGrp1 = new Group()
  metoroidGrp2 = new Group()

  metoroid = createSprite(600, random(-200, 0), 20,20)
  metoroid.addImage(metoroidImg)
  metoroid.scale = 0.2
  metoroid.velocityY = 4
  metoroid.velocityX = -3
  metoroidGrp1.add(metoroid)
  metoroid.destroy()

  metoroid_2 = createSprite(600, random(-200, 0), 20,20)
  metoroid_2.addImage(metoroid_2Img)
  metoroid_2.scale = 0.2
  metoroid_2.velocityY = 4
  metoroid_2.velocityX = -3
  metoroidGrp2.add(metoroid)
  metoroid_2.destroy()

  start = createSprite(250,370,20,20)
    start.addImage(startImg)
    start.scale = 0.25
    start.visible = false

  restart = createSprite(250, 300, 20, 20)
    restart.addImage(restartImg)
    restart.scale = 0.15
    restart.visible = false

  hp_powerups = new Group()
  
  hp_powerup1 = createSprite(200, 200,10,10)
  hp_powerup1.addImage(hp_powerupImg)
  hp_powerup1.scale = 0.5
  hp_powerup1.velocityY = 1
  hp_powerups.add(hp_powerup1)
  hp_powerup1.destroy()

  hp_powerup2 = createSprite(300, 300, 10, 10)
  hp_powerup2.addImage(hp_powerupImg)
  hp_powerup2.scale = 0.5
  hp_powerup2.velocityY = 1
  hp_powerups.add(hp_powerup2)
  hp_powerup2.destroy()
}

function draw() {
  background(186);
  image(bg, 0,0, windowWidth, windowHeight)

  if(gameState === 0){
    score = 0
    health = 200

    restart.visible = false
    stop = false

    player = createSprite(250,360,20,20)
  player.addImage(playerImg)
  player.scale = 0.2
  player.setCollider("rectangle", 0, 0, 300, 300)
  player.visible = false

    fill("red")
    textSize(30)
    text("Earth vs Aliens", 150, 50)


    fill("yellow")
    textSize(20)
    text("Aliens from another planet try to invade Earth, but", 30,100)
    text("the mighty people of Earth unite to protect their", 40, 130)
    text("planet and sent you as the captain of the warship to", 25, 160)
    text("fight the aliens. Protect the planet by killing the aliens.", 15, 190)

    fill("orange")
    textSize(25)
    text("Controls:-", 10, 230)
    textSize(20)
    text("Press 'SPACE' key to fire bullets.", 130, 230)
    text("Use the 'ARROW' keys to  move left and right", 80, 250)
    text("Kill the aliens by firing bullets and dodge the meteroids.", 10, 280)
    text("Don't let the aliens get to you,", 100, 310)
    text("this will reduce your health.", 100, 330)



     start.visible = true
    
    if(mousePressedOver(start)){
      gameState = 1
      start.visible = false
    }
  }

  hp_powerup1.velocityY = 2
  hp_powerup2.velocityY = 2

  if(gameState === 1 && stop === false){
   player.visible = true
  }

  if(stop === false && gameState === 1){
  fill("blue")
  textSize(20)
  text("Health " + health, 20,50)

  fill("red")
  textSize(20)
  text("Score " + score, 400,50)
  }

  //adjusting player
  if(player.x >= 470){
    player.x = 468
  }
  if(player.x <= 30){
    player.x = 35
  }

  //giving moving command
  if (keyDown("LEFT_ARROW")) {
    player.x -= 7;
  }
   if (keyDown("RIGHT_ARROW")) {
    player.x += 7;
  }

  if(keyWentDown("SPACE") && stop === false && gameState === 1){
    shoot();
  }

  if(health <= 0){
    gameOver()
   gameState = 2
    stop = true
    if(mousePressedOver(restart)){
      gameState = 0
    }
  }

  if(stop === false && gameState === 1){
    spawnShips();
    spawnMetoroids();
  }

  checkCollision();

  checkPosition();

  if(meteroid1HP === 0){
    metoroid.destroy()
    hp_powerup1.visible = true
  }
  if(meteroid2HP === 0){
    metoroid_2.destroy()
    hp_powerup2.visible = true
  }

  for(i=0;i<hp_powerups.length;i++){
    if(hp_powerups[i].isTouching(player)){
      hp_powerups[i].visible = false
      if(health >= 150 ){
      health = 200
      }
      if(health < 150){
        health += 50
      }
  }
  }

  hp_powerup1.x = metoroid.x
  hp_powerup1.y = metoroid.y

  hp_powerup2.x = metoroid_2.x
  hp_powerup2.y = metoroid_2.y
 drawSprites();
}

function shoot() {
  bullet1 = createSprite(player.x - 16.5,player.y - 30,5,20);
  bullet1.shapeColor = "yellow";
  bullet1.velocityY = "-20";
  bullet1.lifetime = 30
  bulletGrp.add(bullet1);
  
  bullet2 = createSprite(player.x + 16.5,player.y - 30,5,20);
  bullet2.shapeColor = "yellow";
  bullet2.velocityY = "-20";
  bullet2.lifetime = 30
  bulletGrp.add(bullet2);

  }

  function checkCollision(){
    if(group1.isTouching(bulletGrp)){
      score += 2
     
      for(var i=0;i<group1.length;i++){     
           
       if(group1[i].isTouching(bulletGrp)){
            group1[i].destroy()
            bullet1.destroy();
            bullet2.destroy();
            } 
      }
     }

     if(group2.isTouching(bulletGrp)){
      score += 1
     
      for(var a=0;a<group2.length;a++){     
           
       if(group2[a].isTouching(bulletGrp)){
            group2[a].destroy()
            bullet1.destroy();
            bullet2.destroy();
            } 
      }
     }
     
     if(group3.isTouching(bulletGrp)){
      score += 1
     
      for(var b=0;b<group3.length;b++){     
           
       if(group3[b].isTouching(bulletGrp)){
            group3[b].destroy()
            bullet1.destroy();
            bullet2.destroy();
            } 
      }
     }

     if(group4.isTouching(bulletGrp)){
      score += 5
     
      for(var c=0;c<group4.length;c++){     
           
       if(group4[c].isTouching(bulletGrp)){
            group4[c].destroy()
            bullet1.destroy();
            bullet2.destroy();
            } 
      }
     }

     if(group5.isTouching(bulletGrp)){
      score += 10
     
      for(var d=0;d<group5.length;d++){     
           
       if(group5[d].isTouching(bulletGrp)){
            group5[d].destroy()
            bullet1.destroy();
            bullet2.destroy();
            } 
      }
     }

     for(var e=0;e<metoroidGrp1.length;e++){      
      if(metoroidGrp1[e].isTouching(player)){
          metoroidGrp1[e].destroy()
          boom = createSprite(player.x, player.y, 20,20)
          boom.addImage(boomImg)
          boom.scale = 0.8
          boom.lifetime = 20
          health -= 200
           }
     }

     for(var f=0;f<metoroidGrp2.length;f++){      
      if(metoroidGrp2[f].isTouching(player)){
          metoroidGrp2[f].destroy()
          boom = createSprite(player.x, player.y, 20,20)
          boom.addImage(boomImg)
          boom.scale = 0.8
          boom.lifetime = 20
          health -= 200
           }
     }

     for(var e=0;e<metoroidGrp1.length;e++){      
      if(metoroidGrp1[e].isTouching(bulletGrp)){
        bullet1.destroy();
            bullet2.destroy();
          meteroid1HP -= 1
           }
     }       

     for(var f=0;f<metoroidGrp2.length;f++){      
      if(metoroidGrp2[f].isTouching(bulletGrp)){
        bullet1.destroy();
            bullet2.destroy();
          meteroid2HP -= 1
           }
     }
  }

  function spawnShips(){
    if(frameCount % 80 === 0){
      enemyShip_1 = createSprite(random(0,width),random(-50,0),20,20)
      enemyShip_1.addImage(enemyShip_1_Img)
      enemyShip_1.scale = 0.2
      enemyShip_1.velocityY = 3
      enemyShip_1.lifetime = 200
      group1.add(enemyShip_1)
    }

    if(frameCount % 50 === 0){
      enemyShip_2 = createSprite(random(0,width),random(-50,0),20,20)
      enemyShip_2.addImage(enemyShip_2_Img)
      enemyShip_2.scale = 0.2
      enemyShip_2.velocityY = 1.6
      enemyShip_2.lifetime = 300
      group1.add(enemyShip_2)
    }

    if(frameCount % 30 === 0){
      enemyShip_3 = createSprite(random(0,width),random(-50,0),20,20)
      enemyShip_3.addImage(enemyShip_3_Img)
      enemyShip_3.scale = 0.2
      enemyShip_3.velocityY = 1
      enemyShip_3.lifetime = 450
      group3.add(enemyShip_3)
    }

    if(frameCount % 100 === 0){
      enemyShip_4 = createSprite(random(0,width),random(-50,0),20,20)
      enemyShip_4.addImage(enemyShip_4_Img)
      enemyShip_4.scale = 0.2
      enemyShip_4.velocityY = 3
      enemyShip_4.lifetime = 250
      group4.add(enemyShip_4)
    }

    if(frameCount % 200 === 0){
      enemyShip_5 = createSprite(random(0,width),random(-50,0),20,20)
      enemyShip_5.addImage(enemyShip_5_Img)
      enemyShip_5.scale = 0.2
      enemyShip_5.velocityY = 4
      enemyShip_5.lifetime = 250
      group5.add(enemyShip_5)
    }
  }

  function checkPosition(){
    for(var i=0;i<group1.length;i++){      
      if(group1[i].y >= 360){
          group1[i].destroy()
          health -= 30
           } 
     }

     for(var a=0;a<group2.length;a++){         
      if(group2[a].y >= 360){
        group2[a].destroy();
        health -= 20
           } 
     }

     for(var b=0;b<group3.length;b++){      
      if(group3[b].y >= 360){
          group3[b].destroy()
          health -= 20
           } 
     }

     for(var c=0;c<group4.length;c++){      
      if(group4[c].y >= 360){
          group4[c].destroy()
          health -= 40
           } 
     }

     for(var d=0;d<group5.length;d++){      
      if(group5[d].y >= 360){
          group5[d].destroy()
          health -= 50
           } 
     }
  }

  function spawnMetoroids(){
    if(frameCount%200 === 0){
      metoroid = createSprite(600, random(-200, 100), 20,20)
    metoroid.addImage(metoroidImg)
    metoroid.scale = 0.2
    metoroid.velocityY = 4
    metoroid.velocityX = -3
    metoroidGrp1.add(metoroid)
    metoroid.setCollider("circle", -110, 100, 85)
    meteroid1HP = 3

    hp_powerup1 = createSprite(metoroid.x, metoroid.y,10,10)
    hp_powerup1.addImage(hp_powerupImg)
    hp_powerup1.scale = 0.5
    hp_powerup1.velocityY = 1.5
    hp_powerups.add(hp_powerup1)
    hp_powerup1.visible = false
    }

    if(frameCount%150 === 0){
      metoroid_2 = createSprite(-100, random(-200, 100), 20,20)
    metoroid_2.addImage(metoroid_2Img)
    metoroid_2.scale = 0.2
    metoroid_2.velocityY = 4
    metoroid_2.velocityX = 3
    metoroidGrp2.add(metoroid_2)
    metoroid_2.setCollider("circle", 100, 110, 85)
    meteroid2HP = 3

    hp_powerup2 = createSprite(metoroid_2.x, metoroid_2.y, 10, 10)
    hp_powerup2.addImage(hp_powerupImg)
    hp_powerup2.scale = 0.5
    hp_powerup2.velocityY = 1.5
    hp_powerups.add(hp_powerup2)
    hp_powerup2.visible = false
  }
  }

  function gameOver(){
    fill("blue")
    textSize(30)
    text("Score "+score, 180, 190)

    fill("red")
    textSize(30)
    text("Game Over", 170,230)

    restart.visible = true

    player.destroy();

    group1.destroyEach()
    group2.destroyEach()
    group3.destroyEach()
    group4.destroyEach()
    group5.destroyEach()

    metoroidGrp1.destroyEach();
    metoroidGrp2.destroyEach();

    hp_powerups.destroyEach();
  }