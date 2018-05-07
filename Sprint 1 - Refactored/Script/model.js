function generateRandomNumber()
{ 
		let randomNumber = Math.floor(Math.random() * 75) +1; //generates a random number between 0-1 using the math object, then times it by the highest number I want (75), add 1 to prevent the number 0 coming up.
		return randomNumber;
}
