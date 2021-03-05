module.exports = function toReadable (num) {
	const nums = {
		0: 'zero',
		1: 'one',
		2: 'two',
		3: 'three',
		4: 'four',
		5: 'five',
		6: 'six',
		7: 'seven',
		8: 'eight',
		9: 'nine',
		10: 'ten',
		11: 'eleven',
		12: 'twelve',
		13: 'thirteen',
		14: 'fourteen',
		15: 'fifteen',
      16: 'sixteen',
		17: 'seventeen',
		18: 'eighteen',
		19: 'nineteen',
		20: 'twenty',
		30: 'thirty',
		40: 'forty',
		50: 'fifty',
		60: 'sixty',
		70: 'seventy',
		80: 'eighty',
		90: 'ninety',
	};

	let str = String(num);
	let arr = str.split('');
	let res = '';

	if (num < 20) {
		res += `${nums[num]}`;
	} else if (num >= 20 && num < 100 && num % 10 === 0){
		res += `${nums[num]}`;
	} else if (num >= 20 && num < 100 && num % 10 !== 0){
		res += `${nums[arr[0]*10]} ${nums[arr[1]]}`;
	} else if (num % 100 === 0) { 
		res += `${nums[num / 100]} hundred`;
	} else if (num % 100 < 20) {
		res += `${nums[Math.floor(num / 100)]} hundred ${nums[num % 100]}`;
	} else if (num / 100 > 0 && num % 10 === 0) {
		res += `${nums[Math.floor(num / 100)]} hundred ${nums[num % 100]}`;
	} else {
		res += `${nums[Math.floor(num / 100)]} hundred ${nums[arr[1]* 10]} ${nums[num % 10]}`;
	}
return res;
}


