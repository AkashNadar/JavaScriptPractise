/*
console.log('Start');

function callBackFunc(arg1, arg2) {
    setTimeout(() => {
        console.log('inside the timeout');
        arg2(arg1);
    }, 1000)
}

const message = callBackFunc('Akash', (name) => {
    console.log('inside the callBack func');
    console.log(name);
})

console.log('Stop');
*/

// Promise

const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (false) {
            resolve('data is been fetched');
        } else {
            reject('data not found');
        }
    }, 2000);
})

prom
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    }) 