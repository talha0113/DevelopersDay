# Testing & Coverage
1. Open `package.json` in editor and add following under section `scipts` 
   1. `"test": "karma start ./Configurations/Karma/karma.config.js",`
2. Add following under section `devDependencies`
   1. `"karma": "~2.0.2"`
   2. `"karma-jasmine": "~1.1.2"`
   3. `"karma-jsdom-launcher": "~6.1.3"`
   4. `"karma-webpack": "~3.0.0"`
   5. `"karma-sourcemap-loader": "~0.3.7"`
   6. `"karma-coverage": "~1.1.2"`
   7. `"karma-coverage-istanbul-reporter": "~2.0.0"`
   8. `"karma-htmlfile-reporter": "~0.3.5"`
   9. `"karma-jasmine-html-reporter": "~1.1.0"`
   10. `"karma-nunit2-reporter": "~0.3.0"`
   11. `"jsdom": "~11.10.0"`
   12. `"jasmine-core": "~3.1.0"`
   13. `"istanbul-instrumenter-loader": "~3.0.1"`
   14. `"@types/jasmine": "~2.8.7"`
   15. `"@types/karma": "~1.7.3"`
3. In the command prompt run command `npm install`
4. Copy folders `Step3\Configurations\Karma` and place under `Configurations`
5. Copy file `Step3\Configurations\WebPack\webpack.test.config.js` and place under `Configurations\WebPack`
6. Copy `calculator.service.spec.ts` from `Step3\Source\Services` and place it under `Source\Services`
7. In the command prompt run command `npm test`
8. Browse test report located under folder `Reports`
9. Browse coverage report located under folder `Reports`
10. Add tests for infinity
```
    it("Division is 0", () => {
        let result: number = CalculatorService.divide(0, 10);
        expect(result).toBe(0);
    });

    it("Division is Positive Infinity", () => {
        let result: number = CalculatorService.divide(10, 0);
        expect(result).toBe(Number.POSITIVE_INFINITY);
    });

    it("Division is Negative Infinity", () => {
        let result: number = CalculatorService.divide(-10, 0);
        expect(result).toBe(Number.NEGATIVE_INFINITY);
    });
```
