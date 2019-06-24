const {
  getRandomJunk,
  isCompostable,
  isRecyclable,
  isGarbage,
  compost,
  recycle,
  toss,
  sortJunk,
  getMaterial,
  emptyMaterial
} = require('./recycler');

beforeEach(() => {
  emptyMaterial();
})

test('getRandomJunk returns a string', () => {
  let junk = getRandomJunk();
  expect(typeof junk).toBe('string');
});

test('getRandomJunk returns an array of number length when given a number', () => {
  // fill this in
});

test('isCompostable returns true if item in food array', () => {
  // expect(isCompostable('Moldy Bread')).toEqual(true);
  expect(isCompostable('Moldy Bread')).toBeTruthy();
});
