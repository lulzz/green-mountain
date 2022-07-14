import { add } from './add';

describe('Add function', () => {
  it('should reuturn sum of two numbers', () => {
    expect(add(1, 2)).toBe(3);
  });
});

export {};
