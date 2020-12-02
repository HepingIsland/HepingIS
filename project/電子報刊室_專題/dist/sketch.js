console.log("canvas已載入");
const fireworks = [];   //存放所有施放煙火的陣列
let gravity;   //用於物理模擬的重力加速度
let hintText;
let hintTextWidth;

function setup() {
  let container = select("#myContainer");
  // console.log(container);
  let myCanvas = createCanvas(container.width+50, container.height);
  myCanvas.parent('myContainer');
  // createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.15);    //重力為向下的加速度
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  if(fireworks.length == 0){
    stroke(255)
  }
  textSize(32)
  textStyle(BOLD)
  hintText = "試著按Enter發射煙火看看吧！";
  hintTextWidth = textWidth(hintText);
  text(hintText,width/2-hintTextWidth/2,40)
  colorMode(RGB);
  background(0, 0, 0,25);  //利用透明度背景留下煙火粒子軌跡
  
  // if (random(1) < 0.03) {    //一定機率產生隨機位置的煙火，並推入陣列
  //   fireworks.push(new Firework());
  // }
  
  //反著跑迴圈是因為splice每次從陣列最後刪除元素，若正著跑會跳過某些尚未刪除的元素
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    
    if (fireworks[i].done()) {  //如果煙火已經爆炸完畢，也沒有殘餘粒子，就刪除煙火
      fireworks.splice(i, 1);
    }
  }
}

function keyPressed(){    //按下Enter射出煙火，並考慮效能限制數量
  // console.log(keyCode)
  if ( keyCode == 13 && fireworks.length<=8 ) {
    fireworks.push(new Firework());
  }
}