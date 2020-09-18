import { transition } from '..';

let el;

jest.useFakeTimers();

beforeEach(() => {
    el = document.createElement('div');
});

describe('transition()', () => {
    it('returns a promise', () => {
        expect(transition(false)).toBeInstanceOf(Promise); 
        expect(transition(null)).toBeInstanceOf(Promise); 
        expect(transition(el)).toBeInstanceOf(Promise); 
    });

    it('resolves', async(done) => {
        el.style.transitionDuration = '500ms';

        transition(el).then(a => {
            expect(a).toBe(500);

            done();
        });

        jest.runAllTimers();
    });
});
