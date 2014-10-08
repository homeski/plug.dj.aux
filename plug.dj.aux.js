javascript:(function(){
	// Woot when the bookmark is clicked
	$('woot').click();

	// Woot on song change
	API.on(API.ADVANCE, function(e) { 
		$('#woot').click(); 
	});

	// Enable spacebar mute
	$(document).keypress(function(e) {
		if (e.which == 32 && $(':focus').is('input') == false) {
			$('#volume > .button').click();
		}
	});	
})();