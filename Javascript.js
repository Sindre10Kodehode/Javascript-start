console.log("Hello, and welcome to the terminal.");
console.log("Oppgave 1:");
let itemArray = [
  "item0",
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
  "item9",
];
console.log(itemArray);
console.log("Her er en array med 10 elementer.");

itemArray.pop();
console.log(itemArray);
console.log("Da er item9 fjernet med .pop funksjonen.");

itemArray.push("newItem");
console.log(itemArray);
console.log("Og med det har jeg lagt til ett nytt element i enden.");
console.log("Jeg velger å stå over bonus oppgaven i oppgave 1 for nå.");

/**console.log(itemArray[5]);**/
console.log(`dette er index 5: ${itemArray[5]}`);

console.log("Oppgave 2:");

const persons = [
  {
    firstName: "Sindre",
    age: 23,
    hobbies: ["Music", "programming", "sleeping"],
  },
  {
    firstName: "Fredrik",
    age: 25,
    hobbies: ["working", "partying", "eating pizza"],
  },
  {
    firstName: "Maren",
    age: 23,
    hobbies: ["gaming", "tv", "petting cats"],
  },
];

console.log("Person 1:", persons[0].firstName);
console.log("Age", persons[0].age);
console.log("Likes", persons[0].hobbies);

console.log("Person 2:", persons[1].firstName);
console.log("Age", persons[1].age);
console.log("Likes", persons[1].hobbies);

console.log("Person 3:", persons[2].firstName);
console.log("Age", persons[2].age);
console.log("Likes", persons[2].hobbies);

console.log(`all hobbies: ${persons[0].hobbies},
${persons[1].hobbies},${persons[2].hobbies}`);

console.log("OPPGAVE 3:");

let logicalvariation = 18;

if (logicalvariation === 18) {
  console.log("MØØØØØØØ");
} else if (logicalvariation === "18") {
  console.log("THIS IS MØØØØ; BUT STRING");
} else if (logicalvariation > 18) {
  console.log("IT IS NOT MØØØØ");
} else if (logicalvariation < 18) {
  console.log("this is less than MØØØØØØ");
} else {
  console.log("WHAT EVEN IS THAT");
}

console.log("OPPGAVE 4:");

function functionthatsayssomething() {
  return Math.floor(Math.random() * 50) + 1;
}
console.log(functionthatsayssomething());


