//TOPIC  JAVASCRIPT WHILE LOPP

//Iterate with JavaScript While Loops
/*You can run the same code multiple times by using a loop.

The first type of loop we will learn is called a while loop because it runs while a specified condition is true and stops once that condition is no longer true.
*/

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}

console.log(ourArray);

/*In the code example above, the while loop will execute 
5 times and append the numbers 0 through 4 to ourArray.*/

/*Let's try getting a while loop to work by pushing values 
to an array.*/


//EXAMPLE 2
/*Add the numbers 5 through 0 (inclusive) 
in descending order to myArray using a while loop.*/

// Setup
const myArray = [];

/*Use a iterator variable such as i in your condition

let i = 5;
while (i  >= 0) {}*/

// Only change code below this line
let a = 5;

while (a >= 0) {
  myArray.push(i);
  a--;
}

console.log(myArray);




//TOPIC FOR LOOP

/*In the following example we 
-initialize with i = 0 
-and iterate while our condition i < 5 is true.
 We'll increment i by 1 in each loop iteration with i++ 
 as our final expression.

 1.The initialization statement is executed one time
  only before the loop starts. It is typically used to
   define and setup your loop variable.

 2.The condition statement is evaluated at the beginning 
 of every loop iteration and will continue as long as it
  evaluates to true. When the condition is false at the 
  start of the iteration, the loop will stop executing.

 3.The final expression is executed at the end of
  each loop iteration, prior to the next condition
   check and is usually used to increment or decrement 
   your loop counter.

   FOR LOOP is rewriting while Loop in a simple way
*/

const forLoopArray = [];
for (let i = 0; i < 5; i++) {
 forLoopArray.push(i)
}

console.log(forLoopArray);

//ourArray will now have the value [0, 1, 2, 3, 4].


//EXAMPLE 2
//Use a for loop to push the values 1 through 5 onto myArray.

const myForArray = [];

// Only change code below this line
 for (let i = 1; i <= 5; i++) {
   myForArray.push(i);
 }

 console.log(myForArray);
//output myArray should equal [1, 2, 3, 4, 5]



 //EXERCISE 3

 //use for loop push values 2 through 8 onto myLoopArray

 const myLoopArray = [];
 for ( let i = 2; i <= 8; i++) {
    myLoopArray.push(i);
 }

 console.log(myLoopArray)

 //output myLoopArray should equal [2,3,4,5,6,7,8]

 //EXAMPLE 4

 const incrementForLoop = [];
 for ( let i = 10; i < 15; i++) {
    incrementForLoop.push(i)
 }

 console.log(incrementForLoop);




 //TOPIC Iterate Odd Numbers With a For Loop


//By Changing the Initialization to += 2 or +=3

/* For loops don't have to iterate one at a time. 
By changing our final-expression, we can count by even numbers.

We'll start at i = 0 and loop while i < 10. 
We'll increment i by 2 each loop with i += 2.
*/

const ourOddArray = [];

for (let i = 0; i < 10; i += 2) {
  ourOddArray.push(i);
}

console.log(ourOddArray);
/*ourArray will now contain [0, 2, 4, 6, 8]. 
Let's change our (initialization )so we can count by odd numbers.*/

// And change initialization var i = 0 to var i = 1




//EXAMPLE 2

//Push the odd numbers from 1 through 9
// to myArray using a for loop.



const oddArray = [];
for (let i = 1; i <= 9; i += 2) {
  oddArray.push(i);
}

console.log(oddArray);
//output [1,3,5,7,9]



//EXAMPLE 3

const oddChangeArrayCount = [];
for (let i = 1; i <= 9; i += 3) {
  oddChangeArrayCount.push(i);
}

console.log(oddChangeArrayCount);



//TOPIC  Count Backwards With a For Loop
/*
A for loop can also count backwards, so long as we can 
define the right conditions.

In order to decrement by two each iteration,
 we'll need to change our initialization, condition, 
 and final expression.

We'll start at i = 10 and loop while i > 0. 
We'll decrement i by 2 each loop with i -= 2.*/

