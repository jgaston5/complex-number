const ComplexNumber = require('./index');


const firstRealPart = 2;
const firstImaginaryPart =2;
const secondRealPart  = firstRealPart +1;
const secondImaginaryPart  =firstImaginaryPart +1;

const multiplicativeIdentity = new ComplexNumber(1,0);
const aditiveIdentity = new ComplexNumber(0,0);


const additionResult =  new ComplexNumber(firstRealPart +secondRealPart,
        firstImaginaryPart +secondImaginaryPart);
const multiplicationResult = new ComplexNumber();
const equalsResult = firstRealPart == secondRealPart 
        && firstImaginaryPart == secondImaginaryPart;

const firstOperand = new ComplexNumber(firstRealPart,firstImaginaryPart);
const secondOperand =  new ComplexNumber(secondRealPart,secondImaginaryPart);

//Equals Tests
if(firstOperand.equals(secondOperand) ===true){
    throw new Error(`Equals failure: expected ${false} recieved ${true}`);
}

if(firstOperand.equals(firstOperand) ===false){
    throw new Error(`Equals failure: expected ${true} recieved ${false}`);
}

// Addition test
if(firstOperand.add(secondOperand).equals(additionResult) ===false){
    throw new Error(`Addition failure: expected ${additionResult} recieved ${firstOperand.add(secondOperand)}`);
}

// additive inverse test
if(firstOperand.add(firstOperand.getAdditiveInverse()).equals(aditiveIdentity) ===false){
    throw new Error(`Get additivw≈ Identity failure: expected ${aditiveIdentity.toString()} recieved ${firstOperand.add(firstOperand.getAdditiveInverse()).toString()}`);
}

// multiplicative invers test
if(firstOperand.multiply(firstOperand.getMultiplicativeInverse()).equals(multiplicativeIdentity) ===false){
    throw new Error(`Get mutliplicative Identity failure: expected ${multiplicativeIdentity.toString()} recieved ${firstOperand.multiply(firstOperand.getMultiplicativeInverse()).toString()}`);
}

 console.log("All tests passed.");