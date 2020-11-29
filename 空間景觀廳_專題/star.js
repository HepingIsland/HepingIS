//空中的星星物件
class Star{
  constructor(x,y){
    this.r = 20
    this.x = x
    this.y = y
  }
  
  move(){
    this.x -= 2
  }
  
  show(){
    // ellipseMode(CORNER)
    // fill(0,255,255,50)
    // ellipse(this.x, this.y, this.r, this.r)
    image(starImgs[Math.floor(frameCount/10)%3], this.x, this.y, this.r, this.r);
  }
  
  outOfScreen(){
    return this.x+this.r<0
  }
  
  reback(){
    this.x = width+this.r
  }
  
}