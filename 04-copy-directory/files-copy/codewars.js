// //фибоначчи

// // const fib = (n) => {
// //     if (n < 2) {
// //         return n;
// //     }

// //     return fib(n - 1) + fib(n - 2);
// // };

// // console.log(fib(6));
// // console.log(fib(10));

// //быстрая сортировка Хоара Quick sort

// // const arr = [-5, 23, 7, 5, 3, -12, -29, 21, 54, 35, 0];

// // function quickSort(arr) {
// //     if (arr.length <= 1) {
// //         return arr;
// //     }

// //     let pivotIndex = Math.floor(arr.length / 2);

// //     let pivot = arr[pivotIndex];

// //     let less = [];

// //     let greater = [];

// //     for (let i = 0; i < arr.length; i++) {
// //         //пропускаем итерацию, если индекс текущей итерации совпадает
// //         //с индексом опорного элемента


// //         if (i === pivotIndex) continue;

// //         //если опорный элемент больше элемента в массиве, добавляем
// //         //этот элемент в массив less

// //         if (arr[i] < pivot) {

// //             less.push(arr[i]);

// //         }
// //         //иначе добавляем его в массив greater
// //         else {
// //             greater.push(arr[i]);
// //         }
// //     }

// //     return [...quickSort(less), pivot, ...quickSort(greater)];
// // }

// // console.log(quickSort(arr));

// //6kyu Length of missing array

// function getLengthOfMissingArray(arrayOfArrays) {

//     if (arrayOfArrays === null || !arrayOfArrays.length || arrayOfArrays.includes(null)) return 0;
//     //map create new array with lengthes of members of arrayOfArrays
//     //sort new array
//     let lengths = arrayOfArrays.map(item => item.length).sort((a, b) => a - b);

//     console.log(lengths);
//     console.log(`array length is ${lengths.length}`);

//     for (let i = 0; i < lengths.length - 1; i++) {
//         if (lengths[i] == null) {
//             console.log(0);
//             }
//          else if (lengths[i + 1] - lengths[i] === 1) {
//               continue;
//           } else if (lengths[i + 1] - lengths[i] === 2) {
//               console.log(lengths[i] + 1);
//           }
//     }
//  };

//  getLengthOfMissingArray([[2, 0, 0, 0, 0, 1, 4, 2],
//     [],
//     [3, 1, 3, 2, 2],
//     [2, 3],
//     [4, 4, 1],
//     [1, 2, 0, 1, 1, 3],
//     [3, 3, 2, 3, 3, 1, 2],
//     [0]]);
//7kyu Isograms
// function isIsogram(str){
//     let newStr = str.toLowerCase();
//     console.log(newStr);
//     for (let i = 0; i < str.length; i++) {
//         //почему j = i + 1??? 
//         for (let j = i + 1; j < str.length; j++) {
//             if (str[i] == str[j]) {
//                 return false;
//             }
//          }
//     }
//   }

//   isIsogram("Dermatoglyphics");
//   isIsogram('aba');

//7kyu Javascript Mathematician

// function calculate(...arga) {
//     return function first(...argb) {
//         return concat(...arga, argb);
//     }
// }

// const res = calculate((5));
// console.log(res(5)(4, 1));

//function explode(s) { 
//   let arr = s.split(''); 
//   let newArray = []; 
//   for (let i = 0; i < arr.length; i++) { 
//      let j = 0; 
//     while (j < arr[i]) { 
//      newArray.push(arr[i]); 
//      j++; 
//     } 
//   } 
//   let str = newArray.join(''); 

//// return str; 
//console.log(str); 
//console.log(typeof(str)); 
// } 

// explode('3012'); 

//Fibonacci номер в последовательности 

//const fibonacci = function Fib(n) { 
//   if (n <= 1) { 
//      return 1; 
//   } 

//      return Fib(n - 1) + Fib(n - 2); 

//} 


//console.log(fibonacci(6)); 
//function createFibnocci(n) { 
//   let fib = [0, 1, 1]; 
//   for (let i = 3; i < n; i++) { 
//      fib.push(fib[i - 1] + fib[i - 2]); 
//   } 
//   console.log(fib); 
//} 

//createFibnocci(10); 

//4 kyu Human readable duration format 

