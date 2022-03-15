console.log("hello");
alert("hello");

//Variables
let b = "smoothie";

console.log(b);

let someNumber = 33;

console.log(someNumber);


//Change HTML elements using JavaScript
document.getElementById('someText').innerHTML = "Hello, world!";


//Ask for age and display it to the page
let age = prompt("What is your age?");

//Change HTML elements using JavaScript
document.getElementById('someText').innerHTML = age;


/* Functions
1. Create a function
2. Call a function
*/

//Create
function fun() {
    console.log("This is a function")
}

//Call
fun();

/* A function that takes in a name and says 'hello' followed by your name

For example,

Name: "Luthando"
Return: "Hello Luthando"
*/


function greeting(yourName) {
    
    let result = "Hello " + yourName;

    console.log(result);
}
let name = prompt("What is your name?");

greeting(name);


//How do arguments work in Functions?
//How to add two numbers together in a function

function sumNumbers(a, b) {

    let result = a + b;

    console.log(result);
}

sumNumbers(10, 10);

//While loops

let num = 0;

while(num < 100) {
    num += 1;
    console.log(num);
}


//For loops
for(let i = 0; i <= 100; i++) {
    console.log(i);
}

//Strings in JavaScript (Common Methods)

let fruit = "banana";

console.log(fruit.length);
console.log(fruit.indexOf('an'));
console.log(fruit.slice(2,6));
console.log(fruit.replace('ban', '234'));
console.log(fruit.toLowerCase());
console.log(fruit.toUpperCase());
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(''));

//Arrays

let fruits = ['banana', 'apples', 'orange', 'pineapples'];
fruits = new Array('banana', 'apples', 'orange', 'pineapples');

for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Arrays common methods
console.log('to string', fruits.toString());
console.log(fruits.join(' - '));
console.log(fruits.pop(), fruits); // removes last item
console.log(fruits.push('blackberries'), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.unshift('kiwi');
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combines
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 2, 7, 10, 43, 77, 533, 12, 1, 3];

console.log(someNumbers.sort(function(a,b){return a-b})); //Sorted in ascending order
console.log(someNumbers.sort(function(a,b){return b-a})); //Sorted in descending order

let emptyArray = new Array();

for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);

//Objects in JavaScript
//dictionaries in python

let student = {
    first: 'Luthando', 
    last: 'Mtengwane',
    age: 21,
    height: 180,
    studentInfo: function() {
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};
//console.log(student.first);
//console.log(student.last);
//student.first = 'Sandile'; //Change value
//console.log(student.first);
student.age++;
console.log(student.age);
console.log(student.studentInfo());