const ourArrayBackwards = [];

for (let i = 10; i > 0; i -= 2) {
  ourArrayBackwards.push(i);
}

console.log(ourArrayBackwards);

/*ourArrayBackwards will now contain 
[10, 8, 6, 4, 2]. 
Let's change our initialization and final expression 
so we can count backwards by twos to create an 
array of descending odd numbers.*/



//EXAMPLE 2
/*
Push the odd numbers from 9 through 1 to myArray
 using a for loop.*/

 const myArrayBack = [];

// Only change code below this line


for ( let i = 9; i > 0; i -= 2) {
  myArrayBack.push(i);
}

console.log(myArrayBack);



//TOPIC Iterate Through an Array with a For Loop

/*A common task in JavaScript is to iterate 
through the contents of an array. 
One way to do that is with a for loop.
 This code will output each element of 
 the array arr to the console:*/


const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}


//EXAMPLE 2

/*Declare and initialize a variable total to 0.
 Use a for loop to add the value of each element 
 of the myArr array to total

*/

const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

let total = 0;
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total);

//Code Explanation
/*
Initialization: i gets a value of 0 and its used as a counter.
Condition: the subsequent code is executed as long as i is lower than the length of myArr (which is 5; five numbers but arrays are zero based).
Final-expression: i is incremented by 1.

Statement: The function adds myArr[i]'s value to total 
until the condition isn’t met like so:

total + myArr[0] -> 0 + 2 = 2 
total + myArr[1] -> 2 + 3 = 5
total + myArr[2] -> 5 + 4 = 9
total + myArr[3] -> 9 + 5 = 14 
total + myArr[4] -> 14 + 6 = 20
*/





//NESTING FOR  LOOP 

/*If you have a multi-dimensional array, 
you can use the same logic as the prior 
waypoint to loop through both the array and
 any sub-arrays. Here is an example: */

const arrLoop = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arrLoop.length; i++) {
  for (let j = 0; j < arrLoop[i].length; j++) {
    console.log(arrLoop[i][j]);
  }
}
/*This outputs each sub-element in arr one at a time.
 Note that for the inner loop, we are checking the
  .length of arr[i], since arr[i] is itself an array.*/



  //EXAMPLE 2

/* Modify function multiplyAll so that it returns the 
product of all the numbers in the sub-arrays of arr*/

function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
  
  
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        product = product * arr[i][j];
      }
    }
  
    // Only change code above this line
    return product;
  }
  
  multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
  //console.log( multiplyAll([[1, 2], [3, 4], [5, 6, 7]]););
  //console.log(multiplyAll(arr));




  //TOPIC DO WHILE LOOP



/*Iterate with JavaScript Do...While Loops
The next type of loop you will learn is called a do...while loop. It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, and then continue to run the loop while the specified condition evaluates to true.
*/

//EXAMPLE

/*

const ourMyArray = [];
let i = 0;

do {
  ourMyArray.push(i);
  i++;
} while (i < 5);


/*
The example above behaves similar to other types of loops, 
and the resulting array will look like [0, 1, 2, 3, 4]. 

However, what makes the do...while different from other 
loops is how it behaves when the condition fails on the 
first check. Let's see this in action. Here is a regular
 while loop that will run the code in the loop as long
  as i < 5:

const ourCheckArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}

In this example, we initialize the value of ourArray
 to an empty array and the value of i to 5. 
 When we execute the while loop, the condition 
 evaluates to false because i is not less than 5,
  so we do not execute the code inside the loop.
   The result is that ourArray will end up with no
    values added to it, and it will still look like
     [] when all of the code in the example above
      has completed running*/

// SOLUTION

/*Do...While loops makes sure that the code is 
executed at least once, and after the execution, 
if the condition inside the while() is true, 
it continues with the loop, otherwise it stop.*/

//Solutions
const myArrayDo = [];
let i = 10;

while (i < 5) {
    myArrayDo.push(i);
    i++;
  }

  //Change to do..while loop

const myLopArray = [];
let i = 10;

do {
  myLopArray.push(i);
  i++;
} while (i <= 10);