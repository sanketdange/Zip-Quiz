var numQuestions = 1;
var question = document.getElementById("container");
var questions = [question];

// creates question/answer inputs on create screen
function makeQuestion() {
    numQuestions++;
    var c = question.cloneNode(true);
    questions[numQuestions] = c;
    c.value = null;
    document.getElementById("questions").appendChild(c);
}

// removes question/answer inputs on create screen
function removeQuestion(num) {
    numQuestions--;
    var q = document.getElementById("questions");
    if (questions.length > 0) {
        q.removeChild(q.children[q.children.length - 1]);
    }
}

// creates url for quiz
function createUrl() {
    var str = "";
    for (var i = 0; i < numQuestions; i++) {
        var q = questions[i].children[0].children[0].value;
        var a = questions[i].children[1].children[0].value;
        str += q;
        str += "/";
        str += a;
        str += "?";
    }
    str = CryptoJS.AES.encrypt(str, "url");

    if (str.length < 3) {
        str = "unavailable. Please enter both inputs"
    }
    alert("Your URL is zipquiz.paperplane.io/" + str);
}

// Decrypt: str = str.toString(CryptoJS.enc.Utf8);


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