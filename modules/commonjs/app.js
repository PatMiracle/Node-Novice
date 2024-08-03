const birth = require("./birth");

console.log(birth.getAge(2000));
console.log(birth.getYear(43));

const { getAge, getYear } = require("./birth"); // alternative

console.log(getAge(2000));
console.log(getYear(43));
