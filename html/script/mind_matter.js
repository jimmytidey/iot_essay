
mm = {}; 
mm.specturmChange = function(destination) {
	
	var position = destination;
	
	if (position <  312) {
		$("#left").html($('#animism').html()); 
		mm.destination = 103;
	}
	
	else if (position >  312 && position < 534) {
		$("#left").html($('#implicit_dualism').html()); 
		mm.destination = 316; 
	}
	
	else if (position >  533 && position < 744) {
		$("#left").html($('#explicit_dualism').html()); 
		mm.destination = 528; 
	}
	
	else if (position >  744 && position < 961) {
		$("#left").html($('#psychological_dualism').html()); 
		mm.destination = 746; 
	}
	
	else if (position >  961) {
		$("#left").html($('#materialism').html()); 
		mm.destination = 952; 
	}			
		
	$('#selector').animate({
	    left: mm.destination + 'px',
	  }, {
	    duration: 1000,
	    specialEasing: {
	      width: 'linear',
	      height: 'easeOutBounce'
	    },
	    step: function() {

	    }
	});	
}

jQuery(document).ready(function($) {
	
	mm.specturmChange(10);
	
	$("#spectrum_image").click(function(e){
		mm.specturmChange(e.pageX);
	});	
});