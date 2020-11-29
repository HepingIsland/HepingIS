function getRandomSize() {  //取得花瓣隨機大小
  let r = random(0, 1)
  return constrain(r * 32, 2, 64);
}

class Cherry{   //使用的花瓣物件
  constructor(sx,sy,img){
    let x = sx || random(width)
    let y = sy || random(-100,-10)
    this.img = img
    this.pos = createVector(x,y)
    this.vel = createVector(0,0)
    this.acc = createVector()
    this.angle = random(TWO_PI)
    this.dir = (random(1)>0.5) ? 1 : -1
    this.xOff = 0
    this.r = getRandomSize()
  }
  
  applyForce(force) {
    let f = force.copy(); 
    f.mult(this.r); 
    this.acc.add(f);  //依照F=ma，不考慮質量下，加速度直接受力影響
  }

  randomize() {   //掉落超出邊界時，重複使用做初始化動作
    let x = random(width);
    let y = random(-100, -10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  update() {
    //利用sin波產生週期性偏移
    this.xOff = sin(this.angle * 2) * 2 * this.r;
    //將加速度套用到速度上
    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.1);
    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }
    //將速度套用到位置上
    this.pos.add(this.vel);
    this.acc.mult(0);

    //超出下方邊界，做回收動作
    if (this.pos.y > height + this.r) {
      this.randomize();
    }
    //包覆視野左右範圍
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    //不停旋轉(初始給予隨機方向)
    this.angle += this.dir * this.vel.mag() / 200;
  }

  render() {
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }
  
  
}