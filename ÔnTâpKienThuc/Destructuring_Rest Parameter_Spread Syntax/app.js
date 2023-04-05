/**
 * Destructuring
 *
 */

//Destructuring với object

const user = {
  name: "Tam",
  age: 25,
  sex: "male",
};

const { age, name, sex } = user;
// console.log(age, name, sex);

//Destructuring với array

const list = [
  1,
  function (a, b) {
    return a + b;
  },
];

const [value, sum] = list;
console.log(sum(2, 3));

//Spread Syntax

const userCustom = {
  name: "Tam",
  age: 25,
  sex: "male",
};

// có 2 cách
// const cloneUser = userCustom;

// Shallow copy (copy nông) ==> Chỉ copy bên ngoài không copy được bên trong , bên trong vẫn tham chiếu lại với nhau

const cloneUserCustom = { ...userCustom };

console.log(cloneUserCustom === userCustom);

console.log(cloneUserCustom.ability === userCustom.ability);

/**
 * Rest Parameter
 *
 */

const handle = (a, b, ...c) => {
  return c;
};

const valueParams = handle(1, 2, 3, 4, 5, 6);
console.log(valueParams);

// kết hợp Rest Parameter & Spread Syntax

const handleCustom = ({ a, b, ...c }) => {
  return c;
};

const valueCustom = handleCustom({ a: 1, b: 2, c: 3, d: 4, e: 5 });
console.log(valueCustom);
