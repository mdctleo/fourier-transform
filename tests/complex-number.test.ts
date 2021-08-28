import ComplexNumber from "../src/complex-number";

describe("Test suites for ComplexNumber data structure and operations", () => {
  test("Should be able to convert a number to ComplexNumber", () => {
    expect(ComplexNumber.convertToComplexNumber(3)).toStrictEqual(
      new ComplexNumber({ real: 3, imaginary: 0 })
    );
  });

  test("Should be able to convert a negative number to ComplexNumber", () => {
    expect(ComplexNumber.convertToComplexNumber(-1)).toStrictEqual(
      new ComplexNumber({ real: -1, imaginary: 0 })
    );
  });

  test("Should be able to add two ComplexNumbers", () => {
    const complexNumber1 = new ComplexNumber({ real: 2, imaginary: 7 });
    const complexNumber2 = new ComplexNumber({ real: 3, imaginary: -4 });

    expect(complexNumber1.add(complexNumber2)).toStrictEqual(
      new ComplexNumber({ real: 5, imaginary: 3 })
    );
  });

  test("Should be able to subtract two ComplexNumbers", () => {
    const complexNumber1 = new ComplexNumber({ real: 9, imaginary: 5 });
    const complexNumber2 = new ComplexNumber({ real: 4, imaginary: 7 });

    expect(complexNumber1.subtract(complexNumber2)).toStrictEqual(
      new ComplexNumber({ real: 5, imaginary: -2 })
    );
  });

  test("Should be able to multiply two ComplexNumbers", () => {
    const complexNumber1 = new ComplexNumber({ real: 3, imaginary: 2 });
    const complexNumber2 = new ComplexNumber({ real: 5, imaginary: 6 });

    expect(complexNumber1.multiply(complexNumber2)).toStrictEqual(
      new ComplexNumber({ real: 3, imaginary: 28 })
    );
  });
});
