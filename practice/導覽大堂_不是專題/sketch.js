let speech;

function setup() {
  let myCanvas = createCanvas(200, 100);
  myCanvas.parent('myContainer');
  background(0);
  speech = new p5.Speech();
  speech.started(startSpeaking);
  speech.ended(endSpeaking);
  speech.onLoad = voiceReady;
  // speech.onPause = voiceResume
  // speech.onEnd = voiceResume

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

  // function voiceResume(){
  //   console.log("resume!!!")
  //   speech.resume()
  // }
  
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
  speechRec.onEnd = restart
  // speechRec.onError = restart

  function restart(){
    speechRec.start(true,false);
  }

  function gotSpeech(){
    if(speechRec.resultValue){
      var input = speechRec.resultString;
      // createP(speechRec.resultString);
    }
    console.log(input);
    let res = input.toLowerCase();
    if(res=="journal"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E9%9B%BB%E5%AD%90%E5%A0%B1%E5%88%8A%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="history"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E6%AD%B7%E5%8F%B2%E7%99%BC%E5%B1%95%E5%BB%B3/dist/index.html"
      }, 5000);   
    }
    if(res=="topic"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E4%B8%BB%E9%A1%8C%E7%89%B9%E5%B1%95%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="information"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E8%A8%88%E7%95%AB%E8%B3%87%E8%A8%8A%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="library"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%9C%96%E6%9B%B8%E5%AE%A4_%E5%B0%88%E9%A1%8C/index.html"
      }, 5000);   
    }
    if(res=="link"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%B6%B2%E9%A0%81%E9%80%A3%E7%B5%90%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
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
    let res = input.toLowerCase();
    if(res=="journal"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E9%9B%BB%E5%AD%90%E5%A0%B1%E5%88%8A%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="history"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E6%AD%B7%E5%8F%B2%E7%99%BC%E5%B1%95%E5%BB%B3/dist/index.html"
      }, 5000);   
    }
    if(res=="topic"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E4%B8%BB%E9%A1%8C%E7%89%B9%E5%B1%95%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="information"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E8%A8%88%E7%95%AB%E8%B3%87%E8%A8%8A%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
    if(res=="library"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E5%9C%96%E6%9B%B8%E5%AE%A4_%E5%B0%88%E9%A1%8C/index.html"
      }, 5000);   
    }
    if(res=="link"){
      setTimeout(function(){
         window.location = "https://smallowl0506.github.io/HepingIS/%E7%B6%B2%E9%A0%81%E9%80%A3%E7%B5%90%E5%AE%A4/dist/index.html"
      }, 5000);   
    }
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

// function mousePressed(){
//   speechRec.start(true,false);
// }