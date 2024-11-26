import { add, sub } from '.';

describe('describe', () => {
  it('add', () => {
    const num1 = Math.random() * 10000;
    const num2 = Math.random() * 10000;
    expect(add(num1, num2)).toEqual(num1 + num2);
  });
  it('sub', () => {
    const num1 = Math.random() * 10000;
    const num2 = Math.random() * 10000;
    expect(sub(num1, num2)).toEqual(num1 - num2);
  });
});
