const wait = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Waited for ${seconds} seconds`);
      resolve(`Waited for ${seconds} seconds`);
    }, seconds * 1000)
  });
}

console.log(wait(5)); // Waited for 5 seconds
console.log(wait(10)); // Waited for 10 seconds
