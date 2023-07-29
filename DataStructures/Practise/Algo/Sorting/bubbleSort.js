function sort(arr){
    const newArray = arr;

    for(let outer=0; outer<newArray.length; outer++){
        let outerVal = newArray[outer];
        for(let inner=outer+1; inner<newArray.length; inner++){
            let innerVal = newArray[inner];

            if(innerVal < outerVal){
                newArray[outer] = innerVal;
                newArray[inner] = outerVal;

                outerVal = newArray[outer];
                innerVal = newArray[inner];
            }   
        }
    
    }
    return newArray;
}


console.log(sort([1, 5, 3, 11, 2, 4, 9, 7, 4]));
