import operate from '../logic/operate';

describe('check function of the operate', () => {
  it('should return 4', () => {
    const result = operate(1, 3, '+');
    expect(result).toBe('4');
  });
  it('should return 5', () => {
    const result = operate(8, 3, '-');
    expect(result).toBe('5');
  });
  it('should return 40', () => {
    const result = operate(10, 4, 'x');
    expect(result).toBe('40');
  });
  it('should return 3', () => {
    const result = operate(3, 1, '÷');
    expect(result).toBe('3');
  });
});
