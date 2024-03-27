import {describe, expect, test} from '@jest/globals';
import animationNameToPausePlaces from "@/utils/animationNameToPausePlaces"
import Direction from "@/app/enums/Direction"

describe('animationNameToPausePlaces function', () => {
     test('returns "Returns correct pausePlaces for given animation name', () => {
          expect(animationNameToPausePlaces('centerToLeft')).toStrictEqual([Direction.Center, Direction.Left]);
          expect(animationNameToPausePlaces('topToCenter')).toStrictEqual([Direction.Top, Direction.Center]);
          expect(animationNameToPausePlaces('rightToCenter')).toStrictEqual([Direction.Right, Direction.Center]);
          expect(animationNameToPausePlaces('bottomToCenter')).toStrictEqual([Direction.Bottom, Direction.Center]);
          expect(animationNameToPausePlaces('leftToRight')).toStrictEqual([Direction.Left, Direction.Right]);
     });
});