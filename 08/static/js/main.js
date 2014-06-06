$(function() {
	$('.b-button').click(function() {
		var $form = $("#bForm");
		$.post(
			$form.attr('action'), 
			$form.serialize(), 
			function() { 
				alert('Авторизация прошла успешно!')
			}
		);
		return false;
	});
});