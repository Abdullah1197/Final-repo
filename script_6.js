/***************************
 * 11_ If else statement
 */

/*
var firstName = 'Abdullah';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully married soon:)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massAbdullah = 68; //kg
var heightAbdullah = 1.69; //meters

var massKainat = 92;
var heightKainat = 1.95;

var BMIAbdullah = massAbdullah / (heightAbdullah * heightAbdullah);
var BMIKainat = massKainat / (heightKainat * heightKainat);

if(BMIAbdullah > BMIKainat) {
    console.log('Abdullah\'s BMI is higher than Kainat\'s.');
} else {
    console.log('Kainat\'s BMI is higher than Abdullah\'s');
}

*/

/***************************
 * 12_ Boolean logic
 */

/*
var firstName = 'Abdullah';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >=13 AND age< 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
}else {
    console.log(firstName + ' is a man.');
}

*/


/*********************************
 * 13_ The Ternary Operator and Switch Statement
 */

/*

var firstName = 'Abdullah';
var age = 16;

// its called ternary operator bcz
// its has three parts condition first
// than is statement and than else
// statement

age >= 18 ? console.log(firstName + ' drink beer.') : console.log(firstName + ' drink juice.');

var drink = age >=18 ? 'beer' : 'juice';
console.log(drink);


var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Multan .');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else');
}

*/

// Example for switch statement

/*
age = 56;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/******************************************
 * 14_ Truthy and Falsy Values and Equality
 * operators
 */

// falsy values :
// 1_ undefined,
// 2_ null,
// 3_ zero (0),
// 4_ '',
// 5_ NaN (not a number).

// truthy values:
// 1_ Not falsy values.

/*

// Variable is undefined

var height;

if (height) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.');
}

*/

/*

// Variable is defined

var height;

height = 23;

if (height) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.');
}

*/

/*

// 0 is also a falsy value
// to avoid wrong ans we can use
// OR condition to justify our ans.

var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined.');
} else {
    console.log('Variable has not been defined.');
}

*/

/*

// Equality operator
if (height == '23') {
    console.log('The == operator does type coercion!');
}

// JS does type coercion which means
// to convert string to a number
// than compares the number

// three equal signs (===) is a strick
// equality operator and it does not do
// type coercion

// it is best to use always three equal
// operator to avoid unexpacted situation

*/


/**************************************
 * 16_ Coding challenge number 2
 */

/*

// part 1 and part 2

var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
console.log(johnAverage, mikeAverage);

if (johnAverage > mikeAverage) {
    console.log('John\'s team wins with ' + johnAverage + ' points');
} else if (mikeAverage > johnAverage) {
    console.log('Mike\'s team wins with ' +  mikeAverage + ' points');
} else {
    console.log('There is a draw as both teams has the same average score.');
}

// Extra part adding Mary to the game

var johnAverage = (89 + 120 + 103) / 3;
var mikeAverage = (116 + 94 + 123) / 3;
var maryAverage = (97 + 134 + 105) / 3;
console.log(johnAverage, mikeAverage, maryAverage);

if (johnAverage > mikeAverage && johnAverage > maryAverage) {
     console.log('John\'s team wins with ' + johnAverage + ' points');
} else if (mikeAverage > johnAverage && mikeAverage > maryAverage) {
     console.log('Mike\'s team wins with ' +  mikeAverage + ' points');
} else if (maryAverage > johnAverage && maryAverage > mikeAverage) {
    console.log('Mary\'s team wins with ' +  maryAverage + ' points');
} else {
      console.log('There is a draw as all teams have the same average score.');
}

*/

/******************************************
 * 17_ Functions
 */

// functions can call other functions.
// functions does not need to return always.

/*

function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageAbdullah = calculateAge(1999);
var ageKainat = calculateAge(1995);
var ageMike = calculateAge(1990);
console.log(ageAbdullah, ageKainat, ageMike);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearsUntilRetirement(1999, 'Abdullah');
yearsUntilRetirement(1995, 'Kainat');
yearsUntilRetirement(1940, 'Mike');


*/


/***************************************
 * 18_ Function statement and Expressions.
 */

/*

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function ecpression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a car in Multan.';
        case 'designer':
            return firstName + ' designs beautiful websities.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'Abdullah'));
console.log(whatDoYouDo('designer', 'Kainat'));
console.log(whatDoYouDo('retired', 'Mark'));

*/

/*****************************************
 * 19_ Arrays
 */

/*

// Initialize new array.
var names = ['Abdullah', 'Kainat', 'Jane'];
var years = new Array(1999, 1995, 1948);

console.log(names[0]); // calling no 1 from the array.
console.log(names.length); // to check lenght of the array.

names[2] = 'Ben'; // update an array
names[names.length] = 'Mary'; // add new element to the array.
console.log(names); // calling whole array to print.

// Different data types.
var abdullah = ['Abdullah', 'Khan', 1999, 'teacher', false];

abdullah.push('blue'); // pushing new element to the array. Element will added at the end of the array.
abdullah.unshift('Mr.'); // pushing new element to the array. Element will added at the start of the array.
console.log(abdullah);

abdullah.pop(); // it will remove element at the end.
abdullah.shift(); // it will remove element from the start.
console.log(abdullah);

console.log(abdullah.indexOf(false)); // to check the position of false in the array.

var isDesigner = abdullah.indexOf('designer') === -1 ? 'Abdullah is NOT a designer' : 'Abdullah IS a designer'; // use Ternary operator.to check Abdullah is designer or not. the statement before colon is if statement and statement after the colon is else statement.
console.log(isDesigner);

*/


/*******************************************
 * 20_ Coding challenge 3
 */

/*

function tipCal(bill) {
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCal(bills[0]), tipCal(bills[1]), tipCal(bills[2])];

var finalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, finalBill);

*/
