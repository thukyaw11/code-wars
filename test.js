console.log(1);
function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}

let a = 'before sumUp';
setImmediate(()=>{
  console.log(sumUpTo(5000000000));
  console.log(a);
})
a = 'after sumUp';
console.log(3);