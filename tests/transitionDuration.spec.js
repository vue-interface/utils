import { transitionDuration } from '..';

let el;

beforeEach(() => {
    el = document.createElement('div');
});

describe('transitionDuration()', () => {
    it('tests the transitionDuration', () => {
        el.style.transitionDuration = '1s';

        expect(transitionDuration(el)).toBe(1000);
    });

    it('tests the animationDuration', () => {
        el.style.animationDuration = '1s';

        expect(transitionDuration(el)).toBe(1000);
    });

    it('tests element with 0ms duration', () => {
        el.style.animationDuration = '0ms';

        expect(transitionDuration(el)).toBe(0);
    });

    it('tests element without duration', () => {
        expect(transitionDuration(el)).toBe(0);
    });
});
