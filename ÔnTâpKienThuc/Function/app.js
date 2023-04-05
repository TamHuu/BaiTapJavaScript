// ### Callback function

const nums = [1, 2, 3, 4, 5];

const callback = (item, index) => {
  console.log(`STT ${index} là ${item}`);
};

nums.forEach(callback);

//Currying  là function return về function

function findNumber(number) {
  return function (func) {
    const result = [];
    for (let i = 0; i <= number; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}

const value = findNumber(10)((number) => number % 2 === 0);
const value2 = findNumber(10)((number) => number % 2 === 1);
console.log("this is even number ", value);
console.log("this is odd number ", value2);

//Cách viết gọn

const searchNumber = (num) => (func) => {
  const result = [];
  for (let i = 0; i <= num; i++) {
    if (func(i)) {
      result.push(i);
    }
  }
  return result;
};
