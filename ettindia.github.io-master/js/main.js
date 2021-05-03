$(document).ready(function(){
	var iframeLoadCount = 0;

	$("#portfolio-contant-active").mixItUp();

	$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,      
	    singleItem:true,
	    autoPlay: 3000,
	});

	$("#clients-logo1").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	$("#clients-logo2").owlCarousel({
        autoPlay: 3000,
        items : 5,
        itemsDesktop : [1199,5],
        itemsDesktopSmall : [979,5],
    });

	$("#works-logo").owlCarousel({
		autoPlay: 3000,
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}


	// Counter
	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });

	$('#feedback').load(function(){
		iframeLoadCount += 1;
		if (iframeLoadCount > 1) {
			this.height = "300px";
		}
	})
});