//function brightest(colors){ 
//   const rgb = colors.map(item => { 
//       const r = parseInt(item.slice(1, 3), 16) 
//       const g = parseInt(item.slice(3, 5), 16) 
//       const b = parseInt(item.slice(5, 7), 16) 

//       return Math.max(r, g, b) 
//     }) 

//   const max = Math.max(...rgb); 
//   return colors[rgb.indexOf(max)]; 
// } 

//function brightest(colors){ 
//   const rgb = colors.map(c => { 
//     const r = parseInt(c.slice(1, 3), 16); 
//     console.log(c.slice(1, 3)); 
//     console.log(r); 
//     const g = parseInt(c.slice(3, 5), 16); 
//     console.log(g); 
//     const b = parseInt(c.slice(5, 7), 16); 
//     console.log(b); 

//     console.log(Math.max(r, g, b)); 

//     return Math.max(r, g, b); 
//   }); 

//   console.log(rgb); 

//   //const max = Math.max(...rgb); 

//   //return colors[rgb.indexOf(max)]; 
// } 

//brightest(["#1234FF"]); 

//function brightest(colors){ 
//   const rgb = []; 
//   for (let i = 0; i < colors.length; i++) { 
//      const r = parseInt(colors[i].slice(1, 3), 16) 
//      const g = parseInt(colors[i].slice(3, 5), 16) 
//      const b = parseInt(colors[i].slice(5, 7), 16) 

//      rgb.push(Math.max(r, g, b)); 
//   } 


//   const max = Math.max(...rgb); 
//   return colors[rgb.indexOf(max)]; 
// } 

//function getParticipants(handshakes){ 
//   if(handshakes === 0) { 
//     return 0; 
//   } if (handshakes === 1) { 
//     return 2; 
//   } else { 
//     let d = Math.ceil(Math.sqrt(1 + 4 * handshakes * 2)), 
//        a = Math.ceil((1 + d) / 2), 
//        b = Math.ceil((1 - d) / 2); 

//    return Math.max(a, b); 
//   } 
// } 

//getParticipants(6);

// function formatDuration (seconds) {
//     //1 year is 31536000 seconds
//     //1 day is 86400 seconds

//     let secondsAndMinutesNumbers = [''],
//         Numbers = [''],
//         str = '',
//         yearNumbers = Math.floor(seconds / 31536000),
//         daysNumbers = Math.floor((seconds % 31536000) / 86400),
//         hoursNumbers = Math.floor(((seconds % 31536000) % 86400) / 3600),
//         minutesNumbers = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
//         secondsLeft = seconds % 60;

//     for (let i = 1; i < 60; i++) {
//        Numbers.push(i);
//     }

//     //console.log('arrays is '+ Numbers);
//     if (minutesNumbers > 0 && minutesNumbers < 60 && minutesNumbers !== 1) {
//        str += `${Numbers[secondsLeft]} minutes`;
//     } else {
//        str += `${Numbers[secondsLeft]} minute`;
//     }

//     if (secondsLeft > 0 && secondsLeft < 60 && secondsLeft !== 1) {
//        str += `${Numbers[secondsLeft]} seconds`;
//     } else {
//        str += `${Numbers[secondsLeft]} second`;
//     }

//     console.log(str);
//   }

//   formatDuration(236598);
//   formatDuration(61);

//4 kyu  Human readable duration format
// function formatDuration (seconds) {
//    //1 year is 31536000 seconds
//    //1 day is 86400 seconds
//    let object = {};

//    let secondsAndMinutesNumbers = [''],
//        Numbers = [''],
//        str = '',
//        yearNumbers = Math.floor(seconds / 31536000),
//        daysNumbers = Math.floor((seconds % 31536000) / 86400),
//        hoursNumbers = Math.floor(((seconds % 31536000) % 86400) / 3600),
//        minutesNumbers = Math.floor((((seconds % 31536000) % 86400) % 3600) / 60),
//        secondsLeft = Math.floor((((seconds % 31536000) % 86400) % 3600) % 60);

//    // for (let i = 1; i < 60; i++) {
//    //    Numbers.push(i);
//    // }

//    //console.log('arrays is '+ Numbers);
//    if (yearNumbers === 0 && daysNumbers === 0 && hoursNumbers === 0 && minutesNumbers === 0 && secondsLeft === 0) {
//       return 'now';
//    }
//    if (yearNumbers > 0 && yearNumbers !== 1 && daysNumbers > 0) {
//       str += `${yearNumbers} years, `;
//    } else if( yearNumbers === 1) {
//       str += `${yearNumbers} year, `;
//    }

