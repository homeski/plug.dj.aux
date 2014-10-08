javascript:(function(){
	// Woot when the bookmark is clicked
	$('#woot').click();

	// Woot on song change
	API.on(API.ADVANCE, function(e) { 
		$('#woot').click(); 
	});

	// Key listeners
	$(document).keypress(function(e) {
		if ($(':focus').is('input') == true)
			return;

		switch (e.which) {
			case 32: // spacebar
				$('#volume > .button').click();
				break;
			case 103: // g
				if ($('#grab.selected').length < 1) {
					$('#grab').click();
					$('.grab > .menu > ul > li > .icon-active-active').parent().mousedown();
				}
				break;
			default:
		}
	});	
})();