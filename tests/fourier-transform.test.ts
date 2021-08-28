import ComplexNumber from "../src/complex-number";
import FourierTransform from "../src/fourier-transform";

describe("Should be able to transform sampled amplitude points", () => {
  let fourierTransform: FourierTransform;
  beforeEach(() => {
    fourierTransform = new FourierTransform();
  });
  test("Should be able to transform 0 sampled amplitude points", () => {
    const sampledPoints: number[] = [];
    expect(
      fourierTransform.discreteFourierTransform(sampledPoints)
    ).toStrictEqual([]);
  });

  test("Should be able to sample many amplitude points", () => {
    const sampledPoints: number[] = [0, 0.707, 1, 0.707, 0, -0.707, -1, -0.707];
    const expectedResults: ComplexNumber[] = [
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: -4 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 4 }),
    ];

    const actualResults =
      fourierTransform.discreteFourierTransform(sampledPoints);

    actualResults.forEach((actualResult, index) => {
      expect(actualResult.real).toBeCloseTo(expectedResults[index].real);
      expect(actualResult.imaginary).toBeCloseTo(
        expectedResults[index].imaginary
      );
    });
  });
});
