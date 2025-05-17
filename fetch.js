const url = 'https://jsonplaceholder.typicode.com/users'
let myData;

const getData = () => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                reject(error);
            });

    })
}

const addUser = (users, name) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userProp = users[0]; //gets a template from the first user
            const userId = users.length + 1; //generates a new user id

            const newUser = {...userProp, id: userId, name: name};

            myData.push(newUser);
            resolve(newUser);
        }, 1500);
    });
}

const removeUser = (users, id) => { //removes a selected user from the array
    return new Promise((resolve) => {
        setTimeout(() => {
            const userIndex = users.findIndex(user => user.id === id);

            if(userIndex === -1) {
                console.log('User not found');
                return;
            }
            else{
                users.splice(userIndex, 1)
                console.log('User removed successfully');
                resolve(users);
            }
        }, 1500);
    })
}


// const handleUserData = async () => {
//     console.log('Fetching User Datas...');
//     try {
//         const data = await getData();
//         myData = data;
//         console.log('User Data fetched successfully:', myData);


//         console.log('Adding user...');
//         const newUser = await addUser(myData, 'John Doe');
//         console.log('Added user:', newUser);
//         console.log('Updated data:', myData);


//         console.log('Removing user...');
//         const updatedData = await removeUser(myData, 1);
//         console.log('Updated data after removal:', updatedData);
//     } 
//     catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// handleUserData();

// This code uses the async/await method directly to fetch data from a given URL and handles errors appropriately.
const fetchUserData = async (url) => {
    try {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`);
        }
        else{
            console.log("Data fetched successfully");
            const jsonData = await data.json();
            myData = jsonData;
            
            console.log('Adding user...');
            const newUser = await addUser(myData, 'John Doe');
            console.log('Added user:', newUser);
            console.log('Updated data:', myData);

            console.log('Removing user...');
            const updatedData = await removeUser(myData, );
            console.log('Updated data after removal:', updatedData);
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
fetchUserData('https://jsonplaceholder.typicode.com/users')