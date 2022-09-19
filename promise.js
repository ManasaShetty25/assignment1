let p = new Promise((res,rej) => {
    let a = 2 * 2;
    if (a==4) {
        res("success");
    } else {
        rej("failed");
    }
});

p.then((message) => {
    console.log(`this is in the then and state is resolved ie ${message}`);

}).catch((message) => {
    console.log(`this is in the catch and state is rejected ie ${message}`);


});
