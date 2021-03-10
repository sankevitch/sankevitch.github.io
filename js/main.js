$(function(){
  
  $(".menu a").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	}); 

  $('.slider').slick({
    dots: true,
    arrows: false,
  });


  $('.menu__btn').on('click', function() {
    $('.header__nav-inner').toggleClass('header__nav-inner--active');
  });


  var mixer = mixitup('.gallery__content'); 
});