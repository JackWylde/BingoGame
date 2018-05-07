window.onload = initGame; //Calls the initGame function when the browser is opened

function initGame() //the purpose of this function is to call all of the other functions that need to run when the page loads//the purpose of this function is to call all of the other functions that need to run when the page loads
{
var mySet =	generateCardNumbers(); //assigns the variable mySet to the generateCardNumbers so it can access the properties of mySet
populateCard(mySet); //calls the populateCard function, passing the mySet variable into the function
}
