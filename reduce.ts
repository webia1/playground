const apiResponse = [
  {
    firstName: "James",
    lastName: "Bond",
    age: 50,
  },
  {
    firstName: "Michael",
    lastName: "Jackson",
    age: 55,
  },
  {
    firstName: "Britney",
    lastName: "Spears",
    age: 35,
  },
];

const names = apiResponse
  .filter((e: any) => e.age >= 50) //?
  .map((e) => e.firstName + " " + e.lastName);

console.log(names); //?
