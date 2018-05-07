window.onload = initAll;

function initAll() // function that calls the functions that need to be loaded when the page opens
{
  bingoBalls = shuffleBalls(bingoCall(1,78)); //globally declares a variable with the parameters needed for the bingoCall function, as well as giving shuffleBalls what it needs to shuffle
  generateCardNum(); //calls the generateCardNum function
  populateCardNum(); //calls the populateCardNum function
  colourCell(); //Calls the colourCell function
  updateStyle; //globally declares updateStyle so that it can be used by other functions
}
