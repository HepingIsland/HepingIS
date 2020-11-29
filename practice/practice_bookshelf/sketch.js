const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let ground;
const books = [];
let world, engine,mConstraint;
let bookshelf;
var boundaries = [];
function preload(){
  bookImg = loadImage('book.png');
  bookshelfImg = loadImage('bookshelf2.png');
}

// function successF(){
// 	print("Success");
// }

// function errorF(){
// 	print("Error!!!")
// }

function setup() {
  let myCanvas = createCanvas(window.innerWidth-50, window.innerHeight-50);
  myCanvas.parent('myContainer');
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width, 50);
  bookshelf = new BookShelf(200,height-200,150,240)
  boundaries.push(new Boundary(300,100,width*0.2,10,0));
  boundaries.push(new Boundary(width-300,300,width*0.2,10,0));
  for(i=0;i<10;i++){
  	books.push(new Book(250+i*10, 60, 10, 40));
  }
  for(i=0;i<10;i++){
  	books.push(new Book(width-300+i*10, 260, 10, 40));
  }

  //讓matter接收滑鼠輸入
  const mouse = Mouse.create(myCanvas.elt);
  const options = {
    mouse: mouse,
    collisionFilter: {
        category: 0x0002,
        mask: 0xFFFFFFFE,
        group: 1
    }
  }
  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  //建立MouseConstraint，可以透過滑鼠與物理物件互動
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

}

function draw() {
	background(0);
	Matter.Engine.update(engine);
	ground.show();
	bookshelf.show();
	for (let book of books) {
    book.show();
  	}
  for(var i=0;i<boundaries.length;i++){
    boundaries[i].show();
  } 
	// image(bookImg,20,20,80,20);
}

function mousePressed(){
	 books.push(new Book(mouseX, mouseY, 10, 40));
}

function mouseClicked(){
  for(var i=0;i<boundaries.length;i++){
    var pos = boundaries[i].body.position;
    if(mouseX>=pos.x-boundaries[i].w/2&&
       mouseX<=pos.x+boundaries[i].w/2&&
       mouseY>=pos.y-boundaries[i].h/2&&
       mouseY<=pos.y+boundaries[i].h/2){
       boundaries[i].body.collisionFilter.group=0;
       Matter.Body.setStatic(boundaries[i].body, false);
    }
  } 
}

