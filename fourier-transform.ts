export class FourierTransform {
    constructor() {}

    // converts an array of complext numbers (signal at equally spaced time)
    // to another array of coomplext numbers (amplitude + frequency)
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