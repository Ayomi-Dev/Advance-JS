//#1 Completing a function so it properly calls the callback with the user data
function getUser(callback) {
    setTimeout(() => {
        const user = { name: 'Ada', age: 28 };  //dummy data
        callback(user);
    }, 1000);
}

getUser((user) => {
  console.log('User received:', user);
});



 //#2 Make a function return a Promise that resolves with a user object after 1 second.
const getUserPromise = () => {
    const getUser =  new Promise((resolve) => {
        setTimeout(() => {
            const user = { name: 'Ada', age: 28 }; 
            resolve(user)
        }, 1000);
    })
    return getUser;
}
getUserPromise()
.then((user) => {
    console.log('User received:', user);
})
.catch((error) => {
    console.error('Error:', error);
});



// #3 An async function that logs the title of a post after fetching it
function fetchPost() {
  return new Promise((resolve) => { //fetches data
    setTimeout(() => {
      resolve({ title: 'Async JS Mastery', body: 'You got this!' });
    }, 1500);
  });
}
const logPostTitle= async () => {
    const post = await fetchPost();
    console.log('Post title:', post.title);
}
logPostTitle(); // Logs the title of the post after fetching it


// #4 An Async function for Parallel Execution[Combining Multiple Promises] i.e fetching/serving multiple data all at once
const serveRice = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Rice is served!');
        }, 2000);
    })
}
const serveChicken = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Chicken is served!');
        }, 3000)
    })
}
const serveAll = async() => {
    try {
        const [rice, chicken] = await Promise.all([serveRice(), serveChicken()]); // This will wait for all promises to resolve
        console.log('All is served:', rice, chicken)
    } catch (error) {
       console.log('error:', error); 
    }
}
serveAll(); // combines multiple promises and waits for all of them to resolve before logging the result at same time

// #5 A function tryFetchData() that simulates fetching data from a flaky server—it randomly succeeds or fails. 
// Your job is to keep retrying the function until it succeeds, with a maximum of 5 maxAttempts. If it fails 5 times, log "Failed after 5 attempts"
const tryFetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5; // Simulate a 50% chance of success
            if (success) {
                resolve('Data fetched successfully!');
            } else {
                reject('Failed to fetch data');
            }
        }, 5000);
    });
}

const fetchWithRetry = async (maxAttempts = 5) => {
    for(let i = 1; i <= maxAttempts; i++){
        try {
            const data = await tryFetchData();
            console.log(`On Attempt${i}: ${data}`);
            return data; // Exit the loop if successful
        } catch (error) {
           console.log(`On Attempt${i}: ${error}`);
            if (i === maxAttempts) {
                console.log('Failed after 5 Attempts');
            } 
        }
    }
}
fetchWithRetry(); // Call the function to fetch data with retry logic

// REAL WORLD API SIMULATION
// #6 A function that fetches data from a simulated API and logs the result

function fetchPosts() {
  return new Promise((resolve, reject) => {
    const shouldFail = Math.random() < 0.2; // 20% chance of failure
    setTimeout(() => {
      if (shouldFail) {
        reject("🚨 Failed to load posts");
      } else {
        resolve([
          { id: 1, author: "Alice", content: "Hello world!" },
          { id: 2, author: "Bob", content: "Async JS is fun!" },
          { id: 3, author: "Eve", content: "Hacking life... 🌐" },
        ]);
      }
    }, 1500);
  });
}

const loadFakeBookFeed = async () => {
    
    console.log('Loading posts...')
    try {
        const posts = await fetchPosts();
        console.log('Posts loaded:', posts);

        // Check if posts is an array and has elements
        if(posts.length > 0){
            console.log(`${posts.length} Posts loaded successfully`);
            
            //  Testing different loops to iterate over posts - all with same result
            for (const post of posts) {
                console.log(`Post by ${post.author}: ${post.content}`);
            }

            //for loop:
            // for (let i = 0; i < posts.length; i++) {
            //     const post = posts[i];
            //    console.log(`Post by ${post.author}: ${post.content}`);
            // }

            //forEach loop:
            // posts.forEach((post) => {
            //     console.log(`Post by ${post.author}: ${post.content}`);
            // });
        }
    } catch (error) {
       console.error(error, `kindly refresh the page`); 
    }
}
loadFakeBookFeed(); // Call the function to load posts



