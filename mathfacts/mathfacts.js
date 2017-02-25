var numbers = [1,7,3,6,5,7,7,6,9,7,2,6,4,7,7,1,7,9,6,8,
               6,6,8,7,1,6,3,7,0,6,7,0,9,7,6,6,7,7,3,7,
               2,6,4,7,6,6,8,7,1,6,5,7,4,6,9,7,8,6,5,7,
               7,7,9,6,2,7,4,7,6,6,8,7,1,6,8,6,9,8,7,2,
	             3,7,5,6,7,7,9,6,2,7,4,6,6,7,7,6,5,6,7,5,
               8,6,1,6,3,7,5,6,7,7,9,6,2,7,6,3,7,4,7,5,
               4,6,6,7,8,6,1,7,3,6,5,7,7,6,6,4,5,6,7,7,
               9,6,2,6,4,6,6,6,8,6,1,6,3,6,7,3,6,4,7,6,
               5,6,7,7,9,7,2,7,0,7,6,4,7,2,6,0,1,7,8,7,
               6,5,6,3,7,2,5,7,8,6,0,7,6,1,6,9,7,7,6,4];
var index;
var answers;
var resetanswer;
var wrong;
var correct;
var starttime;
var endtime;

function process(action) {
        if ( checktime() || action == "start") {
		switch(action) {
			case "start":
				starttime = null;
				checktime();
				index = 0;
				wrong = 0;
				resetanswer = true;
                                answers = new Array(numbers.length / 2);
				restart.disabled = true;
			case "previous":
                                checkanswers();
				index--;
				resetanswer = true;
        			break;
    			case "next":
                                checkanswers();
                                resetanswer = true;
				index++;
        			break;
    			case "clear":
				answers[index] = "";
                                checkanswers();
        			break;
    			default:
				if ( answers[index] && !resetanswer ) {
        				answers[index] += action;
				}
				else {
					resetanswer = false;
        				answers[index] = action;
				}
		}
		next.disabled = false;
		previous.disabled = false;
		if (index <= 0) {
			index = 0;
			previous.disabled = true;

		}
		if (index >= answers.length) {
			index = answers.length;
			next.disabled = true;
		}
                current1.innerHTML = "<h2>" + numbers[index*2] + "</h2>";
                current2.innerHTML = "<h2>" + numbers[index*2+1] + "</h2>";
		symbol.innerHTML = "+";
		if ( answers[index] ) {
			answer.innerHTML = "<h2>" + answers[index] + "</h2>";
		}
		else {
			answer.innerHTML = "";
		}
	}
}

function checktime() {
	var now = new Date().getTime();
	if ( starttime ) {
		if ( now > endtime ) {
			restart.disabled = false;
			return false;
		}
	}
	else {
		starttime = now;
                endtime = now + mins.value*60000;
		restart.disabled = true;
	}
	return true;
}

function checkanswers() {
	wrong = 0;
	correct = 0;
	for (i = 0; i < answers.length; i++) {
		if (answers[i]) {
    			if (numbers[i*2] + numbers[i*2+1] == answers[i]) {
				correct++;
			}
			else {
				wrong++;
			}
		}
	}
	totals.innerHTML = correct + " Correct, " + wrong + " Wrong, out of " + answers.length;
	if (restart.disabled) {
		var now = new Date().getTime();
		restart.value = Math.floor((endtime - now) / 1000)
	}
	else {
		restart.value = "Restart"
	}
}
