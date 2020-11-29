var percent = 0;

var timer = setInterval(function () {
  $(".bar").css("width", percent + "%");
  percent += 1;
  if (percent > 102) {
    $(".pageLoading").addClass("complete");
    clearInterval(timer);
  }
}, 20);

$(".scrollitem1").hover(
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("古代文獻");
    TweenMax.to(".scrollitem1",3,{width: "100%"})
    TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1",3,{opacity: 1})
    TweenMax.to(".scrolltitletext1",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
    TweenMax.to(".scrollitem1",3,{width: "5%"})
    TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext1",0.1,{opacity: 1})
  }
);

$(".scrollitem2").hover(
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("視覺史料");
    TweenMax.to(".scrollitem2",3,{width: "100%"})
    TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2",3,{opacity: 1})
    TweenMax.to(".scrolltitletext2",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
    TweenMax.to(".scrollitem2",3,{width: "5%"})
    TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext2",0.1,{opacity: 1})
  }
);

$(".scrollitem3").hover(
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("近人論著");
    TweenMax.to(".scrollitem3",3,{width: "100%"})
    TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3",3,{opacity: 1})
    TweenMax.to(".scrolltitletext3",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
    TweenMax.to(".scrollitem3",3,{width: "5%"})
    TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext3",0.1,{opacity: 1})
  }
);

$(".scrollitem4").hover(
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","4.5vmin");
    $(".title p").text("報刊網頁");
    TweenMax.to(".scrollitem4",3,{width: "100%"})
    TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4",3,{opacity: 1})
    TweenMax.to(".scrolltitletext4",0.1,{opacity: 0})
  },
  function () {
    $(".title h1").text("圖書室");
    $(".title p").css("font-size","initial");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
    TweenMax.to(".scrollitem4",3,{width: "5%"})
    TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4",0.1,{opacity: 0})
    TweenMax.to(".scrolltitletext4",0.1,{opacity: 1})
  }
);

// $(".scrollitem5").hover(
//   function () {
//     $(".title h1").text("歷史發展廳");
//     $(".title p").css("font-size","4.5vmin");
//     $(".title p").text("光復迄今的發展：從海洋產業到地方創生");
//     TweenMax.to(".scrollitem5",3,{width: "100%"})
//     TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5",3,{opacity: 1})
//     TweenMax.to(".scrolltitletext5",0.1,{opacity: 0})
//   },
//   function () {
//     $(".title h1").text("歷史發展廳");
//     $(".title p").css("font-size","initial");
//     $(".title p").text(
//       "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
//     );
//     TweenMax.to(".scrollitem5",3,{width: "5%"})
//     TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5",0.1,{opacity: 0})
//     TweenMax.to(".scrolltitletext5",0.1,{opacity: 1})
//   }
// );
