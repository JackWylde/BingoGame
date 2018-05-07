//BINGO CARD

function populateCardNum() //this function takes the values stored in arrayOfSets and indexes over the squares, populating them with the appropriate array values depending on their column
{
for (var x = 0 ; x <24 ; x++) { //declare x starting at 0, incrememnt by 1 until you reach the last square (24)

  if (x < 5 ){ //whilst x is less than 5 (within the B column), populate from the first array (holds values between 1-15)
 let num = arrayOfSets[0].pop(); //creates local variable num, and pops the last value from the appropriate array
 document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
} else if (x < 10){ //whilst x is less than 10 (within the I column), populate from the second array (holds values between 16-30)
  let num = arrayOfSets[1].pop(); //creates local variable num, and pops the last value from the appropriate array
  document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
}else if (x < 14){ //whilst x is less than 15 (within the N column), populate from the third array (holds values between 31-45)
  let num = arrayOfSets[2].pop(); //creates local variable num, and pops the last value from the appropriate array
  document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
}else if (x < 19){ //whilst x is less than 19 (within the G column), populate from the fourth array (holds values between 46-60)
  let num = arrayOfSets[3].pop(); //creates local variable num, and pops the last value from the appropriate array
  document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
}else if (x < 25){ //whilst x is less than 25 (within the O column), populate from the last array (holds values between 61-75)
  let num = arrayOfSets[4].pop(); //creates local variable num, and pops the last value from the appropriate array
  document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
}
}

}

//  CHECKING STATE/UPDATING GAME

function updateStyle(domEl) {
  domEl.style.backgroundColor="red"; //assigns the background colour of the clicked target to red.
}

function checkWin(domEl) //row win condition
{
  var children = domEl.parentElement.children //assigns a variable that grabs the target, finds the parent of the target (row) and then grabs all of the items in the row
  for(var row = 0; row < children.length; row++) //indexes through each square square in the row so I can check the properties
      {
        if(children[row].style.backgroundColor !== "red") //checks the background colour of the current square, and if it isn't red, it returns false
        {
          return false; //returns false, meaning user hasn't won
        }
        console.log(children[row].style.backgroundColor) //just a test to make sure that the statement was working
      }
      return true; //if all of the squares in the row are red, return true meaning the user wins
}

//function checkColWin(domEl)

/*this is how far I got with the column win check, it isn't working however my thought process was :
*
*    Grab clicked square - find it's parent (row) then find the parent of the row (table body) and index through the table checking the background colour of the squares
*    If a square was red, I would check the index to find out what column it was in and then a variable would increment, ie a = 1, b = 1, c = 1, etc
*    when one of the variables hits 5, the user wins
*
*       The issue I had was that because the checkWin function was returning true/false, it wouldn't return the target so it could be re-used by a different function afterwards
* */

// {
//   var children = domEl.parentElement.children
//   var tbodyRows = domEl.parentElement.parentElement.children
//     for (var col = 0; col < children.length; col++)
//     {
//       if(children[col]===domEl)
//       break;
//         //console.log(children[col]===domEl)
//     }
//     console.log(col);



//BINGO CALLER

function shoutNumber(){ //the purpose of this function is to take the shuffled numbers now stored as bingoBalls and pop them out when the shout number button is pressed
	if(bingoBalls.length > 0) //if there are still values left in the array, do something
	{
	document.getElementById('usednum').innerHTML+=bingoBalls.pop() + ", "} //take the number popped out of the bingoBalls array and add it to the innerHTML of 'usednum'
	else{ //if there aren't any numbers left, do something
		alert("There are no more balls left.") //prompts the user telling them that there are no balls left in the array
	}
}
