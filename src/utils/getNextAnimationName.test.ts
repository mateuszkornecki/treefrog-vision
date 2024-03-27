import getNextAnimationName from "@/utils/getNextAnimationName"
import {describe, expect, test} from '@jest/globals'
const ALPACA_THAT_THROWS_ERRORS = 'this alpaca will throw an error'

describe('getNextAnimationName function', () => {
    test('returns "Throws an error for incorrect exercise number', () => {
        expect(() => getNextAnimationName("666", 'centerToLeft')).toThrow()
    });
    test('returns "All arguments of the getNextAnimationName for exercise O1 returns a correct output', () => {
        expect(getNextAnimationName("O1", 'centerToLeft')).toBe('leftToCenter')
        expect(getNextAnimationName("O1", 'leftToCenter')).toBe('centerToRight')
        expect(getNextAnimationName("O1", 'rightToCenter')).toBe('centerToLeft')
        expect(getNextAnimationName("O1", 'centerToRight')).toBe('rightToCenter')
        expect(() => getNextAnimationName("O1", ALPACA_THAT_THROWS_ERRORS)).toThrow()
    });

    test('returns "All arguments of the getNextAnimationName for exercise O2 returns a correct output', () => {
        expect(getNextAnimationName("O2", 'centerToLeft')).toBe('leftToRight')
        expect(getNextAnimationName("O2", 'leftToRight')).toBe('rightToLeft')
        expect(getNextAnimationName("O2", 'rightToLeft')).toBe('leftToRight')
        expect(() => getNextAnimationName("O2", ALPACA_THAT_THROWS_ERRORS)).toThrow()
    });

    test('returns "All arguments of the getNextAnimationName for exercise O3 returns a correct output', () => {
        expect(getNextAnimationName("O3", 'centerToLeft')).toBe('leftToCenter')
        expect(getNextAnimationName("O3", 'leftToCenter')).toBe('centerToLeft')
        expect(() => getNextAnimationName("O3", ALPACA_THAT_THROWS_ERRORS)).toThrow()
    });

    test('returns "All arguments of the getNextAnimationName for exercise O4 returns a correct output', () => {
        expect(getNextAnimationName("O4", 'centerToRight')).toBe('rightToCenter')
        expect(getNextAnimationName("O4", 'rightToCenter')).toBe('centerToRight')
        expect(() => getNextAnimationName("O4", ALPACA_THAT_THROWS_ERRORS)).toThrow()
    });

    test('returns "All arguments of the getNextAnimationName for exercise O5 returns a correct output', () => {
        expect(getNextAnimationName("O5", 'centerToTop')).toBe('topToCenter')
        expect(getNextAnimationName("O5", 'topToCenter')).toBe('centerToBottom')
        expect(getNextAnimationName("O5", 'centerToBottom')).toBe('bottomToCenter')
        expect(getNextAnimationName("O5", 'bottomToCenter')).toBe('centerToTop')
        expect(() => getNextAnimationName("O5", ALPACA_THAT_THROWS_ERRORS)).toThrow()

    });

});