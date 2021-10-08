import ComplexNumber from "../src/complex-number";
import FourierTransform from "../src/fourier-transform";

const commonFourierTransformTests = (
  implementationName: string,
  implementation: any
) => {
  test(`Should be able to transform 0 sampled amplitude points using ${implementationName}`, () => {
    const sampledPoints: number[] = [];
    expect(implementation(sampledPoints)).toStrictEqual([]);
  });

  test(`Should be able to sample many amplitude points using ${implementationName}, simple example`, () => {
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

    const actualResults: ComplexNumber[] = implementation(sampledPoints);

    actualResults.forEach((actualResult, index) => {
      expect(actualResult.real).toBeCloseTo(expectedResults[index].real);
      expect(actualResult.imaginary).toBeCloseTo(
        expectedResults[index].imaginary
      );
    });
  });

  test(`Should be able to sample many amplitude points using ${implementationName}, complex eample`, () => {
    const sampledPoints: number[] = [
      0.2165, 0.8321, 0.7835, 0.5821, 0.2165, -0.5821, -1.2165, -0.8321,
    ];
    const expectedResults: ComplexNumber[] = [
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: -4 }),
      new ComplexNumber({ real: 0.866, imaginary: -0.5 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0, imaginary: 0 }),
      new ComplexNumber({ real: 0.866, imaginary: 0.5 }),
      new ComplexNumber({ real: 0, imaginary: 4 }),
    ];

    const actualResults: ComplexNumber[] = implementation(sampledPoints);

    actualResults.forEach((actualResult, index) => {
      expect(actualResult.real).toBeCloseTo(expectedResults[index].real);
      expect(actualResult.imaginary).toBeCloseTo(
        expectedResults[index].imaginary
      );
    });
  });
};

describe("Should be able to transform sampled amplitude points using Discrete Fourier Transform", () => {
  const fourierTransform = new FourierTransform();
  commonFourierTransformTests(
    "Discrete Fourier Transform",
    fourierTransform.discreteFourierTransform
  );
});

describe("Should be able to transform sampled amplitude points using Cooley-Tukey Algorithm", () => {
  const fourierTransform = new FourierTransform();
  commonFourierTransformTests(
    "Cooley-Tukey Algorithm",
    fourierTransform.cooleyTukeyAlgorithm
  );
});
