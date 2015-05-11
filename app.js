
console.log(require('jsi-gamelib').map(require(process.argv[2])));
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var roomA = function(){
	console.log("You are now in Room A.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (D or B) of the room you'd like to travel to next.", function(go) {

		if (go==="D") {
    		roomD();
		} else if (go=== "B"){
			roomB();
		} else {
			rl.close();
			 }
});
};

var roomB = function(){
	console.log("You are now in Room B.");
	rl.question("There are three doors through which you can pass. Choose the capitalized letter (A, E, C) of the room you'd like to travel to next.", function(go) {

		if (go==="A") {
    		roomA();
		} else if (go=== "E"){
			roomE();
		} else if (go=== "C"){
			roomC();
		} else {
			rl.close();
			 }
});
};

var roomD = function(){
	console.log("You are now in Room D.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (G or A) of the room you'd like to travel to next.", function(go) {

		if (go==="A") {
    		roomA();
		} else if (go=== "G"){
			roomG();
		} else {
			rl.close();
			 }
});
};

var roomC = function(){
	console.log("You are now in Room C.");
	rl.question("There is only one door through which you can pass. Choose the capitalized letter (B) of the room you'd like to travel to next.", function(go) {

		if (go==="B") {
    		roomB();
		} else {
			rl.close();
			 }
});
};

var roomF = function(){
	console.log("You are now in Room F.");
	rl.question("There is only one door through which you can pass. Choose the capitalized letter (E) of the room you'd like to travel to next.", function(go) {

		if (go==="E") {
    		roomE();
		} else {
			rl.close();
			 }
});
};

var roomE = function(){
	console.log("You are now in Room E.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (F, B) of the room you'd like to travel to next.", function(go) {

		if (go==="F") {
    		roomF();
		} else if (go==="B"){
			roomB();
		} else {
			rl.close();
			 }
});
};

var roomG = function(){
	console.log("You are now in Room G.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (H, D) of the room you'd like to travel to next.", function(go) {

		if (go==="H") {
    		roomH();
		} else if (go==="D"){
			roomD();
		} else {
			rl.close();
			 }
});
};

var roomH = function(){
	console.log("You are now in Room H, in the top left corner.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (G, I) of the room you'd like to travel to next.", function(go) {

		if (go==="G") {
    		roomG();
		} else if (go=== "I"){
			roomI();
		} else {
			rl.close();
			 }
});
};

var roomI = function(){
	console.log("You are now in Room I.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (H, J) of the room you'd like to travel to next.", function(go) {

		if (go==="H") {
    		roomH();
		} else if (go=== "J"){
			roomJ();
		} else {
			rl.close();
			 }
});
};

var roomJ = function(){
	console.log("You are now in Room J. You're almost there.");
	rl.question("There are two doors through which you can pass. Choose the capitalized letter (I, K) of the room you'd like to travel to next.", function(go) {

		if (go==="I") {
    		roomI();
		} else if (go=== "K"){
			roomK();
		} else {
			rl.close();
			 }
});
};

var roomK = function(){
	console.log("Congratulations, you made it to the end. You probably think you're a big man, don't you?");
};

console.log("The object of this game is to travel from Room A to K by navigating through each room one at a time. You'll do that by specifying the letter of the room you want to enter. Example: If I want to go from Room A to Room D, you would type (capitalized) D at the prompt."); 
roomA();