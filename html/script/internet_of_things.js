
iot = {};

iot.removeFromReadingPanel = function() {

	if ($('.currently_reading').length != "0") { 
	
		$('.currently_reading').animate({'height':"0px"}, { 
			//add it back to the index panel 
			complete: function()  {
				iot.addToIndexPanel();
			}	
		});
	}
	
	else { 
		iot.removeFromIndexPanel();
	}			
}

iot.addToIndexPanel = function() { 
	var sinppet_number = $('.currently_reading').attr('id').split("_")[1];
	$(".currently_reading .big_content").hide();
	$(".currently_reading .little_content").show();
	$('#place_holder_' + sinppet_number).html($('.currently_reading'));
	$('.currently_reading').css({'width':"230px", "height:":"0px"});	
	$('.currently_reading').animate({'height':"120px"}, {
		complete: function() {
			$('.currently_reading').removeClass('currently_reading');
			iot.removeFromIndexPanel();
		}
	}); 
}

iot.removeFromIndexPanel = function() { 
	$(iot.focusSnippet).animate({'height':"0px"}, {
		complete: function() {
			iot.addToReadingPanel();
		}
	});	
}

iot.addToReadingPanel = function() { 
	$('#reading_panel').html(iot.focusSnippet); 
	$('#reading_panel .snippet').css({'width': '520px', 'height' : '0px'});
	$(".big_content", iot.focusSnippet).show();
	$(".little_content", iot.focusSnippet).hide();
	$('#reading_panel .snippet').animate({'height':"1100px"}); 
	$(iot.focusSnippet).addClass('currently_reading');
}

iot.changeFocus = function(elem) { 
	iot.focusSnippet = elem;
	iot.removeFromReadingPanel();
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
	
	
	iot.changeFocus($('#snippet_1').delay(1500));
    
	// change size of clicked element
	$container.delegate( '.snippet', 'click', function(){
	  $(this).toggleClass('large');
	  $container.isotope('reLayout');
	});

	// enlarg on click
	$('.snippet').click(function(){
		if (parseInt($(this).css('width')) === 230) { 
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

	   $("html:not(:animated),body:not(:animated)").animate({ scrollTop: 5720}, 500 );
	   return false;			
	});

});