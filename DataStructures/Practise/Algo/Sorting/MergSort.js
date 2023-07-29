function sort(arr){
    if(arr.length < 2) return arr;

    if(arr.length === 2){
        return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    
    var middle = Math.floor(arr.length / 2);

    var leftArray = arr.slice(0, middle);
    var rightArray = arr.slice(middle);

    var sortedLeftArr = sort(leftArray);
    var sortedRightArr = sort(rightArray);

    let sortLeftIndex = 0;
    let sortRightIndex = 0;
    var mergArray = [];

    while(sortLeftIndex < sortedLeftArr.length || sortRightIndex < sortedRightArr.length){

        if(sortLeftIndex >= sortedLeftArr.length || sortedLeftArr[sortLeftIndex] > sortedRightArr[sortRightIndex]){
            

            mergArray.push(sortedRightArr[sortRightIndex]);
            sortRightIndex++; //did not understand
        }else{
            mergArray.push(sortedLeftArr[sortLeftIndex]);
            // console.log(sortedArray);
            sortLeftIndex++;
        }
    }


    return mergArray;
}

var arr = [7, 4, 76, 43, 66, 1, 6, 74, 62, 9];
console.log(sort(arr));