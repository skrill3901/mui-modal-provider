import { uid, isKeyMatchRootId } from './utils';

describe('utils', () => {
  describe('uid', () => {
    test('uid should create id with correct length', () => {
      const id = uid(5);
      expect(id).toHaveLength(5);
    });

    test('uid should create id with correct length (without argument)', () => {
      const id = uid();
      expect(id).toHaveLength(8);
    });
  });

  describe('isKeyMatchRootId', () => {
    const key = '123.123';

    test('should return true if provided key contains rootId', () => {
      const rootId = '123';
      const actual = isKeyMatchRootId(key, rootId);
      expect(actual).toEqual(true);
    });
  });
});
