"use strict"




//JavaScript:
//Burger=====================================================================================================
/*
let burger = docunt.querySelector('.header__burger');
let menu = document.querySelector('.menu__navigation');
let container = document.querySelector('.container');
burger.addEventListener('click', function(){
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	container.classList.toggle('lock');


})

*/
//ibg=======================================================================================================
/*
function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

*/

//JQuery:
//Burger===================================================================================================

$(document).ready(function() {
	$('.main__burger').click(function(event) {
		$('.header__burger,.menu__navigation').toggleClass('active');
		$('body').toggleClass('lock');
	});

	});





//ibg=====================================================================================================
/*
function ibg(){
$.each($('.ibg'), function(index, val) {
if($(this).find('img').length>0){
$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
}
});
}
ibg();
*/

