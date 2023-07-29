function powerOfTwo(number) {
    if(number < 1) return false;

    while(number !== 1){
        if( number % 2 !== 0) return false;
        number = number / 2;
    }
    return true;
}
console.log(powerOfTwo(13));

// Conplexity will be O(log(n))

// Using bitwise operators

function power(number) {
    if(number < 1) return false;

    return (number & (number - 1) === 0);
}


// in bit wise
// 2 => 0001
// 4 => 0010
// 8 => 0100
// there fore if 4 & 3 -> 0
// but 5 & 6 not equal to 0
