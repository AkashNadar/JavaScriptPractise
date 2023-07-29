const firstPromiss = new Promise((resolve, reject) => {
    resolve('First !');
});

const secondPromiss = new Promise((resolve, reject) => {
    resolve(firstPromiss);
});

secondPromiss
    .then((res) => {
        return res
    })
    .then((res) => {
        console.log(res);
    })