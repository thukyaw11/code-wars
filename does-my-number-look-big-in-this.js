function narcissistic(value) {
	const digit = value.toString().length;
	const numArray = value.toString().split('');
	let narcissiSum = 0;
	for(let i =0; i< digit; i++) {
		narcissiSum += Math.pow(Number(numArray[i]), digit)
	}
	return narcissiSum === value
}