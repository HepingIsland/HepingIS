class Text {
  constructor(str,x,y,size){
    this.str = str
    this.pos = createVector(x,y)
    this.size = size || 10
    this.isEaten = false
  }
  
  show(){
    textAlign(CENTER,CENTER)
    textSize(this.size)
    fill(255,(frameCount-currentFrameCount)<=255?(frameCount-currentFrameCount):255)
    text(this.str,this.pos.x,this.pos.y)
  }
}
