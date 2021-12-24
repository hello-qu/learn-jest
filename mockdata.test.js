function forEach(item, callback) {
  for (let i = 0; i < item.length; i++) {
    callback(item[i]);
  }
}

const mockCallback = jest.fn((x) => 42 + x);
forEach([0, 1], mockCallback);

test('mock', () => {
  expect(mockCallback.mock.calls.length).toBe(2);
  expect(mockCallback.mock.results[1].value).toBe(43);
});
