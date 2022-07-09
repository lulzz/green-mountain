import { add } from './add';

describe('test add function', () => {
  it('should add two numbers and return result', () => {
    expect(add(1, 2)).toBe(3);
  });
});
