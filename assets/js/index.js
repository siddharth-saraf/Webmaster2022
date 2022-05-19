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

// Giftbox
$(".llama").on('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(){	
	$("#itemsModal").modal('show');
})
