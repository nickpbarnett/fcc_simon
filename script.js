var red=document.querySelector("#red");
var blue=document.querySelector("#blue");
var yellow=document.querySelector("#yellow");
var green=document.querySelector("#green");

var s=0;
var steps=document.querySelector("#steps");


var audioRed = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
var audioBlue = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
var audioYellow = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
var audioGreen = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

var humanSequence=[];

//var simonCount=0;
var humanCount=0;

var simonSequence=[];

var strict=document.querySelector("#strict");

var retry=false;

//var myInterval;

var i;

var restart=document.querySelector("#restart");

restart.addEventListener("click",function(){
	location.reload();
});

function gameOver(){
	alert("You win! Press OK to start again.")
	location.reload();
}

//turnOn
function redOn(){
	notListening();
	humanSequence.push(0);
	humanCount+=1;
	audioRed.load();
	audioRed.play();
	red.classList.remove("paleRed");
	red.classList.add("darkRed");
	setTimeout(redOff,500);
}
function blueOn(){
	notListening();
	humanSequence.push(1);
	humanCount+=1;
	audioBlue.load();
	audioBlue.play();
	blue.classList.remove("paleBlue");
	blue.classList.add("darkBlue");
	setTimeout(blueOff,500);
}
function yellowOn(){
	notListening();
	humanSequence.push(2);
	humanCount+=1;
	audioYellow.load();
	audioYellow.play();
	yellow.classList.remove("paleYellow");
	yellow.classList.add("darkYellow");
	setTimeout(yellowOff,500);
}
function greenOn(){
	notListening();
	humanCount+=1;
	humanSequence.push(3);
	audioGreen.load();
	audioGreen.play();
	green.classList.remove("paleGreen");
	green.classList.add("darkGreen");
	setTimeout(greenOff,500);
}


//turn off
function redOff(){
	red.classList.remove("darkRed");
	red.classList.add("paleRed");
	if (humanCount<simonSequence.length){
		listening();
	}
	else{
		checkIfCorrect();
	}
}
function blueOff(){
	blue.classList.remove("darkBlue");
	blue.classList.add("paleBlue");
	if (humanCount<simonSequence.length){
		listening();
	}
	else{
		checkIfCorrect();
	}
}
function yellowOff(){
	yellow.classList.remove("darkYellow");
	yellow.classList.add("paleYellow");
	if (humanCount<simonSequence.length){
		listening();
	}
	else{
		checkIfCorrect();
	}
}
function greenOff(){
	green.classList.remove("darkGreen");
	green.classList.add("paleGreen");
	if (humanCount<simonSequence.length){
		listening();
	}
	else{
		checkIfCorrect();
	}
}

function checkIfCorrect(){
	if (simonSequence.toString()==humanSequence.toString()){
			simon();
	}
	else{
		if (strict.value=="On"){
			alert("Unlucky. You are in strict mode, so press OK to start all over again");
			location.reload();
		}
		else{
			alert("Unlucky. You are NOT in strict mode, so press OK for another go.");
			retry=true;
			simon();
		}
	}
}




function human(){
	humanCount=0;
	humanSequence=[];
	listening();
}

function listening(){
	red.addEventListener("click",redOn);
	blue.addEventListener("click",blueOn);
	yellow.addEventListener("click",yellowOn);
	green.addEventListener("click",greenOn);
}

function  notListening(){
	red.removeEventListener("click",redOn);
	blue.removeEventListener("click",blueOn);
	yellow.removeEventListener("click",yellowOn);
	green.removeEventListener("click",greenOn);
}


////////////////////  code when simon playing //////////////////

function simon(){
	if (!retry){
		x=Math.floor(Math.random()*4);
		simonSequence.push(x);
		
		s=s+1;
		if (s==21){
			gameOver();
		}
		steps.innerHTML=s;
	}
	retry=false;
	j=0;

	myInterval = setInterval(simonPlay,750);
}


function simonPlay(){
	
	if (simonSequence[j]==0){
		simonRedOn();
	}
	else if (simonSequence[j]==1){
		simonBlueOn();
	}
	else if (simonSequence[j]==2){
		simonYellowOn();
	}
	else{
		simonGreenOn();
	}
	j=j+1

	if (j==simonSequence.length){
		clearInterval(myInterval);
		human();
	}
}

//turnOn
function simonRedOn(){
	audioRed.load();
	audioRed.play();
	red.classList.remove("paleRed");
	red.classList.add("darkRed");
	setTimeout(simonRedOff,500);
}
function simonBlueOn(){
	audioBlue.load();
	audioBlue.play();
	blue.classList.remove("paleBlue");
	blue.classList.add("darkBlue");
	setTimeout(simonBlueOff,500);
}
function simonYellowOn(){
	audioYellow.load();
	audioYellow.play();
	yellow.classList.remove("paleYellow");
	yellow.classList.add("darkYellow");
	setTimeout(simonYellowOff,500);
}
function simonGreenOn(){
	audioGreen.load();
	audioGreen.play();
	green.classList.remove("paleGreen");
	green.classList.add("darkGreen");
	setTimeout(simonGreenOff,500);
}


//turn off
function simonRedOff(){
	red.classList.remove("darkRed");
	red.classList.add("paleRed");
}
function simonBlueOff(){
	blue.classList.remove("darkBlue");
	blue.classList.add("paleBlue");
}
function simonYellowOff(){
	yellow.classList.remove("darkYellow");
	yellow.classList.add("paleYellow");
}
function simonGreenOff(){
	green.classList.remove("darkGreen");
	green.classList.add("paleGreen");
}


simon();


