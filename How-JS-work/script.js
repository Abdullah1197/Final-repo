//3_ How javaScript code is executed?
// A javascript engine is a program that       // execute javascript code. There are many
// others engine.
// in first step our code is passed by a Parser
// which mean Parser knows the javascript rules
// and Parser read the code line by line. If
// there is a mistake it through an error and
// stop execution but if all the syntax is
// correct the program goes on. 
// After checking everything is alright than
// parser produces a data structure known as
// the Abstract Syntax Tree. Which is after
// translated into machine code. Now is code is
// not actually  a javascript code but it is a
// machine code which can be executed by
// machine processor. 

// Execution context and execution stack.
// Execution context is always a global
// context.
// Execution context is where the piece of code
// is executed. In global context all the code
// that is not in side a function is executed. 

// There are two step.
// 1. Creation phase
//          A) Creation of the variable
//             object(VO).
//          B) Creation of the scope chain.
//          C) Determine value of the ‘this’
//             variable.

//   2. Execution phase
//           A) The code of the function that
//              generated
//              Current execution context Is
//              ran line by line.
 
// 1. The argument object Is created,
// containing all the arguments that were
// passed into the function.
// 2. Code Is scanned for function declaration:
// for each function, a property Is created In
// the variable object, pointing to the
// function.
// 3. Code Is scanned for variable declaration: // for each variable, a property Is created In // the variable object and set to undefined. 

// The point 2 and 3 are called HOISTING.

// Functions are already defined before the
// execution phase start while variables are
// set up to undefined, and only be defined In
// the execution phase.
// The execution phase comes just after the
// creation phase. 

////////////////////////////////////
// 6_ HOISTING

/*

//Variables.
calculateAge(1999);

function calculateAge(year) {
    console.log(2019 - year); 
}    
    // this is function deleration and this case work for both cases if we call a function before or after deleare function.
    
    // Hoisting only work for function
    // deleration.


// retirement(1999);
var retirement = function(year) {
    console.log(65 - (2019 - year)); 
}    
    // this is function expression and for this if we call function above from function expression so it will not work.


// Variables

console.log(age);
var age = 23; // defined in gloabal executation               // context

// if we use variable before the decleration than it will become undifined and this how hoisting work with variables.

function foo() {
    var age = 65; // define in the function
    console.log(age); // calling age in the fun
}
foo(); // call foo function 
console.log(age); // calling age which is                         // defined in the global                       // context

// in hoisting we cannot print any thing which
// is deleared after the printing command.
// we should always give the printing command 
// after we deleare.

// the most important use case for the hoisting 
// is not even variables but its fact that we 
// cannot use functions deleration before we 
// actully deleare them in code  

*/


/************************************
*** 7_The Scoping and Scope chain ***
*************************************/

// Scoping actully answers the question 
// where we can access a certain variable.

// javaScript with each new function creates
// a scope that is the environment in which the 
// variables are defined are accessible.

// in many others programming languages 
// the scope is created by if blocks for blocks  // and while blocks but not in javaScript.

// In javaScript only way to create a scope is  // to write a new function.
// and this is very important in javaScript.

// in javaScript we have also the 
// lexical scoping. 

// lexical means where something is written
// in the code and its about the position 
// of something in our code.

// lexical scoping means that a function that
// is lexically with in an other function which 
// means that is written inside of another
// function get access of the scope of the 
// outer function also called the parent
// function and with that it also get the 
// access to the variables and the function
// the parent function defines.

/*
// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        console.log(a + b+ c);
    }
}

// this code is working because of scoping 
// chain as when a is not found in the function 
// it looks than to it parent funccion and than 
// it found the value of a and this is for the 
// same of others. 

*/

/*
// Example to show the difference b/w executation stack and scope chain.
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();
    
    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'John';
    console.log(c); // third function can not access the c because it is in the different scope.
    console.log(a + d); // third function can only access the a and d because it is in the same scope.
}
*/

/************************************
********** 8_ This keyword **********
*************************************/

// in regular function this keyword points at    // the global object.
// in method call that function is attched to
// an object, this variable point to the object // that is calling the method. 
// this is important point that the this 
// keyword is not assigned a value until a 
// function where it is defined is actually 
// called.

// so again even though it appears this variable refers to the object where it is defined but this variable technacilly only assigned value as soon as an object called method.

//practice
//console.log(this);
/*
calAge(1999);

function calAge(year) {
    console.log(2019 - year);
    console.log(this);
}

*/

/*
var abdullah = {
    name: 'Abdullah',
    yearOfBirth: 1999,
    calAge: function() {
            console.log(this);        console.log(2019 - this.yearOfBirth);
        */
        /*
        function innerFunction() {
            console.log(this);       
        }
        innerFunction();
        */
/*    }   
}
abdullah.calAge();

var kainat = {
    name: 'Kainat',
    yearOfBirth: 1995
};
kainat.calAge = abdullah.calAge;
kainat.calAge();

*/