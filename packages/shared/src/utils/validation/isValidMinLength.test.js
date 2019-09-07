import isValidMinLength from './isValidMinLength';

describe('"isValidMinLength"', () => {
  it('should export a function', () => {
    expect(typeof isValidMinLength).toBe('function');
  });

  it('should return true when a valid value is supplied and no minlength is specified', () => {
    expect(isValidMinLength('a')).toBe(true);
    expect(isValidMinLength('abc')).toBe(true);
    expect(isValidMinLength('abc def')).toBe(true);
  });

  it('should return false when no value is supplied and no minlength is specified', () => {
    expect(isValidMinLength()).toBe(false);
    expect(isValidMinLength('')).toBe(false);
  });

  it('should return true when a valid value is supplied with a minlength value', () => {
    expect(isValidMinLength('abc', 1)).toBe(true);
    expect(isValidMinLength('abcde', 5)).toBe(true);
    expect(isValidMinLength('a b c', 5)).toBe(true);
    expect(
      isValidMinLength(
        'a b c d e f g h i j k l m n o p q r s t u v w x y z',
        50
      )
    ).toBe(true);
  });

  it('should return false when an invalid value is supplied with a minlength value', () => {
    expect(isValidMinLength('abc', 5)).toBe(false);
    expect(isValidMinLength('abcde', 15)).toBe(false);
    expect(isValidMinLength('a b c', 100000)).toBe(false);
  });
});
