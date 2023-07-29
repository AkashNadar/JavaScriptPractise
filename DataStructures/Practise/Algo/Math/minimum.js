// function min(arr){
//     arr.sort((a, b) => a-b)
//     return arr[0];
// }

function min(arr){
    let currMin = arr[0];
    for(const num of arr){
        if(num < currMin){
            currMin = num;
        }
    }
    return currMin;
}


arr = [4, 5,1, 4, 5, 2, 8];
console.log(min(arr));