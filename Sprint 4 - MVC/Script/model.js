var arrayOfSets = [new Set(), new Set(), new Set(), new Set(), new Set()]; //globally declares the arrayOfSets variable

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
