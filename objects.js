// // This file contains a collection of functions that manipulate arrays of objects.
// // Dummy data for testing purposes
const users = [
  { name: "Alice", age: 25, id: 1},
  { name: "Bob", age: 30, id: 2 },
  { name: "Charlie", age: 30, id: 3 },
  { name: "David", age: 28, id: 4 },
  { name: "Eve", age: 35, id: 5 }
];
const items = [
  { name: "Shirt", category: "clothing", userId: 1 },
  { name: "Pants", category: "clothing", userId: 2 },
  { name: "Apple", category: "food", userId: 3 },
];

// #1 A function to extract names from an array of objects
const extractNames = (users) => {
  return users.map(user => user.name);
}
console.log(extractNames(users)); // prints ['Alice', 'Bob', 'Charlie']


// #2 A function to find the oldest user in an array of a user objects
const findOldestUser = (users) => {
  return users.reduce((oldest, user) => {
    return (user.age > oldest.age) ? user : oldest;
  });
}
console.log(findOldestUser(users)); // prints { name: 'Bob', age: 30 }



// #3 A function to filter objects by specific property value
 const filterUserByAge = (users) => {
    return users.filter(user => user.age >= 25);
}
console.log(filterUserByAge(users)); // prints [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }]


// #4 A function to find  an object in an array by a unique property value
const findUserById = (users, id) => {
    return users.find(user => user.id === id);
}
console.log(findUserById(users, 3)); // prints { id: 'Alice', age: 25 }



// #5 A function to check if a specific object exists in an array
const userExists = (users, name) => {
    const user = users.some(user => user.name === name)
    if(user) return true;
    return false;
}
console.log(userExists(users, 'Charlie')); // prints true



// #6 A function to remove an object from an array by a unique property value without modifying the original array
const removeUser = (users, id) => {
    return users.filter(user => user.id !== id);
}
console.log(removeUser(users, 2)); // prints [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 22 }, { name: 'David', age: 28 }, { name: 'Eve', age: 35 }]

// #7 A function to remove an object from an array by a unique property value and modify the original array - 
// This is not a good practice
// But it's included for educational purposes, sometimes you might need to do this in a real-world scenario like removing items from a cart
// or a list of users
const removeUserById = (users, id) => { 
    const index = users.findIndex(user => user.id === id);
    if(index !== -1) {
        users.splice(index, 1);
    }
    return users;
}
// console.log(removeUserById(users, 3)); // prints [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'David', age: 28 }, { name: 'Eve', age: 35 }]


// #8 A function to find total number/value of a specific property in an array of objects
const cart = [
  { item: "Book", price: 12 },
  { item: "Pen", price: 2 },
  { item: "Notebook", price: 5 }
];
// Task: Use .reduce() to calculate the total cost
const calculateTotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price, 0);
}
console.log(calculateTotal(cart)); // prints 19



// #9 A function to sort an array of objects by a specific property
const sortUsersByAge = (users) => {
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  return sortedUsers;
}
console.log(sortUsersByAge(users)); // prints [{ name: 'Charlie', age: 22 }, { name: 'Alice', age: 25 }, { name: 'David', age: 28 }, { name: 'Bob', age: 30 }, { name: 'Eve', age: 35 }]


// #10 A function to add a new property to each object in an array
const addPropertyToUsers = (users) => {
  return users.map(user => {
    return { ...user, isActive: true };
  });
}
console.log(addPropertyToUsers(users)); // prints [{ name: 'Alice', age: 25, isActive: true }, { name: 'Bob', age: 30, isActive: true }, { name: 'Charlie', age: 22, isActive: true }, { name: 'David', age: 28, isActive: true }, { name: 'Eve', age: 35, isActive: true }]



// #11 A function to group objects by a specific property

const groupByCategory = (items) => {
  return items.reduce((acc, item) => {
    const category = item.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});
}
console.log(groupByCategory(items)); // prints { clothing: [{ name: 'Shirt', category: 'clothing' }, { name: 'Pants', category: 'clothing' }], food: [{ name: 'Apple', category: 'food' }] }


// #12 A function to merge two arrays of objects based on a unique property
const mergeUsersAndItems = (users, items) => {
  return users.map(user => {
    const userItems = items.filter(item => item.userId === user.id);
    return userItems.length > 0 ? { ...user, items: userItems } : { ...user, items: [] };
  });
}
console.log(JSON.stringify(mergeUsersAndItems(users, items),null, 2)); // prints [{ name: 'Alice', age: 25, id: 1, items: [{ name: 'Shirt', category: 'clothing', userId: 1 }] }, { name: 'Bob', age: 30, id: 2, items: [{ name: 'Pants', category: 'clothing', userId: 2 }] }, { name: 'Charlie', age: 30, id: 3, items: [{ name: 'Apple', category: 'food', userId: 3 }] }]