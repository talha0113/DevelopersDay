# Base Setup
1. Create folder `CalculatorApplication`
2. Open command prompt and run command `npm init`
3. Specify project name and press enter for default values
4. Open `package.json` in editor and add following under section `scipts` 
   1. `"build": "webpack --mode production --config ./Configurations/WebPack/webpack.app.config.js --progress --profile",`
   2. `"start": "webpack-dev-server --mode development --config ./Configurations/WebPack/webpack.dev.server.config.js",`
5. Add following under section `devDependencies`
   1. `"typescript": "~2.9.2"`
   2. `"webpack": "~4.12.2"`
   3. `"webpack-cli": "~3.0.8"`
   4. `"webpack-dev-server": "~3.1.4"`
   5. `"webpack-merge": "~4.1.3"`
   6. `"html-webpack-plugin": "~3.2.0"`
   7. `"awesome-typescript-loader": "~5.2.0"`
   8. `"source-map-loader": "~0.2.3"`
   9. `"@types/node": "~10.3.6"`
6. Copy file `tsconfig.json` from `Step1` and place in the root
7. In the command prompt run command `npm install`
7. Copy folders `Configurations`, `Pages` and `Source` from `Step1` and place in the root where `package.json` exists
8. Run command `npm run build` and analyze the output
9. Run command `npm start` and open the browser. Navigate to `http://localhost:4321/Pages/Default.html`
10. Make changes in the `main.ts` and analyze the automatic refresh and output
