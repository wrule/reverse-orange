import { add, sub } from '.';

describe('Math functions', () => {
  // 测试 add 函数
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(1, 2)).toBe(3);
    });

    test('adds a positive and a negative number correctly', () => {
      expect(add(1, -2)).toBe(-1);
    });

    test('adds two negative numbers correctly', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('adds zero correctly', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
      expect(add(0, 0)).toBe(0);
    });
  });

  // 测试 sub 函数
  describe('sub', () => {
    test('subtracts two positive numbers correctly', () => {
      expect(sub(3, 2)).toBe(1);
    });

    test('subtracts a negative number correctly', () => {
      expect(sub(3, -2)).toBe(5);
    });

    test('subtracts to get a negative result', () => {
      expect(sub(2, 3)).toBe(-1);
    });

    test('subtracts zero correctly', () => {
      expect(sub(5, 0)).toBe(5);
      expect(sub(0, 5)).toBe(-5);
      expect(sub(0, 0)).toBe(0);
    });
  });
});
