let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('timeout');
    resolve([1, 2, 3, 4]);
  }, 5000);
});

async function handle() {
  console.log('before promise')
  let val = await promise;
  console.log('after promise');
  console.log('val:', val);
}

handle().then();
