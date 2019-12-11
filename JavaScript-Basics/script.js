/*****************************
* 5_ Variables and Data types
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
* 6_ Variable mutation and types coercion
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
* 7_ Basic operators 
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
* 8_ Operator precedence
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
* 9_ coding challenge
*/

/*

var markMass = 78;
var markHeight = 1.69;

var johnMass = 92;
var johnHeight = 1.95;

var BMIMark = markMass / (markHeight * markHeight);
var BMIjohn = johnMass / (johnHeight * johnHeight);
console.log(BMIMark, BMIjohn);

var markHigherBMI = BMIMark > BMIjohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);

*/

/*first phase submitted till here*/

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

var isDesigner = abdullah.indexOf('designer') === -1 ? 'Abdullah is NOT a designer' : 'Abdullah IS a designer'; 
// use Ternary operator.to check Abdullah is designer or not. the statement before colon is if statement and statement after the colon is else statement.
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

/*Second phase submitted till here*/

/*****************************************
* 22_ Objects and Properties
*/

/*

// object literal

var abdullah = {
    firstName: 'Abdullah',
    lastName: 'Khan',
    birthYear: 1999,
    family: ['Abdullah', 'Kainat', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(abdullah.firstName);
console.log(abdullah['lastName']);
var x = 'birthYear';
console.log(abdullah[x]);

abdullah.job = 'designer';
abdullah['isMarried'] = true;
console.log(abdullah);

// new object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';
console.log(jane);

*/

/***************************************
* 23_ objects and methods
*/

/*

var abdullah = {
    firstName: 'Abdullah',
    lastName: 'Khan',
    birthYear: 1999,
    family: ['Abdullah', 'Kainat', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calAge: function() {
        this.age = 2019 - this.birthYear;
    }
};

abdullah.calAge();
console.log(abdullah);

// this key word is very powerfull and really 
// important. In above code we read birthyear
// directly from object using this from there we 
// went 1 step further that instead of returning // we store
// age right in the object. 

*/

/******************************************
* 24_ coding challenge 4
*/

/*

var mark = {
    fullName: 'Mark',
    mass: 78,
    height: 1.69,
    calBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
    }
};

var john = {
    fullName: 'John',
    mass: 92,
    height: 1.95,
    calBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;   
    }
};

console.log(mark, john);

if (john.calBMI() > mark.calBMI()) {
    console.log(john.fullName + ' has a heigher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a heigher BMI of ' + mark.bmi);
} else {
    console.log('They have the same BMI.');
}

*/

/**************************************
* 26_ loops and iteration
*/

/*

// For loop

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
//...
// i = 9, 9 < 10 true, log i to console, i++
// i = 10, 10 < 10 false, exit the loop!

var abdullah = ['Abdullah', 'khan', 1999, 'designer', false, 'blue', 'red', 'green'];

for (var i = 0; i < abdullah.length; i++) {
    console.log(abdullah[i]);
}

// if we use abdullah.length loop will
// automatically figure out the length of the 
// loop and print it till last element if loop 
// is edited later it will print out all the
// elements.
// but if we use the counter insted of using
// whole lenght than we should also edit the 
// couter after we edit the loop if someone 
// forget to edit counter than the latest edited
// element will not be printed on console.


// While loop
var i = 0;
while (i < abdullah.length) {
    console.log(abdullah[i]);
    i++;
}

*/

/*

// continue and break statement
var abdullah = ['Abdullah', 'khan', 1999, 'designer', false, 'blue', 'red', 'green'];

for (var i = 0; i < abdullah.length; i++) {
    if (typeof abdullah[i] !== 'string') continue; // only sting elements will be 
    // printed and non sting element will not
    // be included
    console.log(abdullah[i]);
}

for (var i = 0; i < abdullah.length; i++) {
    if (typeof abdullah[i] !== 'string') break; // this will break the loop when a non 
    // sting element found in the array. 
    // it will only print the elements untill
    // non sting element is not found
    // as the non sting element founded 
    // in the looop it will break the loop.
    console.log(abdullah[i]);
    
}
    
// looping backwords
for (var i = abdullah.length - 1; i >= 0; i--) {
    console.log(abdullah[i]);
}

*/

/***********************************************
* 27_ Coding challenge number 5
*/

/*

// part 1 

var john = {
    firstName: 'John',
    lastName: 'Smith',
    bills: [124, 48, 268, 180, 42],
    calTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
                
                
            // add results to the corresponding arrays  
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

john.calTips();
// console.log(john);



// Extra part 

var mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    bills: [77, 475, 110, 45],
    calTips: function() {
        this.tips = [];
        this.finalValues = [];
        
        for(var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
                
                
            // add results to the corresponding arrays  
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

function calAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

// [2, 6, 4] -> 0 / 2 / 8 / 12

// Do the calculations
john.calTips();
mark.calTips();
// console.log(john, mark);

john.average = calAverage(john.tips);
mark.average = calAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.firstName + john.lastName + '\' family pays heigher tips, with an average of $' + john.average);
} else if (mark.average > john.average) {
        console.log(mark.firstName + mark.lastName + '\' family pays heigher tips, with an average of $' + mark.average);
}

*/

/*****************************************
* 30_ JavaScript version.
*/

// 1996 changed from LiveScript to JavaScript.
// 1997 ES1 become the 1st version of 
// JavaScript language.
// 2009 ES5 was released with lots of
// new features.
// 2015 ES5/ES2015 was released and it is the
// biggest update to the language ever.
// 2016/2017/2018/2019... released of 
// ES2016/ES2017/ES2018/ES2019.
// ES5 is fully supported for all browsers
// and safe to be used.
// ES6/ES7/ES8 these version are supported in 
// all modern browsers.
// we can convert all these languages into ES5
// by transpilling and polyfilling.
// ES9/ES10 these are sometimes called ESNext.







