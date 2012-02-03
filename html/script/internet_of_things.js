
iot = {};

iot.removeFromReadingPanel = function() {
	
	iot.transition = true; 
	
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
	$('#place_holder_' + sinppet_number).append($('.currently_reading'));
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
	$(iot.focusSnippet).addClass('currently_reading');
	
	var sinppet_number = $('.currently_reading').attr('id').split("_")[1];
	 
	if (sinppet_number === "1") { 
		read_height = 1000;
		
	}

	else { 
		read_height = 590;
	}	
	
	$('#reading_panel .snippet').css({'width': '505px', 'height' : '590px'});
	$(".big_content", iot.focusSnippet).show();
	$(".little_content", iot.focusSnippet).hide();
	iot.transition = false; 
}

iot.changeFocus = function(elem) { 
	iot.focusSnippet = elem;
	iot.removeFromReadingPanel();
}

jQuery(document).ready(function($) {
	
 
	iot.changeFocus($('#snippet_1').delay(1500));
    
	// enlarg on click
	$('.snippet').click(function(){
		if (parseInt($(this).css('width')) === 230 && !iot.transition) { 
			iot.changeFocus(this);		
		}
	});
	
	//attach handler to next button 
	$('.next').click(function() {
		iot.next_snippet_elem = $(this).closest('.snippet').next(); 
		iot.changeFocus(iot.next_snippet_elem);
	}); 



});