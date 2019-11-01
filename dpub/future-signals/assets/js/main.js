$(document).ready(function(){
	console.log(3*5);


	$('.research-item').click(function(){
		$(this).toggleClass('large');
	});

	$('.nav-item').click(function(){
		$('.nav-item').removeClass('active');
		$(this).addClass('active');
	});

		var hideAll= function(){
		$('.research-item').addClass('hide');
	}

	$('.btn-signs').click(function(){
		hideAll();
		$('.signs').removeClass('hide');
	});


	$('.btn-inside').click(function(){
		hideAll();
		$('.inside').removeClass('hide');
	});


	$('.btn-outside').click(function(){
		hideAll();
		$('.outside').removeClass('hide');
	});


});