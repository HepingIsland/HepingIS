$(".backtoindex").click(function () {
  window.history.back();
});

function changeRoom() {
  let selectValue = $("#selectRoom").val();
  switch (selectValue) {
    case "古代文獻":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("古代文獻");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    case "視覺史料":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("視覺史料");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    case "近人論著":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("近人論著");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    case "報刊網頁":
      $(".title h1").text("圖書室");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("報刊網頁");
      $(".verticalScrollitem .year").css("display", "none");
      break;
    default:
      console.log("你選擇了其他東西");
  }
}
if (document.body.offsetWidth <= document.body.offsetHeight) {
  changeRoom();
}

checkWindowdirection();
$(window).resize(function () {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem").css("width", "5%");
    $(".scrolltitletext").css("opacity", "1");
    $(".title h1").text("圖書室");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  } else {
    $(".scrolltitletext").css("opacity", "0");
  }
  if (document.body.offsetWidth <= document.body.offsetHeight) {
    changeRoom();
  }
  checkWindowdirection();
});
$(window).on("orientationchange", function (event) {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem").css("width", "5%");
    $(".scrolltitletext").css("opacity", "1");
    $(".title h1").text("圖書室");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
    );
  } else {
    $(".scrolltitletext").css("opacity", "0");
  }
  if (document.body.offsetWidth <= document.body.offsetHeight) {
    changeRoom();
  }
  checkWindowdirection();
  console.log("Change Direction");
});

function checkWindowdirection() {
  if (document.body.offsetWidth >= document.body.offsetHeight) {
    $(".scrollitem1").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("古代文獻");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem1", 3, { width: "5%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem2").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("視覺史料");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem2", 3, { width: "5%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem3").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("近人論著");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem3", 3, { width: "5%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem4").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("報刊網頁");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "5%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );
  } else {
    $(".scrollitem1").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("古代文獻");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem1", 3, { width: "10%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem2").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("視覺史料");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem2", 3, { width: "10%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem3").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("近人論著");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem3", 3, { width: "10%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem4").hover(
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("報刊網頁");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("圖書室");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本數位圖像故事館的圖書室蒐集並提供和平島相關的研究文獻目錄，以幫助觀閱者進一步了解和平島。除了本計畫團隊的研究成果之外，還囊括國內外相關研究成果。文獻目錄將持續更新。所有文獻資料分成四類：古代文獻、視覺史料、近人論著及報刊網頁。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "10%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );
  }
}
