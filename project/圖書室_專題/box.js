//---------------------------------箱子類別------------------------------//
class Box {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0.5,
      collisionFilter: {
        category: 0x0001,
        mask: 0xFFFFFFFF,
        group: 0
      }
    }    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
    
  }
  
  


}
//-----------------------------地板類別(繼承自箱子)------------------------//
//ES6的類別繼承方法extends   呼叫super來定義box原來的參數
class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    //isStatic表示會對物理世界造成影響，但本身不受影響
    this.body.isStatic = true;
    this.body.collisionFilter.group = 1
  }

  //覆寫原來Box的渲染函數
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(127);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

  }
}

//---------------------------書櫃類別---------------------------------
class BookShelf {
  constructor(x, y, w, h) {
    const options = {
      restitution: 0,
      // isStatic: true
    }    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    // Matter.Body.setMass(this.body, this.body.mass*1000);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // fill(255);
    // rectMode(CENTER);
    imageMode(CENTER);
    image(bookshelfImg,0, 0, this.w, this.h);
    pop();
    
  }
}

//--------------------------書類別--------------------------------
class Book {
  constructor(x, y, w, h,img) {
    const options = {
      restitution: 0.5
    }    
    this.body = Matter.Bodies.rectangle(x, y, w, h, options);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.img= img;
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    // fill(255);
    // rectMode(CENTER);
    imageMode(CENTER);
    image(this.img,0, 0, this.w, this.h);
    pop();
    
  }
  
}

//------------------------書架類別-------------------------------
function Boundary(x,y,w,h,a){
  var options = {
    friction: 0,
    restitution: 0.6,
    isStatic: true,
    angle: a,
    collisionFilter: {
        category: 0x0001,
        mask: 0xFFFFFFFF,
        group: 1
    }
  }
  this.body =  Bodies.rectangle(x,y,w,h,options);
  this.body.label = "Boundary";
  // this.body.friction = 1;
  // this.body.angle = PI/4;
  this.w=w;
  this.h=h;
  World.add(world,this.body);
  
  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(1);
      noStroke();
      fill(150, 82, 19);
      rect(0,0,this.w,this.h);
    pop();
  }

  this.checked = function(){
    var pos = this.body.position;
    return (mouseX>=pos.x-this.w/2&&
            mouseX<=pos.x+this.w/2&&
            mouseY>=pos.y-this.h/2&&
            mouseY<=pos.y+this.h/2&&
            mouseIsPressed) ;
  }

}