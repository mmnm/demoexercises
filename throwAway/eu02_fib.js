/* 


Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

4 million - 4000000

*/

var fibSumEvenHalf= function(exceed_not) {

	var sumHalf = 0;

	var prev = 0;
	var cur = 1;


	for(var i = 2; ; i++) {

		var temp = prev + cur;

		if(temp > exceed_not) {
			break;
		}

		if(temp % 2 === 0) {
			sumHalf += temp;
		}
		prev = cur;
		cur = temp;
	}

	return sumHalf;


}

console.log("fibSumEvenHalf for max 4 million", fibSumEvenHalf(4000000));









