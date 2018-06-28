!function(t){var e={};function n(r){if(e[r])return e[r].exports;var u=e[r]={i:r,l:!1,exports:{}};return t[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var u in t)n.d(r,u,function(e){return t[e]}.bind(null,u));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([
/*!************************************!*\
  !*** ./Source/main.ts + 1 modules ***!
  \************************************/
/*! no exports provided */
/*! all exports used */function(t,e,n){"use strict";n.r(e);var r=function(){function t(){}return t.add=function(t,e){return t+e},t.subtract=function(t,e){return t-e},t.multiply=function(t,e){return t*e},t.divide=function(t,e){return t/e},t}(),u=document.getElementById("btnCalc"),o=document.getElementById("calculatorFunctions"),i=document.getElementById("lblResult");u.addEventListener("click",function(){var t=parseInt(document.getElementById("firstNumber").value),e=parseInt(document.getElementById("secondNumber").value),n={add:function(){return r.add(t,e)},subtract:function(){return r.subtract(t,e)},multiply:function(){return r.multiply(t,e)},divide:function(){return r.divide(t,e)}}[o.options[o.selectedIndex].value]||console.log("Invalid operation");n&&(i.textContent=n())})},
/*!******************************!*\
  !*** multi ./Source/main.ts ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(t,e,n){t.exports=n(/*! ./Source/main.ts */0)}]);
//# sourceMappingURL=CalculatorApplication.js.map