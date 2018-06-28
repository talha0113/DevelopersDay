import { CalculatorService } from './calculator.service'

describe("Calculator operations", () => {

    let x: number = 10;
    let y: number = 2;

    it("Addition", () => {
        let result: number = CalculatorService.add(x,y);
        expect(result).toBe(x + y);
    });

    it("Subtraction", () => {
        let result: number = CalculatorService.subtract(x, y);
        expect(result).toBe(x - y);
    });

    it("Multiplication", () => {
        let result: number = CalculatorService.multiply(x, y);
        expect(result).toBe(x * y);
    });

    it("Division is 5", () => {
        let result: number = CalculatorService.divide(x, y);
        expect(result).toBe(x / y);
    });
    
});