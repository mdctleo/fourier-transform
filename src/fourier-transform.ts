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
            imaginary: -1 * Math.sin((2 * Math.PI * k * n) / N),
          });

          return total.add(point.multiply(rotation));
        })
      );
    });

    return frequencyPoints;
  };

  cooleyTukeyAlgorithm = (sampledPoints: number[]): ComplexNumber[] => {
    const N = sampledPoints.length;
    if (N % 2 !== 0) {
      throw Error("sampled points must be even for Cooley Tukey Algorithm");
    } else if (N <= 2) {
      return this.discreteFourierTransform(sampledPoints);
    } else {
      const sampledPointsEven = this.cooleyTukeyAlgorithm(
        sampledPoints.filter((sampledPoint, index) => index % 2 === 0)
      );

      const sampledPointsOdd = this.cooleyTukeyAlgorithm(
        sampledPoints.filter((sampledPoint, index) => index % 2 !== 0)
      );

      const factors = sampledPoints.map(
        (point, k) =>
          new ComplexNumber({
            real: Math.cos((2 * Math.PI * k) / N),
            imaginary: -1 * Math.sin((2 * Math.PI * k) / N),
          })
      );

      const results = factors.map((factor, index) => {
        if (index >= sampledPointsEven.length) {
          // eslint-disable-next-line no-param-reassign
          index -= sampledPointsEven.length;
        }
        return sampledPointsEven[index]
          .add(factor)
          .multiply(sampledPointsOdd[index]);
      });

      return results;
    }
  };

  private primeFactorAlgorithm = (
    sampledPoints: number[]
  ): ComplexNumber[] => [];
}
