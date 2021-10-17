import { pow } from '../../docs/tu06/ex3';
import ask from '../../docs/tu06/ex4';

describe('pow', () => {
  test('pow(2, 6) is 64', () => {
    expect(pow(2, 6)).toBe(64);
  });

  test('pow(0, 5) is 0', () => {
    expect(pow(0, 5)).toBe(0);
  });

  test('pow(-5, 3) is -125', () => {
    expect(pow(-5, 3)).toBe(-125);
  });
});

describe('Positive vs Negative', () => {
  test('24 calls YES callback', () => {
    const mockYes = jest.fn();
    const mockNo = jest.fn();
    ask(24, mockYes, mockNo);
    expect(mockYes).toHaveBeenCalledTimes(1);
    expect(mockNo).toHaveBeenCalledTimes(0);
  });

  test('-24 calls NO callback', () => {
    const mockYes = jest.fn();
    const mockNo = jest.fn();
    ask(-24, mockYes, mockNo);
    expect(mockYes).toHaveBeenCalledTimes(0);
    expect(mockNo).toHaveBeenCalledTimes(1);
  });
});

describe('Alternative Positive vs Negative', () => {
  it('Is Positive for 23', () => {
    console.info = jest.fn();

    ask(
      23,
      // Convert to arrow function
      () => {
        console.info('Is positive');
      },
      // Convert to arrow function
      () => {
        console.error('Is negative');
      }
    );

    expect(console.info).toHaveBeenCalledWith('Is positive');
  });

  it('Is Negative for -1', () => {
    console.error = jest.fn();

    ask(
      -1,
      // Convert to arrow function
      () => {
        console.info('Is positive');
      },
      // Convert to arrow function
      () => {
        console.error('Is negative');
      }
    );

    expect(console.error).toHaveBeenCalledWith('Is negative');
  });
});
