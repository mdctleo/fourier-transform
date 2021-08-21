export class ComplexNumber {
    private real: number;
    private imaginary: number;
    
    constructor({ real = 0, imaginary = 0} = {}) {
        this.real = real;
        this.imaginary = imaginary;    
    }

    public multiply(multiplicant: ComplexNumber) {
        return new ComplexNumber({
            real: this.real * multiplicant.real - this.imaginary * multiplicant.imaginary,
            imaginary: this.real * multiplicant.real + this.imaginary * multiplicant.imaginary
        });
    }

}