//飛天敵人物件
class FlyEnemy{
  constructor(isHint,isDifficulty){
    this.r = 100
    this.x = width
    this.y = height-170
    this.isHint = isHint
    this.isDifficulty = isDifficulty
  }
  
  move(){
    this.x -= this.isDifficulty ? 16 : 8
  }
  
  show(){
    if(this.isHint){
      ellipseMode(CORNER)
      fill(0,0,255,50)
      ellipse(this.x, this.y, this.r, this.r)
    }
    image(enemyImgs[Math.floor(frameCount/10)%2], this.x, this.y, this.r, this.r);
  }
  
  outOfScreen(){
    return this.x+this.r<0
  }
  
}