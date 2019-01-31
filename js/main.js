$(document).ready(function () {

    // PRELOADER
    $('#preloader').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website.

		$(document).ready(function(){ 
			if ($('#ajax-tab-container').length) {
				$('#ajax-tab-container').easytabs({
					tabs: 'header nav ul li'
				});
			} 
		});
    // RESPONSIVE MENU
    function transform(){
        var outdiv = '<div class="menuout"><div class="menuin"><ul class="tabs"></ul></div></div>';
        $(outdiv).appendTo("nav");
        var resmenus = $('.tabs').html();
        $(".menuout .menuin .tabs").append(resmenus);
       $('.menuin').hide(); 
    }
    transform();
    $('.hamburger').on('click', function() {
       $('.menuin').slideToggle(); 
    });
    $('.menuout').on('click', function () {
        $('.menuin').slideUp();  
    });

}); // document ready end 


"use strict";
$(window).load(function () {





}); // window load end 









