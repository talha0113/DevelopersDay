export class CalculatorService {
    
    public static add(x: number, y: number): number {
        return x + y;
    }

    public static subtract(x: number, y: number): number {
        return x - y;
    }

    public static multiply(x: number, y: number): number {
        return x * y;
    }

    public static divide(x: number, y: number): number {
        return x / y;
    }
}