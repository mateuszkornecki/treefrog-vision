import getNextDirectionMode from "@/utils/getNextDirectionMode";
import {describe, expect, test} from '@jest/globals';


describe('getNextDirectionMode function', () => {
    test('returns "All previousDirectionMode for exercise O1 returns a correct output', () => {
        expect(getNextDirectionMode("O1", 'centerToLeft')).toBe('leftToCenter');
        expect(getNextDirectionMode("O1", 'leftToCenter')).toBe('centerToRight');
        expect(getNextDirectionMode("O1", 'rightToCenter')).toBe('centerToLeft');
        expect(getNextDirectionMode("O1", 'centerToRight')).toBe('rightToCenter');
    });
});