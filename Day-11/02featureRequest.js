//1]Promise Creation Script: Write a script that demonstrates creating and handling promise, including both resolved and rejected.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1: Promise resolved after 2 seconds");
    }, 2000);
});
  
  promise1.then((message) => {
    console.log(message);
});
const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Task 2: Promise rejected after 2 seconds");
    }, 2000);
});
  
  promise2.catch((error) => {
    console.error(error);
});
    

//2]Promise Chaining Script: Create a script that chains multiple promises and logs messages in specific sequence.

const fetchData1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3: Data fetched from server 1");
    }, 1000);
});
  
  const fetchData2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3: Data fetched from server 2");
    }, 2000);
});
  
  const fetchData3 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 3: Data fetched from server 3");
    }, 3000);
});
  
  fetchData1
    .then((message) => {
      console.log(message);
      return fetchData2;
})
    .then((message) => {
      console.log(message);
      return fetchData3;
})
    .then((message) => {
      console.log(message);
});

//3]Async/Await Script: Write a script that uses async/await to handle promises and includes error handling with try-catch.

async function asyncFunction2() {
    const promise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Task 5: Promise rejected");
      }, 2000);
    });
  
    try {
      const result = await promise;
      console.log(result);
    } catch (error) {
      console.error(error);
    }
}
  
asyncFunction2();
  

//4]API fetch Script:Create a script that fetches data from a public API using both promises and async/await, and logs the response data.

async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log("Task 7: Data fetched using async/await", data);
    } catch (error) {
      console.error(error);
    }
}
  
fetchData();

//5]Concurrent Promises Script:Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the result.

const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log("Task 8: All promises resolved", values);
});

const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log("Task 9: First promise resolved", value);
});