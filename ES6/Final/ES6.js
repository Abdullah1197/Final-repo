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


/////////////////////////////////////
// Lecture: The Spread operator                  
/////////////////////////////////////

//function addFourAges (a, b, c, d) {
//    return a + b + c + d;
//}
//
//var sum1 = addFourAges(18, 30, 12, 21);
//console.log(sum1);
//
//// ES5
//var ages = [18, 30, 12, 21];
//var sum2 = addFourAges.apply(null, ages);
//console.log(sum2);
//
//// ES6
//const sum3 = addFourAges(...ages);
//console.log(sum3);
//
//const familySmith = ['John', 'Jane', 'Mark'];
//const familyMiller = ['Mary', 'Bob', 'Ann'];
//const bigFamily = [...familySmith, 'lily', ...familyMiller];
//console.log(bigFamily);
//
//// changing text color of boxes
//const h = document.querySelector('h1');
//const boxes = document.querySelectorAll('.box');
//const all = [h, ...boxes];
//
//Array.from(all).forEach(cur => cur.style.color = 'purple');

/////////////////////////////////////
// Lecture: Rest Parameter                  
/////////////////////////////////////

//// ES5
//function isFullAge5() {
////    console.log(arguments);
//      var argArr = Array.prototype.slice.call(arguments);
//    argArr.forEach(function(cur) {
//        console.log((2016 - cur) >= 18);
//    })
//}
//
////isFullAge5(1990, 1999, 1965);
////isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
//// ES6
//function isFullAge6(...years) {
//    years.forEach(cur => console.log((2016 - cur) >= 18));
//}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// the big difference b/w spread operator and rest parameter is actually the place in which we use each of them.The spread operator is used in the function call and the rest operator is used in the function deleration to accept an orbetarory number of parameters 


//// ES5
//function isFullAge5(limit) {
////    console.log(arguments);
//      var argArr = Array.prototype.slice.call(arguments, 1);
//    argArr.forEach(function(cur) {
//        console.log((2016 - cur) >= limit);
//    })
//}
//
////isFullAge5(1990, 1999, 1965);
////isFullAge5(1990, 1999, 1965, 2016, 1987);
//
//
//// ES6
//function isFullAge6(limit, ...years) {
//    years.forEach(cur => console.log((2016 - cur) >= limit));
//}
//isFullAge5(16, 1990, 1999, 1965, 2016, 1987);

/////////////////////////////////////
// Lecture: Default parameters                  
/////////////////////////////////////

// ES5
//function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//    
//    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
//    nationality === undefined ? nationality = 'american' : nationality = nationality;
//    
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//}
//var john = new SmithPerson('John', 1990);
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

// ES6
//function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'ameican') {
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.yearOfBirth = yearOfBirth;
//    this.nationality = nationality;
//    
//}
//
//var john = new SmithPerson('John', 1990);
//var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


/////////////////////////////////////
// Lecture: Maps                  
/////////////////////////////////////

//const question = new Map();
//question.set('question', 'What is the offical name of the latest major JavaScript version?'); 
//question.set(1, 'ES5');
//question.set(2, 'ES6');
//question.set(3, 'ES2015');
//question.set(4, 'ES7');
//question.set('correct', 3);
//
//question.set(true, 'Correct Answer :D');
//question.set(false, 'Wrong answer try again!');

//console.log(question.get('question'));
////console.log(question.size);
//
//if(question.has(4)) {
//  //question.delete(4);
//console.log('Answer 4 is here')
//}

//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

//for (let [key, value] of question.entries()) {
//
//    if (typeof(key) === 'number') {
//        console.log(`Answer ${key}: ${value}`);
//    }
//}
//const ans = parseInt(prompt('Write the correct answer'));
//
//console.log(question.get(ans === question.get('correct')));

// we can use anything as keys whichopen a lot of possibilites as we saw with above example. 
// bcz maps are iteable and making it very easy to loop through them and to manipulate data  with them. 
// its bcz its very easy to get the size of the map using the size property and thatcan also very handy. 
// bcz we can easily add and remove data from a map.
// so all of these are strong arguments in chosing maps over objects if you wana built hash maps.


/////////////////////////////////////
// Lecture: Classes                  
/////////////////////////////////////


