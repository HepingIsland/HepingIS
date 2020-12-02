let flowers = []
let textPs = []
let gravity
let zOff = 0
let spritesheet;
let textures = [];
let poetry = "十日櫻花作意開，繞花豈惜日千回？昨宵風雨偏相厄，誰向人天訴此哀？忍見胡沙埋艷骨，空將清淚滴深懷。多情漫作他年憶，一寸春心早已灰。"
let spanX,spanY 
let SpanXslider,SpanYslider

function preload(){
  spritesheet = loadImage("sakura.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  SpanXslider = createSlider(width*0.4/8,width*0.9/8,width*0.8/8,width*0.1/8);
  SpanYslider = createSlider(height*0.4/8,height*0.9/8,height*0.8/8,height*0.1/8);
  SpanXslider.position(10,40);
  SpanYslider.position(220,40);
  SpanXslider.id("sliderX");
  SpanYslider.id("sliderY");
  gravity = createVector(0, 0.3);
  let img = spritesheet.get(600, 0, 300, 300);  //花瓣飄落
  // let img = spritesheet.get(250, 100, 350, 400);  //花朵飄落
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height);
    flowers.push(new Cherry(x, y, img));
  }
  for(k=0;k<poetry.length;k++){
    textPs.push(new TextP())
  }
}

function draw() {
  // console.log(flowers.length)
  background(201, 236, 255);
  zOff += 0.1;
  for (flower of flowers) {
    let xOff = flower.pos.x / width;
    let yOff = flower.pos.y / height;
    let wAngle = noise(xOff, yOff, zOff) * TWO_PI;
    let wind = p5.Vector.fromAngle(wAngle);
    wind.mult(0.1);
    flower.applyForce(gravity);
    flower.applyForce(wind);
    flower.update();
    flower.render();
  }
  push()
    // fill(241, 158, 194);
    fill(0)
    textSize(16)
    text('X方向間距', 75, 25)
    text('Y方向間距', 285, 25)
  pop()
  spanX = 0
  spanY = 0
  textSize(32);
  textStyle(BOLD);
  fill(0);
  for(k=1;k<=poetry.length;k++){
    push()
      textSize(32);
      translate(0.85*width-spanX+sin(frameCount/50)*10,0.2*height+spanY)
      rotate(sin(frameCount/50+textPs[k-1].angle*textPs[k-1].dir)/3)
      text(poetry[k-1],0,0)
      // textSize(12)
      // text(k,0.85*width-spanX+30,0.2*height+spanY-10)  //標示數字標號
      if(k!=0 && k%8==0){
        spanX+= SpanXslider.value()
      }
      if(k%8==0){
        spanY = 0
      }else{
        spanY += SpanYslider.value()
      }
    pop()
  }
}