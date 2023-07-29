var namesArr = ["Akash", "Ram", "Anil"]
namesArr.push("James");

for(var el of namesArr){
    // console.log(el);
}


const ramIndex = namesArr.findIndex(el => el === "Ram");
// console.log(ramIndex);

namesArr.splice(2, 1);
console.log(namesArr);

