// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

// Todo: Create app that will print people with cars like "John has a BMW" using modules

const people = require("./02-modules_cars_people");
const cars = require("./02-modules_cars_module");

const printPeopleWithCars = people.forEach((person) => {
  cars.forEach((car) => {
    if (person.id === car.id) {
      console.log(`${person.name} has a ${car.model}`);
    }
  });
});

module.exports = printPeopleWithCars;
