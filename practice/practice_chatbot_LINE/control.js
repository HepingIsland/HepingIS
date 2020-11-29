var bbCount = 0   //記錄對答次數，建立對應的block
var sbCount = 0
var sbMsg = ""    //記錄對答內容，用於顯示於block
var bbMsg = ""
var totalHeight = 0   //記錄隨block增加的高度，用於將卷軸拉到最底部

//jquery載入成功
$(document).ready(function() {

  //初始隱藏預設對話框
  $("#bbInit").hide()
  $("#sbInit").hide()
  
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
  speechRec.start(continuous,interim);
  speechRec.onEnd = restart

  function restart(){
    speechRec.start(true,false);
  }

  //當SpeechRec收到聲音輸入時，輸出對話框
  function gotSpeech(){
    if(speechRec.resultValue){
      var input = speechRec.resultString;
    }
    console.log(input);
    sbMsg = input
    let reply = bot.reply("local-user",input);
    var a = Promise.resolve(reply);
    a.then(function (result) {  
      console.log(result);
      bbMsg = result; 
      speech.speak(result.stripHTML());
    });
    var tempSbCount = makeSelfChatBlock(sbMsg,sbCount)
    sbCount = tempSbCount
    setTimeout(function(){ 
      var tempBbCount = makeBotChatBlock(bbMsg,bbCount)
      bbCount = tempBbCount
      totalHeight += 400
      var scrollHeight = $(".rightMid").height()
      $(".rightMid").scrollTop(scrollHeight+totalHeight)
    }, 10);
  }

  //當在輸入框按下Enter時，輸出對話框
  $("#submitInput").keydown((event)=>{
    if(event.which == 13){
      sbMsg = $("#submitInput").val()
      $("#submitInput").val("")
      chat();
      var tempSbCount = makeSelfChatBlock(sbMsg,sbCount)
      sbCount = tempSbCount
      setTimeout(function(){ 
        var tempBbCount = makeBotChatBlock(bbMsg,bbCount)
        bbCount = tempBbCount
        totalHeight += 400
        var scrollHeight = $(".rightMid").height()
        $(".rightMid").scrollTop(scrollHeight+totalHeight)
      }, 10);
    }
  })
   
  //產生自己輸入的對話框
  function makeSelfChatBlock(sbMsg,sbCount){
    var selfBlock = "<div class='selfChatBlock sb"+sbCount+"'>"+sbMsg+"</div>"
    $(".rightMid").append(selfBlock)
    $(".sb"+sbCount).css("top",""+(32*sbCount)+"vmin")
    sbCount++
    return sbCount
  }
  
  //產生機器人輸出的對話框
  function makeBotChatBlock(bbMsg,bbCount){
    var botBlock = "<div class='botChatBlock bb"+bbCount+"'>"+bbMsg+"</div>"
    $(".rightMid").append(botBlock)
    $(".bb"+bbCount).css("top",""+(16+32*bbCount)+"vmin")
    bbCount++
    return bbCount
  }
  
});

String.prototype.stripHTML = function() {
  var reTag = /<(?:.|\s)*?>/g;
  return this.replace(reTag,"");
}