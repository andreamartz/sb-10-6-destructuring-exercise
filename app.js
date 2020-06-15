// Destructuring Exercise

// *****************************************************
// Object Destructuring 1
// *****************************************************
// What does the following code return/print?

let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // ?
// it returns 8
console.log(yearNeptuneDiscovered); // ?
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
