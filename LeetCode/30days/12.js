// Add Two Promises
var addTwoPromises = async function(promise1, promise2) {
    const [res1, res2] = await Promise.all([promise1, promise2]);
  return res1 + res2;
};

promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
promise2 = new Promise(resolve => setTimeout(() => resolve(2), 60))
addTwoPromises(promise1, promise2).then(console.log);