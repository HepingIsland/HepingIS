//建立煙火物件
class Firework {
  constructor() {                             //產生施放煙火的粒子
    this.firework = new Particle(random(width), height, true);
    this.exploded = false;  //判定煙火爆炸的時機
    this.particles = [];  //該個煙火夾帶的所有粒子都存入一個陣列
  }

  done() {  //如果煙火已經爆炸，又沒有生存的粒子，表示煙火已經爆炸完了
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    if (!this.exploded) {   //尚未爆炸時，施放煙火的粒子往上飛行
      this.firework.applyForce(gravity);  //套用重力，速度將不斷減少
      this.firework.update();

      if (this.firework.vel.y >= 0) {   //受到重力的影響，速度降至0時，應散出煙火
        this.exploded = true;
        this.explode();
      }
    }
  //倒著跑迴圈是因為splice每次從陣列最後方消除元素，順著跑將會忽略某些尚未刪除的元素
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);  //將該煙火的粒子皆套用物理運算
      this.particles[i].update();

      if (this.particles[i].done()) {   //如果煙火粒子生命週期已結束，從陣列消除
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {     //施放煙火爆炸時，瞬間產生一堆粒子，並放入該煙火粒子陣列中
    for (let i = 0; i < 400; i++) {
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, false);
      this.particles.push(p);
    }
  }

  show() {
    if (!this.exploded) {   //施放煙火上升時，渲染的表現
      this.firework.show();
    }
                            //渲染所有爆炸時生成的煙火粒子
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
}