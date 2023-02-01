const item = [
  { name: "muzaffaer", age: 101 },
  { name: "muzaffaer", age: 101 },
  { name: "muzaffaer", age: 101 },
  { name: "muzaffaer", age: 101 },
];
const reducedItem = item.reduce((currentValue, item) => {
  return currentValue + item.age;
}, 0);
console.log(reducedItem);
