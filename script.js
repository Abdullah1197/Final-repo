/*****************************
* Variables and Data types
*/

/*

var firstName = 'Abdullah';
console.log(firstName);

var lastName = 'Khan';
var age = 22;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'john and Mark';
var if = 23;

*/

/*****************************
* Variable mutation and types coercion
*/

/*

var firstName = 'Abdullah';
var age = 28;

//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);

*/

/******************************
* Basic operators 
*/

/*

var now, yearAbdullah, yearKainat; 
now = 2019;
ageAbdullah = 20;
ageKainat = 24;

// Math operators
yearAbdullah = now - ageAbdullah;
yearKainat = now - ageKainat;

console.log(yearAbdullah);
console.log(yearKainat);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var abdullahOlder = ageAbdullah < ageKainat;
console.log(abdullahOlder);

//type of operator 
console.log(typeof abdullahOlder);
console.log(typeof ageKainat);
console.log(typeof 'Kainat is older than Abdullah'); 
var x;
console.log(typeof x);

*/

/******************************
* Operator precedence
*/

/*
var now = 2019;
var yearAbdullah = 1999;
var fullAge = 20;

// multiple operators
var isFullAge = now - yearAbdullah >= fullAge; //true
console.log(isFullAge);

// grouping
var ageAbdullah = now - yearAbdullah;
var ageKainat = 24;
var average = (ageAbdullah + ageKainat) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 +5) * 4 - 6; // 8 * 4 - 6 //32 - 6 // 26
console.log(x, y);

// More operators
x *=2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

*/

/***************************
* coding challenge
*/

/*

var markMass = 65;
var markHeight = 1.11;

var johnMass = 192;
var johnHeight = 2.23;

var BMIMark = markMass / (markHeight * markHeight);
var BMIjohn = johnMass / (johnHeight * johnHeight);
console.log(BMIMark, BMIjohn);

var markHigherBMI = BMIMark > BMIjohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/