//    if (daysNumbers > 1 && daysNumbers < 365  && hoursNumbers > 0 && minutesNumbers !== 0 && secondsLeft !== 0) {
//       str += `${daysNumbers} days, `;
//    } else if(daysNumbers === 1 && hoursNumbers !== 0 && minutesNumbers !== 0 && secondsLeft !== 0) {
//       str += `${daysNumbers} day, `;
//    } else if(daysNumbers === 1 && hoursNumbers === 0 && minutesNumbers === 0 && secondsLeft === 0) {
//       str += `${daysNumbers} day`;
//    } else if(daysNumbers === 1 && (hoursNumbers === 0 || minutesNumbers === 0 || secondsLeft === 0)) {
//       str += `${daysNumbers} day and `;
//    } else if(daysNumbers === 1 && hoursNumbers == 0 && minutesNumbers > 0) {
//       str += `${daysNumbers} day and`;
//    } else if(daysNumbers === 1 && hoursNumbers !== 0 && minutesNumbers === 0 && secondsLeft === 0) {
//       str += `${daysNumbers} day and `;
//    } else if(daysNumbers === 1 && hoursNumbers === 0 && minutesNumbers === 0 && secondsLeft !== 0) {
//       str += `${daysNumbers} day and `;
//    }

//    if (hoursNumbers > 0 && hoursNumbers < 24 && hoursNumbers !== 1 && minutesNumbers > 0) {
//       str += `${hoursNumbers} hours, `;
//    } else if (hoursNumbers > 0 && hoursNumbers < 24 && hoursNumbers !== 1 && minutesNumbers === 0 && secondsLeft !==0) {
//       str += `${hoursNumbers} hours and `;
//    } else if(hoursNumbers === 1 && minutesNumbers !== 0 && secondsLeft !== 0) {
//       str += `${hoursNumbers} hour, `;
//    } else if(hoursNumbers > 0 && hoursNumbers < 24 && hoursNumbers !== 1 && minutesNumbers === 0 && secondsLeft === 0) {
//       str += `${hoursNumbers} hours`;
//    }

//    if (minutesNumbers > 0 && minutesNumbers < 60 && minutesNumbers !== 1 && secondsLeft > 0) {
//       str += `${minutesNumbers} minutes and `;
//    } else if (minutesNumbers > 0 && minutesNumbers < 60 && minutesNumbers !== 1 && secondsLeft === 0) {
//       str += `${minutesNumbers} minutes`;
//    } else if (minutesNumbers === 1 && secondsLeft > 0) {
//       str += `${minutesNumbers} minute and `;
//    } else if (minutesNumbers === 1 && secondsLeft === 0) {
//       str += `${minutesNumbers} minute`;
//    }

//    if (secondsLeft > 0 && secondsLeft < 60 && secondsLeft !== 1) {
//       str += `${secondsLeft} seconds`;
//    }else if (secondsLeft === 1) {
//       str += `${secondsLeft} second`;
//    } else if (secondsLeft === 0) {
//       str = str;
//    } else if (secondsLeft === 0) {
//       str = str;
//    }

//    console.log(str);
// }

//  formatDuration(3600 * 24 );
//  formatDuration(1);
//  formatDuration(3970);
//  formatDuration(9970);
// //  formatDuration(3463176);
// //  formatDuration(1);




// console.log(message);

// let message = 'hello';

// function recycle(array) {
//    let output = [[], [], [], []];
//    array.forEach(item => {
//       if (item['material'] === 'paper' || item['secondMaterial'] === 'paper') {
//             output[0].push(item['type']);
//          } if (item['material'] === 'glass' || item['secondMaterial'] === 'glass') {
//             output[1].push(item['type']);
//          } if (item['material'] === 'organic' || item['secondMaterial'] === 'organic') {
//             output[2].push(item['type']);
//          } if (item['material'] === 'plastic' || item['secondMaterial'] === 'plastic') {
//             output[3].push(item['type']);
//          }
//    });

//    return output;
//  }

