javascript:(function(){
	// Woot when the bookmark is clicked
	$('#woot').click();

	// Woot on song change
	API.on(API.ADVANCE, function(e) { 
		$('#woot').click(); 

		// Change title bar to current song info
		$(document).prop('title', API.getMedia().author + " - " + API.getMedia().title);
	});

	// Key listeners
	$(document).keypress(function(e) {
		// Check if we're typing
		if ($(':focus').is('input') == true)
			return;

		switch (e.which) {
			case 32: // Spacebar
				$('#volume > .button').click();
				break;
			case 103: // g
				// If song isn't already grabbed
				if ($('#grab.selected').length < 1) {
					$('#grab').click();
					$('.grab').find('.icon-check-purple').parent().mousedown();
				}
				break;
			default:
		}
	});	
})();