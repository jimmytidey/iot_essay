
mm = {}; 
mm.specturmChange = function(destination) {
	
	var position = destination;
	
	if (position <  312) {
		$("#intro").html($('#animism').html()); 
		mm.destination = 103;
	}
	
	else if (position >  312 && position < 534) {
		$("#intro").html($('#implicit_dualism').html()); 
		mm.destination = 316; 
	}
	
	else if (position >  533 && position < 744) {
		$("#intro").html($('#explicit_dualism').html()); 
		mm.destination = 528; 
	}
	
	else if (position >  744 && position < 961) {
		$("#intro").html($('#psychological_dualism').html()); 
		mm.destination = 746; 
	}
	
	else if (position >  961) {
		$("#intro").html($('#materialism').html()); 
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
	
	$( "#selector" ).animate({
	    left: "+=20"
	  }, {
	    duration: 200,
	    complete: function( now, fx ){
			$( "#selector" ).animate({
			    left: "-=50"
			  }, {
			    duration: 200,
			    complete: function( now, fx ){
			      $( "#selector" ).	animate({
					    left: "+=20"
					}, {duration: 200})
			    }
			  });
	    }
	  });

	
	
	$("#spectrum_image").click(function(e){
		mm.specturmChange(e.pageX);
	});	
});