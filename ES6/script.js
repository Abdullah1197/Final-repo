////////////////////////////////
// Lecture: let and const       
////////////////////////////////

//ES5
//var name5 = 'Abdullah khan';
//var age5 = 23;
//name5 = 'Abdullah mughal';
//console.log(name5);
//
//// ES6
//const name6 = 'Abdullah khan';
//let age6 = 23;
//name6 = 'Abdullah mughal';
//console.log(name6);
//

// ES5
// In ES5,the variables deleared with var can access the variables within the function.
// In ES5, when we console.log the variables which is not deleare it then we will have undifined 
//function driverLicence5(passedTest) {
//    
//    if (passedTest) {
//        console.log(firstName); // undifined 
//        var firstName = 'John';
//        var yearOfBirth = 1990;
//    }
//    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//}
//
//driverLicence5(true);


// ES6

// probelm
//function driverLicence6(passedTest) {
//    
//    if (passedTest) {
//        let firstName = 'John';
//        const yearOfBirth = 1990;
//        }
//            console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//
//}
//
//driverLicence6(true);

// In ES6, the variables deleared with let and const are not function scoped but blocked scope.
// so what is block scoped? Ans: block is simply all the code that is raped between any braces

// solution
// we can deleare let ouside the block scope and can define inside the block scope.
// but we can not deleare const outside the block scope and define inside the block scope but we can deleare and define out side the block scope like bellow.
// In ES6, we can not use the variables before it was deleared it gives an error.this happens bcz of temperal dead zone.
// it means we can not access the variables before its declearation
//function driverLicence6(passedTest) {
//    // console.log(firstName); // error. 
//    let firstName;    
//    const yearOfBirth = 1990;
//    if (passedTest) {
//        firstName = 'John';
//        
//        }
//            console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
//
//}
//
//driverLicence6(true);

// In ES6, when we deleared i to 23 then we add a for loop and than we deleare i to 0 so they both are the different one when we console.log the for loop we will get the values from 0 to 4 as we want but when we consol.log i outside the foor loop we will have the same value as we define in the start like 23.
//let i = 23;
//
//for(let i = 0; i < 5; i++) {
//    console.log(i);
//}
//
//console.log(i);

// In ES5, when we deleared i to 23 and than add a for loop and than we print the values of for loop than we will have the values from 0 44 but the value of i now is 5 becaues it is increased to 5 than we print the value of i outside the for loop than we will have i = 5 because it is now 5 not 23. Because the value of i is ove wriiten to the for loop.
//var i = 23;
//
//for(var i = 0; i < 5; i++) {
//    console.log(i);
//}
//
//console.log(i);

/////////////////////////////////////
// Lecture: Blocks and IIFEs         
/////////////////////////////////////

// ES6
//{
//    const a = 1;
//    let b = 2;
//    var c = 3;
//}

//console.log(a + b); // we can not access the variables outside the block scope using let and const we will get an error.
//console.log(c); // we can access c because for using var it doesnot matter the variable is in the block scope or not we will get the answer.

// ES5
//(function() {
//    var c = 3;
//})();
//console.log(c);


/////////////////////////////////////
// Lecture: Strings                   
/////////////////////////////////////

//let firstName = 'John';
//let lastName = 'Smith';
//const yearOfBirth = 1998;
//function calAge(year) {
//    return 2019 - year;
//}
//
//// ES5
//console.log('This is ' + firstName + ' ' + lastName + '. He was born is ' + yearOfBirth + '. Today, he is ' + calAge(yearOfBirth) + ' years old.');
//
//// ES6
//console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calAge(yearOfBirth)} years old.`);
//
//const n = `${firstName} ${lastName}`;
//console.log(n.startsWith('j'));
//console.log(n.endsWith('t'));
//console.log(n.includes('oh'));
//console.log(firstName.repeat(5)); //5 times john will print without spaces
//console.log(`${firstName} `.repeat(5)); //5 times john will print with spaces


/////////////////////////////////////
// Lecture: Arrow functions                   
/////////////////////////////////////


