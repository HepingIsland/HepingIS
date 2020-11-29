// TweenMax.staggerFrom(".castle",8,{
//   left: 3000,
//   delay: 5,
//   ease: Elastic.easeOut.config(0.2,0.3)
//   (偏移量多寡,軟性程度)
// },1)
// $("body").click(
// ()=>{
//   TweenMax.to("#castle1",3,{
//   position: "absolute",
//   transform: "rotate(0deg)",
//   top: "0",
//   left: "0"
//   })
//   TweenMax.to("#castle2",3,{
//   position: "absolute",
//   transform: "rotate(0deg)",
//   top: "-8px",
//   left: "145px"
//   })
  // TweenMax.to("#castle3",3,{
  // position: "absolute",
  // transform: "rotate(0deg)",
  // top: "-4px",
  // left: "281px"
  // })
//   TweenMax.to("#castle4",3,{
//   width: "255px",
//   position: "absolute",
//   transform: "rotate(0deg)",
//   top: "36.5%",
//   left: "-30px"
//   })
//   TweenMax.to("#castle5",3,{
//   width: "205px",
//   position: "absolute",
//   transform: "rotate(0deg)",
//   top: "37%",
//   left: "135px"
//   })
//   TweenMax.to("#castle6",3,{
//   width: "235px",
//   position: "absolute",
//   transform: "rotate(0deg)",
//   top: "41.5%",
//   left: "261px"
//   })
//   TweenMax.to(".castle",3,{
//   delay: 3.5,
//   opacity: 0
//   })
//    TweenMax.to(".map",5,{
//   delay: 6,
//   display: "flex",
//   opacity: 1
//   })
// })
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
      TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
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
      TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
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
      TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
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
     TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
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
      TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
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
      TweenMax.to(".castle",1,{
      delay: 4,
      display: "none",
      })
      TweenMax.to(".map",3,{
      delay: 3,
      display: "flex",
      opacity: 1
      })
      TweenMax.to(".map",3,{
      delay: 5,
      height: "65vmin",
      width: "104vmin"
      })
   }
})
// while(1){
//   if(castleTag[0]==6){
//   TweenMax.to(".castle",3,{
//   delay: 3.5,
//   opacity: 0
//   })
//   TweenMax.to(".map",5,{
//   delay: 6,
//   display: "flex",
//   opacity: 1
//   })
//     break;
//   }
// }