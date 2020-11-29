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
    $(".title h1").text("從遠古到近世：原漢移民與轉口貿易");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
  }
);

$(".scrollitem2").hover(
  function () {
    $(".title h1").text("大航海時代：西荷明鄭的交錯");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
  }
);

$(".scrollitem3").hover(
  function () {
    $(".title h1").text("清代的變遷：從雞籠港到社寮庄");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
  }
);

$(".scrollitem4").hover(
  function () {
    $(".title h1").text("日治時期的轉型：造船與水產基地");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
  }
);

$(".scrollitem5").hover(
  function () {
    $(".title h1").text("光復迄今的發展：從海洋產業到地方創生");
    $(".title p").text("");
  },
  function () {
    $(".title h1").text("歷史發展廳");
    $(".title p").text(
      "本廳根據時間軸由最早雞籠的原住民、大航海時代，經過西班牙、荷蘭、明鄭、清代、日本殖民，到戰後國府各個階段本館都有豐富的圖文，並且都有嚴格的學術研究依據，請點選下列各展室進入參觀。"
    );
  }
);
