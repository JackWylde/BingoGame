function bingoCall(first, last) //the purpose of this function is to hold the array of bingo balls, it is also passed in the "first" and "last" parameters, so that the function knows the first/last number
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
