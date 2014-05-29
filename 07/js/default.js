$(document).ready(function(){

	var _width = $(".text").width();
	$(".text").height(_width);

	$(window).resize(function(){
		_width = $(window).width();
		_width = Math.ceil(_width/4);
		$(".text").height(_width);
	});

});