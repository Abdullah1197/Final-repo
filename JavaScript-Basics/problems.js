/////////////////////////////////
// Date time and day

/*
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();

var day = today.getDay();

var daylist =
["Sunday",
 "Monday",
 "Tuesday",
 "Wednesday ",
 "Thursday",
 "Friday",
 "Saturday"];
 
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? " PM ":" AM ";

if(dd<10) {
    dd='0'+dd;
} if(mm<10) {
    mm='0'+mm;
} 

today = dd+'-'+mm+'-'+yyyy; 

hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand===' PM ')   { 
if (minute===0 && second===0)  { 
hour=12;
prepand=' Noon';
} else { 
  hour=12;
  prepand=' PM';
  } 
} if (hour===0 && prepand===' AM ') { 
  if (minute===0 && second===0)
  { 
hour=12;
prepand=' Midnight';
} else { 
    hour=12;
    prepand=' AM';
  } 
} 
console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
console.log("Today is : " + daylist[day] + ".");
console.log(today);

*/

///////////////////////////////////
// Area of triangle

/*

var length1 = 5;
var length2 = 6;
var length3 = 7;
var g = .5;

var area = (length1 + length2 + length3) * g;
console.log(area);

*/
console.log('---------------------------');
for (var year = 2014; year <= 2099; year++)
    {
    var d = new Date(year, 0, 1);
    if ( d.getDay() === 0 )
        console.log("1st January is being a Sunday  "+year);
    }
console.log('----------------------------');

// Get a random integer from 1 to 10 inclusive
console.log('---------------------------');

const num = Math.ceil(Math.random() * 10);
console.log(num);
 const gnum = prompt('Guess the number between 1 and 10 inclusive');
 if (gnum == num)
   console.log('Matched');
  else
   console.log('Not matched, the number was '+gnum);
   
console.log('---------------------------');



































