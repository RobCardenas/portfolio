window.addEventListener("DOMContentLoaded", function() {
  	
  	var el = document.querySelector("textarea#message.form-control");
	var message = document.querySelector("#userMessage");

	message.addEventListener("click", function(event) {
	    event.preventDefault();
	    alert(el.value);
	});

})