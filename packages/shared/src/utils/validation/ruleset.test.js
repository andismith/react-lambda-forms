import ruleset from './ruleset';

describe('"ruleset"', () => {
  it('should export an array', () => {
    expect(Array.isArray(ruleset)).toBeTruthy();
  });
});
