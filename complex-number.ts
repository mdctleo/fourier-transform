export class ComplexNumber {
    private real: number;
    private imaginary: number;
    
    constructor({ real = 0, imaginary = 0} = {}) {
        this.real = real;
        this.imaginary = imaginary;    
    }

    public add(addend: ComplexNumber): ComplexNumber {
        return new ComplexNumber({
            real: this.real + addend.real,
            imaginary: this.imaginary + addend.imaginary
        });
    }

    public subtract(subtrahend: ComplexNumber): ComplexNumber {
        return new ComplexNumber({
            real: this.real - subtrahend.real,
            imaginary: this.imaginary - subtrahend.imaginary
        });
    } 

    // FOIL +  real plays with real, imaginary plays with imaginary
    public multiply(multiplicant: ComplexNumber): ComplexNumber {
        return new ComplexNumber({
            real: this.real * multiplicant.real - this.imaginary * multiplicant.imaginary,
            imaginary: this.real * multiplicant.real + this.imaginary * multiplicant.imaginary
        });
    }

    public convertToComplexNumber(num: number): ComplexNumber {
        return new ComplexNumber({
            real: num,
            imaginary: 0
        });
    }
}