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
