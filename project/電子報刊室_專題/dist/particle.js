//建立粒子物件
class Particle {
  constructor(x, y, isFirework) {
    this.pos = createVector(x, y);
    this.isFirework = isFirework;   //檢測這個粒子是施放的煙火還是爆炸的粒子
    this.lifespan = 255;  //煙火留在場上的生命週期
    this.color = (random()>0.001) ? {r:random(148,247),g:random(148,247),b:random(148,247)} : {r:255,g:255,b:255} ;  //控制煙火的顏色
    this.acc = createVector(0, 0);
    if (this.isFirework) {    //施放的煙火會朝上前進
      this.vel = createVector(0, random(-12, -8));
    } else {
      this.vel = p5.Vector.random2D();  //產生四散的隨機方向
      this.vel.mult(random(2, 10));   //產生錯落的速度
    }
  }

  applyForce(force) {
    this.acc.add(force);  //依據F=ma，不考慮質量影響，加速度為施力大小
  }

  update() {
    if (!this.isFirework) {   //是爆炸煙火的話，四散後速度銳減，並持續減少生命週期
      this.vel.mult(0.95);
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  done() {    //檢測煙火生命週期是否結束
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {    //渲染煙火粒子
    // colorMode(HSB);

    if (!this.isFirework) {   //如果不是施放的煙火，就由生命週期控制透明度
      strokeWeight(2);
      stroke(this.color.r, this.color.g, this.color.b, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(this.color.r, this.color.g, this.color.b);
    }

    point(this.pos.x, this.pos.y);  //在自己位置畫上點點
  }
}