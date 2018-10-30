new Promise((resolve, reject) => {
    resolve(1);
    console.log(2);
}).then(r => {
    console.log(r);
});