//障礙物物件
class Obstacle{
  constructor(isHint,isDifficulty){
    this.r = 75
    this.x = width
    this.y = height-this.r
    this.isHint = isHint
    this.isDifficulty = isDifficulty
  }
  
  move(){
    this.x -= this.isDifficulty ? 16 : 8
  }
  
  show(){
    if(this.isHint){
      ellipseMode(CORNER)
      fill(255,0,0,50)
      ellipse(this.x, this.y, this.r, this.r)
    }
    image(oImg, this.x, this.y, this.r, this.r);
  }
  
  outOfScreen(){
    return this.x+this.r<0
  }
  
}