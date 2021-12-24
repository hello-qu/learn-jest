const { sum, p, awaitFn } = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  // 指定通过断言的数量
  expect.assertions(2);
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
});

// 测试 Promise 断言
test('Promise resolved', () => {
  return p.then((res) => {
    expect(res).toBe('hello');
  });
});

// 测试 async/await 断言
test('test await', async () => {
  const testResult = await awaitFn();
  expect(testResult).toBe('hello world');
});
