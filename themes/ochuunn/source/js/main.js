$(function () {

	//$('.post__main img').on('click', function () {
	//	var $img = $(this);
	//
	//	$.fancybox.open([{
	//		src: $img.attr('src'),
	//		type: 'image'
	//	}]);
	//});
	//
	//$('[data-fancybox]').fancybox({
	//	// closeClickOutside: false, 
	//	image: {
	//		protect: true
	//	}
	//});

	$('.btn-reward').on('click', function (e) {
		e.preventDefault();

		var $reward = $('.reward-wrapper');
		$reward.slideToggle();
	});

	//$('body').addClass('queue-in');
	//setTimeout(function() {
	//	$('body').css({ opacity: 1}).removeClass('queue-in');
	//}, 500);

});
