
medium = {}; 

medium.changeFocus = function(elem) { 
	console.log(elem);
	$(elem).addClass("currently_reading");
	$(elem).css("visibility","visible");
	$("#reader").html('');
	$(elem).appendTo("#reader");
	
};

jQuery(document).ready(function($) {

	
	/*
	var paper = Raphael(10, 50, 320, 200);

	// Creates circle at x = 50, y = 40, with radius 10
	var circle = paper.circle(50, 40, 10);
	// Sets the fill attribute of the circle to red (#f00)
	circle.attr("fill", "#f00");	
	*/
	
	medium.changeFocus($('#snippet_1'));
	
	$('.next').click(function() {
		console.log($(this).parents());
		var sinppet_number = $(this).parents('.snippet').attr('id').split("_")[1];
		sinppet_number++; 
		medium.changeFocus($('#snippet_'+sinppet_number));	
	});
	
	
});