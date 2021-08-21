export class FourierTransform {
    constructor() {}

    // converts signal in the time domain to frequency domain
    public discreteFourierTransform(x: number[]): number[] {
        let results: number[] = []
        x.forEach((_, k) => {
            results.push(x.reduce((total, xn, n) => {
                return total + xn * (Math.cos(2 * Math.PI * k * n) * Math.sin(2 * Math.PI * k * n))
            }))
        })

        return results
    }


}