var numQuestions = 1; 
var id = 0;
var question = document.getElementById("container");
var questions = [question];


function onSubmit(argument) {

}

function makeQuestion(num){
	numQuestions = num;
	console.log(numQuestions);
	for (var i = 1; i <= num; i++) {
		var c = question.cloneNode(true);
		c.id = question.id + i;
		questions[i] = c;
		document.getElementById("questions").appendChild(c);
	}

}

function createURL(){
	var str = "";
	for(var i = 0; i < numQuestions; i++){
		var q = questions[i].children[0].children[0].value;
		var a = questions[i].children[1].children[0].value;
		str += q;
		str += "/";
		str += a;
		str += "?";
	}
	if (str.length < 3) {
		str = "unavailable. Please enter both inputs"
	}
	alert("Your URL is " + str);
}

function checkAnswers() {
	var one = document.getElementById("Question1").value;
	var two = document.getElementById("Question2").value;
	var three = document.getElementById("Question3").value;

	var score = 0;
	if (one == "Zoology"){
		score++;

	}

	if(two == "George Washington"){
		score++;
	} 

	if(three == ("iPhone")){
		score++;
	}
	alert("You got " + score + " out of 3");
}

// function makeQuiz(){
// 	var dict = {};
// 	url = url.substring(27);
// 	for (var i = 0; i < url.length; i++) {
// 		var q = "";
// 		var a = "";
// 		var isQuestion = true;

// 		if (url.charAt(i) == "/"){
// 			isQuestion = false;
// 		} else if (url.charAt(i) == "?"){
// 			isQuestion = true;
// 			dict.push({
// 			    q : a,
// 			});
// 		} else {
// 			if (isQuestion){
// 				q += url.charAt(i);
// 			} else {
// 				a += url.charAt(i);
// 			}
// 		}
// 	}
// 	var i = 0;
	
// 	for (var i = 0; i < Object.keys(dict).length; i++){
// 		var input = document.createElement("INPUT");
// 		input.className = "input-field col s6 valign-wrapper center-gn";
// 		var label = document.createElement("LABEL");
// 		label.htmlFor = "first_name";
// 		label.className = "validate";
// 	}
	


// }