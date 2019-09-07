import capitalizeFirstLetter from './capitalizeFirstLetter';

describe('"capitalizeFirstLetter"', () => {
  it('should export a function', () => {
    expect(typeof capitalizeFirstLetter).toBe('function');
  });

  it('should return a string with the first letter a capital letter', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('Hello')).toBe('Hello');
    expect(capitalizeFirstLetter('hello world')).toBe('Hello world');
    expect(capitalizeFirstLetter('hello world hope that you are ok')).toBe(
      'Hello world hope that you are ok'
    );
    expect(capitalizeFirstLetter('hello world are you OK')).toBe(
      'Hello world are you OK'
    );
    expect(capitalizeFirstLetter('hello world. Hello. world')).toBe(
      'Hello world. Hello. world'
    );
  });
});
