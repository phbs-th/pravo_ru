$(function() {
	$('.b-button').click(function() {
		$.post(
			$("#bForm").attr('action'), 
			$("#bForm").serialize(), 
			function() { 
				alert('����������� ������ �������!') 
			}
		);
		return false;
	});
});