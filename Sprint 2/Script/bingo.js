/*-------------------CONTROLLER--------------------*/

window.onload = initGame; //Calls the initGame function when the browser is opened

function initGame() //function that calls the functions and variables that need to be loaded when the page opens
{
	bingoBalls = shuffleBalls(bingoCall(1,78)); //globally declares a variable with the parameters needed for the bingoCall function, as well as giving shuffleBalls what it needs to shuffle
}

/*------------------MODEL------------------------*/

function bingoCall(first, last) //the purpose of this function is to hold the array of bingo balls
{
	var inNumber = []; //creates an empty array to hold the numbers generated
	for (var i = first; i < last; i++) //for loop that goes through every number generated (values 1-78 globally defined when the page loads)
			{
				inNumber.push(i); //pushes the numbers generated into the inNumber array
			}
			return inNumber; //returns the filled array so that shuffleBalls can use it
}

function shuffleBalls(inNumber) //the purpose of this function is to shuffle the values inside the inNumber array
{
	var outNumber = []; //creates an empty array to hold the shuffled balls
	while (inNumber.length > 0) //keep on looping whilst there are still numbers in the inNumber array
	{
		var ball = Math.random() * inNumber.length; //uses the random feature to choose a random number in the index of the inNumber array
		var removedNumbers = inNumber.splice(ball, 1); //takes the random number and returns it to the removedNumbers array
		outNumber.push(removedNumbers[0]); //pushes the first and only value from removedNumbers and puts it into the outNumber array
	}
return outNumber; //returns the array of shuffled numbers
}

/*------------------VIEW------------------------*/

function shoutNumber(){ //the purpose of this function is to take the shuffled numbers now stored as bingoBalls and pop them out when the shout number button is pressed
	if(bingoBalls.length > 0) //if there are still values left in the array, do something
	{
	document.getElementById('usednum').innerHTML+=bingoBalls.pop() + ", "} //take the number popped out of the bingoBalls array and add it to the innerHTML of 'usednum'
	else{ //if there aren't any numbers left, do something
		alert("There are no more balls left.") //prompts the user telling them that there are no balls left in the array
	}
}
