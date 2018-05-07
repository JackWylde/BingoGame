function generateCardNumbers() //this function generates values for the bingo card and then populates the squares

/*At this point I decided to look into the set object, the set object automatically discards non-unique values, meaning all numbers on the bingo card are guaranteed to be unique*/
{
	var mySet = new Set(); //creates an empty set to store the bingo card numbers
	while (mySet.size < 24) //while there is less than 24 objects in the set, keep looping (ensures that all 24 squares in the card are filled)
	{
		let randomNumber = Math.floor(Math.random() * 75) +1; //creates a variable that holds a random number value from 1-75 to populate the card
		mySet.add(randomNumber) //adds the number to the set
	}
	return mySet; //returns the mySet variable so that it can be used by other functions
}
