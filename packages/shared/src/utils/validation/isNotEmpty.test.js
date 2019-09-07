import isNotEmpty from './isNotEmpty';

describe('"isNotEmpty"', () => {
  it('should export a function', () => {
    expect(typeof isNotEmpty).toBe('function');
  });

  it('should return true when a valid value is supplied', () => {
    expect(isNotEmpty('a')).toBe(true);
    expect(isNotEmpty(0)).toBe(true);
    expect(isNotEmpty(1)).toBe(true);
    expect(isNotEmpty('1')).toBe(true);
    expect(isNotEmpty(true)).toBe(true);
    expect(isNotEmpty(false)).toBe(true);
  });

  it('should return false when no value is supplied', () => {
    expect(isNotEmpty()).toBe(false);
    expect(isNotEmpty('')).toBe(false);
  });
});
