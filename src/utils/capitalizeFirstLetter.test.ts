import {describe, expect, test} from '@jest/globals';
import capitalizeFirstLetter from "@/utils/capitalizeFirstLetter"

describe('capitalizeFirstLetter function', () => {
    test('returns "Starts given sentence from the uppercase', () => {
        expect(capitalizeFirstLetter('camelCaseSentence')).toBe("CamelCaseSentence");
        expect(capitalizeFirstLetter('CamelCaseSentence')).toBe("CamelCaseSentence");
        expect(capitalizeFirstLetter('kebab-case-sentence')).toBe("Kebab-case-sentence");
        expect(capitalizeFirstLetter('snake_case_sentence')).toBe("Snake_case_sentence");
    });
});