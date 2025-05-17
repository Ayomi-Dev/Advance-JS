// Asynchronous JavaScript is a programming paradigm thhat allows codes to run at different times
// without blocking the main thread. This is particularly useful for tasks that take a long time to complete,
// such as network requests or file I/O. 

// In JavaScript, there are several ways to handle asynchronous code, including callbacks, promises, and async/await.

// 1. CALLBACKS
// A callback is a function that is passed as an argument to another function i.e a function created to run a task that takes longer time to complete.
// Callbacks are often used in asynchronous programming to handle the result of an operation once it is complete.

function fetchOrder(callback) {
    setTimeout(() => {
        const order = 'Two cups of coffee';
        callback(order);  //this handles the request based on the order i.e it determines what to do with the order
    }, 2000); // Simulating a 2-second delay
}

fetchOrder((order) => {
    console.log('Data received:', order);
});

// 2. PROMISES
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promises can be in one of three states: pending, resolved, or rejected.
// A promise is created using the Promise constructor, which takes a function as an argument.

const processOrder = new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
        if (status) {
            resolve('Your coffee is ready for delivery');
        } else {
            reject('Error processing order');
        }
    }, 2000); // Simulating a 2-second delay
})
.then((message) => {
    console.log('Data received:', message);  // This will run if the promise is resolved and sends its resulting value
})
.catch((error) => {
    console.error('Error:', error);
});

// 3. ASYNC/AWAIT
// Async/await is a syntactic sugar built on top of promises that allows you to write asynchronous code in a more synchronous style.
// The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise to resolve or reject.
async function fetchOrderAsync() {
    try {
        const order = await processOrder; //This will wait for the fetchOrder promise to resolve or reject and once it is resolved, it will return the value of the promise
        console.log('Data received:', order);
    } catch (error) {
        console.error('Error:', error);
    }
}


function cookFood() { // this function simulates a long-running task (like cooking food) using a promise
    // and returns a promise that resolves after 2 seconds with the message 'Pasta cooked'.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Pasta cooked');
    }, 2000);
  });
}

async function serveCustomer() { 

  console.log('Customer arrived');
  const food = await cookFood(); // pause until food is ready
  console.log(food);
  console.log('Customer served');
}
serveCustomer(); // this function is declared as async, and it uses await to pause execution until the cookFood promise is resolved.


//5 Combining Callbacks, Promises, and Async/Await
// You can also combine callbacks, promises, and async/await in your code. For example, you can use a callback to handle the result of a promise.
function fetchData(callback) {
    setTimeout(() => {
        const data = 'Data fetched from server';
        callback(data);
    }, 2000); // Simulating a 2-second delay
}
function processData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 2000); // Simulating a 2-second delay
    });
}

function handleData(data) {
    console.log('Handling data:', data);
}

function handleError(error) {
    console.error('Error:', error);
}
async function main() {
    fetchData((data) => {
        processData(data)
            .then(handleData)
            .catch(handleError);
    });
}

main(); // Call the main function to start the process


//6 Combining multiple promises
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 1');
        }, 2000);
    });
};
const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 2');
        }, 3000);
    });
};
const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from API 3');
        }, 1000);
    });
};

const fetchAllData = async() => {
    try {
        const [data1, data2, data3] = await Promise.all([fetchData1(), fetchData2(), fetchData3()]); // This will wait for all promises to resolve
        console.log('All data received:', data1, data2, data3);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchAllData(); // Call the function to fetch all data