function linearSearch(arr, no){
    for(let i=0; i < arr.length; i++) {
        if(arr[i] === no) return true;
        
    }
    return false;
}

arr = [1, 53, 21, 54, 23, 64, 12]
console.log(linearSearch(arr, 23));