import YAMLParser from '../YAMLParser';

describe('YAMLParser', () => {
  test('valid YAML returns isValid true', () => {
    const result = YAMLParser.parse('valid: yaml');
    expect(result.isValid).toBe(true);
  });

  test('invalid YAML returns isValid false', () => {
    const result = YAMLParser.parse('');
    expect(result.isValid).toBe(false);
    expect(result.errorMessages).toBe('YAML cannot be empty.');
  });
});