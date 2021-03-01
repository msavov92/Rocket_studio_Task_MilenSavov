$(document).ready(function() {
	var burger = $(".burger");
	$(".burger").on('click', function() {
		burger.toggleClass('burger_active');
		$(".main_nav").slideToggle('slow')
	})
	$(window).on('scroll', function(){
		if($(window).width() < 992){
			$(".main_nav").slideUp('slow')
			burger.removeClass('burger_active');		
		}
	});
});