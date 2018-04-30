/*================================================CONTROLLER===============================================================*/

window.onload = initGame; //calls the initGame function when the browser is opened

function initGame() //function that calls the functions and variables that need to be loaded when the page opens
{
generateCardNum(); //calls the generateCardNum function
populateCardNum(); //calls the populateCardNum function
}

var arrayOfSets = [new Set(), new Set(), new Set(), new Set(), new Set()]; //globally declares the arrayOfSets variable


/*============================================================MODEL=====================================================*/

function generateCardNum() //this function puts values into the 5 sets and then converts them into 5 arrays
{
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
  arrayOfSets[i].forEach(function(value1, value2, set) //goes through each index within the set and takes the value
  {
    arrayFromSet.push(value1); //pushes the value from the set and places it into the arrayFromSet array
  });
  arrayOfSets[i] = arrayFromSet; //assigns the value from arrayOfSets to arrayFromSet so that it can be used
  }
}


/*=============================================VIEW========================================*/

function populateCardNum() //this function takes the values stored in arrayOfSets and indexes over the squares, populating them with the appropriate array values depending on their column
{
for (var x = 0 ; x <24 ; x++) //declare x starting at 0, incrememnt by 1 until you reach the last square (24)
  {
    if (x < 5 ) //whilst x is less than 5 (within the B column), populate from the first array (holds values between 1-15)
    {
      let num = arrayOfSets[0].pop(); //creates local variable num, and pops the last value from the appropriate array
      document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
    }
    else if (x < 10) //whilst x is less than 10 (within the I column), populate from the second array (holds values between 16-30)
    {
      let num = arrayOfSets[1].pop(); //creates local variable num, and pops the last value from the appropriate array
      document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
    }
    else if (x < 14) //whilst x is less than 15 (within the N column), populate from the third array (holds values between 31-45)
    {
      let num = arrayOfSets[2].pop(); //creates local variable num, and pops the last value from the appropriate array
      document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
    }
    else if (x < 19) //whilst x is less than 19 (within the G column), populate from the fourth array (holds values between 46-60)
    {
      let num = arrayOfSets[3].pop(); //creates local variable num, and pops the last value from the appropriate array
      document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
    }
    else if (x < 25) //whilst x is less than 25 (within the O column), populate from the last array (holds values between 61-75)
    {
      let num = arrayOfSets[4].pop(); //creates local variable num, and pops the last value from the appropriate array
      document.getElementById("square" + x).innerHTML = num; //changes the innerHTML of the appropriate square to the current value of num
    }
  }

}
