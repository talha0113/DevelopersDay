import { CalculatorService } from '../Source/Services/calculator.service';

let btnCalc: HTMLElement = document.getElementById('btnCalc'); 
let selectFunctions: HTMLElement = document.getElementById('calculatorFunctions');
let lblResult: HTMLElement = document.getElementById('lblResult');

btnCalc.addEventListener('click', () => {
    let x: number = parseInt((<any>document.getElementById('firstNumber')).value);
    let y: number = parseInt((<any>document.getElementById('secondNumber')).value);
    let selectedOperation = (<any>selectFunctions).options[(<any>selectFunctions).selectedIndex].value;

    let operation = {
        add: () => CalculatorService.add(x, y),
        subtract: () => CalculatorService.subtract(x, y),
        multiply: () => CalculatorService.multiply(x, y),
        divide: () => CalculatorService.divide(x, y)
    }[selectedOperation] || console.log('Invalid operation');

    if (operation) {
        lblResult.textContent = operation();
    }
});