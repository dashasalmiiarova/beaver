$(document).ready(function() {
		//E-mail Ajax Send
		$("#sloganform").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(
	            // console.log("done")
	            
	            function() {
				var feedbackWindow = document.getElementsByClassName('feedback');
				feedbackWindow.classList = 'feedback animated fadeInDown';
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
	    	}
	        
	    );
		return false;
	});
});
$(document).ready(function() {
	$("#seriveform1").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}
		
		);
		return false;
	});
});
	$(document).ready(function() {
	$("#seriveform2").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}
		
	);
		return false;
	});
});
	$(document).ready(function() {
	$("#seriveform3").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}
		
		);
		return false;
	});
});
	$(document).ready(function() {
	$("#seriveform4").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}
		
		);
		return false;
	});
});
	$(document).ready(function() {
	$("#seriveform5").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		}
		
		);
		return false;
	});
});
	$(document).ready(function() {
		$("#seriveform6").submit(function() { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "mail.php", //Change
				data: th.serialize()
			}).done(
				// console.log("done")
				
				function() {
				var feedbackWindow = document.getElementsByClassName('feedback');
				feedbackWindow.classList = 'feedback animated fadeInDown';
				setTimeout(function() {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			}
			
			);
			return false;
		});
});
$(document).ready(function() {
		$("#contactform").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(
			// console.log("done")
			
			function() {
			var feedbackWindow = document.getElementsByClassName('feedback');
			feedbackWindow.classList = 'feedback animated fadeInDown';
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			}
		
		);
		return false;
	});
});
