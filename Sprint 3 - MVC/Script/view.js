function populateCard(mySet)
{
	var myCounter = 0; //mycounter works as an incremental variable so I can control what squares get filled
		mySet.forEach(function(value1, value2, set) //goes through each index within the set and takes the value
		{
				document.getElementById("square" + myCounter).innerHTML = value1; //finds the ID of the element square, and changes the innerHTML to the value in the set

				myCounter++; //increments myCounter so that the program knows to move onto the next square.
		})
}
