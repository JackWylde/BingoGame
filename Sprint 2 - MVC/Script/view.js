function shoutNumber(){ //the purpose of this function is to take the shuffled numbers now stored as bingoBalls and pop them out when the shout number button is pressed
	if(bingoBalls.length > 0) //if there are still values left in the array, do something
	{
	document.getElementById('usednum').innerHTML+=bingoBalls.pop() + ", "} //take the number popped out of the bingoBalls array and add it to the innerHTML of 'usednum'
	else{ //if there aren't any numbers left, do something
		alert("There are no more balls left.") //prompts the user telling them that there are no balls left in the array
	}
}
