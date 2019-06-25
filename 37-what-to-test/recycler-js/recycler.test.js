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
  //arrange
  let num = 3;
  //act
  let junk = getRandomJunk(num);
  //assert
  expect(junk.length).toEqual(3);
});

test('getRandomJunk returns an empty array when given a string as an argument', () => {
  let junk = getRandomJunk("foo");
  expect(junk).toEqual([]);
});

test('isCompostable returns true if item in food array', () => {
  // expect(isCompostable('Moldy Bread')).toEqual(true);
  expect(isCompostable('Moldy Bread')).toBeTruthy();
});

test('isCompostable returns false when item is not in food array', () => {
  expect(isCompostable('Something Else')).toBeFalsy();
})

test('isRecyclable returns true if item in plastic array', () => {
  expect(isRecyclable('Soda Bottle')).toBeTruthy();
});

test('isRecyclable returns true if item in paper array', () => {
  expect(isRecyclable('Newspaper')).toBeTruthy();
});

test('isRecyclable returns true if item in metal array', () => {
  expect(isRecyclable('Soda Can')).toBeTruthy();
});

test('isRecyclable returns true if item in glass array', () => {
  expect(isRecyclable('Glass Bottle')).toBeTruthy();
});

test('isRecyclable returns false if item is something else', () => {
  expect(isRecyclable('Black Plastic')).toBeFalsy();
});

test('emptyMaterial returns starting material values', () => {
  //arrange
  //act
  let material = emptyMaterial();
  //assert
  expect(material).toEqual({
    garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
  });
});

test('emptyMaterial updates material variable to initial value', () => {
  //arrange
  toss(["Old Shoes", "Black Plastic"]);
  //act
  emptyMaterial();
  //assert
  expect(getMaterial()).toEqual({
    garbage: 0, compost: 0, metal: 0, glass: 0, paper: 0, plastic: 0
  });
});
