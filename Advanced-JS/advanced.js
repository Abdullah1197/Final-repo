// Function constructed

// function constructor: is a pattern for writting a blue print. we always write the function constuctor with a capital lettter as mention below. 
// from line var Person to job; this is called function constructor
// when we use new operator first the brand new empty object is created.
// after that the constructor function is called with the arguments that we spacified.
// in regular function call this variable points to the global object. in this case the new operator takes care that the this variable will not points to the global object but to the empty object which is created by the new operattor.

// global object
//var abdullah = { 
//    name: 'Abdullah',
//    yearOfBirth: 1999,
//    job: 'teacher'
//};  
//
//// function constructor
//var Person = function(name, yearOfBirth, job) {
//    this.name = name;
//    this.yearOfBirth = yearOfBirth;
//    this.job = job;
//   
//} 
//// prototype
//Person.prototype.calAge = function () {
//    console.log(2019 - this.yearOfBirth);
//};
//
//Person.prototype.lastName = 'Smitch';
//
//
//// this is how we create new object using function constructor intenseation. 
//var abdullah = new Person('Abdullah', 1999, 'teacher'); 
//var kainat = new Person('Kainat', 1995, 'designer');
//var mark = new Person('Mark', 1990, 'retired');
//
//abdullah.calAge();
//kainat.calAge();
//mark.calAge();
//
//console.log(abdullah.lastName);
//console.log(kainat.lastName);
//console.log(mark.lastName);



// self practicing 
//Person.prototype.name = function() {
//    console.log(this.name);
//}
//Person.prototype.yearOfBirth = function() {
//    console.log(this.yearOfBirth);
//}
//Person.prototype.job = function() {
//    console.log(this.job);
//}
//
//console.log(abdullah.name);
//console.log(kainat.name);
//console.log(mark.name);
//
//console.log(abdullah.yearOfBirth);
//console.log(kainat.yearOfBirth);
//console.log(mark.yearOfBirth);
//
//console.log(abdullah.job);
//console.log(kainat.job);
//console.log(mark.job);
//
//console.log(this.abdullah);


// Object.create method
//var personProto = {
//    calAge: function() {
//        console.log(2019 - this.yearOfBirth);
//    }
//};
//
//var abdullah = Object.create(personProto);
//
//abdullah.name = 'Abdullah';
//abdullah.yearOfBirth = 1999;
//abdullah.job = 'teacher';
//
//var jane = Object.create(personProto,
//{
//    name: { value: 'Jane' },
//    yearOfBirth: { value: 1995 },
//    job: { value: 'designer' }
//});

// the difference b/w object.create and function constructor method is that the object.create builts an object that inherits  directly from the one that we passed into the 1st argument while on the other hand function constructor the newly created object inherits from the constructor prototype property.

// one of the biggest benefits of the object.create method that its allow us to implements the really complex inherits structure in an easy way that the function constructor bcz its allow us to directly specify which object should be prototype.

//Primitives vs objects.
// we know that the only numbers, strings, booleans and null. variable containing  primitives actually holds the data inside variable itself.
// on object it is very different variables assosiated with objects donot actually contain the object but instead they contain a reference to the place and memory where the object is stored. so again variable deleraed as an object does not have a real copy of the object which is point to that object.

//// Primitives
////var a = 23;
////var b = a;
////a = 46;
////console.log(a);
////console.log(b);
//
//// objects
//var obj1 = {
//    name: 'Khan',
//    age: 20
//};
//
//var obj2 = obj1;
//obj1.age = 30;
//console.log(obj1.age);
//console.log(obj2.age);
//
//// Function // remaining 
//var age = 27;
//var obj = {
//    name: 'Jones',
//    city: 'Multan'
//};
//
//function change(a,b) {
//    a = 30;
//    b.city = 'San Francisco'
//}
//
//change(age, obj);
//console.log(age);
//console.log(obj.city);


// function passing function as arguments

// A function is an instance of the object type and also fuction behaves like any other object and also we can store function in a variable and also we can pass a function as an arument to anothe function and also we can return a function from a function.

//var years = [1990, 1965, 1937, 2005,1998];
//
//function arrayCal(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calAge(el) {
//    return 2019 - el;
//}

//function isFullAge(el) {
//    return el >= 18;
//}
//
//function maxHeartRate(el) {
//    if (el >= 18 && el <= 81) {
//    return Math.round(206.9 - (0.67 * el)); 
//    } else {
//        return -1;
//    }
//}

