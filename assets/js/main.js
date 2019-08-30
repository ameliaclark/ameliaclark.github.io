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

	$('.btn-milk-bar').click(function(){
		hideAll();
		$('.milk-bar').removeClass('hide');
	});


	$('.btn-laundromat').click(function(){
		hideAll();
		$('.laundromat').removeClass('hide');
	});


	$('.btn-cleaners').click(function(){
		hideAll();
		$('.cleaners').removeClass('hide');
	});

	$('.btn-shoes').click(function(){
		hideAll();
		$('.shoes').removeClass('hide');
	});

	$('.btn-other').click(function(){
		hideAll();
		$('.other').removeClass('hide');
	});
});