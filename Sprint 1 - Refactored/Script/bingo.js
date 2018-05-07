//CONTROLLER Utility

window.onload = initGame; //Calls the initGame function when the browser is opened

function initGame() //the purpose of this function is to hold a nested loop that creates a random number between 1-75 for every individual cell in the bingo game.
{
	for (var i = 0; i < 24; i++) //start i at 0, keep looping whilst i is less than 24, increment i by one every time the operator is completed.
	{
		var randomNumber = generateRandomNumber(); //assigns the variable randomNumber to the generateRandomNumber so it can access the properties of randomNumber
		populateCard(i, randomNumber); //calls the populateCard function, passing in the variables i and randomNumber
	}
}

//MODEL UTILITY

function generateRandomNumber()
{
		let randomNumber = Math.floor(Math.random() * 75) +1; //generates a random number between 0-1 using the math object, then times it by the highest number I want (75), add 1 to prevent the number 0 coming up.
		return randomNumber; //returns randomNumber so that it can be used by other functions
}

//VIEW Utility

function populateCard(i, randomNumber)
{
		document.getElementById("square" + i).innerHTML = randomNumber; //populate the current square with the number generated in the randomNumber variable.
}
