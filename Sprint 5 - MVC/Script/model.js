//BINGO CARD

var arrayOfSets = [new Set(), new Set(), new Set(), new Set(), new Set()]; //globally declares the arrayOfSets variable

function generateCardNum() { //this function puts values into the 5 sets and then converts them into 5 arrays

  for (var i = 0; i < 5; i++) //creates a loop that incrememnts i every time the while loop's condition is met so that we have 5 sets of values (5 appropriate numbers for each column of the bingo card)
    {
  while(arrayOfSets[i].size < 5) //creates a loop that repeats until a set has 5 values inside of it
  {
    var minNum; //declares the variables in the scope of the function
    var maxNum; //declares the variables in the scope of the function
    if(i == 0) //when i = 0, change the value of minNum and maxNum to the appropriate conditions for USA bingo
    {
      minNum = 1;  //B column should be a minimum of 1
      maxNum = 15; //B column should be a maximum of 15
    }
    else if(i == 1)
    {
      minNum = 16; //B column should be a minimum of 16
      maxNum = 30; //B column should be a maximum of 30
    }
    else if(i == 2)
    {
      minNum = 31; //B column should be a minimum of 31
      maxNum = 45; //B column should be a maximum of 45
    }
    else if(i == 3)
    {
      minNum = 46; //B column should be a minimum of 46
      maxNum = 60; //B column should be a maximum of 60
    }
    else if(i == 4)
    {
      minNum = 61; //O column should be a minimum of 61
      maxNum = 75; //O column should be a maximum of 75
    }

        let randomNumber = Math.floor(Math.random() * (maxNum - minNum +1)) +minNum; //creates a variable that holds a random number within the min/max threshholds
        arrayOfSets[i].add(randomNumber) //puts the number into the set
  }

/* At this point, I realised that because of the contraints within the sets methods/properties, it would make life easier to just convert my sets into arrays so that I could continue to progress
 with further sprints. */

    var arrayFromSet = []; //creates an empty array that will hold the new arrays once they are converted from sets
  arrayOfSets[i].forEach(function(value1, value2, set){ //goes through each index within the set and takes the value
    arrayFromSet.push(value1); //pushes the value from the set and places it into the arrayFromSet array
  });
  arrayOfSets[i] = arrayFromSet; //assigns the value from arrayOfSets to arrayFromSet so that it can be used
  }
}

//CHECKING STATE/UPDATING GAME

function colourCell(e){ //the purpose of this function is to bind the onclick event multiple times so the function can iterate to the appropriate squares
//alert("working");
  for (x = 0; x < 24; x++){ //the for loop allows the function to iterate through the squares by incrementing x
  document.getElementById("square" + x).onclick = updateGame; //find the square and then call updateGame

}}

function updateGame(e) {
  var myTarget = e.target; //assigns the variable target to the event target so it can be re-used in other functions

  updateStyle(myTarget); //calls the update style function and passes in the variable myTarget to it.

  if(checkWin(myTarget)){
    console.log("You have won the game!") //couldnt use a prompt as javascript would prompt when the last square was clicked however it wouldn't actually fill in the last square
    //alert("You Have Won!!") //Default win alert, see comment above, uncomment to test
  }

}

//----------------------------------------------------------------BINGO CALLER---------------------------------------------------------------------------

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
