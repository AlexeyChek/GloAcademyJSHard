'use strict';
// lesson05-hard

let arr =['115', '22842', '322874', '428244', '54515', '25422', '4454'];

for (let i = 0; i < arr.length; i++) {
  let temp = arr[i].substring(0, 1);
  if (temp === '2' || temp === '4') console.log(arr[i]);
}

// 2.

for (let i = 2; i <= 100; i++) {
  let bool = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      bool = false;
    }
  }
  if (bool) console.log(i, ' - делители этого числа: 1 и ' + i);
}