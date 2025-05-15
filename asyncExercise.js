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
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ title: 'Async JS Mastery', body: 'You got this!' });
    }, 1500);
  });
}

const logPostTitle= async () => {
    const post = await fetchPost();
    console.log('Post title:', post.title);
}
logPostTitle(); // Call the function to log the post title


// #4 An Async function for Parallel Execution i.e fetching/serving multiple data all at once
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
serveAll(); // Call the function to serve all
