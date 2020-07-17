let a=7;



 let b= new Promise (function (resolve,reject) {
     setTimeout(()=>{
         resolve(a=99);

     },2000);
 });
 b.then(function () {
 console.log(a)
 })




const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Preparing data...");
        const backendData = {
            server: "aws",
            port: 2000,
            status: "working"

        };
        resolve(backendData)
    }, 2000)
});
p.then(data=>{
    console.log("promise resolved", data)
});