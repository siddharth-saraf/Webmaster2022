// Code to make subscription modal show
$("#subscribeForm").on("submit", function(e){
	$('#subscribeModal').modal('show');
	e.preventDefault();
});

// Code to make contect modal show
$("#contactForm").on("submit", function(e){
    $('#contactModal').modal('show');
    e.preventDefault();
});

// Hide all licensing 
function hideLicensing() {
	$('#mainCarousel .licensing').each(function() {
		$(this).css('opacity', 0)
	});
};

// Function to position licensing accurately on the home page Carousel called for each image on scroll
function positionLicensing() { 
	item = $('#mainCarousel .active');
	leftPosition = item.find('img').offset().left - item.find('figure').offset().left;
	topPosition = item.find('img').height - item.find('img').clientHeight;
	imageReference = item.find('img');
	image = imageReference[0];
	sizeRatio = image.width / image.naturalWidth;
	changeInHeight = ( image.height - sizeRatio * image.naturalHeight ) / 2;
	item.find('figcaption.licensing').css('left', leftPosition);
	item.find('figcaption.licensing').css('top', changeInHeight);
	$('.active .licensing').css('opacity', 1);
};

function handleLicensing() {
	hideLicensing();
	positionLicensing();
};

handleLicensing();
$( window ).resize( handleLicensing );
$( '#mainCarousel' ).on('slid.bs.carousel', handleLicensing);


// Code to make testimonial slideshow on past.html show more than one element per slide
$("#testisCarousel .carousel-item").each(function() {
	item = $(this);
	next = item.next().children();
	if (next.length == 0){
		next = item.siblings().first().children().first();
	};
	secondNext = next.parent().next().children();
	if (secondNext.length > 1) {
		secondNext = secondNext.first();
	} else if (secondNext.length < 1) {
		secondNext = item.siblings().first().children().first();
	};
	next = next.clone().addClass('added')
	secondNext = secondNext.clone().addClass('added')
	item.append(next, secondNext);
});
