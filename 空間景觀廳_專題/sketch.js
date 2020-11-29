let char
let cImg
let oImg
let spritesheet
let enemyImg1,enemyImg2
let cloudImg
let moonImg1,moonImg2,moonImg3,moonImg4,moonImg5,moonImg6,moonImg7
let starImg1,starImg2,starImg3
let restartImg
let gameoverImg
let groundImg
let enemyImgs = []
let cactus = []
let enemys = []
let clouds = []
let stars = []
let moonImgs = []
let starImgs = []
let gameoverText,gameoverTextWidth
let restartText,restartTextWidth
let score,highScore
let isHintColor = false
let isHintVolumn = false
let isDifficultyMode = false
let isGameEnd = false
let mic,micLevel
let timer

function preload(){
  cImg = loadImage("pngegg.png")
  oImg = loadImage("cacti.png")
  spritesheet = loadImage("texture.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  mic = new p5.AudioIn()
  mic.start()
  let hintButton = createButton("顏色提示")
  hintButton.position(10,50)
  hintButton.mousePressed(hintColor)
  let micButton = createButton("顯示音量")
  micButton.position(10,80)
  micButton.mousePressed(hintVolumn)
  let difficultyButton = createButton("變換難度")
  difficultyButton.position(10,110)
  difficultyButton.mousePressed(changeDifficulty)
  background(255)
  char = new Character()
  score = 0
  highScore = 0
  restartImg = spritesheet.get(0, 0, 80, 80);
  gameoverImg = spritesheet.get(1292, 25, 390, 70);
  cloudImg = spritesheet.get(170, 0, 90, 80);
  moonImg1 = spritesheet.get(950, 0, 40, 80);
  moonImg2 = spritesheet.get(995, 0, 35, 80);
  moonImg3 = spritesheet.get(1035, 0, 35, 80);
  moonImg4 = spritesheet.get(1075, 0, 80, 80);
  moonImg5 = spritesheet.get(1155, 0, 40, 80);
  moonImg6 = spritesheet.get(1195, 0, 40, 80);
  moonImg7 = spritesheet.get(1235, 0, 40, 80);
  starImg1 = spritesheet.get(1274, 0, 20, 20);
  starImg2 = spritesheet.get(1274, 20, 20, 20);
  starImg3 = spritesheet.get(1274, 40, 20, 20);
  enemyImg1 = spritesheet.get(260, 0, 90, 80);
  enemyImg2 = spritesheet.get(350, 0, 90, 80);
  groundImg = spritesheet.get(0, 100, 2440, 130);
  enemyImgs.push(enemyImg1)
  enemyImgs.push(enemyImg2)
  moonImgs.push(moonImg1)
  moonImgs.push(moonImg2)
  moonImgs.push(moonImg3)
  moonImgs.push(moonImg4)
  moonImgs.push(moonImg5)
  moonImgs.push(moonImg6)
  moonImgs.push(moonImg7)
  starImgs.push(starImg1)
  starImgs.push(starImg2)
  starImgs.push(starImg3)
  clouds.push(new Cloud(0,100))
  clouds.push(new Cloud(200,50))
  clouds.push(new Cloud(400,80))
  clouds.push(new Cloud(500,200))
  clouds.push(new Cloud(700,120))
  stars.push(new Star(100,70))
  stars.push(new Star(300,130))
  stars.push(new Star(380,30))
  stars.push(new Star(550,110))
  stars.push(new Star(720,40))
}

function draw() {
  score += 1
  background(255)
  
  //隨機生成障礙物
  if(random()<0.01 && cactus.length<1 && enemys.length<1){
    if(isHintColor){
      if(isDifficultyMode){
        cactus.push(new Obstacle(true,true))
      }else{
        cactus.push(new Obstacle(true,false))
      }
    }else{
      if(isDifficultyMode){
        cactus.push(new Obstacle(false,true))
      }else{
        cactus.push(new Obstacle(false,false))
      }
    }
  }else if(random() < 0.002 && cactus.length<2 && enemys.length<1){
    if(isHintColor){
      if(isDifficultyMode){
        cactus.push(new Obstacle(true,true))
      }else{
        cactus.push(new Obstacle(true,false))
      }
    }else{
      if(isDifficultyMode){
        cactus.push(new Obstacle(false,true))
      }else{
        cactus.push(new Obstacle(false,false))
      }
    }
  }
  
  //隨機生成敵人
  if(random()<0.005 && enemys.length<1 && cactus.length<1){
    if(isHintColor){
      if(isDifficultyMode){
        enemys.push(new FlyEnemy(true,true))
      }else{
        enemys.push(new FlyEnemy(true,false))
      }
    }else{
      if(isDifficultyMode){
        enemys.push(new FlyEnemy(false,true))
      }else{
        enemys.push(new FlyEnemy(false,false))
      }
    }
  }else if(random() < 0.002 && enemys.length<2 && cactus.length<1){
    if(isHintColor){
      if(isDifficultyMode){
        enemys.push(new FlyEnemy(true,true))
      }else{
        enemys.push(new FlyEnemy(true,false))
      }
    }else{
      if(isDifficultyMode){
        enemys.push(new FlyEnemy(false,true))
      }else{
        enemys.push(new FlyEnemy(false,false))
      }
    }
  }
  
  image(moonImgs[Math.floor(frameCount/100)%7], 500, 10, 40, 80);
  
  for (let cloud of clouds) {
    cloud.move()
    cloud.show()
    if(cloud.outOfScreen()){
      cloud.reback()
    }
  }
  
  for (let star of stars) {
    star.move()
    star.show()
    if(star.outOfScreen()){
      star.reback()
    }
  }
  
  for (let c of cactus) {
    c.move();
    c.show();
    if (char.hits(c)) {
      // console.log('game over');
      // fill(255,0,0,180)
      // textSize(32)
      // textStyle(BOLD)
      // gameoverText = "Game Over！";
      // gameoverTextWidth = textWidth(gameoverText);
      // text(gameoverText,width/2-gameoverTextWidth/2,200)
      isGameEnd = true
      image(gameoverImg, width/2-200, 180, 400, 70);
      fill(255,0,0,180)
      textSize(24)
      restartText = "Press Enter to restart!!!"
      restartTextWidth = textWidth(restartText);
      text(restartText,width/2-restartTextWidth/2,250)
      image(restartImg, width/2-50, 80, 100, 100);
      noLoop();
    }
  }
  
  for (let e of enemys) {
    e.move();
    e.show();
    if (char.hits(e)) {
      // console.log('game over');
      // fill(255,0,0,180)
      // textSize(32)
      // textStyle(BOLD)
      // gameoverText = "Game Over！";
      // gameoverTextWidth = textWidth(gameoverText);
      // text(gameoverText,width/2-gameoverTextWidth/2,200)
      isGameEnd = true
      image(gameoverImg, width/2-200, 180, 400, 70);
      fill(255,0,0,180)
      textSize(24)
      restartText = "Press Enter to restart!!!"
      restartTextWidth = textWidth(restartText);
      text(restartText,width/2-restartTextWidth/2,250)
      image(restartImg, width/2-50, 80, 100, 100);
      noLoop();
    }
  }
  
  char.show();
  char.move();
  
  // console.log(cactus.length)
  for(i=cactus.length-1;i>=0;i--){
    if(cactus[i].outOfScreen()){
      cactus.splice(i,1)
    }
  }
  
  // console.log(enemys.length)
  for(i=enemys.length-1;i>=0;i--){
    if(enemys[i].outOfScreen()){
      enemys.splice(i,1)
    }
  }
  
  image(groundImg, 0, height-10, 800, 30);
  
  fill(0)
  textSize(18)
  textStyle(BOLD)
  text("HighScore : "+highScore,10,20)
  text("Score : "+score,10,40)
  
  //利用聲音大小來控制恐龍的動作
  micLevel = mic.getLevel()
  if(isHintVolumn){
    text("micLevel : "+micLevel,width/2-200,20)
  }
  if(micLevel>=0.2){
    clearTimeout(timer)
    char.isDown=false
    char.y = height - char.r
    char.jump()
  }else if(micLevel>=0.05 && char.y == height - char.r){
    char.isDown=true
    char.y = height - char.r/2
    timer = setTimeout(()=>{
      char.isDown=false
      char.y = height - char.r
    },1000)
  }
  
  // noLoop()  //debug用
}

function hintColor(){
  if(isHintColor){
    isHintColor = false
    char.isHint = false
    for(i=cactus.length-1;i>=0;i--){
      cactus.isHint = false
    }
    for(i=enemys.length-1;i>=0;i--){
      enemys.isHint = false
    }
  }
  else{
    isHintColor = true
    char.isHint = true
    for(i=cactus.length-1;i>=0;i--){
      cactus.isHint = true
    }
    for(i=enemys.length-1;i>=0;i--){
      enemys.isHint = true
    }
  }
}

function hintVolumn(){
  if(isHintVolumn){
    isHintVolumn = false
  }else{
    isHintVolumn = true
  }
}

function changeDifficulty(){
  if(isDifficultyMode){
    isDifficultyMode = false
    char.isDifficulty = false
    char.gravity = 2
    for(i=cactus.length-1;i>=0;i--){
      cactus.isDifficulty = false
    }
    for(i=enemys.length-1;i>=0;i--){
      enemys.isDifficulty = false
    }
  }else{
    isDifficultyMode = true
    char.isDifficulty = true
    char.gravity = 3
    for(i=cactus.length-1;i>=0;i--){
      cactus.isDifficulty = true
    }
    for(i=enemys.length-1;i>=0;i--){
      enemys.isDifficulty = true
    }
  }
}

function keyPressed() {
  if (key == ' ') {
    char.jump();
  }
  if(key == "ArrowDown" && char.y == height - char.r){
    char.isDown=true
    char.y = height - char.r/2
  }
  if (key == 'Enter' && isGameEnd){
    isGameEnd = false
    cactus = []
    enemys = []
    char.vy = 0
    char.y = height - char.r
    highScore = (score > highScore) ? score : highScore
    score = 0
    loop()
  }
}

function keyReleased() {
  if(key == "ArrowDown"){
    char.isDown=false
    char.y = height - char.r
  }
  return false; // prevent any default behavior
}