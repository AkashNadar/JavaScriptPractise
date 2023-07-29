var arr = [1, 4, 'akash', true, 61.4];

arr.push("pushAtLast");
// var lastElement = arr.pop();
// console.log(lastElement);


// var firstElement = arr.shift();
// console.log(firstElement);
arr.unshift("addingEleAtFirst");
arr.unshift("someMoreElement", 5, false);
// arr.unshift(['arrayAsWell'])

// splice(atPos, delete how many elements, value to insert at the position)
// arr.splice(1, 2, 'insertedInPosOne');

// console.log(arr.slice(1, 3));

// var arr2 = arr.concat(['abc', 66, 'ans', true]);
// console.log(arr2);


console.log(arr.indexOf('akash', 6))

console.log(arr.includes(5));

var students = [
    {id:1, name: 'Akash'}, 
    {id:2, name: 'Ram'}, 
    {id:3, name: 'Jay'},
    {id:4, name: 'Rahul'}
]
// console.log(students.filter(students => students.id <= 3));
// console.log(arr.filter((val) => val === "akash" ));




// console.log(arr);