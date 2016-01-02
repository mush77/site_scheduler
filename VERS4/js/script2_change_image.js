
	function changeTop() {
		
			var difference = screen.height / screen.width;

			var x = difference * 50 / 0.5622254758418741;

			document.getElementById("menu").style.top = x;
			if(screen.height > 900) 
				document.getElementById("menu").style.top = x+ (screen.height-900)/2;
		}

		var images = [ "main2.jpg", "main3.jpg"];
    	var preloadArr = new Array();
		var i;

		/* preload images */
		for (i = 0; i < images.length; i++) {
    		preloadArr[i] = new Image();
    		preloadArr[i].src = images[i];
		}


		$(window).load(function(){
		i = 0;
    	setInterval(function()
    	{
    		$('body').css('background-image', 'url('+images[i++]+')' ); 
    		if (i == images.length) i = 0;
    	}, 5000);
});