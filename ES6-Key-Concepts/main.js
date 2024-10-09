// Logical && And Logical OR 
console.log("--- Logical && And Logical OR ---");

function getName(name) {
    return name;
}
  
let a = false;
let b = false;

console.log(a || getName("Sangam Mukherjee"));

//Template literals
console.log("--- Template Literals ---");

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2, `${name1} ${name2}`);

// Ternary Operator 
console.log("--- Ternary Operator ---")

const showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}

showRecipeOne
? console.log(getRecipeOneName("Pizza"))
: console.log(getRecipeTwoName("Coke"));

// Object
console.log("--- Object ---");

const id = 1;
const productName = "Product Apple Watch";
const rating = 5;

const product = {
  id,
  productName,
  rating,
};

console.log(product);
console.log(typeof(product))

const product2 = {
  description: "Description of Product Two",
  id,
  productName,
  rating,
};

console.log(product2);

const getProduct2Description = product2.description;
console.log(getProduct2Description);

// OR Destructuring Object
console.log("--- Destructing Object ---")

const{description} = product2;
console.log(description);

// Array
console.log("--- Array ---")

const array = [7, 2, 1];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];
console.log(getArrayFirstValue, getArraySecondValue);

// Destructuring Array 
console.log("--- Destructing Array ---")

const[aaa, arraySecond, arrayThird] = array;
console.log(aaa, arraySecond, arrayThird);

// Default parameters, spread operators, and rest parameters 
console.log("--- Default Parameters, Spread Operators, Rest Parameters ---")

function mulOfTwoNumbers(num1 = 1, num2 = 3){
  return num1 * num2; 
}
console.log(mulOfTwoNumbers(3, 6));

// Spread Operators 
console.log("--- Spread Operators ---")

const array2 = [2, 3, 4]
console.log(...array2);
console.log([...array2]);

const array3 = [8, 9, 10, 90]
console.log(...array3)

console.log(777, ...array2, ...array3)
console.log([777, ...array2, ...array3])

// Rest parameters 
console.log("--- Rest Parameters ---")

function restPara(a, ...c){
  console.log(a, c);
  // return "Sangam Mukharjee";
}
console.log(restPara(8, 9, 5, 6, 7, 7, 5, 4, 3, 5, 7, 1, 2));

// ES6 Array Methods 
// map, filter, find, some, every, includes, indexOf, findIndex
console.log("--- map, filter, find, some, every, includes, indexOf, findIndex ---")

const personsArray = [
  {
    name: "One More Person From USA",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 1",
    age: 30,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 40,
    country: "RUSSIA",
  },
  {
    name: "Person 3",
    age: 50,
    country: "INDIA",
  },
];

// map 
console.log("--- map ---")

let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  console.log(`Name: ${singlePerson.name} Age: ${singlePerson.age} Country: ${singlePerson.country}`)
  // return singlePerson.name;
})
console.log(getAllNames);

// find => returns only one value that satisfies and terminate 
console.log("--- find ---")

let getPersonFromUSA = personsArray.find((singlePerson, index)=> {
  return singlePerson.country === "USA";
})
console.log(getPersonFromUSA);

// filter => returns every value that satisfies 
console.log("--- filter ---")

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
})
console.log(getAllPersonsFromUSA);

// some => returns true if the condition is true for one 
console.log("--- some ---")

let  checkSomeArrayMethodWithExample = personsArray.some((singlePerson, index) => {
  // return singlePerson.name === "Person 1";
  return singlePerson.age > 40;
})
console.log(checkSomeArrayMethodWithExample);

// every => returns true if the condition is true for every 
console.log("--- every ---")

let checkEveryArrayMethodWithExample = personsArray.every((singlePerson, index) => {
  // return singlePerson.name === "Person 1";
  return singlePerson.age > 25;
})
console.log(checkEveryArrayMethodWithExample);

// includes 
console.log("--- includes ---")

const fruitArray = ["apple", "banana", "orange"];
console.log(fruitArray.includes("apple"))
console.log(fruitArray.includes("rustina"))

// indexOf 
console.log("--- indexOf ---")

console.log(fruitArray.indexOf("apple"));
console.log(fruitArray.indexOf("rustina"));

// find Index 
console.log("--- Find Index ---")

let getIndexofPersonWhoIsFromRussia = personsArray.findIndex((singlePerson, index) => {
  return singlePerson.name === "Person 2";                                                                                                            
})
console.log(getIndexofPersonWhoIsFromRussia);









