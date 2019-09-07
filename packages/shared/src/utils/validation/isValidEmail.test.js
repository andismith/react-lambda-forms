import isValidEmail from './isValidEmail';

describe('"isValidEmail"', () => {
  it('should export a function', () => {
    expect(typeof isValidEmail).toBe('function');
  });

  it('should return true when a valid email is supplied', () => {
    expect(isValidEmail('a@a.com')).toBe(true);
    expect(isValidEmail('a1a@a.net')).toBe(true);
    expect(isValidEmail('a1a1a@a.co.uk')).toBe(true);
    expect(isValidEmail('a+a@a.com')).toBe(true);
  });

  it('should return false when no email is supplied', () => {
    expect(isValidEmail()).toBe(false);
  });

  it('should return false when a invalid email is supplied', () => {
    expect(isValidEmail('a')).toBe(false);
    expect(isValidEmail('aaaaaaaaa')).toBe(false);
    expect(isValidEmail('a@a')).toBe(false);
    expect(isValidEmail('a.com')).toBe(false);
  });
});
