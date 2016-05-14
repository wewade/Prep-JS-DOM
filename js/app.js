window.onload = function(){
//Exercise 1:
/*Declare a variable named catBox and assign its value with the createElement method that will create a 'div'. Give this div an id of "meow". 

then add the followig text inside this newly created div:
"Overcome its fear of cucumbers!"

Append this div inside the "bigBox" div that has already been created in the index.html file*/

/*Helpful Hints:
document.createElement creates an Element node
element.id sets or returns the identifier of an element
element.innerHTML sets or returns the HTML element content of an element
node.appendChild() is a method that appends a node as the last child of a node*/


var catBox = document.createElement('div');
catBox.id = "meow";
catBox.innerHTML = "Overcome my fear of cucumbers!";
bigBox.appendChild(catBox);

//Exercise 2
//Your objective is to display the following getBuckets array into the browser. 
//Declare a var named bucketList and assign its value with the createElement method that will create a paragraph element "p"
//Assign the "p" element with a class name of "daList"
//Each "p" element will show an item from the data collection
//Append the "p" elements inside the "buckets" div that have been already created in the index.html file

var getBuckets = ["Become more famous than that overrated fraud Garfield", "Visit Aoshima (aka Japan's Cat Island)", "Exhaust my entire 9 lives", "Pass DevLeague's coding challenge", "Become the next internet sensation"];

for(var i = 0; i<getBuckets.length; i++){
  console.log(getBuckets[i]);

  var bucketList = document.createElement('p');
  bucketList.className = "daList";
  bucketList.innerHTML = getBuckets[i];
  buckets.appendChild(bucketList);
}

};