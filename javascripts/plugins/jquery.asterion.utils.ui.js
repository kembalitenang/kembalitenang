/**
 * This library contains some libraries which user user-interface related.
 */

(function($) {
	
    // build a namespace
    $.asterion = $.asterion || {};
	$.asterion.utils = $.asterion.utils || {};
	$.asterion.utils.ui = {};
	
	/**
	 * Performs <code>window.open</code> but which centers the window
	 * 
	 * @param {String} url the URL to open in the new window
	 * @param {String} title the identifying title/name of the window
	 * @param {Number} width the width of the new window
	 * @param {Number} height the height of the new window
	 * @returns {Window}
	 */
	$.asterion.utils.ui.PopupCenter = function(url, title, width, height, options) {
		var dualScreenLeft = window.screenLeft || screen.left;
		var dualScreenTop = window.screenTop || screen.top;
		var dualScreenWidth = window.innerWidth || document.documentElement.clientWidth || screen.width;
		var dualScreenHeight = window.innerHeight || document.documentElement.clientHeight || screen.height;
		var left = ((dualScreenWidth - width) / 2) + dualScreenLeft;
		var top = ((dualScreenHeight - height) / 2) + dualScreenTop;
		
		return window.open(url, title, (options ? options + ',' : '') + ['width=' + width, 'height=' + height, 'left=' + left, 'top=' + top].join());
	};
	
})(jQuery);