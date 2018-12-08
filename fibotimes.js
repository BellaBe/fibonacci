const math = require('./math');
const util = require('util');

// for(let num = 1; num < 8000; num++){
//   let now = new Date().toISOString();
//   console.log(`${now} Fibonacch for ${num} = ${math.fibonacciLoop(num)}`);
// }

(async () => {
  for(let num = 1; num < 8000; num++ ){
    await new Promise((resolve, reject)=>{
      math.fibonacciAsync(num, (err, fibo)=>{
        if(err) reject(err);
        else {
          let now = new Date().toISOString();
          console.log(`${now} Fibonacci for ${num} = ${fibo}`);
          resolve();
        }
      });
    });
  }
})().catch(err => console.log(err));