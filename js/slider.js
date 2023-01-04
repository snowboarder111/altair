$(document).ready(function(){
	$('.slider').slick({
		slidesToShow: 1,
		arrows:true,
		infinite:false,
		draggable:true,
		swipe:true,
		touchThreshold:5,
		//centerMode:true,
		touchMove:true,
		speed:1000,
		appendArrows: $('.slider'),
            prevArrow: '<button type="button" class="slick-prev">PREVIOUS PROJECT</button>',
            nextArrow: '<button type="button" class="slick-next">NEXT PROJECT</button>',

      responsive:[
			{
				breakpoint: 1023,
				settings: {
					arrows:false,
					dots:true,
				}
			},
		],

    	

		/*arrows:true,
		dots:true,
		adaptiveHeight:false,
		slidesToShow:1,
		slidesToScroll:1,
		speed:1000,
		easing:'linear',
		infinite:true,
		initialSlide:0,
		autoplay:false,
		autoplaySpeed:2000,
		pauseOnFocus:true,
		pauseOnHover:true,
		pauseOnDotsHover:true,
		draggable:true,
		swipe:true,
		touchThreshold:5,
		touchMove:true,
		waitForAnimate:true,
		centerMode:false,
		variableWidth:false,
		rows:1,
		slidesPerRow:1,
		vertical:false,
		verticalSwiping:false,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1,
				}
			},{
				breakpoint: 480,
				settings: {
					slidesToShow:1,
				}
			}
		]*/

});

var slider = $(".slider");
	$(".sl__count_total").text(slider.slick("getSlick").slideCount);
	slider.on("afterChange" , function(event , slick , currentSlide) {
		$(".sl__count_current").text(currentSlide + 1);
		
	});

});

//sliderBlogs===============================================================================================
/*
$(document).ready(function(){
	$('.sliderBlogs').slick({
		slidesToShow: 4,
		arrows:false,
		infinite:true,
		draggable:true,
		swipe:true,
		touchThreshold:2,
		touchMove:true,
		speed:10000,
		centerMode: true,
		easing:'linear',
	
      responsive:[
			{
				breakpoint: 1023,
				settings: {
					arrows:false,
					//dots:true,
				}
			},
		],

});

var slider = $(".sliderBlogs");
	$(".sl__count_total").text(slider.slick("getSlick").slideCount);
	slider.on("afterChange" , function(event , slick , currentSlide) {
		$(".sl__count_current").text(currentSlide + 1);
		
	});
 
 $('input[type="range"]').on("input change", function(e){
 e.preventDefault();
   var slideno = $(this).val(); 
   $('.sliderBlogs').slick('slickGoTo', slideno-1 );
 });	


}); */

