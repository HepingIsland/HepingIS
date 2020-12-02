//角色物件
class Character{
  constructor(){
    this.r = 100
    this.x = 50   //固定水平位置
    this.y = height - this.r  //地板位置
    this.vy = 0   //用於控制垂直方向速度
    this.isDown = false //判斷是否蹲下
    this.isHint = false 
    this.isDifficulty = false
    this.gravity = 2  //套用重力加速度
  }
  
  jump(){
    if(this.y == height-this.r && !this.isDown){  //只有在地面時才可以跳躍
      this.vy = -35
    }
  }
  
  hits(obs){    //檢測是否碰到障礙物
      return dist(this.x,this.y,obs.x,obs.y)<=(this.r/2+obs.r/2)
  }
  
  move(){
    if(!this.isDown){
      this.y += this.vy   //位置套用速度
      this.vy += this.gravity   //速度套用加速度
      this.y = constrain(this.y, 0, height - this.r)  //限制垂直範圍在畫面中
    }else{
      this.y = height - this.r/2
    } 
  }
  
  show(){
    if(!this.isDown){
      if(this.isHint){
        ellipseMode(CORNER)
        fill(0,50)
        ellipse(this.x, this.y, this.r, this.r)
      }
      image(cImg, this.x, this.y, this.r, this.r);
    }else{
      if(this.isHint){
        ellipseMode(CORNER)
        fill(0,50)
        ellipse(this.x, this.y, this.r, this.r/2)
      }
      image(cImg, this.x, this.y, this.r, this.r/2);
    }
    
  }
  
}