import ComplexNumber from "./complex-number";

export default class FourierTransform {
  // converts signal in the time domain to frequency domain
  discreteFourierTransform = (sampledPoints: number[]): ComplexNumber[] => {
    const frequencyPoints: ComplexNumber[] = [];
    const N = sampledPoints.length;
    const sampledPointsConverted = sampledPoints.map((point) =>
      ComplexNumber.convertToComplexNumber(point)
    );
    sampledPoints.forEach((_, k) => {
      frequencyPoints.push(
        sampledPointsConverted.reduce((total, point, n) => {
          const rotation = new ComplexNumber({
            real: Math.cos((2 * Math.PI * k * n) / N),
            imaginary: -Math.sin((2 * Math.PI * k * n) / N),
          });

          return total.add(point.multiply(rotation));
        })
      );
    });

    return frequencyPoints;
  };
}