//// ES5
//var Person5 = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calAge = function() {
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//var john5 = new Person5('John', 1990, 'teacher');
//
//// ES6
//class Person6 {
//    constructor (name, yearOfBirth, job) {
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calAge() {
//        var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//    }
//    
//    static greeting() {
//        console.log('Hey there!');
//    }
//}
//
//const john6 = new Person6('John', 1990, 'teacher');
//
//Person6.greeting();

// class defination are not hoisted so unlike function constructors we need to first implement a class and only later in our code we can start using it.
// we can only add methods to classes but not properties but not thats a problem at all bcz inheriting properties through the object instenses is not a best practice at all so thats way this rule is now really inforce here in calsses.  

/////////////////////////////////////
// Lecture: Classes and subclasses                 
/////////////////////////////////////


//// ES5
//var Person5 = function (name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//}
//
//Person5.prototype.calAge = function() {
//    var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//}
//
//var Athlete5 = function(name, yearOfBirth, job, olymicGames, medals) {
//    Person5.call(this, name, yearOfBirth, job);
//    this.olymicGames = olymicGames;
//    this.medals = medals;
//} 
//
//
//Athlete5.prototype = Object.create(Person5.prototype);
//
//Athlete5.prototype.wonMedal = function() {
//    this.medals++;
//    console.log(this.medals);
//}
//
//var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
//
//johnAthlete5.calAge();
//johnAthlete5.wonMedal();
//
//// ES6
//class Person6 {
//    constructor (name, yearOfBirth, job) {
//        this.name = name;
//        this.yearOfBirth = yearOfBirth;
//        this.job = job;
//    }
//    
//    calAge() {
//        var age = new Date().getFullYear() - this.yearOfBirth;
//    console.log(age);
//    }
//    
//}
//
//class Athlete6 extends Person6 {
//    constructor(name, yearOfBirth, job, olymicGames, medals) {
//        super(name, yearOfBirth, job);
//        this.olymicGames = olymicGames;
//        this.medals = medals;
//    }
//    wonMedals() {
//        this.medals++;
//        console.log(this.medals);
//    }
//}
//const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
//
//johnAthlete6.wonMedals();
//johnAthlete6.calAge();


// coding challenge

//
//class Element { // parent class with 2 parameters
//    constructor (name, buildYear) {
//        this.name = name;
//        this.buildYear = buildYear;
//    }
//}
//
//class Park extends Element { // sub class or child class of element with 4 parameters
//    constructor (name,buildYear, area, numTrees) {
//        super(name, buildYear); // calling parent class
//        this.area = area; 
//        this.numTrees = numTrees;
//    }
//    treeDensity() { 
//        const density = this.numTrees / this.area;
//        console.log(`${this.name} has a tree density of ${density} trees per squre km.`);
//    }
//}
//
//class Street extends Element { // another child class of element
//    constructor (name, buildYear, length, size = 3) {
//        super (name, buildYear);
//        this.length = length;
//        this.size = size;
//    }
//    classifyStreet () { // map method 
//        const classification = new Map();
//        classification.set(1, 'tiny');
//        classification.set(2, 'small');
//        classification.set(3, 'normal');
//        classification.set(4, 'big');
//        classification.set(5, 'huge');
//        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
//        
//    }
//}
//
//const allParks = [new Park('Green Park', 1987, 0.2, 215), // array of all 3 parks
//                  new Park('National Park', 1894, 2.9, 3541),
//                  new Park('Oak Park', 1953, 0.4, 949)];
//
//const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), // array of all 4 street
//                    new Street('Evergreen Street', 2008, 2.7, 2),
//                    new Street('4th Street', 2015, 0.8),
//                    new Street('Sunset Boulevard', 1982, 2.5, 5)];
//
//function cal(arr) {
//    
//    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);
//    
//    return [sum, sum / arr.length];
//    
//}
//
//
//function reportParks(p) {
//    
//    console.log('--------PARKS REPORT--------');
//    // Density
//    p.forEach(el => el.treeDensity());
//    
//    // Average age
//    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//    const [totalAge, avgAge] = cal(ages);
//    
//    console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
//    
//    // Which park has more than 1000 trees
//    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//    console.log(`${p[i].name} has more than 1000 trees.`);
//}
//
//function reportStreet(s) {
//    
//    console.log('--------STREET REPORT--------');
//    
//    // Total and average length of the town's street
//    const [totalLength, avgLength] = cal(s.map(el => el.length));
//    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
//    
//    
//    // classify sizes
//    s.forEach(el => el.classifyStreet());
//}
//
//reportParks(allParks);
//reportStreet(allStreets);