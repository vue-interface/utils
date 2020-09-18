import { camelCase } from '..';

test('camelCase()', () => {
    expect(camelCase(null)).toBe(null);
    expect(camelCase(false)).toBe(false);
    expect(camelCase(undefined)).toBe(undefined);
    expect(camelCase('testCase')).toBe('testCase');
    expect(camelCase('test case')).toBe('testCase');
    expect(camelCase('test-case')).toBe('testCase');
    expect(camelCase('test Case')).toBe('testCase');
    expect(camelCase('TestCase')).toBe('testCase');
    expect(camelCase('Test Case')).toBe('testCase');
    expect(camelCase('Test_Case')).toBe('testCase');
});
