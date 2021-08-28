export default class ComplexNumber {
  private _real: number;

  private _imaginary: number;

  private ZERO_THRESHOLD = 10 ** -10;

  constructor({ real = 0, imaginary = 0 } = {}) {
    this._real = real;
    this._imaginary = imaginary;
  }

  get real(): number {
    return this._real;
  }

  get imaginary(): number {
    return this._imaginary;
  }

  public add(addend: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      real: this.roundToZero(this._real + addend.real),
      imaginary: this.roundToZero(this._imaginary + addend.imaginary),
    });
  }

  public subtract(subtrahend: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      real: this.roundToZero(this._real - subtrahend.real),
      imaginary: this.roundToZero(this._imaginary - subtrahend.imaginary),
    });
  }

  // FOIL +  real plays with real, imaginary plays with imaginary
  public multiply(multiplicant: ComplexNumber): ComplexNumber {
    return new ComplexNumber({
      real: this.roundToZero(
        this._real * multiplicant.real -
          this._imaginary * multiplicant.imaginary
      ),
      imaginary: this.roundToZero(
        this._real * multiplicant.imaginary +
          this._imaginary * multiplicant.real
      ),
    });
  }

  public static convertToComplexNumber(num: number): ComplexNumber {
    return new ComplexNumber({
      real: num,
      imaginary: 0,
    });
  }

  private roundToZero(num: number): number {
    if (-this.ZERO_THRESHOLD < num && num < this.ZERO_THRESHOLD) {
      return 0;
    }
    return num;
  }
}
