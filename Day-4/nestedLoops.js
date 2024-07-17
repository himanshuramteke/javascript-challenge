//Activity-4

//Task-7[Pattern printing]

/*
output
*
**
***
****
*****
*/

let n = 5;
for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= row; col++) {
        str += "*";
    }
    console.log(str);
}

//Activity-5[Loop control statements]
//Task-8

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log(i);
}
  
//Task-9

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;
    }
    console.log(i);
}