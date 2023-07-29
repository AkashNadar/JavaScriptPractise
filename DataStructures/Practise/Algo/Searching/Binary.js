function binarySearch(arr, no){
    let start = 0;
    let end = arr.length - 1;

    
    while(start <= end){
        const mid = start + Math.floor((end - start)/2);

        if(arr[mid] === no){
            return mid;
        }

        if(arr[mid] < no){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
}

arr = [1, 2, 3, 5, 6, 8, 13, 16, 26, 65]
console.log(binarySearch(arr, 5));