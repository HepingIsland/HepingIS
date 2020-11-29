let speech;

function setup() {
  let myCanvas = createCanvas(200, 100);
  myCanvas.parent('myContainer');
  background(0);
  speech = new p5.Speech();
  speech.started(startSpeaking);
  speech.ended(endSpeaking);
  speech.onLoad = voiceReady;

  function voiceReady(){
    console.log(speech.voices);
     // let voice = random(22);
     // speech.setVoice(voice);
     // speech.setVolume(0.01);
     // speech.setRate(1.2);
     // speech.setPitch(2);
     speech.setVoice(21);
     // speech.speak("歡迎來到和平島數位圖像故事館");
  }
  
  function startSpeaking(){
    background(0,255,0);
  }

  function endSpeaking(){
    background(0);
  }

  let lang = navigator.language || 'zh-TW';
  // let lang = 'en-US';
  speechRec = new p5.SpeechRec(lang,gotSpeech);
  let continuous = true;
  let interim = false;
  speechRec.start(continuous,interim);

  function gotSpeech(){
    if(speechRec.resultValue){
      var input = speechRec.resultString;
      // createP(speechRec.resultString);
    }
    console.log(input);
    user_input.value(input);
    let reply = bot.reply("local-user",input);
    var a = Promise.resolve(reply);
    a.then(function (result) {  
      console.log(result);
      output.html(result); 
      speech.speak(result);
    });
  }



  let bot = new RiveScript();
  bot.loadFile("brain.rive").then(brainReady).catch(brainError);

  function brainReady(){
    console.log("brain ready");
    bot.sortReplies();
  }

  function brainError(){
    console.log("brain error");
    bot.sortReplies();
  }

  let button = select("#submit");
  let user_input = select("#user_input");
  let output = select("#output");

  button.mousePressed(chat);

  function chat(){
    let input = user_input.value();
    console.log(input);
    let reply = bot.reply("local-user",input);
    var a = Promise.resolve(reply);
    a.then(function (result) {  
      console.log(result);
      output.html(result); 
      speech.speak(result);
    });
    // output.html(reply);
  }
}