//--------Day-11[Promises and Async,Await]-----//

//Activity-1[Understanding Promises]

//Task-1:Create a promise that resolves with a message after a 2 second timeout and log the message to the console.

const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Task 1: Promise resolved after 2 seconds");
    }, 2000);
});
  
  promise1.then((message) => {
    console.log(message);
});
  

//Task-2:Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch().

const promise2 = new Promise((_, reject) => {
    setTimeout(() => {
        reject("Task 2: Promise rejected after 2 seconds");
    }, 2000);
});

promise2.catch((error) => {
    console.log(error);
});

//Activity-2[Chaining Promises]
//Task-3:Create a sequence of promises that simulate fetching data from a server.Chain the promises to log messages in a specific order.

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
  

//Activity-3[Using Async/Await]
//Task-4:Write an async function that waits for a promise to resolve and logs the resolved value.

async function asyncFunction1() {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("Task 4: Promise resolved");
      }, 2000);
    });
  
    const result = await promise;
    console.log(result);
}
  
asyncFunction1();
  

//Task-5:Write an async function that handlles a rejected promise using try-catch and logs the error message.

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
  
//Activity-4[Fetching Data from an API]
//Task-6:Use the fetch API to get data from a public API and log the response data to the console using promises.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => {
    console.log("Task 6: Data fetched using promises", data);
})
  .catch(error => {
    console.error(error);
});

//Task-7:Use the fetch API to get data from a public API and log the response data to the console using async/await.

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
  
//Activity:5[Concurrent Promises]
//Task-8:Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promiseA = new Promise((resolve) => setTimeout(() => resolve("Promise A resolved"), 1000));
const promiseB = new Promise((resolve) => setTimeout(() => resolve("Promise B resolved"), 2000));
const promiseC = new Promise((resolve) => setTimeout(() => resolve("Promise C resolved"), 3000));

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
  console.log("Task 8: All promises resolved", values);
});


//Task-9:Use Promise.race to log the value of the first promise that resolves among multiple promises.


const promiseX = new Promise((resolve) => setTimeout(() => resolve("Promise X resolved"), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve("Promise Y resolved"), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve("Promise Z resolved"), 3000));

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
  console.log("Task 9: First promise resolved", value);
});
