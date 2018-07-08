function multiplyImaginaryParts(x,y){
    return x*y*-1;
}

class ComplexNumber {
    constructor(realPart,imaginaryPart){
        this.realPart = realPart;
        this.imaginaryPart = imaginaryPart;
    }

    add(other){
        return new ComplexNumber(this.realPart + other.realPart, this.imaginaryPart+other.imaginaryPart);
    }

    multiply(other){
        // y+zi = (a + bi)(u +vi)
        // y+zi = (au - bv) + (av + bu)i
        let real = this.realPart * other.realPart;
        let imaginary = this.realPart * other.imaginaryPart;
        
        real = real + multiplyImaginaryParts(this.imaginaryPart, other.imaginaryPart);
        imaginary = imaginary + (this.imaginaryPart * other.realPart);

        return new ComplexNumber(real, imaginary);         
    }

    /// only have this implemented for non-negative integers
    toPower(power){
        if(power==0){
            return new ComplexNumber(1,0);
        }
        var realPart  = this.realPart;
        var imaginaryPart = this.imaginaryPart;
        var result = new ComplexNumber(realPart,imaginaryPart)
        if(power==1){
            return new ComplexNumber(realPart,imaginaryPart);
        }

        for( i = 1; i<power; i++){
            result = result.multiply(new ComplexNumber(realPart,imaginaryPart));
        }
        return result;
    }

    getConjugate(){
        return new ComplexNumber(this.realPart, this.imaginaryPart*-1);
    }

    getAdditiveInverse(){
        let realSquared = this.realPart * -1;
        let imaginarySquared = this.imaginaryPart* -1;
        //a^2/(a+b) + b^2/(a+b)
        return new ComplexNumber(
            realSquared, imaginarySquared);
    }

    getMultiplicativeInverse(){
        let realSquared = this.realPart ** 2;
        let imaginarySquared = this.imaginaryPart** 2;
        //a^2/(a+b) + b^2/(a+b)
        return new ComplexNumber(
            this.realPart/(realSquared+imaginarySquared), 
            -this.imaginaryPart/(realSquared+imaginarySquared)
        );
    }

    equals(other){
        return this.realPart===other.realPart 
            && this.imaginaryPart === other.imaginaryPart;
    }
    toString(){
        return `${this.realPart} + ${this.imaginaryPart}i`;
    }

}

module.exports = ComplexNumber;