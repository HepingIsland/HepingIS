var isHintAppear = false
$(document).ready(function() {
  $(".hintInstruction").click(
    function () {
      if(isHintAppear){
        isHintAppear = false
        $(".hintText").html("試著說出下方指令，或者在輸入框打入以下指令並送出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;→")
        TweenMax.to(".hintInstruction",2,{left: "-35%"})
      }else{
        isHintAppear = true
         $(".hintText").html("試著說出下方指令，或者在輸入框打入以下指令並送出&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;←")
        TweenMax.to(".hintInstruction",2,{left: "0%"})
      }
    }
    );
})