const Animal = {
  name: "",
  type: "unknown",
  desc: "",
  age: 0,
};

const animal = Object.create(Animal);
console.log(animal);
Animal.image = "image.jpg";
console.log(animal.image);

const myObject = { firstName: "Monica", age: 34 };
console.log("lastName", myObject.lastName);
myObject.lastName = "Lewinsky";
console.log("lastName", myObject.lastName);

console.log((myObject.lastName = undefined));
console.log(myObject.middleName);
console.log(myObject);
delete myObject.lastName;
console.log(myObject);

const person1 = {
  firstName: "peter",
};
const person2 = person1;

person2.firstName = "other peter";
console.log(person2);
