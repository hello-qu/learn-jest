function sum(a, b) {
  return a + b;
}

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('hello');
  }, 2000);
});

const awaitFn = async () => {
  const result = await p;
  return Promise.resolve(result + ' world');
};
module.exports = {
  sum,
  p,
  awaitFn,
};
