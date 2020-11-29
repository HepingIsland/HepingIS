var muralswitch;
$(document).ready(function(){ 
   var lampswitch=1;
   muralswitch = 1;

   var pr1 = document.getElementById("pr1"); 
   $(".lamp img").hover(function(){
      pr1.setAttribute("data-balloon-visible", "");},
      function(){
         pr1.removeAttribute("data-balloon-visible")
   });

   var pr2 = document.getElementById("pr2"); 
   $("#drawContainer").hover(function(){
      pr2.setAttribute("data-balloon-visible", "");},
      function(){
         pr2.removeAttribute("data-balloon-visible")
   });

   var pr3 = document.getElementById("pr3"); 
   $("#muralContainer").hover(function(){
      pr3.setAttribute("data-balloon-visible", "");},
      function(){
         pr3.removeAttribute("data-balloon-visible")
   });
   
   var pr4 = document.getElementById("pr4"); 
   $(".scrollbtn img").hover(function(){
      pr4.setAttribute("data-balloon-visible", "");},
      function(){
         pr4.removeAttribute("data-balloon-visible")
   });

   $(".lamp img").click(function(){
      if( lampswitch  == 0){
         lampswitch  = 1;
         muralswitch = 1;
      }
      else{
         lampswitch  = 0;
         muralswitch = 0;
      }
      if( lampswitch  == 0){
         draw.loop();
         mural.loop();
         $(".lampcontroll").css({opacity:"0"});
         $(".largetitle").css({display:"none"});
         $(".scrollbtn").css({"z-index":"1"});
         $("#drawContainer").css({"z-index":"2"});
         $("#muralContainer").css({"z-index":"2"});
         
      }else{
         draw.noLoop();
         mural.noLoop();
         $(".lampcontroll").css({opacity:"0.6"});
         $(".largetitle").css({display:"inline-block"});
         $(".scrollbtn").css({"z-index":"0"});
         $("#drawContainer").css({"z-index":"0"});
         $("#muralContainer").css({"z-index":"0"});
      }
   });
   $(".scrollbtn img").click(function(){
      /*
      $(".scrollbtn img").css({
         left: '100%',
         "-webkit-transform": "rotate(20deg)",
         "-moz-transform": "rotate(20deg)",
         "transform":"rotate(20deg)"
      });*/
   $(".largetitle").css({display:"none"});
   $(".scrollbtn img").fadeOut(2200);
   $(".lamp img").fadeOut(2200);
   $("#drawContainer").fadeOut(2200);
   $(".scroll").fadeIn(2200);
   $(".l-pic-index").animate({left:"0%"},2700);
   $(".r-pic-index").animate({left:"93%"},2700);
   $(".l-bg-index").animate({'width':'43%',right:'50%'},2700);
   $(".r-bg-index").animate({'width':'43%',left:'50%'},2700,function(){
          $(".main-index").fadeIn(800);
          setTimeout(function(){ 
            $(".main-index").css({
                top: "0",
                height: "100%",
                left: "0",
                width: "100%"})
          }, 2000);
      });
    });
  });
/*
function Switch() {
    var type = document.getElementsByClassName('lampcontroll');
    if (type == "light") {
        $(".lampcontroll") = "dark";
    } else {
        $(".lampcontroll") = "light";
    }
}
*/

var castleTag=[0,0,0,0,0,0,0]
var tempVar=0
$("#castle1").click(()=>{
   $("#castle1").removeClass("castleHover")
   castleTag[1]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle1",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "0",
   left: "0"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle2").click(()=>{
   $("#castle2").removeClass("castleHover")
   castleTag[2]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle2",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "-1.2vmin",
   left: "21.5vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle3").click(()=>{
   $("#castle3").removeClass("castleHover")
   castleTag[3]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle3",3,{
   position: "absolute",
   transform: "rotate(0deg)",
   top: "-0.7vmin",
   left: "42vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle4").click(()=>{
   $("#castle4").removeClass("castleHover")
   castleTag[4]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle4",3,{
   width: "38vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "22vmin",
   left: "-4.5vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
})
$("#castle5").click(()=>{
   $("#castle5").removeClass("castleHover")
   castleTag[5]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle5",3,{
   width: "width: 31vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "22vmin",
   left: "20vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 3.5,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6,
      display: "flex",
      opacity: 1
      })
   }
}) 
$("#castle6").click(()=>{
   $("#castle6").removeClass("castleHover")
   castleTag[6]=1
   tempVar=0
   for(var i=1;i<=6;i++){
     if(castleTag[i]==1){
        tempVar++
     }
     if(tempVar==6){
       castleTag[0]=1
     }
   }
   TweenMax.to("#castle6",3,{
   width: "35vmin",
   position: "absolute",
   transform: "rotate(0deg)",
   top: "24.8vmin",
   left: "39.2vmin"
   })
   if(castleTag[0]==1){
      TweenMax.to(".castle",3,{
      delay: 4,
      opacity: 0
      })
      TweenMax.to(".map",5,{
      delay: 6.5,
      display: "flex",
      opacity: 1
      })
   }
})


const s1 = ( p1 ) => {
   let bg;

   p1.preload=function(){
        bg = p1.loadImage('background.jpg');
   };

   p1.setup = function() {
      p1.createCanvas(1000, 400);
      p1.background(bg);
      p1.cursor("brush.png",10,100);
      p1.noLoop();
   };
 
   p1.draw = function() {
      p1.noStroke();
      p1.fill((p1.mouseX/3)%270,(255-p1.mouseY/2)%270,(p1.mouseX/3+p1.mouseY/2)%270);
      p1.ellipse(p1.mouseX, p1.mouseY, 20, 20);
   };
 };
 
 let draw = new p5(s1,'drawContainer');


const s2 = ( p2 ) => {
   let draft, ready;
   p2.preload=function(){
      ready = p2.loadImage("上色1.jpg");
      draft = p2.loadImage("黑白1.jpg");
   };

   p2.setup = function() {
     p2.createCanvas(500,280);
     p2.noCursor();
     p2.cursor("brush2.png",10,10);
     p2.image(ready, 0, 0,500,280);
     p2.image(draft, 0, 0,500,280);
     ready.resize(500,280);
     draft.resize(500,280);  
   };
 
   p2.mouseDragged = function() {
      console.log(muralswitch);
      if (muralswitch==0)
      {
         p2.copy( ready, p2.mouseX, p2.mouseY, 20, 20, p2.mouseX, p2.mouseY, 20, 20);
      }
   };
 };
 
 let mural = new p5(s2,'muralContainer');

 $(document).ready(function() {
   $('#push').on('click',function(){
     $('#push, #pushed-right-1, #pushed-right-2, #pushed-right-3, #pushed-right-4').toggleClass('move');
     $('#push').toggleClass('rotate');
   });
 });       