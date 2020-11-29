// function delayURL(url,time){
//     setTimeout("parent.location.href = 'url' ",time)
// }
// function changePage(){
//   setTimeout(location.href="https://smallowl0506.github.io/test_website_setup/%E5%BE%9E%E9%81%A0%E5%8F%A4%E5%88%B0%E8%BF%91%E4%B8%96/index.html",3000)
// }

// var percent = 0;

// var timer = setInterval(function () {
//   $(".bar").css("width", percent + "%");
//   percent += 0.5;
//   if (percent > 102) {
//     $(".pageLoading").addClass("complete");
//     clearInterval(timer);
//   }
// }, 20);

$(".scrollitem1").hover(
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("從遠古到近世：原漢移民與轉口貿易");
    TweenMax.to(".scrollitem1",3,{width: "100%"})
    TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1",3,{opacity: 1})
    TweenMax.to(".scrolltitletext1",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
    TweenMax.to(".scrollitem1",3,{width: "5%"})
    TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext1",0.1,{opacity: 1})
  }
);

$(".scrollitem2").hover(
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("大航海時代：西荷明鄭的交錯");
    TweenMax.to(".scrollitem2",3,{width: "100%"})
    TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2",3,{opacity: 1})
    TweenMax.to(".scrolltitletext2",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
    TweenMax.to(".scrollitem2",3,{width: "5%"})
    TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext2",0.1,{opacity: 1})
  }
);

$(".scrollitem3").hover(
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("清代的變遷：從雞籠港到社寮庄");
    TweenMax.to(".scrollitem3",3,{width: "100%"})
    TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3",3,{opacity: 1})
    TweenMax.to(".scrolltitletext3",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
    TweenMax.to(".scrollitem3",3,{width: "5%"})
    TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext3",0.1,{opacity: 1})
  }
);

$(".scrollitem4").hover(
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("日治時期的轉型：造船與水產基地");
    TweenMax.to(".scrollitem4",3,{width: "100%"})
    TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4",3,{opacity: 1})
    TweenMax.to(".scrolltitletext4",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
    TweenMax.to(".scrollitem4",3,{width: "5%"})
    TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext4",0.1,{opacity: 1})
  }
);

$(".scrollitem5").hover(
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("光復迄今的發展：從海洋產業到地方創生");
    TweenMax.to(".scrollitem5",3,{width: "100%"})
    TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5",3,{opacity: 1})
    TweenMax.to(".scrolltitletext5",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
    TweenMax.to(".scrollitem5",3,{width: "5%"})
    TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext5",0.1,{opacity: 1})
  }
);





// TweenMax.to(".wave",15,{
//   top: "180%",
//   delay: 4,
//   ease: Elastic.easeOut.config(0.6,0.5)
//   //(偏移量多寡,軟性程度)
// })

TweenMax.staggerFrom(".scrollitem",8,{
  left: 3000,
  delay: 3,
  ease: Elastic.easeOut.config(0.2,0.3)
  //(偏移量多寡,軟性程度)
},1)

// $('a').click(function (e) {
//     e.preventDefault();                   // 阻止原生超連結事件發生
//     var goTo = this.getAttribute("href"); // 取得原來超連結

//     // 此處可以進行中間處理
//     TweenMax.to(".wave",4,{
//       top: 0,
//       delay: 1,
//       ease: Elastic.easeOut.config(0.2,0.5)
//       //(偏移量多寡,軟性程度)
//     })
    
//     setTimeout(function(){
//          window.location = goTo;
//     }, 5000);                             // 時間到後跳轉
// })


// function showAll(){
//   $(".title,.content,.backtoindex,.pageLoading").addClass("showall")
// }



// document.getElementById('waveimg').onload = function(e){
//   showAll()
// }
