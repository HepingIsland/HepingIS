//空中的雲物件
class Cloud{
  constructor(x,y){
    this.r = 100
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
    image(cloudImg, this.x, this.y, this.r, this.r);
  }
  
  outOfScreen(){
    return this.x+this.r<0
  }
  
  reback(){
    this.x = width+this.r
  }
  
}