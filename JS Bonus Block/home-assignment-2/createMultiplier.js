const createMultiplier = (multiplier) => {
  return (value) => {
    return multiplier * value;
  }
}

const multiplyBy2 = createMultiplier(2);

console.log(multiplyBy2(5)); // Result: 10
console.log(multiplyBy2(10)); // Result: 20

const multiplyBy5 = createMultiplier(5);

console.log(multiplyBy5(5)); // Result: 25
console.log(multiplyBy5(10)); // Result: 50