//const years = [1990, 1965, 1982, 1937];
//
//// ES5
//var ages5 = years.map(function(el) {
//    return 2019 - el;
//});
//console.log(ages5);
//
//// ES6
//let ages6 = years.map(el => 2019 - el); // for 1 argument 
//console.log(ages6);
//
//ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`); // for 2 arguments we use pranthes 
//console.log(ages6);
//
//ages6 = years.map((el, index) => {  // if we want to code more lines we will use braces than write our code than at the end we will put return.
//   const now = new Date().getFullYear();
//    const age = now - el;
//    return `Age element ${index + 1}: ${age}.`
//});
//console.log(ages6);

/////////////////////////////////////
// Lecture: Arrow functions 2                   
/////////////////////////////////////

// ES5
//var box5 = {
//    color: 'green',
//    position: 1,
//    clickMe: function() {
//        
//        var self = this;
//        document.querySelector('.green').addEventListener('click', function() {
//           var str = 'This is Box number ' + self.position + ' and it is ' + self.color;
//            alert(str);
//        });
//    }
//}
//box5.clickMe();

// ES6
//const box6 = {
//    color: 'green',
//    position: 1,
//    clickMe: function() {
//        
//        document.querySelector('.green').addEventListener('click', () => {
//           var str = 'This is Box number ' + this.position + ' and it is ' + this.color;
//            alert(str);
//        });
//    }
//}
//box6.clickMe();

// ES5
//function Person(name) {
//    this.name = name;
//}

//Person.prototype.myFriends5 = function(friends) {
//    var arr = friends.map(function(el) {
//       return this.name + ' is friends with ' + el; 
//    }.bind(this));
//    console.log(arr);
//}
//var friends = ['Bob', 'Jane', 'Mark'];
//new Person('John').myFriends5(friends);

// ES6
//Person.prototype.myFriends6 = function(friends) {
//    var arr = friends.map(el => `${this.name}  is friends with ${el}`);
//    console.log(arr);
//}
//new Person('Mike').myFriends6(friends);


/////////////////////////////////////
// Lecture: Destructuring                  
/////////////////////////////////////

// ES5
//var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
//const [name, age] = ['John', 26];
//console.log(name);
//console.log(age);
//
//const obj = {
//    firstName: 'John',
//    lastName: 'Smith'
//};
//
//const {firstName, lastName} = obj;
//console.log(firstName);
//console.log(lastName);
//
//const {firstName: a, lastName: b} = obj;
//console.log(a);
//console.log(b);
//
//
//
//function calAgeRet(year) {
//    const age = new Date().getFullYear() - year;
//    return [age, 65 - age];
//    }
//const [age2, retirement] = calAgeRet(1999);
//console.log(age2);
//console.log(retirement);


/////////////////////////////////////
// Lecture: Arrays                  
/////////////////////////////////////

//const boxes = document.querySelectorAll('.box');
//
//// ES5
//var boxesArr5 = Array.prototype.slice.call(boxes);
//boxesArr5.forEach(function(cur) {
//    cur.style.backgroundColor = 'dodgerblue';
//});
//
//// ES6
//const boxesArr6 = Array.from(boxes);
//Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES5 for loop
//for(var i = 0; i < boxesArr5.length; i++) {
//    
//    if(boxesArr5[i].className === 'box blue') {
//        continue;
//    } else {
//        boxesArr5[i].textContent = 'I changed to blue!';
//    }
//}



// ES6 for loop
//for (const cur of boxesArr6) {
//    if(cur.className.includes('blue')) {
//        continue;
//    }
//  cur.textContent = 'I changed to blue!';   
//}

// Array methods
//ES5

//var ages = [12, 17, 8, 21, 14, 11];
//var full = ages.map(function(cur) {
//    return cur >= 18;
//});
//console.log(full);
//console.log(full.indexOf(true));
//console.log(ages[full.indexOf(true)]);
//
//// ES6
//console.log(ages.findIndex(cur => cur >= 18));
//console.log(ages.find(cur => cur >=18));























