function datatoCallStack(data) {
    return new Promise((resolve, reject) => {
        rand = Math.floor(Math.random() * 10) +1;
        if (rand > 5) {
            resolve(`Data processed successfully: ${data}`);
        } else {
            reject('Data processing failed');
        }
    });
};
datatoCallStack("2")
.then((result) => {
    console.log("  data 1 completed");
    console.log(result);
    return datatoCallStack("More Data")})
    .then((result) => {
        console.log("  data 2 completed");
        console.log(result);
    })
.catch((error) => {
  
    console.log(error);
});
