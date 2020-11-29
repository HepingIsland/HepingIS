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

$(".backtoindex").click(function () {
  window.history.back();
});

function changeRoom() {
  let selectValue = $("#selectRoom").val();
  switch (selectValue) {
    case "從遠古到近世":
      $(".title h1").text("歷史發展廳");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("從遠古到近世：原漢移民與轉口貿易");
      $(".verticalScrollitem .year").css("display", "flex");
      $(".verticalScrollitem .year").css("opacity", "1");
      $(".verticalScrollitem .year a").css("display", "flex");
      $(".verticalScrollitem .year a").attr(
        "href",
        "https://smallowl0506.github.io/HepingIS/%E5%BE%9E%E9%81%A0%E5%8F%A4%E5%88%B0%E8%BF%91%E4%B8%96/%E6%AD%B7%E5%8F%B2%E7%99%BC%E5%B1%95%E5%BB%B3%E5%96%AE%E5%85%83%E4%B8%80/index.html"
      );
      $(".verticalScrollitem .leftpicture").css("opacity", "1");
      $(".verticalScrollitem .leftpicture img").attr(
        "src",
        "圖3.jpg"
      );
      $(".verticalScrollitem .leftpicturetext").css("opacity", "1");
      $(".verticalScrollitem .leftpicturetext").text(
        "巴賽人駕駛艋舺在雞籠外海搶劫戎克船。"
      );
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "根據日本人類學家伊能嘉矩的研究，北台灣的原住民凱達格蘭族(Ketagalan)於兩千年前渡海而來在Caquiuanuan附近的深澳(澳底)港上岸。 語言學家李壬癸認為凱達格蘭族來台後分化成巴賽(Basay，或稱馬賽人)與雷朗幾個亞族。 巴賽人在400年前抵達淡水河、大台北地區，即雞籠和板橋的一些地區， 形成了一個大巴賽體系，宜蘭則有多羅美遠巴賽人(Trobiawan Basay)定居。「凱達格蘭族」一詞是伊能嘉矩在1897年首度提出的， 由於在西班牙與荷蘭統治時代所有文獻全未提及「凱達格蘭族」或「凱達格蘭語」，當時只有提到共通的語言是「巴賽語」，所以「凱達格蘭」可能是「日本的發明」 。....."
      );
      break;
    case "西荷明鄭時期":
      $(".title h1").text("歷史發展廳");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("大航海時代：西荷明鄭的交錯");
      $(".verticalScrollitem .year").css("display", "none");
      // $(".year").css("display", "flex");
      // $(".year").css("opacity", "1");
      // $(".year a").css("display","none")
      $(".verticalScrollitem .leftpicture").css("opacity", "1");
      $(".verticalScrollitem .leftpicture img").attr(
        "src",
        "圖4.jpg"
      );
      $(".verticalScrollitem .leftpicturetext").css("opacity", "1");
      $(".verticalScrollitem .leftpicturetext").text(
        "1642年8月26日荷蘭人攻佔了聖薩爾瓦多城。"
      );
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "1596年發生「聖菲利浦號」（San Felipe）事件，一艘「馬尼拉-阿卡孛果」航線的西班牙商船遇風漂流到日本土佐國，船上貨物被豐臣秀吉下令沒收，船員揚言要西班牙將要征服日本激怒了豐臣秀吉，下令日本禁教，同時處死26名傳教士與信徒。這樣的舉動引起西班牙與日本關係的緊張，聖菲利浦號船長藍德喬(Mathos de Landecho)建議總督古左曼（Francisco Tello de Guzoman）佔領台灣一個港口做為前進基地。1598年薩馬第奧(Don Juan de Zamadio)率領兩艘船，兵員200人從菲律賓往台灣出發，因為季節風向不對無功而返，不久豐臣秀吉病死，征台之議就暫時緩和下來。....."
      );
      break;
    case "清領時期":
      $(".title h1").text("歷史發展廳");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("清代的變遷：從雞籠港到社寮庄");
      $(".verticalScrollitem .year").css("display", "none");
      // $(".year").css("display", "flex");
      // $(".year").css("opacity", "1");
      // $(".year a").css("display","none")
      $(".verticalScrollitem .leftpicture").css("opacity", "1");
      $(".verticalScrollitem .leftpicture img").attr(
        "src",
        "圖5.jpg"
      );
      $(".verticalScrollitem .leftpicturetext").css("opacity", "1");
      $(".verticalScrollitem .leftpicturetext").text(
        "1884年9月30日孤拔挾馬尾海戰全勝的餘威親率8艘軍艦進攻基隆。"
      );
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "清代對於雞籠的行政管轄組織變遷如下：康熙23年屬台灣府諸羅縣、雍正元年屬台灣府彰化縣淡水廳、雍正9年屬台灣府淡水廳、光緒元年改為台北府淡水縣駐基隆分防通判、光緒14年再改為台北府基隆廳。在西班牙時代中國的商船與漁船經常來往於福州與雞籠、淡水之間，但到了清代這一條航路似乎已經消失了。我們以郁永河1697年因福州火藥庫失火銷燬而奉派自福州來台灣採集硫磺為例，他沒有選擇自福州直接航行到淡水，反而乘船至廈門，由廈門渡海到台南府，再循陸路跋涉到淡水，繞了一大圈，既費時又辛苦，而且郁永河在府城時官員多勸阻他去淡水，認為那是蠻荒瘴癘之地，不適人居。 由台灣府官員的看法就可知當時清廷對台灣北部的態度。 ....."
      );
      break;
    case "日治時期":
      $(".title h1").text("歷史發展廳");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("日治時期的轉型：造船與水產基地");
      $(".verticalScrollitem .year").css("display", "none");
      // $(".year").css("display", "flex");
      // $(".year").css("opacity", "1");
      // $(".year a").css("display","none")
      $(".verticalScrollitem .leftpicture").css("opacity", "1");
      $(".verticalScrollitem .leftpicture img").attr(
        "src",
        "圖6.jpg"
      );
      $(".verticalScrollitem .leftpicturetext").css("opacity", "1");
      $(".verticalScrollitem .leftpicturetext").text(
        "日本人佔領台灣後大肆改造基隆港。"
      );
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "1895年甲午戰爭清廷戰敗簽下了馬關條約, 將臺灣、澎湖永久割讓給日本。台灣仕紳不從組織抗日聯軍，考慮到清廷簽訂的是國際條約，不想讓朝廷為難故自組「臺灣民主國」 ，國號「永清」，並言明事畢後即回歸祖國，首任總統為原臺灣巡撫唐景崧，但唐無心抗日，從淡水棄職搭輪船潛逃回大陸，抗日聯軍頓時瓦解，被遺棄的清軍且成為暴民，當5月29日日軍艦隊在臺灣北部澳底登陸時一路進入臺北城幾無抵抗，真正的抵抗從桃竹苗開始，愈往南愈激烈，到10月11日日軍再在南臺灣的枋寮登陸，南北夾擊於22日控制全臺灣。戰事約持續了5個月，是役日軍僅陣亡164名，瘴癘病死的卻有4,700名，包括北白川宮能久親王。台籍義軍則陣亡達14,000名，是謂「乙未征台」戰役。 ....."
      );
      break;
    case "光復迄今":
      $(".title h1").text("歷史發展廳");
      $(".title p").css("font-size", "4.5vmin");
      $(".title p").text("光復迄今的發展：從海洋產業到地方創生");
      $(".verticalScrollitem .year").css("display", "none");
      // $(".year").css("display", "flex");
      // $(".year").css("opacity", "1");
      // $(".year a").css("display","none")
      $(".verticalScrollitem .leftpicture").css("opacity", "1");
      $(".verticalScrollitem .leftpicture img").attr(
        "src",
        "圖7.jpg"
      );
      $(".verticalScrollitem .leftpicturetext").css("opacity", "1");
      $(".verticalScrollitem .leftpicturetext").text(
        "1949年漢民輪從上海載運黃金進入基隆港。"
      );
      $(".verticalScrollitem .intro").css("opacity", "1");
      $(".verticalScrollitem .intro p").text(
        "1947年台灣爆發「二二八事變」，這是戰後國民政府行政機器失控的開端。由於戰爭的破壞加上與共軍的內戰讓復員困難民生凋敝，更由於接收的不當民怨四起，所有矛頭都指向國民政府。「二二八事變」當時基隆港內的軍艦只有戰車登陸艦「中權」號一艘，她是載運海軍官校學生實習來到台灣的。事變發生後海軍緊急調派「太康」號護航驅逐艦、「中海」號戰車登陸艦、「伏波」號巡邏艦及兩艘中型登陸艦「美頌」、「美樂」來基。但「伏波」艦在途中被撞沉，兩艘「美」字號來不及趕到，所以「二二八事變」在基隆的艦艇只有三艘。這些海軍官兵近距離目睹了民變，在思想上一定產生強烈的衝擊，對後來1949年的叛艦不無影響。 ....."
      );
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
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
    $(".title h1").text("歷史發展廳");
    $(".title p").css("font-size", "3vmin");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("從遠古到近世：原漢移民與轉口貿易");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("大航海時代：西荷明鄭的交錯");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("清代的變遷：從雞籠港到社寮庄");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("日治時期的轉型：造船與水產基地");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "5%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem5").hover(
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("光復迄今的發展：從海洋產業到地方創生");
        TweenMax.to(".scrollitem5", 3, { width: "100%" });
        TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext5", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
        );
        TweenMax.to(".scrollitem5", 3, { width: "5%" });
        TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext5", 0.1, { opacity: 1 });
      }
    );
  } else {
    $(".scrollitem1").hover(
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("從遠古到近世：原漢移民與轉口貿易");
        TweenMax.to(".scrollitem1", 3, { width: "100%" });
        TweenMax.to(".intro1,.year1,.leftpicture1,.leftpicturetext1", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext1", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("大航海時代：西荷明鄭的交錯");
        TweenMax.to(".scrollitem2", 3, { width: "100%" });
        TweenMax.to(".intro2,.year2,.leftpicture2,.leftpicturetext2", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext2", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("清代的變遷：從雞籠港到社寮庄");
        TweenMax.to(".scrollitem3", 3, { width: "100%" });
        TweenMax.to(".intro3,.year3,.leftpicture3,.leftpicturetext3", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext3", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
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
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("日治時期的轉型：造船與水產基地");
        TweenMax.to(".scrollitem4", 3, { width: "100%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
        );
        TweenMax.to(".scrollitem4", 3, { width: "10%" });
        TweenMax.to(".intro4,.year4,.leftpicture4,.leftpicturetext4", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext4", 0.1, { opacity: 1 });
      }
    );

    $(".scrollitem5").hover(
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "4.5vmin");
        $(".title p").text("光復迄今的發展：從海洋產業到地方創生");
        TweenMax.to(".scrollitem5", 3, { width: "100%" });
        TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5", 3, {
          opacity: 1
        });
        TweenMax.to(".scrolltitletext5", 0.1, { opacity: 0 });
      },
      function () {
        $(".title h1").text("歷史發展廳");
        $(".title p").css("font-size", "3vmin");
        $(".title p").text(
          "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
        );
        TweenMax.to(".scrollitem5", 3, { width: "10%" });
        TweenMax.to(".intro5,.year5,.leftpicture5,.leftpicturetext5", 0.1, {
          opacity: 0
        });
        TweenMax.to(".scrolltitletext5", 0.1, { opacity: 1 });
      }
    );
  }
}

// TweenMax.to(".wave",15,{
//   top: "180%",
//   delay: 4,
//   ease: Elastic.easeOut.config(0.6,0.5)
//   //(偏移量多寡,軟性程度)
// })

// TweenMax.staggerFrom(".scrollitem",8,{
//   left: 3000,
//   delay: 3,
//   ease: Elastic.easeOut.config(0.2,0.3)
//   //(偏移量多寡,軟性程度)
// },1)

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
