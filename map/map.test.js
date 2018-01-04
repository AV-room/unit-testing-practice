const map = require('./map');

test('map() is called', () => {
  expect(map()).toBe('inside map()');
});