import isValidMaxLength from './isValidMaxLength';

describe('"isValidMaxLength"', () => {
  it('should export a function', () => {
    expect(typeof isValidMaxLength).toBe('function');
  });

  it('should return true when a valid value is supplied and no maxlength is specified', () => {
    expect(isValidMaxLength('a')).toBe(true);
    expect(isValidMaxLength('abc')).toBe(true);
    expect(isValidMaxLength('abc def')).toBe(true);
  });

  it('should return true when no value is supplied and no maxlength is specified', () => {
    expect(isValidMaxLength()).toBe(true);
    expect(isValidMaxLength('')).toBe(true);
  });

  it('should return true when a valid value is supplied with a maxlength value', () => {
    expect(isValidMaxLength('a', 1)).toBe(true);
    expect(isValidMaxLength('a b c', 5)).toBe(true);
    expect(isValidMaxLength('abcde', 5)).toBe(true);
    expect(
      isValidMaxLength(
        'a b c d e f g h i j k l m n o p q r s t u v w x y z',
        52
      )
    ).toBe(true);
  });

  it('should return false when an invalid value is supplied with a maxlength value', () => {
    expect(isValidMaxLength('abc', 2)).toBe(false);
    expect(isValidMaxLength('abcde', 4)).toBe(false);
    expect(isValidMaxLength('a b c', 1)).toBe(false);
  });
});
