const personInfo = function(...params) {
  let info = `Hello, my name is ${this.name} and I'm a ${this.profession}.\n`;

  info += params
    .reduce((a, b) => {
      let el = `---${b}\n`;
      return a + el;
    }, "My hobbies are:\n")
    .trim();
  return info;
};
const person = {
  name: "Peter",
  profession: "Fisherman"
};
console.log(personInfo.call(person, "biking", "hiking", "swiming"));
