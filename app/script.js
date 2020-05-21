$(document).ready(function() {

	//E-mail Ajax Send
	$("#testform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
            console.log("done")
            
        //     function() {
		// 	var feedbackWindow = document.getElementById('feedback');
		// 	feedbackWindow.classList = 'feedback animated fadeInDown';
		// 	setTimeout(function() {
		// 		// Done Functions
		// 		th.trigger("reset");
		// 	}, 1000);
        // }
        
        );
		return false;
	});

});