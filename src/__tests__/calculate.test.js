import calculate from '../logic/calculate';

describe('check function of the operate', () => {
  it('should return 19', () => {
    const obj = {
      total: 10,
      next: 9,
      operation: '+',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('19');
  });
  it('should return 0', () => {
    const obj = {
      total: 89,
      next: 789,
      operation: '+',
    };
    const result = calculate(obj, 'AC');
    expect(result.total).toBe(0);
  });
  it('should return 1', () => {
    const obj = {
      total: 10,
      next: 9,
      operation: '-',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('1');
  });
  it('should return 90', () => {
    const obj = {
      total: 10,
      next: 9,
      operation: 'x',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('90');
  });
  it('should return 5', () => {
    const obj = {
      total: 10,
      next: 2,
      operation: '÷',
    };
    const result = calculate(obj, '=');
    expect(result.total).toBe('5');
  });
  it('should return 5', () => {
    const obj = {
      total: 10,
      next: 2,
      operation: '÷',
    };
    const result = calculate(obj, '÷');
    expect(result.total).toBe('5');
  });
});
