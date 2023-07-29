function cartProduct(setA, setB) {
    var product = [];
    for(let eleA of setA){
        for (const eleB of setB) {
            product.push([eleA, eleB]);
        }
    }


    return product;
}

var color = ["Red", "Green"];
var size = ["s", "l", "m"];
console.log(cartProduct(color, size));