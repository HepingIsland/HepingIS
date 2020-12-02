$( document ).ready(function() {

  var s = skrollr.init({
    mobileCheck: function() {
      return false;
    }
  });
  console.log("skrollr is initial!!!")

  $(".backtoindex").click(function () {
  window.history.back();
  });


});