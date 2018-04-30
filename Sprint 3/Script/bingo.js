window.onload = initGame; //Calls the initGame function when the browser is opened

function initGame() //the purpose of this function is to hold a nested loop that creates a random number between 1-75 for every individual cell in the bingo game.
{
	generateCardNumbers(); //calls the generateCardNumbers function
}

function generateCardNumbers() //this function generates values for the bingo card and then populates the squares

/*At this point I decided to look into the set object, the set object automatically discards non-unique values, meaning all numbers on the bingo card are guaranteed to be unique*/
{
	var mySet = new Set(); //creates an empty set to store the bingo card numbers
	while (mySet.size < 24) //while there is less than 24 objects in the set, keep looping (ensures that all 24 squares in the card are filled)
	{
		let randomNumber = Math.floor(Math.random() * 75) +1; //creates a variable that holds a random number value from 1-75 to populate the card
		mySet.add(randomNumber) //adds the number to the set
	}

var myCounter = 0; //mycounter works as an incremental variable so I can control what squares get filled
	mySet.forEach(function(value1, value2, set) //goes through each index within the set and takes the value
	{
			document.getElementById("square" + myCounter).innerHTML = value1; //finds the ID of the element square, and changes the innerHTML to the value in the set

			myCounter++; //increments myCounter so that the program knows to move onto the next square.
	})
}
