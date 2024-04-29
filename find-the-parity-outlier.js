function findOutlier(integers) {
    let oddsCount = 0;
    let evensCount = 0;

    for (let num of integers) {
        num % 2 === 0 ? evensCount++ : oddsCount++;
    }

    const targetParity = oddsCount > evensCount ? 'even' : 'odd';

    for (let num of integers) {
        if ((targetParity === 'odd' && num % 2 !== 0) || (targetParity === 'even' && num % 2 === 0)) {
            return num;
        }
    }

    return undefined; 
}

// best practice code

// function findOutlier(int){
//     var even = int.filter(a=>a%2==0);
//     var odd = int.filter(a=>a%2!==0);
//     return even.length==1? even[0] : odd[0];
//   }

const num = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])

console.log(num)