//var ages = arrayCal(years, calAge);
//var fullAge = arrayCal(ages, isFullAge);
//var rate = arrayCal(ages, maxHeartRate);
//console.log(ages);
//console.log(rate);

// Example
//var f = function() {
//    console.log('Hello');
//};
//var g = function(fn) {
//    console.log('function g');
//    fn();
//}
//g(f);
//
//// Example
//var add = function (a,b) {
//    return a + b;
//};
//var multiply = function(a,b){
//    return a * b;
//};
//var cal = function(num1, num2, callback){
//    return callback(num1, num2);
//};
//
//console.log(cal(2,3, add));

// Function returning functions 

//function interviewQuestion (job) {
//    if (job === 'designer') {
//        return function(name) {
//            console.log(name + ', can you please explain what UX design is?');
//            }
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log('What subject do you teach, ' + name + '?');
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + ', What do you do?');
//        }
//    }
//}
//
//var teacherQuestion = interviewQuestion('teacher');
//var designerQuestion = interviewQuestion('designer');
//
//teacherQuestion('Abdullah');
//designerQuestion('Abdullah');

// example
//function favFood (food) {
//    if (food === 'rice' ) {
//        return function(name) {
//            console.log(name + ', Can you explain which rice you like the most?');
//        }
//    } else if (food === 'burger') {
//        return function(name) {
//            console.log(name + ', Can you explain which burger you like the most?');
//        }
//    } else if (food === 'pizza') {
//        return function(name) {
//            console.log(name + ', Can you explain which pizza you like the most?');
//        }
//    } else if (food === 'chicken') {
//        return function(name) {
//            console.log(name + ', Can you explain which chicken you like the most?');
//        }
//    } else  {
//        return function(name) {
//            console.log(name + ', some other thing')
//        }
//    }
//}
// both are the method to call a function both will work same.
//var x = favFood('driver');
//x('Abdullah');
//
//favFood('pizza')('Abdullah');

// immediatiately invoked function expression IIFE

// write a function and we know that variables define inside the function can not be acccess from the out side scope.

//function game () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);
//}
//game();

//(function () {
//    var score = Math.random() * 10;
//    console.log(score >= 5);    
//})();
//
//(function (goodLuck) {
//    var score = Math.random() * 10;
//    console.log(score >= 5 - goodLuck);    
//})(5);

// closures

//function retirement(retirementAge) {
//    var a = ' years left until retirement.';
//    return function (yearOfBirth) {
//        var age = 2019 - yearOfBirth;
//        console.log((retirementAge - age) + a);
//    }
//}
//
//var retirementUS = retirement(66);
//var retirementGermany = retirement(65);
//var retirementIceland = retirement(67);
//
//retirementUS(1999);
//retirementGermany(1999);
//retirementIceland(1999);

//retirement(66)(1999);

//An inner function has always acccess to the variables and parameters of its outer function, even after the outer function has retured.

//important
// challenge solution 
// by closures we can use 1 inside function insted of using many functions.
//function interviewQuestion (job) {
//    return function (name) {
//        if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//        } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//        } else {
//            console.log('Hello ' + name + ', What do you do?');
//        }
//    }
//}
//
//interviewQuestion('teacher')('Kainat');


// challenge self // repeating function 
//function interviewQuestion (job) {
//    var a = ', can you please explain what UX design is?';
//    var b = 'What subject do you teach, ';
//    var c = ', What do you do?';
//    if (job === 'designer') {
//        return function (name) {
//            console.log(name + a);
//        }
//    } else if (job === 'teacher') {
//        return function(name) {
//            console.log(b + name);
//        }
//    } else {
//        return function(name) {
//            console.log('Hello ' + name + c);
//        }
//    }
//
//}
//var q = interviewQuestion('teacher');
//q('Abdullah');
//var q = interviewQuestion('designer');
//q('Abdullah');
//var q = interviewQuestion('driver');
//q('Abdullah');


//var abdullah = {
//    name: 'Abdullah',
//    age: 20,
//    job: 'teacher',
//    presentation: function(style,timeOfDay) {
//        if(style === 'formal') {
//            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
//        } else if (style === 'friendly') {
//            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//        }
//    }
//}
//var emily = {
//    name: 'Emily',
//    age: 35,
//    job: 'designer'
//};
//
//abdullah.presentation('formal', 'morning');

// when we call a method actually we are bowring a method from abdullah and this variable allows us to do so when we borow a method this variable has no longer be abdullah but it becomes emily.
//abdullah.presentation.call(emily, 'friendly', 'afternoon');

// this is not going to be work because our method does not axpect to receive an array in the input 
//abdullah.presentation.apply(kainat, ['friendly', 'afternoon']);

