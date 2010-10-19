(function($){
	var initLayout = function() {
		$('a.lightsGal').zoomimage({centered: true, 
					    hideSource: true, 
					    opacity: 0.7
					   });
	};		
	EYE.register(initLayout, 'init');
})(jQuery)