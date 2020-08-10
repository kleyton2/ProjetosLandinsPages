$(function(){

	var delay = 3000;
	var curiIndex = 0;
	var amt;

	initSlider();
	autoPlay();

	function initSlider(){
		 amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%');

		for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color: #666;"></span>');

			else
				$('.slider-bullets').append('<span></span>');
		}
	}

	function autoPlay(){
		setInterval(function(){
			curiIndex++;
			if(curiIndex == amt)
				curiIndex = 0;
			goToSlider(curiIndex);
		},delay)
	}

	function goToSlider(curiIndex){
		var offSetX = $('.sobre-autor').eq(curiIndex).offset().left - $('.scroll-wraper').offset().left;
		$('.slider-bullets span').css('background-color','#666');
		$('.slider-bullets span').eq(curiIndex).css('background-color','rgb(200,200,200)');
		$('.scrollEquipe').animate({'scrollLeft':offSetX});
	}

	$(window).resize(function(){
		$('.scrollEquipe').stop().animate({'scrollLeft':0});
	})
})