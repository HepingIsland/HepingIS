class PacMan {
  constructor(x,y){
    this.pos = createVector(x,y)
    this.vel = createVector(0,0)
    this.dir = floor(random(0, 4))
    this.angle = this.dir * HALF_PI
    this.radius = 50
    this.color = color(255,255,0)
    // this.index = floor(random(99999))
    // this.isOutOfEdge = false
    // this.isInitial = true
    // this.isKilled = false
  }
  
  show() {
    // if(this.isKilled){
    //   this.color.setAlpha(80)
    // }
    fill(this.color)
    noStroke()
    let a = abs(sin(frameCount*0.2)) * 0.5
    arc(this.pos.x,this.pos.y,this.radius,this.radius,this.angle+a,this.angle+PI*2-a)
  }
  
  update(){
    // if((frameCount+this.index)%100==0 || this.isInitial == true){
      // this.dir = floor(random(0,5))
      this.angle = this.dir * HALF_PI
    //   switch(this.dir){
    //     case 0:
    //       this.vel.x = random(1,5)
    //       this.vel.y = 0
    //       break
    //     case 1:
    //       this.vel.x = 0
    //       this.vel.y = random(1,5)
    //       break
    //     case 2:
    //       this.vel.x = -random(1,5)
    //       this.vel.y = 0
    //       break
    //     case 3:
    //       this.vel.x = 0
    //       this.vel.y = -random(1,5)
    //       break
    //     case 4:
    //       this.vel.x = random(1,5)
    //       this.vel.y = 0
    //   }
    // }
    this.outOfEdge()
    this.pos.add(this.vel)
    // if(this.isInitial){
    //   this.isInitial = false
    // }
  }
  
  outOfEdge(){
    if(this.pos.x > windowWidth){
      this.pos.x = windowWidth
      this.vel.x = 0
    }
    if(this.pos.x < 0){
      this.pos.x = 0
      this.vel.x = 0
    }
    if(this.pos.y > windowHeight){
      this.pos.y = windowHeight
      this.vel.y = 0
    }
    if(this.pos.y < 0){
      this.pos.y = 0
      this.vel.y = 0
    }
  }
  
  checkEat(food){
     if(food.pos.x < this.pos.x + this.radius/2 &&
       food.pos.x > this.pos.x - this.radius/2){
      if(food.pos.y < this.pos.y + this.radius/2 &&
         food.pos.y > this.pos.y - this.radius/2){
           food.isEaten = true
        }
     }
  }
  
}