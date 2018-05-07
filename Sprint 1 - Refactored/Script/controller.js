window.onload = initGame; //Calls the initGame function when the browser is opened

function initGame() //the purpose of this function is to hold a nested loop that creates a random number between 1-75 for every individual cell in the bingo game.
{
	for (var i = 0; i < 24; i++) //start i at 0, keep looping whilst i is less than 24, increment i by one every time the operator is completed.
	{
		var randomNumber = generateRandomNumber(); //assigns the variable randomNumber to the generateRandomNumber so it can access the properties of randomNumber
		populateCard(i, randomNumber); //calls the populateCard function, passing in the variables i and randomNumber
	}
}
