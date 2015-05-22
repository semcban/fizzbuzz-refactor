
function fizzBuzz() {
	var userInput = $('#number').val();
	$('ul.list').html('');
	if(userInput!=='' && +userInput <= 100 && +userInput % 1===0) {
		for (var i = +userInput; i <= 100; i++) {
			if (i % 15 === 0) {
				$(".list").append("<li>FizzBuzz</li>");
			} else if (i % 5 === 0) {
				$(".list").append("<li>Buzz</li>");
			} else if (i % 3 === 0) {
				$(".list").append("<li>Fizz</li>");
			} else {
				$(".list").append("<li>"+i+"</li>");
			}
		}
	} else {
		alert("Please enter a number between 1 and 100!");
	}
}


$(document).ready(function() {
	$(".submit").on("click", function() {
		fizzBuzz();
	});
});


