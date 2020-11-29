var isBlockAppear = false
var isVoiceLive = false
var sbMsg = ""
var bbMsg = ""
$(document).ready(function() {

  //------------------------------拖曳小幫手相關事件------------------------------
  $(".logo_outer").draggable({
    containment: "document",
    scroll: false
    // drag: function( event, ui ) {
    //   ui.position.top = event.clientY - $(".logo_outer").height()/2;
    //   ui.position.left = event.clientX;
    // }
  });
  //------------------------------點擊小幫手相關事件------------------------------
  $(".logo_outer").click(()=>{
    if(isVoiceLive == false){
      isVoiceLive = true
      speechRec.start(true,false);
    }
    if(isBlockAppear){
      isBlockAppear = false
      TweenMax.to(".logo_block",1,{opacity: "0"})
      TweenMax.to(".logo_block",1,{display: "none"})
    }else{
      isBlockAppear = true
      TweenMax.to(".logo_block",1,{opacity: "1"})
      TweenMax.to(".logo_block",1,{display: "block"})
    }
  })
  //-------------------------------Speech相關設定--------------------------------
  speech = new p5.Speech();
  speech.onLoad = voiceReady;

  function voiceReady(){
    console.log(speech.voices);
    speech.setVoice(21);
  }

  //------------------------------RiveScript相關設定-----------------------------
  let bot = new RiveScript({utf8: true});
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
    console.log("brain ready");
    bot.sortReplies();
  }

  function brainError(){
    console.log("brain error");
    bot.sortReplies();
  }
  //-----------------------Other(用於輸入對話框按下Enter時觸發)--------------------
  function chat(){
    let input = sbMsg;
    console.log(input);
    if(input.indexOf("電子報刊室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E9%9B%BB%E5%AD%90%E5%A0%B1%E5%88%8A%E5%AE%A4_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("歷史發展廳")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E6%AD%B7%E5%8F%B2%E7%99%BC%E5%B1%95%E5%BB%B3_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("主題特展室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E4%B8%BB%E9%A1%8C%E7%89%B9%E5%B1%95%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("計畫資訊室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E8%A8%88%E7%95%AB%E8%B3%87%E8%A8%8A%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("圖書室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%9C%96%E6%9B%B8%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("網頁連結室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%B6%B2%E9%A0%81%E9%80%A3%E7%B5%90%E5%AE%A4_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("導覽大堂")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%B0%8E%E8%A6%BD%E5%A4%A7%E5%A0%82_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("首頁")!=-1 || input.indexOf("主頁")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%AC%AC%E4%B8%80%E7%B5%84%E6%90%AD%E9%85%8D%E4%B8%BB%E9%A0%81_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("和平島數位圖像故事館")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%AC%AC%E4%B8%80%E7%B5%84%E6%90%AD%E9%85%8D%E4%B8%BB%E9%A0%81_%E5%B0%88%E9%A1%8C/"
      }, 7000);   
    }
    let reply = bot.reply("local-user",input);
    var a = Promise.resolve(reply);
    a.then(function (result) {  
      console.log(result);
      bbMsg = result; 
      speech.speak(result.stripHTML());
    });
  }
  //------------------------------SpeechRec相關設定-------------------------------
  let lang = navigator.language || 'zh-TW';
  // let lang = 'en-US';
  speechRec = new p5.SpeechRec(lang,gotSpeech);
  let continuous = true;
  let interim = false;
  // speechRec.start(continuous,interim);
  speechRec.onEnd = restart

  function restart(){
    isVoiceLive = false
    if(isBlockAppear){
      isVoiceLive = true
      speechRec.start(true,false);
    }
  }

  //當SpeechRec收到聲音輸入時，輸出對話框
  function gotSpeech(){
    if(speechRec.resultValue){
      var input = speechRec.resultString;
    }
    console.log(input);
    if(input.indexOf("電子報刊室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E9%9B%BB%E5%AD%90%E5%A0%B1%E5%88%8A%E5%AE%A4_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("歷史發展廳")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E6%AD%B7%E5%8F%B2%E7%99%BC%E5%B1%95%E5%BB%B3_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("主題特展室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E4%B8%BB%E9%A1%8C%E7%89%B9%E5%B1%95%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("計畫資訊室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E8%A8%88%E7%95%AB%E8%B3%87%E8%A8%8A%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("圖書室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%9C%96%E6%9B%B8%E5%AE%A4_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("網頁連結室")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%B6%B2%E9%A0%81%E9%80%A3%E7%B5%90%E5%AE%A4_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("導覽大堂")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%B0%8E%E8%A6%BD%E5%A4%A7%E5%A0%82_%E5%B0%88%E9%A1%8C/dist/"
      }, 5000);   
    }
    if(input.indexOf("首頁")!=-1 || input.indexOf("主頁")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%AC%AC%E4%B8%80%E7%B5%84%E6%90%AD%E9%85%8D%E4%B8%BB%E9%A0%81_%E5%B0%88%E9%A1%8C/"
      }, 5000);   
    }
    if(input.indexOf("和平島數位圖像故事館")!=-1){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%AC%AC%E4%B8%80%E7%B5%84%E6%90%AD%E9%85%8D%E4%B8%BB%E9%A0%81_%E5%B0%88%E9%A1%8C/"
      }, 7000);   
    }
    sbMsg = input
    let reply = bot.reply("local-user",input);
    var a = Promise.resolve(reply);
    a.then(function (result) {  
      console.log(result);
      bbMsg = result; 
      speech.speak(result.stripHTML());
    });
    setTimeout(function(){ 
      $(".reply").html(bbMsg);
    }, 10);
  }

  //當在輸入框按下Enter時，輸出對話框
  $("#submitInput").keydown((event)=>{
    if(event.which == 13){
      sbMsg = $("#submitInput").val()
      $("#submitInput").val("")
      chat();
      setTimeout(function(){ 
        $(".reply").html(bbMsg);
      }, 10);
    }
  })
});

String.prototype.stripHTML = function() {
  var reTag = /<(?:.|\s)*?>/g;
  return this.replace(reTag,"");
}