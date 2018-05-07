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
