javascript:(function(){
	API.on(API.ADVANCE, function(e) { 
		$('#woot').click(); 
	});

	$(document).keypress(function(e) {
		if (e.which == 32 && $(':focus').is('input') == false) {
			$('#volume > .button').click();
		}
	});	
})();