
 // Termican command: node app.js ./map.json
console.log(require('jsi-gamelib').map(require(process.argv[2])));
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var roomA = function(){
	console.log("You are now in Room A.");
	rl.question("There are two doors. Choose the capitalized letter (D or B) of the room you'd like to travel to next. D looks like a good option.", function(go) {

		if (go==="D") {
    		roomD();
		} else if (go==="B"){
			roomB();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomB = function(){
	console.log("You are now in Room B.");
	rl.question("There are three doors . Choose the capitalized letter (A, E, or C). If I were you, I'd go back the way I came in.", function(go) {

		if (go==="A") {
    		roomA();
		} else if (go==="E"){
			roomE();
		} else if (go==="C"){
			roomC();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomD = function(){
	console.log("You are now in Room D.");
	rl.question("There are two doors. Choose the capitalized letter (G or A) of the room you'd like to travel to next. 'G' looks like a good option.", function(go) {

		if (go==="A") {
    		roomA();
		} else if (go==="G"){
			roomG();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomC = function(){
	console.log("You are now in Room C.");
	rl.question("This place sucks. Let's go back the way we came by choosing 'B'.", function(go) {

		if (go==="B") {
    		roomB();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomF = function(){
	console.log("You are now in Room F.");
	rl.question("Someone is smoking weed in here and won't share. You need to backtrack. Enter 'E' and we'll see if they still have Doritos in that previous room.", function(go) {

		if (go==="E") {
    		roomE();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomE = function(){
	console.log("You are now in Room E.");
	rl.question("There are two doors. Choose the capitalized letter (F or B) of the room you'd like to travel to next. 'B' looks like a good choice.", function(go) {

		if (go==="F") {
    		roomF();
		} else if (go==="B"){
			roomB();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomG = function(){
	console.log("You are now in Room G.");
	rl.question("Now you're rolling. Choose the capitalized letter (H or D) of the room you'd like to try next. 'H' looks like a good option.", function(go) {

		if (go==="H") {
    		roomH();
		} else if (go==="D"){
			roomD();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomH = function(){
	console.log("You are now in Room H.");
	rl.question("There are two doors. Choose the capitalized letter (G or I) of the room you'd like to try next. You don't want to backtrack, so 'I' looks like a good option.", function(go) {

		if (go==="G") {
    		roomG();
		} else if (go==="I"){
			roomI();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomI = function(){
	console.log("You are now in Room I.");
	rl.question("There are two doors. Choose the capitalized letter (H or J) of the room you'd like to travel to next. 'J' looks like a good option.", function(go) {

		if (go==="H") {
    		roomH();
		} else if (go==="J"){
			roomJ();
		} else if (go==="anxiety"){
			roomK();		
		} else {
			rl.close();
			 }
});
};

var roomJ = function(){
	console.log("You are now in Room J. You're almost there.");
	rl.question("Don't over-complicate this. Pick 'K' and claim your prize.", function(go) {

		if (go==="I") {
    		roomI();
		} else if (go==="K"){
			roomK();
		} else {
			rl.close();
			 }
});
};

var roomK = function(){
	console.log("Congratulations, you made it to the end! You probably think you're a big man, don't you?");
};

console.log("The object of this game is to travel from Room A to K by navigating through each room one at a time. You'll do that by specifying the letter of the room you want to enter. Example: If I want to go from Room A to Room D, you would type (capitalized) D at the prompt."); 
roomA();