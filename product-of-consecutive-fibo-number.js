function productFib(prod){
    let n1 = 0, n2 = 1, nextTerm;
    const series = [];
    const result = {
        found: false
    };
    for(let index = 0; index < 100; index++) {
        series.push(n1);
        if((n1*n2) == prod) {
            result.firstNum = n1;
            result.secondNum = n2;
            result.found = true;
            break;
        } else if((n1*n2) > prod) {
            result.firstNum = n1;
            result.secondNum = n2;
            break;
        }
        
       
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return [result.firstNum, result.secondNum, result.found]
  }