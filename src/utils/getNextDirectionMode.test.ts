import getNextDirectionMode from "@/utils/getNextDirectionMode";
import {describe, expect, test} from '@jest/globals';const ALPACA_THAT_THROWS_ERRORS = 'this alpaca will throw an error';

describe('getNextDirectionMode function', () => {
    test('returns "Throws an error for incorrect exercise number', () => {
        expect(() => getNextDirectionMode("666", 'centerToLeft')).toThrow();
    });
    test('returns "All previousDirectionModes for exercise O1 returns a correct output', () => {
        expect(getNextDirectionMode("O1", 'centerToLeft')).toBe('leftToCenter');
        expect(getNextDirectionMode("O1", 'leftToCenter')).toBe('centerToRight');
        expect(getNextDirectionMode("O1", 'rightToCenter')).toBe('centerToLeft');
        expect(getNextDirectionMode("O1", 'centerToRight')).toBe('rightToCenter');
        expect(() => getNextDirectionMode("O1", ALPACA_THAT_THROWS_ERRORS)).toThrow();
    });

    test('returns "All previousDirectionModes for exercise O2 returns a correct output', () => {
        expect(getNextDirectionMode("O2", 'centerToLeft')).toBe('leftToRight');
        expect(getNextDirectionMode("O2", 'leftToRight')).toBe('rightToLeft');
        expect(getNextDirectionMode("O2", 'rightToLeft')).toBe('leftToRight');
        expect(() => getNextDirectionMode("O2", ALPACA_THAT_THROWS_ERRORS)).toThrow();
    });
});