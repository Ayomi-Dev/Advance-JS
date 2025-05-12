//#1 Array function to add new element to the start and end of an array
const fruits = ['apple', 'orange']
fruits.push('mango'); //adds a new element at the end of an array
fruits.unshift('lemon') //adds a new element to the start of a list/array
console.log(fruits) //prints ['apple', 'orange', 'mango'] for push(), prints ['lemon', 'aplle', 'orange'] for the unshift()


//#2 Array function to remove first element of an array
const num = [1,2,3,4]
num.shift(); //removes the first element in an array
console.log(num)  //prints [2,3,4]

//#3 Array function to check if an element exists in an array
let colors = ['red', 'blue']
const findElement = (color) => {
    const element = colors.includes(color);
   if(element) return 'color found';
   return 'color not found';
}
console.log(findElement('yellow')) //prints 'color not found'


//#4 Array function to filter a group of elements in an array 
const filterEvenNumbers = (numbers) => {
    const evenNum = numbers.filter(num => num % 2 === 0)
    return evenNum
}
console.log(filterEvenNumbers([12,3,40,51,6]))  //prints [2,4,6]


//#5 A function that doubles the value of numbers in an array
const doubleValue = ( arr ) => {
    const values = arr.map(num => num * 2);
    return values;
}
console.log(doubleValue([1,2,3])); //prints [2,4,6]

// #6 A function that finds an element in an array
const findUser = (users, email) => {
    const user = users.find(user => user.email === email);

    if(user) return 'user found';
    return 'user not found';
}
console.log(findUser([{email: 'ayo@mail.com'}, {email: 'ola@mail.com'}], 'grace@mail.com')); //prints 'user not found'


// #7 A function that adds numbers in an array 
const addArrayNum = (numbers) => {
    const result = numbers.reduce((acc, total) => acc + total, 0);
    return result;
}
console.log(addArrayNum([10,20,30])) // prints 60;

// #8 A function to remove specific element of an array
const removeItem = () => {
    const animals = ['cat', 'dog', 'rabbit', 'dog'];
    const itemIndex = animals.indexOf('dog');
    if(itemIndex !== -1){
        animals.splice(itemIndex, 1)
    }
    return animals;
}
console.log(removeItem());

// #9 A function to insert items in array to form a sequential arrangement
const insertItem = (arr) => {
    arr.splice(2,0,3,4)
    return arr
}
console.log(insertItem([1,2,5,6])); //prints [1,2,3,4,5,6]

// A function to insert numbers in an array to form a sequential arrangement -- descending order
const insertMissingNumber = (arr) => {

    let min = Math.min(...arr);
    let max = Math.max(...arr)
    
    for(let i = min; i >= max; i++){
        
        if(!arr.includes(i)){
            let missingNumberIndex = arr.findIndex(n => n > i);
            arr.splice(missingNumberIndex, 0 , i)
        }
    }
    return arr;
}
console.log(insertMissingNumber([1,2,4,6,8])); //proints [1,2,3,4,5,6,7,8]

// A function to insert numbers in an array to form a sequential arrangement -- ascending order
// function insertMissingNumber(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);
    
//     for(let i = min; i >= max; i++){
//         if(!arr.includes(i)){
//             let missingNumberIndex = arr.findIndex(n => n > i);
//             arr.splice(missingNumberIndex, 0 , i)
//         }
//     }
//     return arr;
// }
// console.log(insertMissingNumber([6,5,3,1]));  //prints [6,5,4,3,2,1]



// #10 A function that fills in missing elements in an array
const days = ['mon', 'wed', 'sat']
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

const fillMissingDays = ( daysArray ) => {
    for(let i = 0; i < weekDays.length; i++){ //cycles through the reference list to find missing element

        if (!daysArray.includes(weekDays[i])) {//checks if the element in the reference list is not in the array  
          daysArray.splice(i, 0, weekDays[i]);
        }
  
    }

    return daysArray.map(day => day.charAt(0).toUpperCase() + day.slice(1)) //capitalizes the first letter of element in the complete list
    
}
console.log(fillMissingDays(days)); //prints ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']


// #11 Destructuring an array
const color = ['red', 'green', 'blue', 'yellow'];
const [firstColor, secondColor] = colors; //destructures the array into variables and Extracts the first two colors into variables 

console.log(firstColor); //prints 'red'
console.log(secondColor); //prints 'green'


