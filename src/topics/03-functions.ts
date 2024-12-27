
function addNumeros( num1: number, num2: number ): string{
    return Number(num1 +num2).toFixed(2);
}

const addNumerosArrow = ( num1: number = 0, num2: number = 0 ): number => {
    return num1 + num2;
}

const totalSuma = addNumeros( 10, 20 );
console.log( totalSuma );

const total = addNumerosArrow();
console.log( total );