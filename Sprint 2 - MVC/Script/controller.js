window.onload = initGame; //when the window is loaded, run the initGame function

function initGame() //the purpose of this function is to call all of the other functions that need to run when the page loads
{
	bingoBalls = shuffleBalls(bingoCall(1,78)); ////globally declares a variable with the parameters needed for the bingoCall function, as well as giving shuffleBalls what it needs to shuffle
}
