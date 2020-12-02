// let pacmanGroup = []
let pacman 
let textGroup = []
let titleText = "主題特展室".split("")
let titleIntro = "本廳為主題特展室，呈現各世世代代所舉辦的各式活動，以及其他重要的圖像故事等等。".split("")
let eventA = "A.XXXX活動".split("")
let eventB = "B.XXXX活動".split("")
let eventC = "C.XXXX活動".split("")
let eventD = "D.XXXX活動".split("")
let eventE = "E.XXXX活動".split("")
// let hintL = "按滑鼠左鍵生成小精靈".split("")
// let hintR = "按滑鼠右鍵重新生成文字".split("")
// let hintC = "按滑鼠中鍵清除所有小精靈".split("")
// let hintD = "按鍵盤空白鍵產生軌跡(再按一次解除)".split("")
let hint1 = "按鍵盤WASD鍵或↑←↓→鍵可操作小精靈移動".split("")
let hint2 = "按鍵盤空白鍵(space)重新生成所有文字".split("")
let hint3 = "本廳室所有內容尚在建置中，敬請期待!!!".split("")
let currentFrameCount
// let hasTrail = false

function setup() {
  // let container = select("#myContainer");
  // console.log(container);
  // let myCanvas = createCanvas(container.width+50, container.height);
  // myCanvas.parent('myContainer');
  createCanvas(windowWidth, windowHeight);
  pacman = new PacMan(width/2,height/2);
  makeText()
  // canvas.oncontextmenu = () => false;  //關閉滑鼠右鍵選單
}

function draw() {
	
  // if(hasTrail){
  //   background(0,30)
  // }else{
  //   background(0)
  // }
  background(0)
  
  //背景紋樣
  push()
  for(let i = -width; i < width; i += 20){
    for(let j = 0; j < height; j += 20){
      let r = 10 + 50*sin(i*0.9 - frameCount* 0.05);
      let g = 50 + 200*sin(i*0.9 - frameCount* 0.05);
      let b = 100 + 150*sin(i*0.9 - frameCount* 0.05);
      fill(r, g, b,40);
      rect(i + j, j, 5,15);
    }
  }
  pop()
  
  //小精靈動作與呈現
  pacman.update()
  pacman.show()

  // for(let i = pacmanGroup.length-1;i>=0;i--){
  //   if(pacmanGroup[i].isOutOfEdge == true){
  //     pacmanGroup.splice(i,1)
  //   }
  // }
  //文字動作與呈現
  for(let text of textGroup){
    text.show()
  }
  //檢查文字被吃掉就移除
  for(let j = textGroup.length-1;j>=0;j--){
    if(textGroup[j].isEaten == true){
      textGroup.splice(j,1)
    }
  }
  //檢查小精靈是否有吃掉文字
  for(let j = 0; j < textGroup.length; j++){
   if(!textGroup[j].isEaten){
      pacman.checkEat(textGroup[j])
    }
  }

}

// function mousePressed(){
  // if(mouseButton == LEFT){  //如果是左鍵，生成新小精靈
  //   pacmanGroup.push(new PacMan(mouseX,mouseY))
  // }
  // if(mouseButton == RIGHT){ //如果是右鍵，重新生成所有文字
  //   currentFrameCount = frameCount
  //   for(let j = textGroup.length-1;j>=0;j--){
  //     textGroup.splice(j,1)
  //   }
  //   makeText()
  // }
  // }
  // if(mouseButton == CENTER){  //如果是中鍵，清除目前所有小精靈
  //   for(let i = pacmanGroup.length-1;i>=0;i--){
  //     pacmanGroup[i].isKilled = true
  //   }
  //   setTimeout(function(){
  //     for(let i = pacmanGroup.length-1;i>=0;i--){
  //       if(pacmanGroup[i].isKilled){
  //          pacmanGroup.splice(i,1)
  //       }
  //     }
  //   }, 3000);
  // }
// }

function keyPressed(){
  // print(keyCode)
  switch(keyCode){
    //W or ↑
    case 87:
      pacman.dir = 3;
      pacman.vel.y = -10;
      break;
     case 38:
      pacman.dir = 3;
      pacman.vel.y = -10;
      break;
    //A or ←
    case 65:
      pacman.dir = 2;
      pacman.vel.x = -10;
      break;
    case 37:
      pacman.dir = 2;
      pacman.vel.x = -10;
      break;
    //S or ↓
    case 83:
      pacman.dir = 1;
      pacman.vel.y = 10;
      break;
    case 40:
      pacman.dir = 1;
      pacman.vel.y = 10;
      break;
    //D or →
    case 68:
      pacman.dir = 0;
      pacman.vel.x = 10;
      break;
    case 39:
      pacman.dir = 0;
      pacman.vel.x = 10;
      break;
    //space
    case 32:
      currentFrameCount = frameCount
      for(let j = textGroup.length-1;j>=0;j--){
        textGroup.splice(j,1)
      }
      makeText()
      break;
  }

}

function keyReleased() {
  pacman.vel.x = 0;
  pacman.vel.y = 0;
}

function makeText(){
  for(let i = 0 ; i<titleText.length; i++){
    textGroup.push(new Text(titleText[i],width/6*(i+1),height/6,50) );
  }
  for(let i = 0 ; i<titleIntro.length; i++){
    textGroup.push(new Text(titleIntro[i],(width-300)/titleIntro.length*i+150,height/4,20) );
  }
  for(let i = 0 ; i<eventA.length; i++){
    textGroup.push(new Text(eventA[i],100+i*20,height/2,20) );
  }
  for(let i = 0 ; i<eventB.length; i++){
    textGroup.push(new Text(eventB[i],100+i*20,height/2+50,20) );
  }
  for(let i = 0 ; i<eventC.length; i++){
    textGroup.push(new Text(eventC[i],100+i*20,height/2+100,20) );
  }
  for(let i = 0 ; i<eventD.length; i++){
    textGroup.push(new Text(eventD[i],100+i*20,height/2+150,20) );
  }
  for(let i = 0 ; i<eventE.length; i++){
    textGroup.push(new Text(eventE[i],100+i*20,height/2+200,20) );
  }
  for(let i = 0 ; i<hint1.length; i++){
    textGroup.push(new Text(hint1[i],500+i*30,height/3*2,30) );
  }
  for(let i = 0 ; i<hint2.length; i++){
    textGroup.push(new Text(hint2[i],500+i*30,height/3*2+60,30) );
  }
  for(let i = 0 ; i<hint3.length; i++){
    textGroup.push(new Text(hint3[i],500+i*30,height/3*2+120,30) );
  }
}