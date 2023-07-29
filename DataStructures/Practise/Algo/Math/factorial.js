function factorial(num) {
    let curNum = 1;
    for (let i = 2; i <= num; i++) {
        curNum *= i;
    }
    return curNum;
}





function fact(num){
    if(num ===1) return 1
    return (num * fact(num-1));
}


console.log(factorial(4));