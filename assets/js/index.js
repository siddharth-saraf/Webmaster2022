// Code to make footer modal show
$("#subscribeForm").on("submit", function(e){
	$('#subscribeModal').modal('show');
	e.preventDefault();
});