// function recycle(array) {
//    let output = [[], [], [], []];
//    array.forEach(item => {
//       if (item.material === 'paper' || item.secondMaterial === 'paper') {
//             output[0].push(item.type);
//          } if (item.material === 'glass' || item.secondMaterial === 'glass') {
//             output[1].push(item.type);
//          } if (item.material === 'organic' || item.secondMaterial === 'organic') {
//             output[2].push(item.type);
//          } if (item.material === 'plastic' || item.secondMaterial === 'plastic') {
//             output[3].push(item.type);
//          }
//    });

//    console.log(output);
//  }

//  recycle([
//    {type: 'rotten apples', material: 'organic'},
//    {type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic'},
//    {type: 'wine bottle', material: 'glass', secondMaterial: 'paper'},
//    {type: 'amazon box', material: 'paper'},
//    {type: 'beer bottle', material: 'glass', secondMaterial: 'paper'}
//  ]);

//7 kyu My Language Skills

// function myLanguages(results) {
//    let resultNumber = [],
//        res = [];
//    for (let key in results) {
//       if (results[key] >= 60) {
//          resultNumber.push(results[key]);
//       }
//    }

//    resultNumber.sort((a, b) => b - a);

//    resultNumber.forEach(item => {
//       for (let key in results) {
//          if (item === results[key]) {
//             res.push(key);
//          }
//       }
//    });

//    return res;
// }

// function myLanguages(results) {
   //получаем массив ключей, которые:
   //1. отсортировали сначала обект ключи больше либо равны 60, потом сортировка от большего к меньшему
//    return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
//  }

// const obj = {"Java": 10, "Ruby": 80, "Python": 65};

// console.log(Object.keys(obj));

//7 kyu Unlucky days

// function unluckyDays(year) {

// //    new Date(datestring)
// //    Если единственный аргумент – строка, используется вызов Date.parse (см. далее) для чтения даты из неё.

// //    new Date(year, month, date, hours, minutes, seconds, ms)

// // getDay()
// // Получить номер дня в неделе. Неделя в JavaScript начинается с воскресенья, так что результат будет числом от 0(воскресенье) до 6(суббота).
//    let fridays = 0;
//    for (let i = 0; i < 12; i++) {
//       if(new Date(year, i, 13).getDay() === 5) {
//          fridays++;
//       }
//    }

//    return fridays;

//  }

// unluckyDays(2819);

// 6kyu Can you keep a secret?

// function createSecretHolder(secret) {
//    return obj = {
//       getSecret: function() {
//          return secret;
//       },
//       setSecret: function(a) {
//          secret = a;
//       }
//    }
// }

// createSecretHolder();

// 6 kyu Closures and Scopes

// function createFunctions(n) {
//    var callbacks = [];

//    for (let i = 0; i < n; i++) {
//      callbacks.push(function() {
//        return i;
//      });
//    }

//    return callbacks;
//  }

// 6 kyu Run-length encoding

// let runLengthEncoding = function(str) {
//    str = str.split('');
//    console.log(str);
//    let obj = {}, count = 1, res = [];
//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === str[i + 1]) {
//          count++;
//       } else {
//          res.push([count, str[i]]);
//          count = 1;
//       }
//    }

//    console.log(res);
//  }

//  runLengthEncoding("hello world!");
//  runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW");

// 7 kyu The Coupon Code

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//    // const date = new Date(currentDate);
//    // console.log(date);
//    // // console.log(Date.parse(currentDate));
//    //получаем миллисекунды currentDate
//    // console.log(Date.parse(date));
//    // console.log(expirationDate);
//   if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)) {
//    return true;
//   } else {
//    return false;
//   }
// }

// checkCoupon('123','123','September 5, 2014','October 1, 2014');
// checkCoupon('123a','123','September 5, 2014','October 1, 2014');

// 6kyu Angle Between Clock Hands

function handAngle (...date) {
   let data = new Date();
	data.setMinutes(date[1]);
	data.setHours(date[0]);
   // console.log(data);
   let hours = data.getHours() % 12;
	let hoursHand = hours * 30 + data.getMinutes() / 12 * 6; //часовая стрелка в градусах от нуля
   let minutesHand = data.getMinutes() * 6;
   console.log(hoursHand)
   console.log(minutesHand);
   let angle = Math.min(Math.abs(360 - Math.abs((hoursHand - minutesHand))), Math.abs(hoursHand - minutesHand));
   console.log(angle);
   console.log((angle * Math.PI) / 180);
}

handAngle(6, 0);
// handAngle(0, 45);








