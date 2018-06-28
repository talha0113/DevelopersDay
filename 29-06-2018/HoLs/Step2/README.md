# Application
1. Modify `Default-Template.ejs` and following inside `Body`
```
	<label id='lblNumberX'>X</label><br /><input type='text' id='firstNumber' /><br/><br/>
	<label id='lblNumberY'>Y</label><br /><input type='text' id='secondNumber' /><br/><br/>
	<select id='calculatorFunctions'>
		<option value='add'>add</option>
		<option value='subtract'>subtract</option>
		<option value='multiply'>multiply</option>
		<option value='divide'>divide</option>
	</select>
	<button type='button' id='btnCalc'>Calculate</button><br /><br />
	<label>Result: </label><label id='lblResult'></label><br />
```
2. Copy `Services` folder from Step2 and add it inside `Sources` folder
3. Modify `main.ts` and copy code from `Step2\Source\main.ts`
4. Run command `npm run build` and analyze the output
5. Run command `npm start` and open the browser. Navigate to `http://localhost:4321/Pages/Default.html`
