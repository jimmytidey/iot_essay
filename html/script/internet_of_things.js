
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
	
	$('#reading_panel .snippet').css({'width': '505px', 'height' : '590px'});
	$(".big_content", iot.focusSnippet).show();
	$(".little_content", iot.focusSnippet).hide();
	iot.transition = false; 
}

iot.changeFocus = function(elem) {
	var hash_text = $("h3", elem).html().split('. ')[1].replace(/ /g, "_");
	hash_text = escape(hash_text);
	window.location.hash = hash_text;
	iot.focusSnippet = elem;
	iot.removeFromReadingPanel();
}

jQuery(document).ready(function($) {
	
	if (window.location.hash == "#Example_translations_between_information_and_matter") { 
		iot.changeFocus($('#snippet_1'));
	}

	else if (window.location.hash == "#") { 
		window.location.reload();
	}	
	
	else if (window.location.hash == "#Why_it's_important_to_get_the_language_right") {
		iot.changeFocus($('#snippet_2'));
	}
	
	else if (window.location.hash == "#it's_not_about_\"virtual\"_and_\"real\"") {
		iot.changeFocus($('#snippet_3'));
	}
	
	else if (window.location.hash == "#\"Material\"_/_\"informational\"_is_a_more_productive_contrast") {
		iot.changeFocus($('#snippet_4'));
	}
	
	else if (window.location.hash == "#The_continuity_between_\"material\"_and_\"informational\"") {
		iot.changeFocus($('#snippet_5'));
	}
	
	else if (window.location.hash == "#Revisiting_the_examples") {
		iot.changeFocus($('#snippet_6'));
	}
	
	else if (window.location.hash == "#Editorial_objects_/_embodied_information") {
		iot.changeFocus($('#snippet_7'));
	}					


	//iot.changeFocus($('#snippet_1').delay(600));
    
	// enlarg on click
	$('.snippet').click(function(){
		if (parseInt($(this).css('width')) === 230 && !iot.transition) { 
			iot.changeFocus(this);	
		}
	});
	
	//attach handler to next button 
	$('.next').click(function() {
		var sinppet_number = $(this).parents('.snippet').attr('id').split("_")[1];
		sinppet_number++; 
		iot.changeFocus($('#snippet_'+sinppet_number));	
	});
	
	//attach handler to next button 
	$('.prev').click(function() {
		var sinppet_number = $(this).parents('.snippet').attr('id').split("_")[1];
		sinppet_number--;
		iot.changeFocus($('#snippet_'+sinppet_number));
	});
});