// const arr = [1, 3, 5, 6, 7, 4];
// arr.push(20);
// arr.push(1);
// const removedEle = arr.pop();
// console.log(removedEle);

// Copy by reference
/*
const arr1 = [];
const arr2 = arr1;
arr2.push(1);
arr2.push(3);
arr2.push(5);
arr2.push(6);
console.log(arr1);
console.log(arr2);
*/

/*
let root = [];
root.equal = '71';
root.mul = '81';
root[100] = 'random'
console.log(root);
*/

// const arr = new Array(3);
// console.log(arr);

const arr = [9, 2, 0, 4, 5, 6];
const eleExist = arr.find(ele => ele === 10);
const eleIndex = arr.findIndex(ele => ele === 10);
if (eleIndex) {
    console.log('found');
    console.log(eleIndex);
}
else {
    console.log('not found');
}