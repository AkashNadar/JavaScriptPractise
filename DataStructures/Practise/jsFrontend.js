/*
const arr = [3, 5, 6, 7, 10, 16];

// map will not modify the original array instead it returns 
// the new array
// followup methods can be added like filter
// const modifiedArray = arr.map((arr) => (arr + 1)).filter();
// console.log(modifiedArray)

// forEach will help in modifying the original array.
arr.forEach((val, index) => {
    arr[index] = val + 5;
})
// console.log(arr);
*/


/*
let complexArr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const flatten = complexArr.flat(1);

console.log(flatten);
*/

/*
function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            console.log(i);
        }, 2000);
    }
}

a();
*/

let a = 6;
{
    let a = 21;
    console.log(a);
}

console.log(a);