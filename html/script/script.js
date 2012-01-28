
iot = {};



iot.changeFocus = function(elem) { 
	iot.focusSnippet = elem; 
	
	$(".big_content").hide();
	$(".little_content").show();
	
	$('.snippet').animate({'width':'240px', 'height':"120px"}, {
		complete: function() {
		 	$(".big_content", iot.focusSnippet).show();
			$(".little_content", iot.focusSnippet).hide();
			$(iot.focusSnippet).animate({'width':'520px', 'height':"550px"}, {
				step: function() {
					iot.container.isotope('reLayout');
				}
			});
		}
	});
}

jQuery(document).ready(function($) {
	
 	//init isotope
	var $container = $('#isotope');
	iot.container = $('#isotope');

	$container.isotope({
		itemSelector: '.snippet',
		masonry : {
		  columnWidth : 20
		}
	});
    
	// change size of clicked element
	$container.delegate( '.snippet', 'click', function(){
	  $(this).toggleClass('large');
	  $container.isotope('reLayout');
	});

	// enlarg on click
	$('.snippet').click(function(){
		if (parseInt($(this).css('width')) === 240) { 
			iot.changeFocus(this); 			
		}
	});
	
	//attach handler to next button 
	$('.next').click(function() {

		iot.next_snippet_elem = $(this).closest('.snippet').next(); 
		iot.changeFocus(iot.next_snippet_elem);
	}); 

	//open the first element 
	$(".intro .big_content").show(); 
	$(".intro .little_content").hide();
	$(".intro").css({'width':'520px', 'height':"590px"});
	$container.isotope('reLayout');	

	//attach scroll down to the arrow 
	
	//attach handler to next button 
	$('.intro_scroll').click(function() {

	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: 600}, 500 );
	   return false;			
	});

});