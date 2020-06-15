// Destructuring Exercise

// *****************************************************
// Object Destructuring 1
// *****************************************************
// What does the following code return/print?

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;

// console.log(numPlanets); // ?
// it returns 8
// console.log(yearNeptuneDiscovered); // ?
// it returns 1846

// *****************************************************
// Object Destructuring 2
// *****************************************************
// What does the following code return/print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // ?
// it returns { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// *****************************************************
// Object Destructuring 3
// *****************************************************
// What does the following code return/print?

function getUserData({ firstName, favoriteColor = "green" }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // ?
// console.log(getUserData({ firstName: "Alejandro", favoriteColor: "purple" }));
// it returns "Your name is Alejandro and you like purple"
getUserData({ firstName: "Melissa" }); // ?
// console.log(getUserData({ firstName: "Melissa" }));
// it returns "Your name is Melissa and you like green"
getUserData({}); // ?
// console.log(getUserData({}));
// it returns "Your name is undefined and you like green"

// *****************************************************
// Array Destructuring 1
// *****************************************************
// What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
// it returns "Maya"
console.log(second); // ?
// it returns "Marisa"
console.log(third); // ?
// it returns "Chi"
