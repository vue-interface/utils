import { unit } from '..';

test('unit()', () => {
    expect(unit(null)).toBe(null);
    expect(unit(false)).toBe(false);
    expect(unit(123)).toBe('123px');
    expect(unit('123')).toBe('123px');
    expect(unit('123px')).toBe('123px');
    expect(unit('123%')).toBe('123%');
    expect(unit('123', 'em')).toBe('123em');
});
