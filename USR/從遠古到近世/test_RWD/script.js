$( document ).ready(function() {
	$(".backtoindex").click(function () {
		window.history.back();
    });
	var s = skrollr.init({
		mobileCheck: function() {
		  return false;
		}
	});
	console.log("skrollr is initial!!!")
});