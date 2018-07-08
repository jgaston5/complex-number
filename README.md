# complex-number

A complex number package that can add, multiply, get the additive and mulitplicative inverses, get the conjugate, and compare Complex Numbers.

## Getting Started

There is an NPM package: complex-number.


```
npm i complex-number
```

### Example

```
const ComplexNumber  = require ('complex-number')

let x  = new ComplexNumber(1,2);

let conjugate = x.getConjugate();
let additiveInverse = x.getAdditiveInverse();
let multiplicativeInverse = x.getMultiplicativeInverse();

// prints out false
console.log(x.equals(conjugate).toString());

// prints out 0 + 0i
console.log(x.add(additiveInverse).toString());

// prints out 1 + 0i
console.log(x.multiply(multiplicativeInverse).toString());

```
