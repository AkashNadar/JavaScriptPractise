const arr = [1, 2, 3, 4, 5, 6];

const mapedArr = arr.map((val, ind, arr) => {
    return val + ind;
})

console.log(mapedArr);

const filtered = arr.filter((val, ind, arr) => {
    if (val % 2 === 0) {
        return val;
    }
})

console.log(filtered);

const reducArr = arr.reduce((preVal, currVal, arr) => {
    return preVal + currVal
}, 0);

console.log(reducArr);