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