// Bind method
//bind method is very similier to call method so is also allows us to set the this variable explicitly. however the difference is that bind imidetily call function instead its generate the copy of the function so than we can store it somewhere. it can also usefull we can create function with preset arguments.

//var abdullahFriendly = abdullah.presentation.bind(abdullah, 'friendly');
//
//abdullahFriendly('morning');
//abdullahFriendly('night');
//
//var emilyFormal = abdullah.presentation.bind(emily, 'formal');
//
//emilyFormal('morning');
//
//
//
//
//
//var years = [1990, 1965, 1937, 2005, 2000];
//
//function arrayCal(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calAge(el) {
//    return 2019 - el;
//}
//
//function isFullAge(limit, el) {
//    return el >= limit;
//}
//
//var ages = arrayCal(years,calAge);
//var fullJapan = arrayCal(ages, isFullAge.bind(this, 20));
//console.log(ages);
//console.log(fullJapan);

//var years = [1990, 1965, 1937, 2005,1998];
//
//function arrayCal(arr, fn) {
//    var arrRes = [];
//    for (var i = 0; i < arr.length; i++) {
//        arrRes.push(fn(arr[i]));
//    }
//    return arrRes;
//}
//
//function calAge(el) {
//    return 2019 - el;
//}

//function isFullAge(el) {
//    return el >= 18;
//}

//(function()
//{
//// this is function constructor 
//function Question(question, answers, correct) {
//    this.question = question;
//    this.answers = answers; 
//    this.correct = correct;
//}
//
//Question.prototype.displayQuestion = function() {
//    console.log(this.question);
//    
//    for (var i = 0; i < this.answers.length; i++) {
//        console.log(i + ': ' + this.answers[i]);
//    }
//}
//
//Question.prototype.checkAnswer = 
//    function(ans) {
//    if (ans === this.correct) {
//        console.log('Correct answer!');
//    } else {
//        console.log('Wrong answer. Try again :)');
//    }
//}
//
//var q1 = new Question('Is JavaScript the coolest proramming language in the world?', 
//                     ['Yes','No'],
//                     0);
//
//var q2 = new Question('What is the name of this course\'s teacher?', 
//                
//                ['Jones','Kainat',
//                 'Abdullah'],
//                 2);
//var q3 = new Question ('What does best describe coding?', 
//                      ['boring',
//                      'Hard', 'Fun',
//                      'Tediuos'],
//                      2);
//var questions = [q1, q2, q3];
//var n =Math.floor(Math.random() * questions.length);
//
//questions[n].displayQuestion();
//
//var answer =parseInt(prompt('Please select the correct answer.'));
//
//questions[n].checkAnswer(answer);
//    
//})();


// Expert level
//(function() {
//    function Question(question, answers, correct) {
//        this.question = question;
//        this.answers = answers;
//        this.correct = correct;
//    }
//    Question.prototype.displayQuestion = function() {
//        console.log(this.question);
//        for (var i = 0; i < this.answers.length; i++) {
//            console.log(i + ': ' + this.answers[i]);
//        }
//    }
//    Question.prototype.checkAnswer = function(ans, callback) {
//        var sc;
//        
//        if (ans === this.correct) {
//            console.log('Correct answer!');
//            sc = callback(true);
//        } else {
//            console.log('Wrong answer. Try again :)');
//            sc = callback(false);
//        }
//        
//        this.displayScore(sc);
//    }
//    Question.prototype.displayScore = function(score) {
//        console.log('Your current score is: ' + score);
//        console.log('------------------------------');
//    }
//    
//    
//    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
//                          ['Yes', 'No'],
//                          0);
//    var q2 = new Question('What is the name of this course\'s teacher?',
//                          ['John', 'Micheal', 'Jonas'],
//                          2);
//    var q3 = new Question('What does best describe coding?',
//                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
//                          2);
//    
//    var questions = [q1, q2, q3];
//    
//    function score() {
//        var sc = 0;
//        return function(correct) {
//            if (correct) {
//                sc++;
//            }
//            return sc;
//        }
//    }
//    var keepScore = score();
//    
//    
//    function nextQuestion() {
//        var n = Math.floor(Math.random() * questions.length);
//        questions[n].displayQuestion();
//        var answer = prompt('Please select the correct answer.');
//        if(answer !== 'exit') {
//            questions[n].checkAnswer(parseInt(answer), keepScore);
//            
//            nextQuestion();
//        }
//    }
//    
//    nextQuestion();
//    
//})();




































