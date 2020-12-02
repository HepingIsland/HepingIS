var percent = 0

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=0.5
  if (percent>102){
    $(".pageLoading").addClass("complete")
    clearInterval(timer)
  }
},20)

$(".backtoindex").click(function () {
  window.history.back();
});

$(function(){
  AOS.init();
})

//語音撥放
if(!('speechSynthesis' in window)) {
  throw alert("您的瀏覽器不支持")
}

function play(obj) {
  cancel();
  
  to_speak = new SpeechSynthesisUtterance(document.getElementById(obj).innerHTML);
  window.speechSynthesis.speak(to_speak);
}

//暂停
function pause() {
  window.speechSynthesis.pause();
}
//继续播放
function resume() {
  window.speechSynthesis.resume(); //继续
}
//清除所有语音播报创建的队列
function cancel() {
  window.speechSynthesis.cancel();
}
