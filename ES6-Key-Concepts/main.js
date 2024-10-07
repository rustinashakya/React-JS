// Logical && And Logical OR 

function getName(name) {
    return name;
}
  
let a = false;
let b = false;

console.log(a || getName("Sangam Mukherjee"));

//Template literals

let name1 = "John";
let name2 = "Doe";

console.log(name1 + " " + name2, `${name1} ${name2}`);

// Ternary Operator 

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
// OR
const{description} = product2;
console.log(description);


