'use strict';

app.directive('ngThumb', function(){
	
	return {
		templateUrl : 'app/directive/template/thumb.html',
		scope       : {
			title     : '=',
			category  : '=',
			color_t   : '=',
			color_c   : '=',
			bgcolor_c : '=',
			bgcolor_t : '='
		}
	}

});
