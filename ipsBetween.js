function ipsBetween(start, end){
    const fOctets = start.split('.').map(Number);
    const sOctets = end.split('.').map(Number);
    const octet = 256;
    let fOctetsSum = 0; let sOctetsSum = 0;
    for(let index = 0; index < 4; index++) {
        fOctetsSum += (fOctets[index] * Math.pow(octet, (fOctets.length-1) - index))
        sOctetsSum += (sOctets[index] * Math.pow(octet, (sOctets.length-1) - index))  
    }
    return sOctetsSum-fOctetsSum
  }
  
console.log(ipsBetween("150.0.0.0","150.0.0.50"))
console.log(ipsBetween('0.0.0.0','255.255.255.255'))
  
