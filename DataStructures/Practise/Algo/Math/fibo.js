function fib(n){
    const number = [1, 1];
    for(let i = 2; i<= n; i++){
        number.push(number[i-2] + number[i-1]);
    }
    return number[n];
}

console.log(fib(4));