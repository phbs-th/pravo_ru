$(function() {
	$('.b-button').click(function() {
		$.post(
			$("#bForm").attr('action'), 
			$("#bForm").serialize(), 
			function() { 
				alert('Авторизация прошла успешно!') 
			}
		);
		return false;
	});
});