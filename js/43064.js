//https://level.goorm.io/exam/43064/binary-search/quiz/1

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let N, arr;

rl.on("line", function(line) {
	if(!N) {
		N = +line;
		return;
	}
	if(!arr) {
		arr = line.split(' ').map(v=>+v);
		return;
	}
	console.log(solution(arr, +line));
	rl.close();
}).on("close", function() {
	process.exit();
});

function solution(arr, n) {
	return binary_search(arr, n);
}

function binary_search(arr, n) {
	let left = 0, right = arr.length - 1;
	while(left < right) {
		let mid = (left + right) / 2 | 0;
		if(arr[mid] === n) return mid + 1;
		arr[mid] < n ? left = mid + 1 : right = mid - 1;
	}
	return 'X';
}