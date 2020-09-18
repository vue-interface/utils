import { prefix } from '..';

test('prefix()', () => {
    expect(prefix(null)).toBe(null);
    expect(prefix(false)).toBe(false);
    expect(prefix('subject', 'prefix')).toBe('prefix-subject');
    expect(prefix('subject', 'prefix', '_')).toBe('prefix_subject');
    expect(prefix({
        subject: 1
    }, 'prefix')).toStrictEqual({
        'prefix-subject': 1
    });
});
