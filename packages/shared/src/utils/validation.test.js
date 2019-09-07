import validation, { validateField } from './validation';

describe('"validateField"', () => {
  test('should export a function', () => {
    expect(typeof validateField).toBe('function');
  });

  test('should validate a required field', () => {
    const field = {
      title: 'test',
      validation: {
        isRequired: true,
      },
    };
    expect(validateField(field, '')).toEqual([
      {
        message: 'Test is required',
        rule: 'isRequired',
      },
    ]);
    expect(validateField(field, 'test')).toEqual([]);
  });

  describe('"validateData"', () => {
    test('should export a function', () => {
      expect(typeof validation).toBe('function');
    });

    test('should validate data as valid', () => {
      const fields = [
        {
          name: 'name',
          validation: {
            isRequired: true,
          },
        },
      ];
      const values = {
        name: 'andismith',
      };
      expect(Object.keys(validation(fields, values)).length).toEqual(0);
    });

    test('should validate bad data as invalid', () => {
      const fields = [
        {
          name: 'name',
          validation: {
            isRequired: true,
          },
        },
      ];
      const values = {
        name: '',
      };
      expect(validation(fields, values)).toEqual({
        name: [
          {
            message: 'Name is required',
            rule: 'isRequired',
          },
        ],
      });
    });
  });
});
