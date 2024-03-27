import {describe, expect, test} from '@jest/globals';
import pausePlacesToAnimationName from "@/utils/pausePlacesToAnimationName"
import Direction from "@/app/enums/Direction"
describe('pausePlacesToAnimationName function', () => {
test('Returns correct animation name for given pausePlaces', () => {
    expect(pausePlacesToAnimationName([Direction.Top, Direction.Center])).toBe("topToCenter")
});
});
