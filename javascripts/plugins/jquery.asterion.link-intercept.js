jQuery(function($) {
	$('a[data-toggle="asterion-external-link"]').click(function(e) {
		e.preventDefault();
		
		var key = this.hash.substring(1);
		var target = asterion.extern_targets[key];
        var url = '/linkout/' + target;
		
        if (this.target == '_blank')
            window.open(url, '_blank');
        else
            document.location = url;
	});
});

