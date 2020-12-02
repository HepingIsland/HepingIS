const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
let ground;
const books = [];
let world, engine,mConstraint;
let bookshelf;
let bookImgs;
var boundaries = [];
function preload(){
  bookImg1 = loadImage('book1.png');
  bookImg2 = loadImage('book2.png');
  bookImg3 = loadImage('book3.png');
  bookImg4 = loadImage('book4.png');
  bookImg5 = loadImage('book5.png');
  bookImg6 = loadImage('book6.png');
  bookshelfImg = loadImage('bookshelf2.png');
  bookImgs = [bookImg1,bookImg2,bookImg3,bookImg4,bookImg5,bookImg6];
}

// function successF(){
// 	print("Success");
// }

// function errorF(){
// 	print("Error!!!")
// }

function setup() {
  let container = select("#myContainer");
  // console.log(container);
  let myCanvas = createCanvas(container.width+50, container.height);
  myCanvas.parent('myContainer');
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width / 2, height - 10, width+1000, 20);
  bookshelf = new BookShelf(width-700,height-200,150,240)
  boundaries.push(new Boundary(width-600,100,width*0.2,10,0));
  boundaries.push(new Boundary(width-200,300,width*0.2,10,0));
  for(i=0;i<10;i++){
  	books.push(new Book(width-600+i*10, 60, 10, 40,random(bookImgs)));
  }
  for(i=0;i<10;i++){
  	books.push(new Book(width-200+i*10, 260, 10, 40,random(bookImgs)));
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
	 books.push(new Book(mouseX, mouseY, 10, 40,random(bookImgs)));
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

