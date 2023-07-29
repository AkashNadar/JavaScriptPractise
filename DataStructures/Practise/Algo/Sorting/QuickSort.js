function sort(arr){
    const coppiedArray = [...arr];
    const smallerArray = [];
    const biggerArray = [];
    const pivat = coppiedArray.shift();
    const middleArray = [pivat];

    if(coppiedArray.length <= 1) return coppiedArray;

    while(coppiedArray.length){
        const element = coppiedArray.shift();
        if(element === pivat){
            middleArray.push(element);
        }
        else if(element < pivat){
            smallerArray.push(element);
        }
        else{
            biggerArray.push(element);
        }
    }
    
    const smallSortedArray = sort(smallerArray);
    const largerSortedArray = sort(biggerArray);
    return smallSortedArray.concat(middleArray, largerSortedArray);


    
}


let arr = [5, 1, 4, 3, 7, 6];
console.log(sort(arr));