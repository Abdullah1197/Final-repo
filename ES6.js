// 1
// const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // change code below this line
  
//   const {today, tomorrow } = HIGH_TEMPERATURES;
//   // change code above this line
  
//   // console.log(yesterday) // should be not defined
//   console.log(today); // should be 77
//   console.log(tomorrow); // should be 80

// 2
//   const HIGH_TEMPERATURES = {
//     yesterday: 75,
//     today: 77,
//     tomorrow: 80
//   };
  
//   // change code below this line
    
//   const {today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  
//   // change code above this line
  
//   console.log(highToday); // should be 77
//   console.log(highTomorrow); // should be 80
  
// 3
// const LOCAL_FORECAST = {
//     yesterday: { low: 61, high: 75 },
//     today: { low: 64, high: 77 },
//     tomorrow: { low: 68, high: 80 }
//   };
  
//   // change code below this line
//   const { today: { low: lowToday, high: highToday  }} = LOCAL_FORECAST;
//   // change code above this line
  
//   console.log(lowToday); // should be 64
//   console.log(highToday); // should be 77
 
// 4
// let a = 8, b = 6;
// // change code below this line
// [a, b] = [b, a];
// // change code above this line
// console.log(a); // should be 6
// console.log(b); // should be 8

// 5
// const source = [1,2,3,4,5,6,7,8,9,10];
// function removeFirstTwo(list) {
//   "use strict";
//   // change code below this line
//   const [a,b, ...arr] = list; // change this
//   // change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);
// console.log(arr); // should be [3,4,5,6,7,8,9,10]
// console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];

// 6
// const stats = {
//     max: 56.78,
//     standard_deviation: 4.34,
//     median: 34.54,
//     mode: 23.87,
//     min: -0.75,
//     average: 35.85
//   };
//   // change code below this line
//   const half = ({ max, min }) => (max + min) / 2.0;
//   // change code above this line
//   console.log(stats); // should be object
//   console.log(half(stats)); // should be 28.015
  
// 7
// const result = {
//     success: ["max-length", "no-amd", "prefer-arrow-functions"],
//     failure: ["no-var", "var-on-top", "linebreak"],
//     skipped: ["id-blacklist", "no-dup-keys"]
//   };
//   function makeList(arr) {
//     "use strict";
//     // change code below this line
//     const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
//     // change code above this line
//     return resultDisplayArray;
//   }
//   /**
//    * makeList(result.failure) should return:
//    * [ `<li class="text-warning">no-var</li>`,
//    *   `<li class="text-warning">var-on-top</li>`,
//    *   `<li class="text-warning">linebreak</li>` ]
//    **/
//   const resultDisplayArray = makeList(result.failure);
  
// 8
// const createPerson = (name, age, gender) => {
//     "use strict";
//     // change code below this line
//     return {
//       name,
//       age,
//       gender
//     };
//     // change code above this line
//   };
//   console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object
  
//9
// change code below this line
// const bicycle = {
//     gear: 2,
//     setGear (newGear) {
//       this.gear = newGear;
//     }
//   };
//   // change code above this line
//   bicycle.setGear(48);
//   console.log(bicycle.gear);
  
// 10
/* Alter code below this line */
// class Vegetable {
//     constructor(name) {
//         this.name = name;
//     }
// }
// /* Alter code above this line */

// const carrot = new Vegetable('carrot');
// console.log(carrot.name); // => should be 'carrot'

// 11
/* Alter code below this line */
// class Thermostat {
//     constructor(fahrenheit) {
//       this.fahrenheit = fahrenheit;
//     }
    
//     get temperature() {
//       return (5 / 9) * (this.fahrenheit - 32);
//     }
    
//     set temperature(celsius) {
//       this.fahrenheit = (celsius * 9.0) / 5 + 32;
//     }
//   }
//   /* Alter code above this line */
//   const thermos = new Thermostat(76); // setting in Fahrenheit scale
//   let temp = thermos.temperature; // 24.44 in C
//   thermos.temperature = 26;
//   temp = thermos.temperature; // 26 in C
// console.log(thermos.temperature);

// 12
{/* <html>
  <body>
    <!-- add your code below -->
<script type="module" src="index.js" ></script>
    <!-- add your code above -->
  </body>
</html> */}

// 13
// const uppercaseString = (string) => {
//     return string.toUpperCase();
//   }
//   export { uppercaseString, lowercaseString };
//   const lowercaseString = (string) => {
//     return string.toLowerCase()
//   }

// 14
// import { uppercaseString, lowercaseString } from './string_functions.js';  
// // add code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");

// 15
// import * as stringFunctions from "./string_functions.js";
// // add code above this line
// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");

// 16
// export default function subtract(x, y) {
//     return x - y;
//   }
  
// 17
// import subtract from "./math_functions.js"  
// // add code above this line

// subtract(7,4);

// 18
// const makeServerRequest = new Promise((resolve, reject) => {
    
// })

// 19
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer represents a response from a server
//     let responseFromServer;
  
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {	
//       reject("Data not received");
//     }
//   });
//   console.log(makeServerRequest);

// 20
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = true;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
    
//   });
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
  
// 21
// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to false to represent an unsuccessful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
//   makeServerRequest.then(result => {
//     console.log(result);
//   });
  
//   makeServerRequest.catch(error => {
//     console.log(error);
//   });
  